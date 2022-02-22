import React from "react"
import "./tempStyles.css"

const Categories = () => {

    //The extra div in the HTML underneath is needed to center the list properly.
    //Source: https://css-tricks.com/centering-list-items-horizontally-slightly-trickier-than-you-might-think/
    return(
        <div>
            <div className="categories--table"> 
                <ul className="categories--list">
                    <li>Vegansk</li>
                    <li>Italiensk</li>
                    <li>Enkle retter</li>
                    <li className="categories--pop_dish">Populære retter</li>
                    <li>Glutenfritt</li>
                    <li>Frokost</li>
                </ul>
            </div>
        </div>
    )
}
export default Categories