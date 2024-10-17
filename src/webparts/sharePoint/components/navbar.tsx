// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles} from '@fluentui/react-components';

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    backgroundColor: '#0078d4',
    padding: '10px',
    color: '#fff',
    alignItems: 'center',
  },
  navItem: {
    marginRight: '20px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
  },
});

const Navbar: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.navbar}>
      <Link to="/unidades" className={styles.navItem}>
        Unidades
      </Link>
      <Link to="/fornecedores" className={styles.navItem}>
        Fornecedores
      </Link>
      <Link to="/aplicacoes" className={styles.navItem}>
        Aplicações
      </Link>
    </div>
  );
};

export default Navbar;
