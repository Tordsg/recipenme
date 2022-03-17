import React from "react";
import appLogo from "../../images/recipenmeLogo.png";

export default function NavbarLogo() {
    return (
        <div className="navbarLogo--box">
            <img 
                className="navbarLogo"
                src={appLogo}
                alt="recipenme logo"
            />
        </div>
    )
}