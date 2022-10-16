import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Products = db.define('product', { //schema of table              
    name:{
        type: DataTypes.STRING
    },
    qty:{
        type: DataTypes.INTEGER
    },
    picture:{
        type: DataTypes.TEXT
    },
    expiredAt:{
        type: DataTypes.DATE
    },
    isActive:{
        type: DataTypes.BOOLEAN
    }
}, {  // opsi
    freezeTableName : true, // nama products harus sama dengan nama table di database
})

export default Products