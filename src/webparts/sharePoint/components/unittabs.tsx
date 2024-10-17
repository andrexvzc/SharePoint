// components/UnitTabs.tsx
import React, { useState, useEffect } from 'react';
import { TabList, Tab, makeStyles } from '@fluentui/react-components';
import TabContent from './tabcontent';
import { fetchUserPermissions } from './api';

const useStyles = makeStyles({
  tabContent: {
    marginTop: '20px',
  },
});

interface UnitTabsProps {
  unitName: string;
}

interface TabInfo {
  id: string;
  label: string;
}

const allTabs: TabInfo[] = [
  { id: 'pagina-inicial', label: 'Página Inicial' },
  { id: 'fornecedores', label: 'Fornecedores' },
  { id: 'softwares', label: 'Softwares' },
  { id: 'servidores', label: 'Servidores' },
  { id: 'termos-de-suporte', label: 'Termos de Suporte' },
  { id: 'fluxo-de-atendimento', label: 'Fluxo de Atendimento' },
  { id: 'documentacao', label: 'Documentação' },
];

const UnitTabs: React.FC<UnitTabsProps> = ({ unitName }) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState<string>('pagina-inicial');
  const [accessibleTabs, setAccessibleTabs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call to fetch user permissions for tabs
    setLoading(true);
    fetchUserPermissions(unitName).then((permissions) => {
      setAccessibleTabs(permissions);
      setLoading(false);
    });
  }, [unitName]);

  if (loading) {
    return <p>Carregando permissões...</p>;
  }

  // Filter tabs based on permissions
  const tabsToDisplay = allTabs.filter((tab) => accessibleTabs.includes(tab.id));

  // If the selected tab is no longer accessible, switch to the first available tab
  useEffect(() => {
    if (!accessibleTabs.includes(selectedTab)) {
      setSelectedTab(tabsToDisplay[0]?.id || '');
    }
  }, [accessibleTabs, selectedTab, tabsToDisplay]);

  return (
    <>
      <TabList
        selectedValue={selectedTab}
        onTabSelect={(_, data) => setSelectedTab(data.value as string)}
      >
        {allTabs.map((tab) => {
          const isDisabled = !accessibleTabs.includes(tab.id);
          return (
            <Tab
              key={tab.id}
              value={tab.id}
              disabled={isDisabled}
              style={{ display: isDisabled ? 'none' : undefined }}
            >
              {tab.label}
            </Tab>
          );
        })}
      </TabList>
      <div className={styles.tabContent}>
        {selectedTab ? <TabContent unitName={unitName} tabId={selectedTab} /> : null}
      </div>
    </>
  );
};

export default UnitTabs;
