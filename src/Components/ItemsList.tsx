import React from 'react';
import {Item} from "../models/Item";
import {Container, List} from "@mui/material";
import {ItemDetail} from "./ItemDetail";

export const ItemsList = ({items, toggleDoneFn, handleDeleteItemFn}: {items: Item[], toggleDoneFn: Function, handleDeleteItemFn: Function}) => {

    return (
        <Container maxWidth={'md'} sx={{ p: '0' }}>
            <List>
                {
                    items.map( (item: Item) =>
                    <ItemDetail key={item.id} item={item} toggleDoneFn={toggleDoneFn} handleDeleteItemFn={handleDeleteItemFn}/>
                )}
            </List>
        </Container>
    )
}