import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
// style
import '../assets/styles/components/navigator.scss';

const Navigator = ({ items }) => {
    const [activeKey, setActiveKey] = useState('');
    const [isShowDropdown, setIsShowDropdown] = useState(false);

    const navRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        if (items.length) setActiveKey(items[0].key);
    }, [items]);

    const onClickItem = (item) => {
        setActiveKey(item.key);
        if (item.type === 'link') window.location.href = item.url;
        else if (item.type === 'dropdown') setIsShowDropdown(true);
    }

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsShowDropdown(false);
        }
    }

    return (
        <div className="navs" ref={navRef}>
            {
                items.map(item => {
                    const isActived = activeKey === item.key;

                    return (
                        <div
                            key={item.key}
                            className={`nav-item ${isActived ? 'nav-item--active' : ''}`}
                            onClick={() => onClickItem(item)}
                            onMouseLeave={handleClickOutside}
                        >
                            <span>{item.title}</span>
                            {
                                item.type === 'dropdown' && isActived && isShowDropdown ? item.dropdown : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

Navigator.propTypes = {
    // items: PropTypes.shape({
    //     key: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     type: PropTypes.oneOf(['link', 'dropdown']).isRequired,
    //     dropdown: PropTypes.elementType,
    //     url: PropTypes.string
    // })
    items: PropTypes.array.isRequired
}

Navigator.defaultProps = {
    type: 'link'
}

export default React.memo(Navigator);