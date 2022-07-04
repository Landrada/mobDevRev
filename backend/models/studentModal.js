import mongoose from 'mongoose'

const stunSchema = mongoose.Schema({
    firstName: {
        type: "string",
        required: [true, 'FirstName is required']
    },
    lastName: {
        type: "string",
        required: [true, 'LastName is required']
    },
    province: {
        type: "string",
        required: [true, 'Province of residence is required']
    }
})
const Student = mongoose.model('Student', stunSchema);
export default Student;