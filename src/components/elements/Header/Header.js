import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Dropdown from '../Dropdown/Dropdown';
import { withRouter } from 'react-router';

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.displayToast = this.displayToast.bind(this);
    }

    displayToast() {
        const likedMovies = localStorage.getItem('LikedMovieState');
        if (!likedMovies) {
            alert(`You don't have liked movies yet!`)
            this.props.history.push("/");
        } else {
            this.props.history.push("/liked");
        }
    }

    render() {
        return (
            <div className="rmdb-header">
                <div className="rmdb-header-content">
                    <div className="rmdb-header-content-left">
                        <Link to="/" onClick={() => this.props.handleClick2()} className="left-menu">
                            <span>Popular</span>
                        </Link>
                        <div className="left-menu dropdown">
                            <div>Genre<span> </span> 
                                <i className="fa fa-caret-down"></i>
                                <Dropdown menu={this.props.genres} handleClick={this.props.handleClick} />
                            </div>
                        </div>
                        <div onClick={() => this.displayToast()} className="left-menu pointer">
                            <i className="fa fa-heart" style={{color: "#ff0600"}}></i>
                            <span> </span>
                            <span>Liked</span>                         
                        </div>
                    </div>
                    <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
                </div>
            </div>
        )
    }
}

const Header = withRouter(Head);

export default Header;