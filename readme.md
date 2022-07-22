# template react con typescript

### pasos para configurar webpack y react con typescript

- Crear la carpeta del proyecto
- Crear la carpeta src, public y build
- Iniciar proyecto `yarn init`
- Instalar react `yarn add react react-dom`
- Instalar typescript y typos para react `yarn add -D typescript @types/react @types/react-dom`
- Agregar tsconfig.json `tsc --init`

- Instalamos babel y sus complementos `yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`

- Agregamos .babelrc

- Instalamos webpack `yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin`

- Instalamos babel-loader `yarn add -D babel-loader`
- Agregamos los scripts para ejecutar
- Instalamos cargadores de css `yarn add -D css-loader style-loader`

- Creamos la configuracion de webpack `webpack.common.js webpack.prod.js webpack.dev.js webpack.config.js`

- Para fucional los archivos de configuracón instalamos `yarn add -D webpack-merge`

- Hot reloading `yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`

- Instalamos eslin `yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y`

- Instalamos prettier `yarn add -D prettier eslint-config-prettier`

- Para evitar codigo sucio de formateo a nuestro repositorio usamos las siguiente instalación ` yarn add -D husky lint-staged`

- Para copiar assets `yarn add -D copy-webpack-plugin`
- Para hacer un analisis del bundle `yarn add -D webpack-bundle-analyzer`

## pasos para obtener el template

- clona el repositorio
- ejcuta `yarn install`
