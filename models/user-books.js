import sequelize from "../db/sequilize";
import User from "./user";
import Book from "./book";

const UserBooks = sequelize.define('users_books', {
});

Book.belongsToMany(User,{ through: UserBooks,foreignKey:'book_id' })
User.belongsToMany(Book,{ through: UserBooks ,foreignKey:'user_id'})

export default UserBooks;