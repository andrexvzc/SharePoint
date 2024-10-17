// components/Unidades.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Card, CardHeader } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
  card: {
    marginBottom: '10px',
  },
});

const units = [
  { name: 'Marau', description: 'Descrição da unidade de Marau.' },
  { name: 'UnidadeB', description: 'Descrição da unidade B.' },
  // Add more units as needed
];

const Unidades: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h2>Unidades</h2>
      {units.map((unit) => (
        <Card key={unit.name} className={styles.card}>
          <CardHeader
            header={
              <Link to={`/unidades/${unit.name.toLowerCase()}`}>
                <h3>{unit.name}</h3>
              </Link>
            }
          />
          <p>{unit.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Unidades;
