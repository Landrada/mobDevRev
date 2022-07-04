import express from 'express'
import { deleteStudent, getAllStuns, getStudentById, saveStudent, updateStudent } from '../controllers/studentController.js';
import { auth } from '../middlewares/auth.js';
const router = express.Router();

router.get('/',getAllStuns);
router.get('/:id',auth,getStudentById);
router.post('/',auth,saveStudent);
// router.put('/:id',updateStudent);
router.put('/:id',auth,updateStudent);
router.delete('/:id',auth,deleteStudent);

export default router