// Creating our project model
module.exports = function(sequelize, DataTypes) {
    const Tasks = sequelize.define("Tasks", {
      taskName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      taskOwner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      creatingStatus: {
        type: DataTypes.STRING,
        allowNull: true
      },
      testingStatus: {
        type: DataTypes.STRING,
        allowNull: true
      },
    });

    Tasks.associate = function(models) {
      Tasks.belongsTo(models.Project, {
        foreignKey: {
          allowNull: false
        }
      })
    }
    return Tasks;
  };
  