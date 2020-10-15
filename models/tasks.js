// Creating our project model
module.exports = function(sequelize, DataTypes) {
    const Tasks = sequelize.define("Tasks", {
      taskName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      taskOwner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      creatingStatus: {
        type: DataTypes.STRING,
        allowNull: false
      },
      testingStatus: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    return Tasks;
  };
  