import React, { useState } from 'react';
import styles from "./Form.module.scss";
import { Item } from "../models/Item";
import { Alert, AlertTitle, Button, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const FormDetails = ({handleAddItem}: {handleAddItem: Function}) => {

    const [item, setItem] = useState('');
    const [select, setSelect] = useState('Monday');
    const [error, setError] = useState<String[]>([]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const temErrors: String[] = [];
        if(item.trim().length < 3) {
            temErrors.push('The name of what you want to do must be longer.')
        }
        setError(temErrors)
        if(temErrors.length === 0) {
            const newItem = new Item(item, select)
            handleAddItem(newItem);
            setItem('');
            setSelect('Monday');
        }
    }

    return <form className={styles.form}>
        {error.length > 0
            && <Alert severity='error'>
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>}
        <FormGroup>
            <InputLabel>What to do?</InputLabel>
            <TextField value={item} onChange={(event: any) => setItem(event.target.value)} />
        </FormGroup>
        <FormGroup>
            <InputLabel>When?</InputLabel>
            <Select value={select} onChange={(event: any) => setSelect(event.target.value)}>
                <MenuItem value={'Monday'}>Monday</MenuItem>
                <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                <MenuItem value={'Thursday'}>Thursday</MenuItem>
                <MenuItem value={'Friday'}>Friday</MenuItem>
                <MenuItem value={'Saturday'}>Saturday</MenuItem>
                <MenuItem value={'Sunday'}>Sunday</MenuItem>
            </Select>
        </FormGroup>
        <Button
            variant="outlined"
            startIcon={<AddOutlinedIcon />}
            sx={{ mt: 3, width: '200px'}}
            type='submit'
            onClick={handleSubmit}
        >
            Add task
        </Button>
    </form>
}