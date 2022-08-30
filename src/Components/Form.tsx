import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Container} from "@mui/material";
import {FormDetails} from "./FormDetails";
import {Item} from '../models/Item';
import {ItemsList} from "./ItemsList";

export const Form = () => {
    const [items, setItems] = useState<Item[]>(() => {
        const initialValue: Item[] = [];
        const itemsJson = localStorage.getItem('itemsList')
        if( itemsJson !== null ) {
            return JSON.parse(itemsJson);
        }
        return initialValue
    });

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

    useEffect( () => {
        localStorage.setItem('itemsList', JSON.stringify(items));
    }, [items])

    return <Box component="main">
          <Container maxWidth={"md"}>
              <FormDetails addItemFn={addItem} />
              <ItemsList items={items} toggleDoneFn={toggleDone}/>
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