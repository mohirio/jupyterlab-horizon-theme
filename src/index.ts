import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for @mohirio/jupyterlab-horizon-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@mohirio/jupyterlab-horizon-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    manager.register({
      name: 'JupyterLab Horizon',
      isLight: false,
      load: function() {
        let meta: HTMLMetaElement = document.createElement("meta");
        meta.name = "theme-color";
        meta.id = "theme-color-horizon"
        meta.content = "#1C1E26";
        document.getElementsByTagName("head")[0].appendChild(meta);
        return manager.loadCSS('@mohirio/jupyterlab-horizon-theme/index.css');
      },
      unload: function() {
        let meta: HTMLElement = document.getElementById("theme-color-horizon");
        meta.parentNode.removeChild(meta);
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
