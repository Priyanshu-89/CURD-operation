import mongoose from "mongoose";
const Dbconnect = async () => {
    try {

        //in this page we connect our project to the database and create a database named as (empdetails)

        await mongoose.connect("mongodb://127.0.0.1:27017/empDetails")
        console.log('connected to db')
    } catch (error) {
        console.log("Db not connected")
    }
}
export default Dbconnect;