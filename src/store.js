import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import keplerGlReducer from "kepler.gl/reducers";
import { enhanceReduxMiddleware } from "kepler.gl/middleware";

const initialState = {};

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  // mapStyle: {
  //   mapStyles: {
  //     voyager: {
  //       id: "satellite",
  //       label: "satellite",
  //       url: "mapbox://styles/mapbox/satellite-v11",
  //       icon: "https://api.maptiler.com/maps/satellite/256/0/0/0.png",
  //     },
  //     terrain: {
  //       id: "Outdoor",
  //       label: "Outdoor",
  //       url: "mapbox://styles/mapbox/outdoors-v11",
  //       icon: "https://openmaptiles.org/img/styles/terrain.jpg",
  //     },
  //   },
  //   // Set initial map style
  //   styleType: "satellite",
  // },
});

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,

  // app: appReducer
});

export const middlewares = enhanceReduxMiddleware([
  // Add other middlewares here
]);

export const enhancers = [applyMiddleware(...middlewares)];

// using createStore
export default createStore(reducers, initialState, compose(...enhancers));
