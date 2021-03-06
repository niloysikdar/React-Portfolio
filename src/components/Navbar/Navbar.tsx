import { useState } from 'react';

import { Link } from 'react-router-dom';

import { LinksData } from './LinksData';
import styles from './navbar.module.scss';

import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <h2 className={styles.logo}>Portfolio</h2>
        <div className={styles.desktopitems}>
          {LinksData.map((link) => (
            <Link to={link.linkTo} key={link.title} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.mobileview}>
          <div
            className={isMenuOpen ? `${styles.mobilemenu} ${styles.active}` : styles.mobilemenu}
            onClick={handleMobileMenuToggle}
          >
            <IoMenu size={40} color='#ffffff' />
          </div>

          <div
            className={!isMenuOpen ? `${styles.mobilemenu} ${styles.active}` : styles.mobilemenu}
            onClick={handleMobileMenuToggle}
          >
            <IoClose size={40} color='#ffffff' />
          </div>
        </div>
      </div>
      <div className={isMenuOpen ? `${styles.mobileMenuModal} ${styles.active}` : styles.mobileMenuModal}>
        {LinksData.map((link) => (
          <Link to={link.linkTo} key={link.title} className={styles.mobileLinks} onClick={handleMobileMenuToggle}>
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export { Navbar };
