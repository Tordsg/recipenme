import FrontPageTabs from "../components/molecules/FrontPageTabs";
import Discover from "../tempComponents/Discover"
import MainBody from "../tempComponents/MainBody"

export default function Home() {
    return (
        <div className='parent'>
            <div className='topBar'>
            <FrontPageTabs></FrontPageTabs>
            <MainBody />
            </div>
            <div className='feed'>
            </div>
        </div>
    );
}