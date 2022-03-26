import * as React from 'react';
import "./styleProfile.css"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ProfileRecipeFeed from './ProfileRecipeFeed';
import { ConnectedTvOutlined, ConstructionOutlined, LocalActivityTwoTone, ResetTvOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { getRecipe, getRecipeFromUser, getRecipeReturn, getRecipesFromUserReturn, getUser, getUserReturn, getUserReturnNoWait } from '../client';
import { convertTypeAcquisitionFromJson, isReturnStatement } from 'typescript';
import ProfileRecipes from './ProfileRecipeFeed';
import TitlebarImageList from '../components/molecules/imagelistTest';


let itemdata: Array<any>;

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


async function SetName() {
    console.log('jeg kjører');
    let userData: any;
    async function GetUserData() {
        const loggedInUser: any = localStorage.getItem('user');
        if (loggedInUser > -1 && loggedInUser != null) {
            const userID = loggedInUser;
            userData = await getUserReturn(userID);
    }

    userData = await GetUserData();
    useEffect(() => {
        console.log(userData);
        const objList = JSON.parse(userData);
        const userFirstName = objList.first_name;
        const userLastName = objList.last_name;
        const newName = userFirstName + ' ' + userLastName;

        let name = document.getElementById('name')!;
        name.innerHTML = newName;
    })
    }
}
 function userRecipes() {
     
    let userID = Number(localStorage.getItem('user'));
    let recipedata = getRecipesFromUserReturn(localStorage.getItem('user').toString());
    console.log('Test disse greiene');
    console.log(recipedata);
    itemdata = [];
    let owner =  getUserReturnNoWait(userID);
    let myuserdata = JSON.parse(owner);
    let username = '@' + myuserdata.username;
    for( let i=0; i < Object.keys(recipedata).length; i++){
          console.log(recipedata[i].title);
          let myRecipe = recipedata[i];
          let image = 'http://127.0.0.1:8000' + myRecipe.image;
          let tittel = myRecipe.title;
         itemdata.push({img: image, title: tittel, author: username, recipeid: myRecipe.id,});
      }

    return itemdata;
    
 }

  


export default function Profile(){

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
                    <h1 id='name' onLoad={SetName}></h1>
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
                    <TabPanel value={value} index={0}>
                    {TitlebarImageList(userRecipes())}
                    </TabPanel>
                    
                    <TabPanel value={value} index={1}>
                       
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
}



const myRecipeData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      // rows: 6,
      // cols: 6,
      // featured: true,
    }, 
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      },
    ]
