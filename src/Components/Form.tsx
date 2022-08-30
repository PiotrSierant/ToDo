import React from 'react';
import Box from "@mui/material/Box";
import {Button, Container} from "@mui/material";
import {FormDetails} from "./FormDetails";
import {Item} from '../models/Item';
import {ItemsList} from "./ItemsList";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const Form = () => {
    const [items, setItems] = useLocalStorage('itemsList', [])

    const addItem = (item: Item) => {
        setItems([...items, item]);
    }

    const toggleDone = (id: string) => {
        const updateItems = items.map( (item: Item) => {
            if(item.id === id) {
                item.done = !item.done
            }
            return item
        })
        setItems(updateItems);
    }

    const handleClearList = () => {
        setItems([]);
    }

    const handleDeleteItem = (id: string) => {
        const updateItems = items.map( (item: Item) => {
            if(item.id === id) {
                items.pop(item);
            }
            return item
        })
        setItems(updateItems);
    }

    return <Box component="main">
          <Container maxWidth={"md"}>
              <FormDetails addItemFn={addItem} />
              <ItemsList items={items} toggleDoneFn={toggleDone} handleDeleteItemFn={handleDeleteItem}/>
              {items.length > 0 && <Button
                  variant="outlined"
                  color="error"
                  onClick={handleClearList}
              >
                  Clear list
              </Button> }
          </Container>
  </Box>
}