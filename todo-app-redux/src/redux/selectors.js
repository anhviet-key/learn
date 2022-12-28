import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;
export const todoList = (state) => state.todoList;
//   const filltersTodos = state.todoList.filter((todo) => {
//     return todo.name.includes(searchTextSelector);
//   });
//   return filltersTodos;
export const filltersTodos = createSelector(
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  todoList,
  (search, status, priorities, todos) => {
    return todos.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(search) && priorities.includes(todo.priority)
          : todo.name.includes(search);
      }
      return (
        todo.name.includes(search) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
