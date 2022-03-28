import { deleteRecipeReturn } from '../../client';
import trash from '../images/bin.png';


interface props {
    inputID: string;
}


export default function DeleteRecipeButton ({inputID}:props) {
    const userID = Number(localStorage.getItem('user'));
    //const isAdmin = await isUserAdminReturn(userID);
    const isAdmin = localStorage.getItem('isAdmin');
    const button = document.getElementById('deleteRecipeButton');
    const inner = document.getElementById(inputID).innerHTML;
    console.log('hei dette er innerhtml: ' + inner);
    
    if(isAdmin == 'false'){
        button!.style.display = 'none';
    }
    
    const handleClick = async() => {
        if(isAdmin == 'true'){
            const deleteResult = deleteRecipeReturn(Number(inner));
        }
    }

    return (
        <>{
        <div id={inputID}>
            <button id = 'deleteRecipeButton' onClick={handleClick}>
                {trash}
            </button>
        </div>
        }</>
    )
}