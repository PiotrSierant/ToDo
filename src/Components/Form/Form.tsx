import React from "react";
import { Item } from "../../models/Item";
import { FormDetails } from "../FormDetails";
import { ItemsList } from "../ItemsList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button, Container, Box } from "@mui/material";

export const Form = () => {
  const [items, setItems] = useLocalStorage("itemsList", []);

  const handleAddItem = (item: Item) => {
    setItems([...items, item]);
  };

  const handleToggleDone = (id: string) => {
    const updateItems = items.filter((item: Item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(updateItems);
  };

  const handleClearList = () => {
    setItems([]);
  };

  const handleDeleteItem = (id: string) => {
    const updateItems = items.filter((item: Item) => {
      if (item.id === id) {
        items.pop(item);
      }
      return item;
    });
    setItems(updateItems);
  };

  return (
    <Box component="main">
      <Container maxWidth={"md"}>
        <FormDetails handleAddItem={handleAddItem} />
        <ItemsList
          items={items}
          handleToggleDone={handleToggleDone}
          handleDeleteItem={handleDeleteItem}
        />
        {items.length > 0 && (
          <Button variant="outlined" color="error" onClick={handleClearList}>
            Clear list
          </Button>
        )}
      </Container>
    </Box>
  );
};
