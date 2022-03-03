import React from 'react';
import './NewRecipeForm.css';
import FormButton from '../atoms/FormButton';
import FormTextField from '../atoms/FormTextField';
import FormTextArea from '../atoms/FormTextArea';
import MinusSymbol from '../atoms/MinusSymbol';
import '../atoms/FormTextArea.css';
import PlussSymbol from '../atoms/PlussSymbol';
import { Button } from 'react-bootstrap';
import { postRecipe } from '../../client';

function NewIngredientField() {
    const minus = document.getElementById('minusVisibility');
    minus!.style.display= "block";
    const div = document.createElement('div');
    div.className = 'formTextFieldContainer';
    const input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Ingredient and amount");
    input.className = 'formTextField';
    div.appendChild(input);
    var newList = document.getElementById('list')?.appendChild(div);
    return newList;
};

function RemoveIngredientField() {
    var list = document.getElementById('list');
    var newList = list?.removeChild(list.lastChild!);
    if (list?.childElementCount! < 2) {
        const minus = document.getElementById('minusVisibility');
        minus!.style.display= "none";
    }
};

function IngredientField() {
    var list = document.getElementById('list');
    if (list?.childElementCount! < 2) {
        const minus = document.getElementById('minusVisibility');
        minus!.style.display= "none";
    }
    return <FormTextField id={'ingredientsAndAmount'} placeholder={"Ingredient and amount"}></FormTextField>;
};

function getTitle() {
    let firstName = (document.getElementById("title") as HTMLInputElement).value;
    return firstName;
}

function getTimeEstimate() {
    let timeEstimate = (document.getElementById("timeEstimate") as HTMLInputElement).value;
    return timeEstimate;
}

function getImage() {
    let image = (document.getElementById("file") as HTMLInputElement).value;
    return image;
}

function getIngredients() {
    const nodeList = document.getElementById("list")?.childNodes;
    let numb;
    let ingredients = [];
    if ( nodeList) {
        numb = nodeList.length;
        if (numb) {
            for (let child = 0; child < numb; child ++)  {
                let ingredient = (nodeList[child] as HTMLInputElement).value;
                ingredients.push(ingredient);
            }
        }
    }
    return ingredients;
}

function getPreparation() {
    let preparation = (document.getElementById("preparations") as HTMLInputElement).value;
    return preparation;
}

const NewRecipeForm = () => {

    return (
        <div className="newRecipeContainer">
            <h2>Fill in the fields for your new recipe!</h2>
            <FormTextField id={"title"} placeholder={"Title"}></FormTextField>
            <FormTextField id={"timeEstimate"} placeholder={"Time estimate"}></FormTextField>
            <div className="fileContainer">
                <label className="fileLabel" htmlFor="file">Choose an image
                    <input className="fileInput" id="file" type="file" border-style="none" />
                </label> <br />
            </div>
            <h3 className="ingredientsLabel">Ingredients:</h3>
            <div className="ingredientOuterContainer">
                <div className="ingredientContainer" id="count">
                    <div id="list" className="ingredientList">{IngredientField()}</div>
                </div>
                <div className="pluss">
                    <PlussSymbol onClickFunction={NewIngredientField}></PlussSymbol>
                </div>
                <div id="minusVisibility" className="minus">
                    <MinusSymbol onClickFunction={RemoveIngredientField}></MinusSymbol>
                </div>
            </div>
            <FormTextArea id={"preparations"} placeholder={"Preparations"}></FormTextArea>
            <div className="buttonContainer">
                <Button id={'submitRecipe'} onClick={() => postRecipe(0,getTitle(),getImage(), getTimeEstimate(),getPreparation(),getIngredients()[0], [0,1]) } ></Button>
            <div/>
        </div>
        </div>
    )
};

export default NewRecipeForm;
