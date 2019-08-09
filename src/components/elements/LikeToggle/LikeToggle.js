import React from 'react';
import './LikeToggle.css';
import FontAwesome from 'react-fontawesome';

class LikeToggle extends React.Component {
    render() {
        return(
            <FontAwesome 
                className="fa-heart" 
                name="heart" size="3x" 
                onClick={() => this.props.handleClick()} 
                style={{ color: this.props.toggleColor }}
            />
        )
    }
}

export default LikeToggle;