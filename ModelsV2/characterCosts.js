import sequelize from '../Utils/dbConnection.js';
import { DataTypes } from 'sequelize';

const characterCostingV2 = sequelize.define('characterCostingV2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  letter: {
    type: DataTypes.CHAR(1),
    allowNull: false
  },
  fontStyleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  letterHeightId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  metalKaratId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  diamondQualityId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  metalWeight: {
    type: DataTypes.DECIMAL(10, 3),
    allowNull: false
  },
  diamondCarat: {
    type: DataTypes.DECIMAL(10, 3),
    allowNull: true
  },
  diamondPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  noOfDiamonds: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  dimensions: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'characterCostingV2', // Ensures table name matches your SQL
  freezeTableName: true,         // Prevents Sequelize from pluralizing table name
  timestamps: false              // Skips createdAt/updatedAt
});

export default characterCostingV2;
