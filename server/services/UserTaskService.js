import mongoose from 'mongoose'
import UserService from './UserService'
import TaskService from './TaskService'

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  taskId: { type: ObjectId, ref: "Task", required: true },
  userId: { type: ObjectId, ref: "User", required: true },
  completed: { type: Boolean, required: true, default: false },
  day: { type: String, required: true },
  // recurring: { type: Boolean }
})

export default class UserTaskService {
  get repository() {
    return mongoose.model('UserTaskService', _schema)
  }
}
