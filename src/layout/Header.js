import React from "react";
// components
import Navigator from "../components/Navigator";
import SocialButtons from "../components/SocialButtons";
import Button from "../components/Button";
// images
import logoImg from '../assets/images/logo.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import infoIcon from '../assets/icons/info.svg';
import layerIcon from '../assets/icons/layer.svg';
import barChartIcon from '../assets/icons/bar-chart.svg';
import badgeCheckIcon from '../assets/icons/badge-check.svg';
import HamburgerMenu from "../components/HamburgerMenu";

const TestnetDropdown = React.memo(() => (
    <div className="dropdown-menu">
        <div className="column">
            <div className="title">Sisu Testnet User Guide</div>
            <p className="subtitle">An in-depth walkthrough of how to set up Sisu on ur machine</p>
            <a className="dropdown-menu-item" href="https://docs.google.com/document/d/1SSFrsW1kXYciA92zwM0qyLc5fi-YerHgrCZ0c1ixttY/edit">
                <img src={infoIcon} alt="info" />
                <span>Reward Information</span>
            </a>
            <a className="dropdown-menu-item" href="https://docs.google.com/document/d/1_XszdG7O8A8rpAQzHzSTGaOQFtcOd9f8Bvs8SgNYfPs/edit">
                <img src={infoIcon} alt="info" />
                <span>Testnet dex User guide</span>
            </a>
        </div>
        <div className="column">
            <a className="dropdown-menu-item" href="https://sisu.network/testnet">
                <img src={infoIcon} alt="info" />
                <span>About the Testnet</span>
            </a>
            <a className="dropdown-menu-item" href="https://app.ko.exchange/">
                <img src={layerIcon} alt="info" />
                <span>Testnet Dex</span>
            </a>
            <a className="dropdown-menu-item" href="https://sisu.network/leader-board">
                <img src={barChartIcon} alt="info" />
                <span>Testnet Leaderboard</span>
            </a>
            <a className="dropdown-menu-item" href="https://sisu.network/register">
                <img src={badgeCheckIcon} alt="info" />
                <span>Submit your contribution</span>
            </a>
        </div>
    </div>
));

const TestnetDropdownMobile = React.memo(() => (
    <div className="dropdown-menu">
        <a className="dropdown-menu-item" href="https://docs.google.com/document/d/1SSFrsW1kXYciA92zwM0qyLc5fi-YerHgrCZ0c1ixttY/edit">
            <img src={infoIcon} alt="info" />
            <span>Reward Information</span>
        </a>
        <a className="dropdown-menu-item" href="https://docs.google.com/document/d/1_XszdG7O8A8rpAQzHzSTGaOQFtcOd9f8Bvs8SgNYfPs/edit">
            <img src={infoIcon} alt="info" />
            <span>Testnet dex User guide</span>
        </a>
        <a className="dropdown-menu-item" href="https://sisu.network/testnet">
            <img src={infoIcon} alt="info" />
            <span>About the Testnet</span>
        </a>
        <a className="dropdown-menu-item" href="https://app.ko.exchange/">
            <img src={layerIcon} alt="info" />
            <span>Testnet Dex</span>
        </a>
        <a className="dropdown-menu-item" href="https://sisu.network/leader-board">
            <img src={barChartIcon} alt="info" />
            <span>Testnet Leaderboard</span>
        </a>
        <a className="dropdown-menu-item" href="https://sisu.network/register">
            <img src={badgeCheckIcon} alt="info" />
            <span>Submit your contribution</span>
        </a>
    </div>
));

const Header = () => {
    const navItems = [
        {
            key: 'home',
            title: 'Home',
            url: 'https://sisu.network/',
            type: 'link'
        },
        {
            key: 'roadmap',
            title: 'Roadmap',
            url: 'https://sisu.network/road-map',
            type: 'link'
        },
        {
            key: 'testnet',
            title: 'Testnet',
            url: '#',
            type: 'dropdown',
            dropdown: window.innerWidth < 992 ? <TestnetDropdownMobile /> : <TestnetDropdown />
        },
        {
            key: 'blog',
            title: 'Blog',
            url: 'https://medium.com/@sisunetwork',
            type: 'link'
        }
    ];

    const onLogin = () => {
        window.location.href = 'https://sisu.network/login';
    }

    return (
        <div className="header">
            <div className="container">
                <HamburgerMenu
                    items={navItems}
                />
                <div className="logo-wrapper">
                    <img className="logo" src={logoImg} alt='Sisu' />
                </div>
                <Navigator
                    items={navItems}
                />
                <div className="button-group">
                    <SocialButtons
                        twitter='https://twitter.com/sisunetwork'
                        discord='https://discord.gg/DT7xAKCQJD'
                    />
                    <Button type='outline' size='medium' onClick={onLogin}>
                        <span>Login</span>
                        <img src={arrowRightIcon} />
                    </Button>
                </div>
            </div>
        </div>
    )

}
export default React.memo(Header);