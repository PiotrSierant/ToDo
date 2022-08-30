import React from 'react';
import {Item} from "../models/Item";
import {Checkbox, ListItem, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";

export const ItemDetail = ({item, toggleDoneFn}: {item: Item, toggleDoneFn: Function}) => {
    const handleDone = () => {
        toggleDoneFn(item.id);
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
        </ListItem>
    )
}
