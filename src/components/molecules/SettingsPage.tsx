import { useNavigate } from "react-router-dom";
import SettingsOption from "../atoms/SettingsOption";
import DeletePopup from "./DeletePopup";
import './SettingsPage.css';

export default function SettingsPage() {
    let navigate = useNavigate();

    const deleteOption = () => {
        /*let path = '/delete';
        navigate(path); */

    }

    /* Not working */
    const editOption = () => {
        let path = '/edit';
        navigate(path);
    }

    return (
    <div className='settingsWrapper'>
        <DeletePopup id='popup'/>
        <SettingsOption handleClick={editOption} text='Edit account' />
        <br />
        <SettingsOption handleClick={deleteOption} text='Delete account' />
    </div>
    );
}
