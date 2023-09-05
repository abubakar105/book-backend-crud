import express from 'express';
import todoModel from '../Model/todoModel.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todo = await todoModel.find()
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const todo = await todoModel.findById(req.params.id)
        res.send(todo)
    } catch (error) {
        res.send({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        const todo = await todoModel.create(req.body);
        res.send(todo)

    } catch (error) {
        res.send({ message: error })

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const todo = await todoModel.findByIdAndDelete(req.params.id)
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})

export default router