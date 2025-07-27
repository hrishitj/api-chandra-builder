import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const metalColorsV2 = sequelize.define('metalColorsV2', {
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
  tableName: 'metalColorsV2',
  freezeTableName: true,
  timestamps: false
});

export default metalColorsV2;