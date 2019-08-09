import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
    const renderDropdown = () => {
        const dropdownItems = props.menu.map((element, i) => {
            return (
                <p key={i} onClick={() => props.handleClick(element.id, element.name)}>
                    {element.name}
                </p>
            )
        })
        return dropdownItems;
    }

    return (
        <div className="dropdown-content">
            {renderDropdown()}
        </div>
    )
}

export default Dropdown;