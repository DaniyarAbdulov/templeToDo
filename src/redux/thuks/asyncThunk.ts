import {createAsyncThunk} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'
import {api} from '../../constants/axios.config'
import { Api } from '@mui/icons-material'

export const fetchTodos = createAsyncThunk<IToDo[]>('todos/fetch', async () => {
	return await api
		.get('/todos')
		.then(res => res.data)
		.catch(e => console.error(e.response ?? e))
})

export const removeTodoAsync = createAsyncThunk('todos/remove', async (id:number) => {
	return await api.delete (`/todos/${id}`).then(res => {
		if (res.status !== 200){
			throw Error("Request failed")
		}
		return res.data
	}).catch(e => console.error(e.response ?? e))
})

export const editTodoAsync = createAsyncThunk<IToDo, {id: number; title: string}>('todos/edit', async (data:{id: number; title: string}) => {
	const {id, title} = data
	return await api.put(`/todos/${id}`, {'title': title}).then(res => {
		if (res.status !== 200){
			throw Error("Request failed")
		}
		return res.data
	}).catch(e => console.error(e.response ?? e))
})
