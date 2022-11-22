import React from "react";
// images
import logoImg from '../assets/images/logo.svg';
import SocialButtons from "../components/SocialButtons";

const Footer = ({ children }) => {
    return (
        <div className="footer">
            <img className="logo" src={logoImg} alt="logo" />
            <div className="text">Sisu, Inc. © 2022 All rights reserved.</div>
            <SocialButtons 
                twitter='https://twitter.com/sisunetwork'
                discord='https://discord.gg/DT7xAKCQJD'
                github='https://github.com/sisu-network'
            />
        </div>
    )
}
export default React.memo(Footer);