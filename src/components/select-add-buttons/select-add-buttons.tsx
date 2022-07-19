// @ts-nocheck
import Button from "@mui/material/Button";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {updateSelectAll} from "../../redux-store/reducers/select-all-slice";
import {updateListSelectAll} from "../../redux-store/reducers/list-slice";
import Snackbar from "@mui/material/Snackbar";
import React, {MouseEventHandler} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectorList, selectorSelectAll} from "../../redux-store/selectors";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const SelectAddButtons = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectorList);
    const selectAll = useSelector(selectorSelectAll);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: MouseEventHandler<HTMLButtonElement>, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const added = list.filter((el) => el.checked).length;

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div style={{marginBottom: '50px'}}  aria-label="outlined primary button group">
            <Button
                sx={{marginRight: '10px'}}
                variant="contained"
                endIcon={selectAll ? <CheckRoundedIcon /> : null}
                onClick={() => {
                    dispatch(updateSelectAll());
                    dispatch(updateListSelectAll(selectAll))
                }}
            >
                Выбрать все
            </Button>
            <Button variant="contained" onClick={handleClick}>Добавить в персональный лист</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={`Количество API, добавленных в ваш персональный лист - ${added}`}
                action={action}
            />
        </div>
    );
};