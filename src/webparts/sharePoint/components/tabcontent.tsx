// components/TabContent.tsx
import React, { useState, useEffect } from 'react';
import { Spinner } from '@fluentui/react-components';
import { fetchTabData } from './api';

interface TabContentProps {
  unitName: string;
  tabId: string;
}

const TabContent: React.FC<TabContentProps> = ({ unitName, tabId }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchTabData(unitName, tabId).then((data) => {
      setContent(data);
      setLoading(false);
    });
  }, [unitName, tabId]);

  if (loading) {
    return <Spinner label="Carregando conteúdo..." />;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default TabContent;
