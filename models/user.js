import { DataTypes } from 'sequelize';
import sequelize from "../db/sequilize";
import Book from "./book";

const User = sequelize.define('users',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    pako:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
})

export default User;