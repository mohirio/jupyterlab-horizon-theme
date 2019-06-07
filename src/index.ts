import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for @mohirio/jupyterlab-horizon-theme
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@mohirio/jupyterlab-horizon-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'jupyterlab-horizon-theme',
      isLight: true,
      load: function() {
        return manager.loadCSS('@mohirio/jupyterlab-horizon-theme/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
