import { isInt16Array } from "util/types";

const axios = require('axios').default;
axios.defaults.baseURL = 'http://127.0.0.1:8000/app1';
let userID: any;
let userData: any;
let recipeData: any;
let recipeId: any;


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

async function getRecipe(recipeId : number){
  try {
    const response = await axios.get('/recipe/' + {recipeId})
    .then((result: any) => {
      recipeData = JSON.stringify(result.data);
      return recipeData;
    })
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
 
async function getRecipeReturn(recipeId : number) {
  await getRecipe(recipeId);
  return recipeData;
}

function postRecipe(ownerIDToPost:number, titleToPost:string, imageToPost:string, timeEstimateToPost:string, categoriesToPost:string, preparationToPost:string, ingredientsToPost:string) {
  axios.post('/recipe', {
    owner: ownerIDToPost,
    title: titleToPost,
    image: imageToPost, 
    time_estimate: timeEstimateToPost,
    preparation: preparationToPost,
    ingredients: ingredientsToPost,
    category: categoriesToPost
  })
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

export { postUser, postUserReturn, getUser, getUserReturn, postRecipe, postComment, postLike, postScore, postFavorite, postFollower, postCategory, loginUser, loginReturn, getRecipe, getRecipeReturn}
