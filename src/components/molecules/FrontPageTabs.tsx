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





function Search() {
    let searchValue = (document.getElementById('searchbar') as HTMLInputElement).value;
    //get search request from server
    //getSearch(searchValue);
}

const FrontPageTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
                return 0;
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

      async function setRecipeName() {  
        console.log('jeg kjører');
        let recipeData: any;

        recipeData = await getRecipeReturn(7407);
        useEffect(() =>  {
            const recipelist = JSON.parse(recipeData);
            const recipeName = recipelist.title;

            let recipe = document.getElementById('recipe');
            recipe.innerHTML = recipeName;
        })
      }

      

    return (
        <div id="tabID" className="tabs">
            <Box sx={{ width: '100%' }}>
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
                        All recipes here
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Breakfast recipes here
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        
                        <h1>Simple dishes here</h1>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Vegan disher her
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Italian dishes
                        {setRecipeName()}
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Gluten free here
                    </TabPanel>
                </ThemeProvider>
            </Box>
            {/* <div id="searchbarContainerID">
                <input placeholder="Search" id="searchbar" type="text"/>
                <button onClick={() => Search()} id="searchButton"><ThemeProvider theme={themeIcon}><SearchIcon fontSize='small'></SearchIcon></ThemeProvider></button>
            </div> */}
        </div>
    ); 
};

export default FrontPageTabs;
