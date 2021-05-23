# Earthquake Zen Garden

#### Development server

To get started run `npm install`

Run `npm run start` for a dev server. 
The app will automatically open in browser at `localhost:8080` and reload if you change any of the source files.


#### Highlights of the code

Code is written in React + Typescript. Webpack is used to bundle the application. SCSS support is added for styling components.

Webapck has been configued to load svg, png, jsx, tsx files. I have added support to use absolute path relative to `src` directory to remove relative import like `../` or `../.../`

Eslint and Prettier has been added to support project wide formatting needs.
`Components` folder contains every component used for the exercise.
scss files has been declared at the same level as component.

```
├── src
│   ├── Components
│   │   ├── EarthquakeZengarden.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── Interface.ts
│   │   ├── Profile.scss
│   │   ├── Profile.tsx
│   │   ├── Record.tsx
│   │   ├── TwoColumnGrid.scss
│   │   ├── TwoColumnGrid.tsx
│   │   ├── earthquakeZengarden.scss
│   │   ├── routes.tsx
│   │   └── utils.tsx
│   ├── Data
│   │   └── zengardern-data.json
│   ├── Images
│   │   ├── sort-asc.svg
│   │   └── sort-dsc.svg
│   ├── app.tsx
│   ├── base.scss
│   ├── index.html
│   └── typings
│       └── declarations.d.ts
├── tsconfig.json
└── webpack.config.js

```
