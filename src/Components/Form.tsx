import React from 'react';
import Box from "@mui/material/Box";
import {Button, Container, FormGroup, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styles from './Form.module.scss';
export const Form = () => {

    return <Box component="main">
          <Container maxWidth={"md"}>
              <form className={styles.form}>
                  <FormGroup>
                      <InputLabel>What to do?</InputLabel>
                      <TextField />
                  </FormGroup>
                  <FormGroup>
                      <InputLabel>When?</InputLabel>
                      <Select>
                          <MenuItem value={'mo'}>Monday</MenuItem>
                          <MenuItem value={'tu'}>Tuesday</MenuItem>
                          <MenuItem value={'we'}>Wednesday</MenuItem>
                          <MenuItem value={'th'}>Thursday</MenuItem>
                          <MenuItem value={'fr'}>Friday</MenuItem>
                          <MenuItem value={'sa'}>Saturday</MenuItem>
                          <MenuItem value={'su'}>Sunday</MenuItem>
                      </Select>
                  </FormGroup>
                  <Button
                      variant="outlined"
                      endIcon={<AddOutlinedIcon />}
                      sx={{mt: 3}}
                  >
                      Add
                  </Button>
              </form>
          </Container>
  </Box>
}