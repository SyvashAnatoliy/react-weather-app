import React from "react";
import "./SidebarToggle.css";

function SidebarToggle({ isOpen, setIsOpen }) {
    const handleToggle = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        document.body.setAttribute('data-sidebar', newIsOpen ? 'open' : 'closed');
    }

    return (
        <button
            className={`sidebar-toggle ${isOpen ? "sidebar-toggle--open" : ""}`} onClick={handleToggle} aria-label="Toggle sidebar">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
        </button>
    );
}

export default SidebarToggle;