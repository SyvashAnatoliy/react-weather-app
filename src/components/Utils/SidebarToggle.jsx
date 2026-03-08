import React from "react";
import "./SidebarToggle.css";

function SidebarToggle( { isOpen, setIsOpen } ) {

    return (
        <button className="sidebar-checkbox">
            <label className="sidebar-burgerLabel">
                <input type="checkbox" className="sidebar-burgerCheckbox" checked={isOpen} onChange={() => {
                    setIsOpen(!isOpen);
                    document.body.setAttribute('data-sidebar', !isOpen ? 'open' : 'closed');
                }}/>
                <span className="burger-line1"></span>
                <span className="burger-line2"></span>
                <span className="burger-line3"></span>
            </label>
        </button>
    );
}

export default SidebarToggle;