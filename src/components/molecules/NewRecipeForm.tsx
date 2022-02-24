import React from 'react';
import './NewRecipeForm.css';
import FormButton from '../atoms/FormButton';
import FormTextField from '../atoms/FormTextField';
import FormTextArea from '../atoms/FormTextArea';
import MinusSymbol from '../atoms/MinusSymbol';
import '../atoms/FormTextArea.css';
import PlussSymbol from '../atoms/PlussSymbol';

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
    return <FormTextField placeholder={"Ingredient and amount"}></FormTextField>;
};

const NewRecipeForm = () => {

    return (
        <div className="newRecipeContainer">
            <h2>Fill in the fields for your new recipe!</h2>
            <FormTextField placeholder={"Title"}></FormTextField>
            <FormTextField placeholder={"Time estimate"}></FormTextField>
            <div className="fileContainer">
                <label className="fileLabel" htmlFor="file">Choose an image
                    <input className="fileInput" id="file" type="file" border-style="none" />
                </label> <br />
            </div>
            <h3 className="ingredientsLabel">Ingredients:</h3>
            <div className="ingredientOuterContainer">
                <div className="ingredientContainer">
                    <div id="list" className="ingredientList">{IngredientField()}</div>
                </div>
                <div className="pluss">
                    <PlussSymbol onClickFunction={NewIngredientField}></PlussSymbol>
                </div>
                <div id="minusVisibility" className="minus">
                    <MinusSymbol onClickFunction={RemoveIngredientField}></MinusSymbol>
                </div>
            </div>
            <FormTextArea placeholder={"Preparations"}></FormTextArea>
            <div className="buttonContainer">
                <FormButton label={"Submit recipe"}></FormButton>
            </div>
        </div>
    )
};

export default NewRecipeForm;
