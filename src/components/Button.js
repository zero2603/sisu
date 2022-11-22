import React from "react";
import PropTypes from 'prop-types';
// style
import '../assets/styles/components/button.scss';

const Button = ({ children, size, type, ...restProps }) => (
    <button className={`btn btn--${type} btn--${size}`} {...restProps}>
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.any.isRequired,
    size: PropTypes.oneOf(['medium', 'large']),
    type: PropTypes.oneOf(['primary', 'outline']),
}

Button.defaultProps = {
    size: 'medium',
    type: 'primary'
}

export default React.memo(Button);