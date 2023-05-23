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
        // add title to todos
        const todo: IToDo = {
            id: Date.now(),
            title: title,
            completed: false,
        }
		dispatch(addToDo(todo))
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
                        <TodoItem todo={todo}/>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        flex:1,
        paddingRight:5
    },
    row: {display:"flex"},
    todosWrapper: {
        border:"1px solid grey",
        padding: "5px",
        borderRadius:"5px",
        overflow:"auto",
        marginTop:15,
        height:"40vh",
    }
}

export default Sync
