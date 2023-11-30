import mongoose, { Schema } from "mongoose";
//here we created conceptual schema

const EmployeeSchema = new Schema({

    //in this page we created schema or collection

    empName: String,
    empSalary: {
        type: Number,
        min: 5000,
        max: 40000,
        
    },
    updated: {
        type: Date,
        default: Date.now()
    },
})

const emp = mongoose.models.emp || mongoose.model("emp", EmployeeSchema)
export default emp;