import React, { useState } from "react";
import PropTypes from 'prop-types';
// icons
import ChevronRightIcon from '../assets/icons/chevron-right.svg';

const ExpandableItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onToggle = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="expandable-item">
            <div className="expandable-item--row" onClick={onToggle}>
                <div className="expandable-item--title">{item.title}</div>
                <div className="expandable-item--icon">
                    {ChevronRightIcon}
                </div>
            </div>
            {
                isExpanded ? (
                    <div className="expandable-item--content">
                        {item.content}
                    </div>
                ) : null
            }
        </div>
    )
}

const ExpandableList = ({ items }) => (
    <div>
        {
            items.map((item, idx) => (
                <ExpandableItem item={item} key={idx} />
            ))
        }
    </div>
)

ExpandableList.propTypes = {
    items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })
}

ExpandableList.defaultProps = {
    items: []
}

export default React.memo(ExpandableList);