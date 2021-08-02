import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize";
import { sequelize } from "../database";
import { User } from "./User";

// export const sequelize = new Sequelize("assignment11", "postgres", "root", {
//   host: "localhost",
//   dialect: "postgres",
//   pool: { max: 8, min: 0, idle: 1000 },
// })
//   .authenticate()
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export class Customer extends Model {
  public name!: string;
  public website!: string;
  public address!: string;
  public user_id!: number;

  public static async addCustomer(customer: any) {
    return await Customer.create(customer);
  }
  public static async deleteCustomerByUserId(user_id: number) {
    return Customer.destroy({ where: { user_id: user_id } });
  }
}

Customer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    user_id: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  },
  {
    tableName: "customers",
    sequelize: sequelize,
    createdAt: "createdon",
    updatedAt: "modifiedon",
  }
);

// Customer.hasOne(User, {
//   sourceKey: "user_id",
//   foreignKey: "id",
//   as: "user",
// });
// Customer.belongsTo(User, { foreignKey: "id" });
// Customer.sync({ force: true }).then(() => {
//   console.log("setup hasone");
// });
