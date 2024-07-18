# Namaste React

#Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement (on code changes, builds again & Automatic page refresh)
- uses a File Watching algorithm (written in C++)
- Caching - Faster Builds subsequently, in .parcel-cache folder
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers also
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev & prod bundles

# Namaste Food

App comp
|--Header comp
|--Logo comp
|--NavItems comp
|--Body comp
|--Search comp
|--RestarantContainer comp
|--RestaurantCard comp
|-- Img
|-- Name of Res, Star Rating, cuisine, delivery time
|--Footer comp
|--Copyright comp
|--Links comp
|--Address comp
|--Contact comp

# 2 types of export/import

-Default export/import
export default Component;
import Component from "path";

-Named Export/Import
export const Component;
import {Component} from "path";

# React Hooks

Normal JS utility functions, fetched from react package in node_modules from npm i.

- useState() - superpowerful local State Variables in react - contains the State of the component
- useEffect()

# 2 types of Routing in Web Apps -

- Client side Routing
- Server side Routing

# Redux Toolkit -

- install @reduxjs/toolkit and react-redux
- Build our store............................from RTK
- Connect our store to our app...............from react-redux
- create Slice (cartSlice)
- dispatch (action)
- Selector

# Types of Testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting Up Testing in our app
- install React Testing Library
- install jest
- install Babel dependencies. Parcel uses Babel behind the scenes.
- Configure Babel
- Configure Parcel Config file to disable default Babel transpilation
- Jest configuration - npx jest --init
- Install jsdom lib
- install @babel/preset-react - to make JSX work in test cases
- include @babel/preset-react inisde my babel config
- npm i -D @testing-library/jest-dom