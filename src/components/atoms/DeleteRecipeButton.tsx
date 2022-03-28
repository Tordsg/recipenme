import trash from '../images/bin.png';

interface props {
    handleClick: () => void;
}


export default function DeleteRecipeButton ({handleClick}:props) {
    return (
        <button className='deleteRecipeButton' onClick={handleClick}>
            {trash}
        </button>
    )
}