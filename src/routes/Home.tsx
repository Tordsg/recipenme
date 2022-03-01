import Discover from "../tempComponents/Discover"
import MainBody from "../tempComponents/MainBody"
import NewMainBody from "../tempComponents/NewMainBody"

export default function Home() {
    return (
        <div className='parent'>
            <div className='topBar'>
            <Discover />
            <MainBody />
            </div>
            <div className='feed'>
            </div>
        </div>
    );
}

