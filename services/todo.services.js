const TodoModel = require("../model/todo.model");

class TodoServices {
  static async createTodo(userId, title, desc) {
    const createTodo = new TodoModel({ userId, title, desc });
    return await createTodo.save();
  }

  static async getTodoData(userId) {
    const todoData = await TodoModel.find({ userId });
    return todoData;
  }

  static async deleteToDo(id) {
    const deleted = await TodoModel.findOneAndDelete({ _id: id });
    return deleted;
  }
}

module.exports = TodoServices;
