import {createAsyncThunk} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'
import {api} from '../../constants/axios.config'

export const fetchTodos = createAsyncThunk<IToDo[]>('todos/fetch', async () => {
	return await api
		.get('/todos')
		.then(res => res.data)
		.catch(e => console.error(e.response ?? e))
})

export const removeTodoAsync = createAsyncThunk('todos/remove', async () => {
	return Promise
})

export const editTodoAsync = createAsyncThunk('todos/edit', async () => {
	return Promise
})
