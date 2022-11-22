import React from "react";

const MainContent = ({ children }) => {
    return (
        <div className="main-content">
            {children}
        </div>
    )
}
export default React.memo(MainContent);