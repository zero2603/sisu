import React from "react";
import PropTypes from 'prop-types';
// images
import questionIcon from '../assets/icons/question-mark.svg';
import mailIcon from '../assets/icons/mail.svg';
// style
import '../assets/styles/components/mail-card.scss';

const MailCard = () => (
    <div className="mail-card">
        <img src={questionIcon} alt='question' />
        <div className="title">Have different questions?</div>
        <div className="subtitle">Just ask us and we'll get back to you soon</div>
        <a className="mail-btn" href="mailto:contact@sisu.network">
            <img src={mailIcon} alt='mail' />
            <span>Shoot a Direct Mail</span>
        </a>
    </div>
)

MailCard.propTypes = {

}

export default React.memo(MailCard);