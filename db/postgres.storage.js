import sequelize from "./sequilize";
import * as models from '../models/index'

export default class PostgresStorage {
    static async init() {
        try {
            await sequelize.sync({alter:true}).then(()=>{
                console.log('models synced')
            }).catch((e)=>{
                console.log(e);
            })
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}
