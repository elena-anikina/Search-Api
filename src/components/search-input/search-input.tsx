import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';


export const SearchInput = () => {
    const [checkAll, setCheckAll] = useState(false);
    return (
        <>
        <TextField
            sx={{width: '100%', marginBottom: '10px'}}
            id="outlined-search"
            label="Search field"
            type="search"
            margin="normal"
            variant="outlined"
        />
        <div style={{marginBottom: '50px'}}  aria-label="outlined primary button group">
            <Button
                sx={{marginRight: '10px'}}
                variant="contained"
                endIcon={checkAll ? <CheckRoundedIcon /> : null}
                onClick={() => setCheckAll((state) => !state)}
            >
                Выбрать все
            </Button>
            <Button variant="contained">Добавить в отчет</Button>
        </div>
        </>
    );
};