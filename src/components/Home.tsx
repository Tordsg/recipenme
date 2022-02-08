import React, { useEffect, useState } from "react";
import { FeedEntry } from "./FeedEntry";

const mockData = [
    {
        name:'Pizza',
        picture: '',
        tags: [
            'vegan', 
            'glutenfree'
        ]
    },
    {
        name:'Taco',
        picture: '',
        tags: [
            'vegan'
        ]
    },
    {
        name:'Spagetti',
        picture: '',
        tags: [
            'vegan', 
            'glutenfree'
        ]
    },
    {
        name:'Steak',
        picture: '',
        tags: ['test']
    }
];

export function Home() {
    const [elements, setElements] = useState(new Array<JSX.Element>());
    const initialize = () => {
        // Fetch data of recipes
        setElements(mockData.map(elem => FeedEntry(elem)));
    }
    useEffect(initialize, []);

    return (
        <div className='parent'>
            <div className='topBar'>

            </div>
            <div className='feed'>
                {elements}
            </div>
        </div>
    );
}

