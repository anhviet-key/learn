export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};
export const toggleStatus = (todoId) => {
  return {
    type: 'todoList/toggleStatus',
    payload: todoId,
  };
};

export const searchFilter = (text) => {
  return {
    type: 'filter/searchFilter',
    payload: text,
  };
};
export const statusFilter = (status) => {
  return {
    type: 'filter/statusFilter',
    payload: status,
  };
};
export const priorityFilter = (priorities) => {
  return {
    type: 'filter/priorityFilter',
    payload: priorities,
  };
};
