// components/UnitPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@fluentui/react-components';
import UnitTabs from './unittabs';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
});


const UnitPage: React.FC = () => {
  const styles = useStyles();
  const { unitName } = useParams<Record<string, string | undefined>>();

  return (
    <div className={styles.container}>
      <h2>Unidade de {unitName ? unitName.charAt(0).toUpperCase() + unitName.slice(1) : 'Desconhecida'}</h2>
      <UnitTabs unitName={unitName || 'defaultUnitName'} />
    </div>
  );
};

export default UnitPage;
