const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Item = require("./Item");
const User = require("./User");

const Match = sequelize.define("Match", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lostItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: "id"
    }
  },
  foundItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: "id"
    }
  },
  matchScore: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  nameMatchScore: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  dateMatchScore: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  imageMatchScore: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM("potential", "confirmed", "rejected", "recovered", "not_recovered"),
    defaultValue: "potential"
  },
  notificationSent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Match;
