const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Notification = sequelize.define("Notification", {
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
  type: {
    type: DataTypes.ENUM("match_found", "message", "item_returned", "item_status_update", "system"),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  relatedItemId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  relatedMatchId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  relatedUserId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  actionUrl: {
    type: DataTypes.STRING,
    allowNull: true
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

module.exports = Notification;
