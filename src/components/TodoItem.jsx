import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useState } from 'react';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({todo, deleteTodo, editTodo}) {
    const [openDialog, setOpenDialog] = useState(false)

    const dialogHandler = () => {
        setOpenDialog(!openDialog)
    }

    return (
        <>        
        <EditTodoDialog editTodo={editTodo} open={openDialog} dialogHandler={dialogHandler} todo={todo}/>
        <Paper style={{padding: '0.5em 0em'}} >
            <ListItem
                secondaryAction={
                    <IconButton edge="end" onClick={() => deleteTodo(todo.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon >
                        <Checkbox edge="start" tabIndex={-1} disableRipple />
                    </ListItemIcon>
                    <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)} />
                </ListItemButton>
            </ListItem>
        </Paper>
        </>
    );
}
