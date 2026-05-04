const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Item = sequelize.define("Item", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    }
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  itemType: {
    type: DataTypes.ENUM("lost", "found"),
    allowNull: false
  },
  dateOfIncident: {
    type: DataTypes.DATE,
    allowNull: false
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imageHash: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM("lost", "found", "matched", "returned", "not_returned", "not_found"),
    defaultValue: "lost"
  },
  matchedWithItemId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  visibility: {
    type: DataTypes.ENUM("public", "private"),
    defaultValue: "public"
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

module.exports = Item;
