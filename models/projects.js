// Creating our project model
module.exports = function(sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    return Project;
  };
  