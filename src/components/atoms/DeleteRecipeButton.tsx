import { useNavigate } from 'react-router-dom';
import { deleteRecipeReturn } from '../../client';
import trash from '../../images/bin.png';
import './DeleteRecipeButton.css';


interface props {
    inputID: string;
}


export default function DeleteRecipeButton ({inputID}:props) {
    const userID = Number(localStorage.getItem('user'));
    //const isAdmin = await isUserAdminReturn(userID);
    const isAdmin = localStorage.getItem('isAdmin');
    console.log('dette er isAdmin: ' + isAdmin);
    const button = document.getElementById('deleteRecipeButton');
    console.log(1);
    let navigate = useNavigate(); 
    
    /*
    if(isAdmin == 'false'){
        button!.style.display = 'none';
    }  */
    
    const handleClick = async() => {

        if(isAdmin == 'true'){
        }
        const inner = document.getElementById(inputID).innerHTML;
        const deleteResult = await deleteRecipeReturn(Number(inner));
        console.log('hei dette er innerhtml: ' + inner);
        if(deleteResult == 1){
            localStorage.setItem('user', '-1');
            let path = '/'; 
            navigate(path);
        }
    }

    return (
        <>{
        <div id={inputID}>
            <button id = 'deleteRecipeButton' onClick={handleClick}>
                heihei
            </button>
        </div>
        }</>
    )
}