export function FeedEntry(props: FeedEntry.props){
    return(
        <div key={props.name}>
            <img className='picture' src={props.picture}/>
            <text className='name'>{props.name}</text>
            <div className='tags'>
                {props.tags.map((tag) => {
                    return(
                        <div key={tag} className='outerTag'>
                            <text className='tag'>
                                {tag}
                            </text>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export namespace FeedEntry{
    export interface props{
        name: string;
        picture: string;
        tags: string[];
    }
}