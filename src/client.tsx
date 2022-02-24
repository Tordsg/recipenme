const axios = require('axios').default;

interface userInfo{
    emailToPost: string,
    passwordToPost: string
}

function postUser(emailToPost:string, passwordToPost:string) {
    console.log("hei");
    console.log(emailToPost);
    console.log(passwordToPost);

    axios.post('/user', {
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

/*interface recipeInfo{
  ownerToPost: #USER_TYPE#,
  titleToPost: string, 
  imageToPost: File,
  timeEstimateToPost: string,
  ingredientsToPost: Array<string>,
  preparationToPost: string,
}

function postRecipe({ownerToPost, titleToPost, imageToPost, timeEstimateToPost, ingredientsToPost, preparationToPost}:recipeInfo) {

  axios.post('/user', {
      owner: ownerToPost,
      title: titleToPost,
      image: imageToPost, 
      timeEstimate: timeEstimateToPost,
      ingredients: ingredientsToPost,
      preparations: preparationToPost
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}

interface commentInfo{
  ownerToPost: #USER_TYPE#,
  commentToPost: string, 
  recipeToPost: #RECIPE_TYPE#
}

function postComment({ownerToPost, commentToPost, recipeToPost}:commentInfo) {

  axios.post('/user', {
      owner: ownerToPost,
      comment: commentToPost,
      recipe: recipeToPost, 
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}

interface likeInfo{
  ownerToPost: #USER_TYPE#,
  recipeToPost: #RECIPE_TYPE#
}

function postLike({ownerToPost, recipeToPost}:likeInfo) {

  axios.post('/user', {
      owner: ownerToPost,
      recipe: recipeToPost, 
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}

interface scoreInfo{
  ownerToPost: #USER_TYPE#,
  recipeToPost: #RECIPE_TYPE#
}

function postScore({ownerToPost, recipeToPost}:scoreInfo) {

  axios.post('/user', {
      owner: ownerToPost,
      recipe: recipeToPost, 
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}

interface favoriteInfo{
  ownerToPost: #USER_TYPE#,
  recipeToPost: #RECIPE_TYPE#
}

function postFavorite({ownerToPost, recipeToPost}:favoriteInfo) {

  axios.post('/user', {
      owner: ownerToPost,
      recipe: recipeToPost, 
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}

interface followerInfo{
  followerToPost: #USER_TYPE#,
  followedToPost: #USER_TYPE#
}

function postFollower({followerToPost, followedToPost}:followerInfo) {

  axios.post('/user', {
      follower: followerToPost,
      followed: followedToPost, 
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}

interface categoryBelongingInfo{
  recipeToPost: #RECIPE_TYPE#,
  categoryToPost: #CATEGORY_TYPE#
}

function postCategoryBelonging({recipeToPost, categoryToPost}:categoryBelongingInfo) {
  axios.post('/user', {
      recipe: recipeToPost,
      category: categoryToPost, 
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {

      console.log(error);
    });
}*/

/*export { postUser, postRecipe, postComment, postLike, postScore, postFavorite, postFollower, postCategoryBelonging }*/
export default postUser;