import React from "react";
import { Scene, loadModules } from "@esri/react-arcgis";

const medianHouseholdIncome =
  "https://gisdata.kingcounty.gov/arcgis/rest/services/OpenDataPortal/census__demographic_base_area_esj/MapServer/25491201";

function MapPage(props) {
  return (
    <div>
      <Scene
        style={{ width: "100vw", height: "100vh" }}
        mapProperties={{ basemap: "hybrid" }}
        viewProperties={{
          center: [-121.84, 47.47],
          zoom: 10
        }}
        onLoad={(map, view) => {
          // This is just a quick and dirty test to show king county open gis data.
          loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
            const featureLayer = new FeatureLayer({
              url: medianHouseholdIncome
            });
            featureLayer.opacity = 0.4;

            map.add(featureLayer);
          });
        }}
      />
    </div>
  );
}

export default MapPage;
