import React from 'react';
import { Item } from "../models/Item";
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ItemDetail = ({item, handleToggleDone, handleDeleteItem}: {item: Item, handleToggleDone: Function, handleDeleteItem: Function}) => {
    const handleDone = () => {
        handleToggleDone(item.id);
    }
    const handleDelete = () => {
        handleDeleteItem(item.id)
    }
    return (
        <ListItem
            dense
            button
            onClick={handleDone}
            sx={{ p: '1rem 1rem'}}
        >
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
                <Checkbox
                    edge={'start'}
                    checked={item.done}
                    tabIndex={-1}
                    disableRipple
                    />
            </ListItemIcon>
            <ListSubheader sx={{ bgcolor: 'unset', fontWeight: '900', ml: '-1rem'}}>
                {item.when}
            </ListSubheader>
            <ListItemText>
                {item.name}
            </ListItemText>
            <IconButton edge="end" aria-label="delete" color="error" onClick={handleDelete}>
                <DeleteForeverIcon />
            </IconButton>
        </ListItem>
    )
}
