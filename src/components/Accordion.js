import React, { useState } from "react";
import PropTypes from 'prop-types';
// images
import chevronRightIcon from '../assets/icons/chevron-right.svg';
// style
import '../assets/styles/components/accordion.scss';

const AccordionItem = ({ item, isActived, onClick }) => {
    return (
        <div className={`accordion-item ${isActived ? 'accordion-item--actived' : ''}`} onClick={onClick}>
            <div className="question">
                <div className="text">{item.question}</div>
                {
                    !isActived ? <img className="chevron" src={chevronRightIcon} alt="chevron" /> : null
                }
            </div>
            {
                isActived ? (
                    <div className="answer">
                        {item.answer}
                    </div>
                ) : null
            }

        </div>
    )
}

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onClickItem = (idx) => {
        setActiveIndex(idx);
    }

    return (
        <div className="accordion">
            {
                items.map((item, idx) => (
                    <AccordionItem
                        item={item}
                        isActived={activeIndex === idx}
                        key={idx}
                        onClick={() => onClickItem(idx)}
                    />
                ))
            }
        </div>
    )
}

Accordion.propTypes = {
    items: PropTypes.array.isRequired
}

Accordion.defaultProps = {
    items: []
}

export default React.memo(Accordion);