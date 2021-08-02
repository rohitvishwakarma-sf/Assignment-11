import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize";
import { sequelize } from "../database";
import { Customer } from "./Customer";

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

export class User extends Model {
  public id!: number;
  public firstname!: string;
  public middlename!: string;
  public lastname!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public rolekey!: string;

  public static addUser(user: {}) {
    User.sync().then(() => {
      User.create(user)
        .then(() => {
          console.log("created user");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  public static async updateUser(user: any) {
    return await User.update(user, { where: { id: user.id! } });
  }
  public static async deleteUser(id: number) {
    return await User.destroy({ where: { id: id } });
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    middlename: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    lastname: {
      type: new DataTypes.STRING(),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    phone: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    rolekey: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
    createdAt: "createdon",
    updatedAt: "modifiedon",
  }
);

// User.sync({ force: true }).then(() => {
//   console.log("synced User");
// });
