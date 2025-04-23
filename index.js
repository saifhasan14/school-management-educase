import app from "./app.js";
import sequelize from "./config/db.js";

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }) // Sync models and make changes if needed
  .then(() => {
    console.log("Database synced successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Error syncing database:", error));
