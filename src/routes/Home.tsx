import Discover from "../tempComponents/Discover"
import MainBody from "../tempComponents/MainBody"

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

