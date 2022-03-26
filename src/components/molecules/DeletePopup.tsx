import AccountButton from "../atoms/AccountButton";
import AccountTextField from "../atoms/AccountTextField";
import './DeletePopup.css';

interface popupId {
    id: string;
}

export default function DeletePopup({id}:popupId) {
    const error = document.getElementById('errorDelete')!;
    const deleteUser = () => {
        let pwd = (document.getElementById('deletePassword') as HTMLInputElement).value;
        let pwdRepeat = (document.getElementById('deletePasswordRepeat') as HTMLInputElement).value;

        if(pwd != pwdRepeat){
            console.log('rip');
            error.innerHTML = 'Passwords do not match!';
            error.style.display = 'block';
        } else {
            console.log('jeg skal til backend')
        }
    }

    return (
        //1. Hent info om bruker så du vet username
        //2. Bruk login-funksjonen for å autentisere
        <div id={id} className='deletePopup'>
            <h4>Please enter your password to delete your account.</h4>
            <form>
                <AccountTextField type='text' id='deletePassword' placeholder='Password' />
                <AccountTextField type='text' id='deletePasswordRepeat' placeholder='Repeat password' />
            </form>
            <p id='errorDelete' className='deleteError'></p>
            <AccountButton handleClick={deleteUser} buttonText='Delete my account'/>
        </div>
    );
}
