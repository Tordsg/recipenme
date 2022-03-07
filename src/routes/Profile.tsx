import * as React from 'react';
import "./styleProfile.css"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ProfileRecipeFeed from './ProfileRecipeFeed';
import { LocalActivityTwoTone } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


// Source for TabPanelProps interface, TabPanel function is:
// https://mui.com/components/tabs/#BasicTabs.tsx

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
        <div>
            {
            value === index && (
            <h1>{children}</h1>
            )
            }
        </div>
    );
}



export default function Profile(){
    
    const name = 'Navn Navnesen';

    /* Handlers for tab */
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    
    /* Handlers for new-recipe button 
    source: https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
    */
    
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = `/new-recipe`; 
      navigate(path);
    }


    return (
        <div className="wrapper">
            <div className="Biography">
                <div className="UserName"> 
                    <h1> {name} </h1>
                </div>
                <div className="NewRecipe">
                    <IconButton aria-label="add_circle" color="secondary" onClick={routeChange}>
                        <AddIcon />
                    </IconButton>
                </div>
            </div>
            <div className="tabs">
                <Box sx={{ width: '100%' }}>
                    <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    centered
                    textColor="secondary"
                    indicatorColor="secondary"
                    >
                        <Tab label="My recipes" />
                        <Tab label="Saved recipes" />
                    </Tabs>
                </Box>
            </div>
        </div>
    );
}
