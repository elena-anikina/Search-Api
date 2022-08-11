import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {ListApi} from "../list-api/list-api";
import {TabPanel} from "./tab-panel";
import {SelectAddButtons} from "../select-add-buttons/select-add-buttons";
import {TableApi} from "../table-api/table-api";


const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const TabsComponent = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Лист" {...a11yProps(0)} />
                    <Tab label="Таблица" {...a11yProps(1)} />
                    <Tab label="Диаграма" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SelectAddButtons />
                <ListApi />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TableApi />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}