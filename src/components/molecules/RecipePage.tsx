import { textAlign } from '@mui/system';
import React from 'react';
import "./RecipePage.css"

function insertTitle(title: string) {
    document.getElementById('titleField').innerHTML = title;
}

function insertOwner(owner: string) {
    let string = "Created by: " + owner;
    document.getElementById('owner').innerHTML = string;
}

function insertPhoto(image: string) {
    let imageLink = 'http://127.0.0.1:8000' + image;
    let imageField = document.getElementById('imageField').innerHTML = "<img src=" + imageLink + " width=\"100px\" height=\"100px\">";
}

function insertCategoryAndTimeEstimate(category: string, timeEstimate: string) {
    let timeField = document.getElementById('timeField').innerHTML = timeEstimate;
    let categoryField = document.getElementById('categoryField').innerHTML = category;

}

function insertIngredients(ingredients: string) {
    let ingredientsArray = [];
    ingredientsArray = ingredients.split(",");
    let ingredientsField = document.getElementById('ingredientsField');
    while(ingredientsField.firstChild){
        ingredientsField.removeChild(ingredientsField.firstChild);
    }
    for (let i in ingredientsArray) {
        var p = document. createElement("p");
        var text = document. createTextNode(ingredientsArray[i]);
        p.appendChild(text);
        ingredientsField.appendChild(p);
    }
}

function insertPreparation(preparation: string) {
    let preparationField = document.getElementById('preparationField').innerHTML = preparation;
}

function recipePageVisibility() {
    document.getElementById('visibilityDiv').style.display='block';
}

function recipePageHide() {
    document.getElementById('visibilityDiv').style.display='none';
}


export default function RecipePage(){

    return(
        <div id="visibilityDiv" className="wrapper">
            <button id="exitButton" onClick={recipePageHide}>x</button>
            <div id="imageField" className="photo">

            </div>
            <h1 id="titleField"></h1>
            <h6 id="owner"></h6>
            <div className='three'>
                <div className="gridItem">
                    <h3 className="headerField">Time estimate:</h3>
                    <div id="timeField" className="division"></div>
                </div>
                <div className="gridItem">
                    <h3 className="headerField">Ingredients:</h3>
                    <div id="ingredientsField" className="division"></div>
                </div>
                <div className="gridItem">
                    <h3 className="headerField">Category:</h3>
                    <div id="categoryField" className="division"></div>
                </div>

                <div className="gridItem">
                    <h3 className="headerField">Preparation:</h3>
                    <div id="preparationField" className="division"></div>
                </div>
            </div>
        </div>

    );
}
export {insertOwner, recipePageVisibility, insertTitle, insertPhoto, insertCategoryAndTimeEstimate, insertPreparation, insertIngredients}
/*
                <ol>
                    {ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
*/
                /*<h3 id="timeAndCategoryField" style={{paddingTop:'40px'}}></h3>*/