// SharePointWebPart.ts
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import SharePoint from './components/SharePoint'; // Root component
import { ISharePointProps } from './components/ISharePointProps';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ISharePointWebPartProps {
  description: string;
}

export default class SharePointWebPart extends BaseClientSideWebPart<ISharePointWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISharePointProps> = React.createElement(SharePoint, {
      description: this.properties.description,
      isDarkTheme: this.context.sdks.microsoftTeams ? this.context.sdks.microsoftTeams.context.theme === "dark" : false,
      environmentMessage: this.getEnvironmentMessage(),
      hasTeamsContext: !!this.context.sdks.microsoftTeams,
      userDisplayName: this.context.pageContext.user.displayName,
      context: this.context as WebPartContext
    });

    ReactDom.render(element, this.domElement);
  }

  protected getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) {
      return this.context.isServedFromLocalhost
        ? "You are running in Teams (localhost)"
        : "You are running in Teams";
    }

    return this.context.isServedFromLocalhost
      ? "You are running in SharePoint (localhost)"
      : "You are running in SharePoint";
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
