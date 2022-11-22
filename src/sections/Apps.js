import React from "react";
// images
import appsImg from '../assets/images/apps.svg';

const Apps = () => (
    <div className="apps">
        <div className="container">
            <div className="apps-wrapper">
                <div className="title">Apps that Can<br />Interact With<br />SiSu</div>
                <div className="image">
                    <img src={appsImg} alt="apps" />
                </div>
            </div>
        </div>
        <div className="apps-background"></div>
    </div>
)

export default React.memo(Apps);