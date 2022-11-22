import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SocialButtons from "../components/SocialButtons";
// images
import hamburgerIcon from '../assets/icons/hamburger.svg';
// style
import '../assets/styles/components/hamburger-menu.scss';

const HamburgerMenu = ({ items, ...restProps }) => {
    const [opened, setOpened] = useState(false);
    const [activeKey, setActiveKey] = useState('');
    const [isShowDropdown, setIsShowDropdown] = useState(false);

    useEffect(() => {
        if (items.length) setActiveKey(items[0].key);
    }, [items]);

    const onToggle = () => {
        setOpened(!opened);
    }

    const onClickItem = (item) => {
        setActiveKey(item.key);
        if (item.type === 'link') window.location.href = item.url;
        else if (item.type === 'dropdown') setIsShowDropdown(!isShowDropdown);
    }

    return (
        <div className="hamburger-menu">
            <div className="hamburger-menu-btn" onClick={onToggle}>
                <img src={hamburgerIcon} alt="hamburger" />
            </div>
            {
                opened ? (
                    <div className="hamburger-menu-content">
                        <div className="container">
                            {
                                items.map(item => {
                                    const isActived = activeKey === item.key;

                                    return (
                                        <div
                                            key={item.key}
                                            className={`nav-item ${isActived ? 'nav-item--active' : ''}`}
                                            onClick={() => onClickItem(item)}
                                        >
                                            <span className="nav-item-text">{item.title}</span>
                                            {
                                                item.type === 'dropdown' ? (
                                                    <span className="nav-item-icon"></span>
                                                ) : null
                                            }
                                            {
                                                item.type === 'dropdown' && isActived && isShowDropdown ? item.dropdown : null
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <SocialButtons
                            twitter='https://twitter.com/sisunetwork'
                            discord='https://discord.gg/DT7xAKCQJD'
                        />
                    </div>
                ) : null
            }
        </div>
    )
}

HamburgerMenu.propTypes = {
    items: PropTypes.array.isRequired
}

export default React.memo(HamburgerMenu);