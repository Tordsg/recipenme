import { Box, createTheme, Tab, Tabs, ThemeProvider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import './FrontPageTabs.css';
//import { red } from '@material-ui/core/colors';
import FormTextField from '../atoms/FormTextField';
import { getJSDocOverrideTagNoCache } from 'typescript';
import { lineHeight, width } from '@mui/system';
import MainBody from '../../tempComponents/MainBody';
import { getRecipe, getRecipeReturn } from '../../client';
import { useTheme } from '@emotion/react';
import TitlebarImageList from './imagelistTest';
import Container from '@mui/material/Container';



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
//just to test some stuff
// async function SetRecipe() {  
//     console.log('jeg kjører');
//     let recipeData: any;
//     async function GetRecipeData() {
//         recipeData = await getRecipeReturn(7407);
//     }
//     recipeData = await GetRecipeData;
//     useEffect(() =>  {
//         const recipelist = JSON.parse(recipeData);
//         const recipeName = recipelist.title;

//         let recipetitle = document.getElementById('recipetitle')!;
//         recipetitle.innerHTML = recipeName;
//     })
//   }




function Search() {
    let searchValue = (document.getElementById('searchbar') as HTMLInputElement).value;
    //get search request from server
    //getSearch(searchValue);
}

const FrontPageTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange =  (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue);

        setValue(newValue);
        if (newValue === 0) {
            let searchbar = document.getElementById('searchbarContainerID');
            if (searchbar != null) {
                searchbar.style.display = "block";
                

            }
        } else {
            let searchbar = document.getElementById('searchbarContainerID');
            if (searchbar != null) {
                searchbar.style.display = "none";
                
            }
        if (newValue === 1) {
            return 0;
            //getBreakfast();
    
        } else if (newValue === 2) {
            return 0;
            //getSimpleDish();
    
        } else if (newValue === 3) {
            return 0;
            //getVegan();
    
        } else if (newValue === 4) {
            // SetRecipe()

            //getItalian();
    
        } else if (newValue === 5) {
            return 0;
            //getGlutenFree();
            }
        }
    };
    const theme = createTheme({
        components: {
          // Name of the component
          MuiSvgIcon: {
            styleOverrides: {
                fontSizeSmall: {
                    fontSize: '2.2vw',
                },
            },
          },
          MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    width: '80vw',
                    margin: 'auto',
                    marginTop: '1vw',
                    padding: '0px',
                },
                indicator: {
                    backgroundColor: '#76af67',
                }
            },
          },
          MuiButtonBase: {
            styleOverrides: {
                root: {
                    padding: '0px',
                    margin: '0px',
                    minWidth: 'none',
                },
            }
          },
          MuiTab: {
            styleOverrides: {
              // Name of the slot
              root: {
                maxWidth: '10vw',
                minWidth: '10vw',
                width: '10vw',
                fontSize: '1.2vw',
                margin: '0px',
                padding: '1vw 0.5vw',
              },
              textColorSecondary: {
                // Some CSS
                color: '#000000',
                "&.Mui-selected": {
                    color: '#76af67',
                  }
              },
            },
          },
        },
      });


      const themeIcon = createTheme({
        components: {
          // Name of the component
          MuiSvgIcon: {
            styleOverrides: {
                fontSizeSmall: {
                    fontSize: '2vw',
                    lineHeight: '2.5vw'
                },
                root: {
                    margin: '0px',

                }
            },
          },
        }
      });
      
      

    return (
        <div id="tabID" className="tabs">
            <Box sx={{ width: '100%', color: 'FEFBE9' }}>
                <ThemeProvider theme={theme}>
                    <Tabs value={value} allowScrollButtonsMobile={true} onChange={handleChange} variant='fullWidth' centered textColor="secondary" indicatorColor="secondary">
                        <Tab label={<SearchIcon fontSize='small'></SearchIcon>} />
                        <Tab label="Breakfast" />
                        <Tab label="Simple dish" />
                        <Tab label="Vegan" />
                        <Tab label="Italian" />
                        <Tab label="Gluten-free" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      {TitlebarImageList(itemData)}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {TitlebarImageList(breakfastData)}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        
                      {TitlebarImageList(simpleDishData)}
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        {TitlebarImageList(veganData)}
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        
                        
                            {TitlebarImageList(italianData)}
                        
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        {TitlebarImageList(glutenFreeData)}
                    </TabPanel>
                </ThemeProvider>
            </Box>
            {<div id="searchbarContainerID">
                <input placeholder="Search" id="searchbar" type="text"/>
                <button onClick={() => Search()} id="searchButton"><ThemeProvider theme={themeIcon}><SearchIcon fontSize='small'></SearchIcon></ThemeProvider></button>
            </div> }
        </div>
    ); 
};

const breakfastData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
  },
];

const simpleDishData = [
  {img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  title: 'Burger',
  author: '@rollelflex_graphy726',},
];

const veganData = [
 {img: 'https://wellandfull.com/wp-content/uploads/2016/02/WellandFull-4-21.jpg',
 title: 'Buddha Bowl',
 author: '@SivertEggen',},

 {img: 'https://thehappypear.ie/wp-content/uploads/2020/09/100-wholefood-burger-e1606932765621.jpg',
 title: 'Vegan Burger',
 author: '@SynneØdegaard', },
];

const italianData = [
  {img: 'https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo',
  title: 'Pasta',
  author: '@rollelflex_graphy726',},
];

const glutenFreeData = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4K4oefu1a67hPSwxkRkJzlF-t7oeDC0JZqhoxbPEpgvoJKebcr0vl_ZwRJoFhczNxTo&usqp=CAU',
      title: 'Lime-Basil Chicken',
      author: '@rollelflex_graphy726',
    },
];

const itemData = [
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
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      // cols: 6,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      // cols: 6,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      // rows: 6,
      // cols: 6,
      // featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
      // rows: 6,
      // cols: 6,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      // cols: 6,
    },
  ];
export default FrontPageTabs;
