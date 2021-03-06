(package versions as given in the course)

# npm init
`npm init`

`-y` : use defaults for everything

# Prettier
`npm install -D prettier`

`-D` : dev dependency

(VS Code extension: set `"prettier.requireConfig"` to `true`)

# ES Lint
`npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0`

# Parcel - bundler for JavaScript, alternative for Webpack
`npm install -D parcel@1.12.3`

# React
`npm install react@17.0.1 react-dom@17.0.1`

# Babel
`npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13`

# Make ES Lint understand JSX
`npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0`

# ES Lint React hooks
`npm install -D eslint-plugin-react-hooks@4.2.0`

# React Router
`npm install react-router-dom@5.2.0`

# some Babel stuff for class properties and such
`npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4`

(upgraded eslint-parser to 7.14, since eslint had trouble finding .babelrc after adding the parser)
