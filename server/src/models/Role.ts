import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize";
import { sequelize } from "../database";

export class Role extends Model {
  public name!: string;
  public key!: string;
  public description!: string;
}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    tableName: "roles",
    sequelize: sequelize,
    createdAt: "createdon",
    updatedAt: "modifiedon",
  }
);
Role.sync().then(() => {
  console.log("synced customer");
});
