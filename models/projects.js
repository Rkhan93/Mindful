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

    Project.associate = function(models) {
      Project.hasMany(models.Tasks, {
        onDelete: "cascade"
      });
    }

    return Project;
  };
  