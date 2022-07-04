import Student from './../models/studentModal.js'
import mongoose from 'mongoose';
export const saveStudent = async(req,res)=>{
    const student = req.body;
    try {
        const newstudent = new Student(student);
        await newstudent.save();
        res.status(201).json(newstudent)
        console.log(newstudent);
    } catch (err) {
        res.status(404).json(err.message)
    }
}
export const getAllStuns = async(req,res)=>{
    try {
        const students = await Student.find();
        res.status(200).json(students) 
    } catch (error) {
        res.status(404).json(error.message)
    }  
}

export const getStudentById = async(req,res)=>{
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("No Student with such id")
        }
        const student = await Student.findById(id)
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const updateStudent = async(req,res)=>{
    const id = req.params.id;
    const newStudent = req.body;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("No drama with such id")
        }
        const updateStudent = await Student.findByIdAndUpdate(id,newStudent,{new: true})
        res.status(200).json(updateStudent)
        console.log(updateStudent)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const deleteStudent = async(req,res)=>{
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send("No student with such id")
        }
        await Student.findByIdAndDelete(id)
        res.status(200).json("Student successfully deleted")
    } catch (error) {
        res.status(404).send(error.message)
    }
}