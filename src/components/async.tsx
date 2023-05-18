import {Button, CircularProgress} from '@mui/material'
import {CSSProperties, FC} from 'react'

import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {fetchTodos} from '../redux/thuks/asyncThunk'
import TodoItem from './todoItem'

const Async: FC = () => {
	const dispatch = useAppDispatch()
	const {todos, loading} = useAppSelector(state => state.asyncReducer)
	const handleRefresh = () => {}

	return (
		<div style={styles.container}>
			<h3 style={{textAlign: 'center'}}>Async ToDo's</h3>
			<Button
				variant='contained'
				onClick={handleRefresh}
				sx={{width: '100%', height: '56px'}}
			>
				Обновить
			</Button>
			{loading ? (
				<CircularProgress />
			) : todos.length ? (
				<div style={styles.todosWrapper}>
					{todos.map(todo => (
						<TodoItem
							todo={todo}
							isAsync
						/>
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
	todosWrapper: {}
}

export default Async
