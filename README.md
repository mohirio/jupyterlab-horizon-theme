# @mohirio/jupyterlab-horizon-theme

VSCode Horizon Theme port for JupyterLab

## Screenshot
<img src="https://user-images.githubusercontent.com/29782314/59114623-844e7980-8982-11e9-8270-1116333efa18.png" alt="drawing" width="900"/>

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @mohirio/jupyterlab-horizon-theme
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

## Credit

Thanks to [Horizon Theme for VSCode](https://horizontheme.com) for the great color scheme.

And thanks to [Jupyter Atom Dark Theme](https://github.com/BurglarBenson/Jupyter-Atom-Dark-Theme) for CSS elements styling.