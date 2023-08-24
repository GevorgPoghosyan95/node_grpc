import {createContainer, asClass} from 'awilix';
import TestController from "../controllers/test.controller";
import {Op} from 'sequelize'
import User from "../models/user";
import Book from "../models/book";

class TestService {
    async get() {
        const user = await User.findByPk(1);
        const book = await Book.findByPk(1);

// Add the book to the user's collection
        await user.addBook(book);
    }
}

const container = createContainer();
container.register({
    testService: asClass(TestService),
    testController: asClass(TestController),
});

export default container;