import React from 'react';
import Typography from "@mui/material/Typography";

type Props = {
    item: {
        API: string;
        Auth: string;
        Category: string;
        Cors: string;
        Description: string;
        HTTPS: boolean;
        Link: string;
        checked: boolean;
    }
};


export const ListItemContent = ({item}: Props) => {
    console.log('item: ',  item);
    return (
        <>
            <Typography variant="body1" gutterBottom component="div">
                {`API: ${item.API}`}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {`Auth: ${item.Auth || 'no'}`}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {`Category: ${item.Category}`}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {`Cors: ${item.Cors}`}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {`Description: ${item.Description}`}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {`HTTPS: ${item.HTTPS}`}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {`Link: ${item.Link}`}
            </Typography>
        </>
    );
};