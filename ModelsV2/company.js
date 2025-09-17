import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const companiesV2 = sequelize.define('companiesV2', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  multiplier: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'companiesV2',
  freezeTableName: true,
  timestamps: false
});

export default companiesV2;