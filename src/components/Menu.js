import React from 'react';
import '../styles/menu.css';
const Menu = ({ sections }) => {
    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <ul className='menu'>
                <li onClick={() => scrollToSection(sections.mainRef)}>Home</li>
                <li onClick={() => scrollToSection(sections.aboutRef)}>About</li>
                <li onClick={() => scrollToSection(sections.projectsRef)}>Projects</li>
            </ul>
        </nav>
    );
};

export default Menu;
