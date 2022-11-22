import React from "react";
import PropTypes from 'prop-types';
// style
import '../assets/styles/components/text-with-image.scss';
import ListItem from "./ListItem";

const TextWithImage = ({ type, image, title, content, items }) => (
    <div className={`text-with-image ${type}`}>
        <div className="text">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            {
                items.length ? (
                    <div className="list-items">
                        {
                            items.map((item, idx) => (
                                <ListItem key={idx} text={item} />
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
        <div className="image">
            <img src={image} alt="image" />
        </div>
    </div>
)

TextWithImage.propTypes = {
    type: PropTypes.oneOf(['left', 'right']),
    image: PropTypes.any.isRequired,
    title: PropTypes.any.isRequired,
    content: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
}

TextWithImage.defaultProps = {
    type: 'left',
    items: []
}

export default React.memo(TextWithImage);