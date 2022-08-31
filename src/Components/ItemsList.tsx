import React from 'react';
import { Item } from "../models/Item";
import { Container, List } from "@mui/material";
import { ItemDetail } from "./ItemDetail";

export const ItemsList = ({items, handleToggleDone, handleDeleteItem}: {items: Item[], handleToggleDone: Function, handleDeleteItem: Function}) => {

    return (
        <Container maxWidth={'md'} sx={{ p: '0' }}>
            <List>
                {
                    items.map( (item: Item) =>
                    <ItemDetail key={item.id} item={item} handleToggleDone={handleToggleDone} handleDeleteItem={handleDeleteItem}/>
                )}
            </List>
        </Container>
    )
}