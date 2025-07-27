import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const diamondQualitiesV2 = sequelize.define('diamondQualitiesV2', {
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
  tableName: 'diamondQualitiesV2',
  freezeTableName: true,
  timestamps: false
});

export default diamondQualitiesV2;