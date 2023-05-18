import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'

interface syncState {
	todos: IToDo[]
}

const initialState: syncState = {
	todos: []
}

const syncSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addToDo: (state, action: PayloadAction<IToDo>) => ({
			todos: state.todos.concat(action.payload)
		}),
		removeToDo: (state, action: PayloadAction<number>) => ({
			...state
		}),
		editTodo: (state, action: PayloadAction<{id: number; title: string}>) => ({
			...state
		})
	}
})

export const {addToDo, removeToDo, editTodo} = syncSlice.actions

export default syncSlice.reducer
