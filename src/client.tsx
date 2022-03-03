const axios = require('axios').default;
axios.defaults.baseURL = 'http://127.0.0.1:8000/app1';
function postUser(firstNameToPost:string, lastNameToPost:string, emailToPost:string, passwordToPost:string) {
    console.log(emailToPost);
    console.log(passwordToPost);
    axios.post('/createUser', {
      first_name: firstNameToPost,
      last_name: lastNameToPost,
      email: emailToPost,
      password: passwordToPost
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

async function getUser(userUsername:string, userPassword:string) {
  try {
    const response = await axios.get('/user?email=' + userUsername + '/password=' + userPassword);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
async function getRecipe(recipeId: number){
  try {
    const response = await axios.get('/recipe/' + {recipeId})
    console.log(response);
  } catch (error) {
    console.log(error);
  }
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

export { postUser, getUser, postRecipe, postComment, postLike, postScore, postFavorite, postFollower, postCategory }
