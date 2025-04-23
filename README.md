# School Management APIs

This project provides APIs to manage school data using Node.js, Express.js, and MySQL. Users can add schools and retrieve a list of schools sorted by proximity to a specified location.

---

## API Endpoints

### Add School
- **Method**: `POST`
- **URL**: [Add School](https://school-management-educase-production.up.railway.app/api/addSchool)
- **Payload Example**:
  ```json
  {
    "name": "Riverdale High",
    "address": "101 Maple St",
    "latitude": 37.7749,
    "longitude": -122.4194
  }

### List Schools
- **Method**: `GET`
- **URL**: [List School](https://school-management-educase-production.up.railway.app/api/listSchools?latitude=47.712776&longitude=-122.005974)
- **Query Parameters**

    `latitude`: User's latitude.

    `longitude`: User's longitude.

## Postman Collection

Access the Postman collection for testing:

- **URL**:   [Postman Collection](https://www.postman.com/satellite-astronaut-39617787/task-educase/collection/3tlnrh0/school-management-educase?action=share&creator=35574120)


## Using Postman
1. Import Postman Collection:

    Open Postman.

    Go to Import > Link and paste the collection link: Postman Collection.

2. Test APIs:

    Test Add School and List Schools APIs using various inputs.
