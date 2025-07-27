import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const fontStylesV2 = sequelize.define('fontStylesV2', {
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
  tableName: 'fontStylesV2',
  freezeTableName: true,
  timestamps: false
});

export default fontStylesV2;
