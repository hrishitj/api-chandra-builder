import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const metalKaratsV2 = sequelize.define('metalKaratsV2', {
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
  tableName: 'metalKaratsV2',
  freezeTableName: true,
  timestamps: false
});

export default metalKaratsV2;