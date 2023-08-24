import {Sequelize} from "sequelize";

const sequelize = new Sequelize('postgres', 'postgres', 'w700i1995', {
    host: 'localhost',
    dialect:  'postgres'
})

export default sequelize;