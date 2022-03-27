const axios = require('axios').default;
axios.defaults.baseURL = 'http://127.0.0.1:8000/app1';
let userID: any;
let userData: any;
let recipeData: any;

async function postUser(firstNameToPost:string, lastNameToPost:string, usernameToPost:string, emailToPost:string, passwordToPost:string) {
    try {
      const result = await axios.post('/createUser', {
        first_name: firstNameToPost,
        last_name: lastNameToPost,
        username: usernameToPost,
        email: emailToPost,
        password: passwordToPost
      })
      .then((response: any) => {
        console.log(response);
        userID = response.data;
          if (userID === parseInt(userID, 10)) {
            return userID;
          } else {
            return -1;
          }
      });
      console.log(result);
    } catch(e) {
      console.log(e);
    };
}

async function postUserReturn(firstNameToPost:string, lastNameToPost:string, usernameToPost:string, emailToPost:string, passwordToPost:string){
  await postUser(firstNameToPost, lastNameToPost, usernameToPost, emailToPost, passwordToPost);
  console.log(10)
  return userID;
}

async function getUser(userID : number) {
  try {
    const response = await axios.get('/user/' + userID)
    .then((result: any) => {
      userData = JSON.stringify(result.data);
      return userData;
    })
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(){

}

async function getRecipe(recipeID: string){
  try {
    const response = await axios.get('/recipe/' + recipeID)
    .then((result: any) => {
      recipeData = JSON.stringify(result.data);
      return recipeData;
    })
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
async function getRecipeFromUser(userID: string){
  try {
    const response = await axios.get('/getUserRecipes/' + userID)
    .then((result: any) => {
      userData = JSON.stringify(result.data);
      return result.data;
    })
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getUserReturn(userID : number) {
  await getUser(userID);
  return userData;
}

async function loginUser(username:string, password:string){
  try {
    const response = await axios.post('/user', {
      username: username, 
      password: password
    }) 
    .then((result: any) => {
        userID = result.data;
        if (userID === parseInt(userID, 10)) {
          return userID;
        } else {
          return -1;
        }
      });
    console.log(response);
    //return 1;
  } catch(e) {
    console.log(e);
  }
}

async function loginReturn(username:string, password:string){
  await loginUser(username, password);
  return userID;
}

function UpdateProfile(idToPost: number, firstNameToPost:string, lastNameToPost:string, usernameToPost:string, emailToPost:string, passwordToPost:string) {
  console.log("wiwo2");
  try {
    console.log("wiwo");
    axios.post('/updateProfile', {
      userid: idToPost,
      first_name: firstNameToPost,
      last_name: lastNameToPost,
      username: usernameToPost,
      email: emailToPost,
      password: passwordToPost
    })
    .then((response: any) => {
      console.log("hei2");

      console.log(response);
    /*  userID = response.data;
        if (userID === parseInt(userID, 10)) {
          return userID;
        } else {
          return -1;
        } */
    });
  } catch(e) {
    console.log("hei");
    console.log(e);
  };
}


async function getRecipes(owner: string){
  try {
    const response = await axios.get('/recipe/' + {owner})
    .then((result: any) => {
      userData = JSON.stringify(result.data);
      return userData;
    })
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function postRecipe(ownerIDToPost:string, titleToPost:string, imageToPost:File, timeEstimateToPost:string, categoriesToPost:string, preparationToPost:string, ingredientsToPost:string) {
  const form = new FormData();
  form.append('owner_id', ownerIDToPost)
  form.append('title',titleToPost)
  form.append('image',imageToPost)
  form.append('time_estimate', timeEstimateToPost)
  form.append('preparation', preparationToPost)
  form.append('ingredients', ingredientsToPost)
  form.append('scoreOfRecipe', '0')
  form.append('category', categoriesToPost)
  axios.post('/postRecipe', form)
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {
    console.log(error);
  });
}

async function getRecipiesFromCategory(category:string) {
  try {
    const response = await axios.get('/category=' + category);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function postComment(commentToPost:string, ownerIDToPost:number, recipeIDToPost:number) {
  axios.post('/recipe', {
    content: commentToPost,
    owner: ownerIDToPost,
    belongTo: recipeIDToPost, 
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {

    console.log(error);
  });
}

function postLike(ownerIDToPost:number, recipeIDToPost:number) {
  axios.post('/recipe', {
    userThatLikes: ownerIDToPost,
    recipeThatIsLiked: recipeIDToPost, 
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {

    console.log(error);
  });
}

function postScore(ownerIDToPost:number, scoreValue:number ,recipeIDToPost:number) {
  axios.post('/recipe', {
    owner: ownerIDToPost,
    value: scoreValue,
    recipe: recipeIDToPost, 
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {

    console.log(error);
  });
}

function postFavorite(ownerIDToPost:number, recipeIDToPost:number) {
  axios.post('/recipe', {
    userThatFavorites: ownerIDToPost,
    recipeThatIsFavorited: recipeIDToPost, 
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {

    console.log(error);
  });
}

function postFollower(followerIDToPost:number, followedIDToPost:number) {
  axios.post('/profile', {
    userThatFollows: followerIDToPost,
    userGetsFollowed: followedIDToPost, 
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {
    console.log(error);
  });
}

function postCategory(categoryToPost:string) {
  axios.post('/', {
    name: categoryToPost
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {
    console.log(error);
  });
}

export { getRecipeFromUser,getRecipes, getRecipe, postUser, postUserReturn, getUser, getUserReturn, postRecipe, postComment, postLike, postScore, postFavorite, postFollower, postCategory, loginUser, loginReturn, UpdateProfile }
