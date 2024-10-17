// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import Navbar from './navbar';
import Unidades from './unidades';
import UnitPage from './unitpage';
import { ISharePointProps } from './ISharePointProps';  // Create an interface for props

const SharePoint: React.FC<ISharePointProps> = ({
  description,
  isDarkTheme,
  environmentMessage,
  hasTeamsContext,
  userDisplayName}) => {
  return (
    <FluentProvider theme={webLightTheme}>
      <div>
        {/* You can display the environment and user information here */}
        <h1>Hello, {userDisplayName}</h1>
        <p>{environmentMessage}</p>
        <p>Description: {description}</p>
        <p>Dark theme: {isDarkTheme ? 'Yes' : 'No'}</p>
        <p>Teams context: {hasTeamsContext ? 'Yes' : 'No'}</p>

        {/* Navigation and routing */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/unidades/:unitName" element={<UnitPage />} />
            <Route path="/unidades" element={<Unidades />} />
            {/* Future routes for "Fornecedores" and "Aplicações" */}
            <Route path="/" element={<Unidades />} />
          </Routes>
        </Router>
      </div>
    </FluentProvider>
  );
};

export default SharePoint;
