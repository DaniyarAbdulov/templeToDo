import {IconButton} from '@mui/material'
import {Cancel, Edit} from '@mui/icons-material'
import {CSSProperties, FC, useState} from 'react'

import {IToDo} from '../constants/types'
import {useAppDispatch} from '../redux/hooks'
import {removeToDo} from '../redux/slices/syncSlice'
import EditDialog from './editDialog'
import {removeTodoAsync} from '../redux/thuks/asyncThunk'

type TProps = {
	todo: IToDo
	isAsync?: boolean
}

const TodoItem: FC<TProps> = ({todo, isAsync = false}) => {
	const dispatch = useAppDispatch()
	const handleDelete = () => {}
	const [openDialog, setOpenDialog] = useState(false)

	return (
		<div style={styles.container}>
			<p style={{flex: 1}}>{todo.title}</p>
			<IconButton onClick={() => setOpenDialog(true)}>
				<Edit />
			</IconButton>
			<IconButton onClick={handleDelete}>
				<Cancel />
			</IconButton>

			<EditDialog
				isOpen={openDialog}
				setOpen={setOpenDialog}
				isAsync={isAsync}
				todo={todo}
			/>
		</div>
	)
}

const styles: {[key: string]: CSSProperties} = {
	container: {}
}

export default TodoItem
