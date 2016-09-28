import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header col-md-8">
                    <span className="navbar-brand">GitHub Search</span>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="https://rc-chandan.github.io" target="_blank">More Apps</a></li>
                    <li><a href="https://github.com/rc-chandan" target="_blank">Developer's profile</a></li>
                    <li><a href="mailto:chandan316@outlook.com?Subject=Hello%20There" target="_top">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
