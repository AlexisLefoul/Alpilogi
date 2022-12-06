import React from "react";
import Map from "react-map-gl";
import Header from "../components/Header";

function MainMap() {
  return (
    <>
      <Header />
      <div className="map">
        <Map
          id="map"
          mapboxAccessToken="pk.eyJ1IjoibGV4aWFzIiwiYSI6ImNsYmJiazFvZzA4MWIzd3BpNnVmdm52dmoifQ.Y9cUPN9uYGrblGnU8zEkYQ"
          initialViewState={{
            longitude: -1.742239838651933,
            latitude: 48.04891707722568,
            zoom: 16,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        />
      </div>
    </>
  );
}

export default MainMap;
