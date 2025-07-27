import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const letterHeightsV2 = sequelize.define('letterHeightsV2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'letterHeightsV2',
  freezeTableName: true,
  timestamps: false
});

export default letterHeightsV2;
