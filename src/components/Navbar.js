import React from 'react';

import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        MathMagicians
      </div>
      <ul className={styles.navItems}>
        {links.map((link) => (
          <Link key={link.id} to={link.path} className={styles.links}>
            <li key={link.id} className={styles.navItem}>{link.text}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
