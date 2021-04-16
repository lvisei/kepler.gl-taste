import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import KeplerGl from "kepler.gl";
import "./App.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // eslint-disable-line
const MAPBOX_API_URL = "https://api.mapbox.com";

function App() {
  return (
    <div className="App">
      <AutoSizer>
        {({ height, width }) => (
          <KeplerGl
            mapboxApiAccessToken={MAPBOX_TOKEN}
            id="map"
            width={width}
            height={height}
            mapboxApiUrl={MAPBOX_API_URL}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default App;
