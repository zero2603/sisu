import React from "react";
import PropTypes from 'prop-types';
// icons
import twitterIcon from '../assets/icons/twitter.svg';
import discordIcon from '../assets/icons/discord.svg';
import githubIcon from '../assets/icons/github.svg';
// styles
import '../assets/styles/components/social.scss'; 

const SocialButtons = ({ twitter, discord, github }) => (
    <div className="social-buttons">
        {
            twitter ? (
                <a className="social-button" href={twitter} target="_blank" rel="noreferrer">
                    <img className="social-button--icon" src={twitterIcon} />
                </a>
            ) : null
        }
        {
            discord ? (
                <a className="social-button" href={discord} target="_blank" rel="noreferrer">
                    <img className="social-button--icon" src={discordIcon} />
                </a>
            ) : null
        }
        {
            github ? (
                <a className="social-button" href={github} target="_blank" rel="noreferrer">
                    <img className="social-button--icon" src={githubIcon} />
                </a>
            ) : null
        }
    </div>
)

SocialButtons.propTypes = {
    twitter: PropTypes.string,
    discord: PropTypes.string,
    github: PropTypes.string
}

SocialButtons.defaultProps = {
    twitter: '',
    discord: '',
    github: ''
}

export default React.memo(SocialButtons);