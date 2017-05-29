import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="container">
                &copy; { currentYear }
            </div>
        </footer>
    );
};

export default Footer;
