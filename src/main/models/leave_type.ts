import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../services/database/database.service";

// eslint-disable-next-line strict, lines-around-directive

export interface LeavetypeAttributes
  extends Model<
    InferAttributes<LeavetypeAttributes>,
    InferCreationAttributes<LeavetypeAttributes>
  > {
  id: CreationOptional<string>;
  name: string;
  accrual_rate?: number;
}

const Leavetype = sequelize.define<LeavetypeAttributes>("leavetypes", {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accrual_rate: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Leavetype;
