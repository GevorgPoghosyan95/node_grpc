import { DataTypes } from 'sequelize';
import sequelize from "../db/sequilize";

const Book = sequelize.define('books',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    book: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})


export default Book;