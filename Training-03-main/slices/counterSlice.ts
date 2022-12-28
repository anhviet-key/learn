/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import build from "next/dist/build";
import {AxiosFetch} from "../pages/api/todo";
export interface CounterState {
  value: Array<any>;
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {   
        if (state.value === null) {
          state.value = [];
        }
        state.value.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.value[action.meta.arg.id] = {
          title: action.meta.arg.title,
          status: action.meta.arg.status,
        };
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.value.splice(action.meta.arg, 1);
      })
  }
});
export const fetchApi = createAsyncThunk("todos/fetchApi", async () => {
  const response = await fetch(AxiosFetch);
  const data = await response.json();
  return data;
});
export const addTodo = createAsyncThunk("todos/newTodo", async (todo) => {
  try {
    const response = await fetch(AxiosFetch, {
      method: 'POST',
      body: JSON.stringify(todo),
    })
    const data = await response.json();
    return data;
  }
  catch (error) {
  }
});

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo) => {

    try {
      const response = await fetch(AxiosFetch + "/" + todo.id, {
        method: "PUT",
        body: JSON.stringify({ title: todo.title, status: todo.status }),
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    try {
      const response = await fetch(AxiosFetch+'/'+id, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  }
);
// Action creators are generated for each case reducer function
// export const { addTodo, updateTodo, toggleTodo, deleteTodo } = counterSlice.actions;
//selector
export const selectValue = (state: RootState) => state.item.value;

export default counterSlice.reducer;
