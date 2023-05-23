import {createSlice} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'
import {editTodoAsync, fetchTodos, removeTodoAsync} from '../thuks/asyncThunk'

interface asyncState {
	todos: IToDo[]
	loading: boolean
}

const initialState: asyncState = {
	todos: [],
	loading: false
}

const asyncSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchTodos.pending, state => ({...state, loading: true, todos: []}))
		builder.addCase(fetchTodos.fulfilled, (state, {payload}) => ({...state, loading: false, todos: payload}))
		builder.addCase(fetchTodos.rejected, state => ({...state, loading: false, todos: []}))
		builder.addCase(removeTodoAsync.pending, state => ({...state, loading: true}))
		builder.addCase(removeTodoAsync.fulfilled, (state, {payload, meta}) => ({...state, todos:state.todos.filter(todo=>todo.id!== meta.arg), loading: false}))
		builder.addCase(removeTodoAsync.rejected, state => ({...state, loading: false}))
		builder.addCase(editTodoAsync.pending, state => ({...state, loading: true}))
		builder.addCase(editTodoAsync.fulfilled, (state, {payload}) => {
			const {id,title} = payload
			const index = state.todos.findIndex((todo) => todo.id === id)
			if (index!== -1){
				state.todos[index].title = title
			}
			state.loading=false
			return state
		})
		builder.addCase(editTodoAsync.rejected, state => ({...state, loading: false}))
	}
})

export default asyncSlice.reducer
