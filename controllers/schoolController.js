import School from "../models/schoolModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const addSchool = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
      throw new ApiError(400, "All fields are required");
    }

    const existingSchool = await School.findOne({
      where: { name, address, latitude, longitude },
    });
    if (existingSchool) {
      throw new ApiError(
        409,
        "School with the same name, address, latitude, and longitude already exists"
      );
    }

    const school = await School.create({ name, address, latitude, longitude });
    res.status(201).json(new ApiResponse(201, school, "School added successfully"));
  } catch (error) {
    next(error);
  }
};

export const listSchools = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      throw new ApiError(400, "Latitude and longitude are required");
    }

    const schools = await School.findAll();
    const sortedSchools = schools.map((school) => {
      const distance = Math.sqrt(
        Math.pow(school.latitude - latitude, 2) +
        Math.pow(school.longitude - longitude, 2)
      );
      return { ...school.dataValues, distance };
    }).sort((a, b) => a.distance - b.distance);

    res.status(200).json(new ApiResponse(200, sortedSchools, "Schools sorted by proximity"));
  } catch (error) {
    next(error);
  }
};
