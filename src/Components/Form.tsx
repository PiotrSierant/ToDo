import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import {FormDetails} from "./FormDetails";
import {Item} from '../models/Item';

export const Form = () => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setItems([...items, item]);
    }

    return <Box component="main">
          <Container maxWidth={"md"}>
              <FormDetails addItemFn={addItem} />
          </Container>
  </Box>
}