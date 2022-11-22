import React from "react";
import PropTypes from 'prop-types';
// images
import '../assets/icons/check-bullet.svg';
// style
import '../assets/styles/components/list-item.scss';

const ListItem = ({ text }) => (
    <div className="list-item">
        <span>{text}</span>
    </div>
)

ListItem.propTypes = {
    text: PropTypes.string.isRequired
}


export default React.memo(ListItem);