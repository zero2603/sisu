import React from "react";
import PropTypes from 'prop-types';
// style
import '../assets/styles/components/image-card.scss';

const ImageCard = ({ image, title, content, backgroundColor }) => (
    <div className="image-card" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt="image" />
        <div className="title">{title}</div>
        <div className="content">{content}</div>
    </div>
)

ImageCard.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
}

export default React.memo(ImageCard);