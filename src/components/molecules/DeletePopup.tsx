import AccountButton from "../atoms/AccountButton";
import AccountTextField from "../atoms/AccountTextField";
import './DeletePopup.css';

interface popupId {
    id: string;
}

function getDeletePassord() {
    let pwd = (document.getElementById('deletePassword') as HTMLInputElement).value;
    return pwd;
}

function getDeletePasswordRepeat() {
    let pwdRepeat = (document.getElementById('deletePasswordRepeat') as HTMLInputElement).value;
    return pwdRepeat;
}

export default function DeletePage({id}:popupId) {
    const deleteUser = () => {
        let pwd = (document.getElementById('deletePassword') as HTMLInputElement).value;
        let pwdRepeat = (document.getElementById('deletePasswordRepeat') as HTMLInputElement).value;

        if(pwd != pwdRepeat){
            console.log('rip');
        } else {
            console.log('jeg skal til backend')
        }
    }

    return (
        <div id={id} className='deletePopup'>
            <h4>Please enter your password to delete your account.</h4>
            <form>
                <AccountTextField type='text' id='deletePassword' placeholder='Password' />
                <AccountTextField type='text' id='deletePasswordRepeat' placeholder='Repeat password' />
            </form>
            <AccountButton handleClick={deleteUser} buttonText='Delete my account'/>
        </div>
    );
}
