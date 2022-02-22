import Discover from "../tempComponents/Discover"
import Categories from "../tempComponents/Categories"
import MainBody from "../tempComponents/MainBody"

export default function Home() {
    return (
        <div className='parent'>
            <div className='topBar'>
            <Discover />
            <Categories />
            <MainBody />
            </div>
            <div className='feed'>
            </div>
        </div>
    );
}

