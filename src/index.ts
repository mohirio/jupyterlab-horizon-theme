import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { ITranslator } from '@jupyterlab/translation';

/**
 * Initialization data for the jupyterlab-horizon-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@mohirio/jupyterlab-horizon-theme:plugin',
  autoStart: true,
  requires: [IThemeManager, ITranslator],
  activate: (
    app: JupyterFrontEnd,
    manager: IThemeManager,
    translator: ITranslator
  ) => {
    console.log('JupyterLab extension jupyterlab-horizon-theme is activated!');
    const style = '@mohirio/jupyterlab-horizon-theme/index.css';
    const trans = translator.load('jupyterlab');


    manager.register({
      name: 'JupyterLab Horizon',
      displayName: trans.__('JupyterLab Horizon'),
      themeScrollbars: true,
      isLight: false,
      load: function () {
        const meta: HTMLMetaElement = document.createElement('meta');
        Object.assign(meta, {
          name: 'theme-color',
          id: 'theme-color-horizon',
          content: '#1C1E26'
        });
        meta.name = 'theme-color';
        meta.id = 'theme-color-horizon';
        meta.content = '#1C1E26';
        document.getElementsByTagName('head')[0].appendChild(meta);
        return manager.loadCSS(style);
      },
      unload: function () {
        const input = document.getElementById(
          'theme-color-horizon'
        ) as HTMLMetaElement;
        const meta: HTMLElement = input;
        if (meta.parentNode !== null) {
          meta.parentNode.removeChild(meta);
        }
        return Promise.resolve(undefined);
      }
    });
  }
};

export default plugin;
