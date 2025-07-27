import { DataTypes } from 'sequelize';
import sequelize from '../Utils/dbConnection.js';

const pricingBaseV2 = sequelize.define('pricingBaseV2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'pricingBaseV2',
  freezeTableName: true,
  timestamps: false
});

export default pricingBaseV2;
