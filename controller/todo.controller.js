const TodoServices = require("../services/todo.services");

exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, desc } = req.body;

    let todo = await TodoServices.createTodo(userId, title, desc);

    res.json({ status: true, success: todo });
  } catch (err) {
    throw err;
    next(err);
  }
};

exports.getToDoList = async (req, res, next) => {
  try {
    const { userId } = req.body;
    let todoData = await TodoServices.getTodoData(userId);
    res.json({ status: true, success: todoData });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};

exports.deleteToDo = async (req, res, next) => {
  try {
    const { id } = req.body;
    let deleted = await TodoServices.deleteToDo(id);
    res.json({ status: true, success: deleted });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};
