import {Button, TextField} from '@mui/material'
import {CSSProperties, FC, useState} from 'react'

import {IToDo} from '../constants/types'
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {addToDo} from '../redux/slices/syncSlice'
import TodoItem from './todoItem'

const Sync: FC = () => {
	const dispatch = useAppDispatch()
	const {todos} = useAppSelector(state => state.syncReducer)
	const [title, setTitle] = useState('')
	const handleAdd = () => {
		setTitle('')
	}

	return (
		<div style={styles.container}>
			<h3 style={{textAlign: 'center'}}>Sync ToDo's</h3>
			<div style={styles.row}>
				<TextField
					value={title}
					sx={{flex: 1}}
					onChange={({target}) => setTitle(target.value)}
					label='Название todo'
					variant='outlined'
				/>
				<Button
					variant='contained'
					onClick={handleAdd}
				>
					Добавить
				</Button>
			</div>
			{todos.length ? (
				<div style={styles.todosWrapper}>
					{todos.map(todo => (
						<TodoItem todo={todo} />
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

const styles: {[key: string]: CSSProperties} = {
	container: {},
	row: {},
	todosWrapper: {}
}

export default Sync
