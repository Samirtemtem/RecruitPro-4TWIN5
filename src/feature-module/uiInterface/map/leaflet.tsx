import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";

const Leaflet = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    // Initialize the map
    const shapesmap = L.map("map1").setView([51.505, -0.09], 13);
    
    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(shapesmap);

    // Define the custom marker icon
    const customIcon = L.icon({
      iconUrl: "assets/img/marker-icon.png", // Path to your custom SVG or image
      iconSize: [25, 40],             // Size of the icon [width, height]
      iconAnchor: [19, 38],           // Anchor point of the icon (center-bottom)
      popupAnchor: [0, -38],          // Where the popup will appear relative to the icon
    });

    // Add a marker with the custom icon
    const marker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(shapesmap);

    // Add a circle to the map
    const circle = L.circle([51.508, -0.11], {
      color: "#d77cf7",
      fillColor: "#d77cf7",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(shapesmap);

    // Add a polygon to the map
    const polygon = L.polygon(
      [
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ],
      {
        color: "#fe5454",
        fillColor: "#fe5454",
      }
    ).addTo(shapesmap);

    // Cleanup map when component is unmounted
    return () => {
      shapesmap.remove();
    };
  }, []);

  useEffect(() => {
    // Initialize the map
    const popupmap = L.map("map-popup").setView([51.505, -0.09], 13);

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap",
    }).addTo(popupmap);

    // Define the custom marker icon
    const customIcon = L.icon({
      iconUrl: "assets/img/marker-icon.png", // Path to your custom SVG or image
      iconSize: [25, 40],             // Size of the icon [width, height]
      iconAnchor: [19, 38],           // Anchor point of the icon (center-bottom)
      popupAnchor: [0, -38],          // Where the popup will appear relative to the icon
    });

    // Add a marker with the custom icon
    const marker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(popupmap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // Add a circle to the map
    const circle = L.circle([51.508, -0.11], {
      color: "#ffc102",
      fillColor: "#ffc102",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(popupmap);
    circle.bindPopup("I am a circle.");

    // Add a polygon to the map
    const polygon = L.polygon(
      [
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ],
      {
        color: "#7b76fe",
        fillColor: "#7b76fe",
      }
    ).addTo(popupmap);
    polygon.bindPopup("I am a polygon.");

    // Add a standalone popup
    const popup = L.popup()
      .setLatLng([51.513, -0.09])
      .setContent("I am a standalone popup.")
      .openOn(popupmap);

    // Cleanup on component unmount
    return () => {
      popupmap.remove();
    };
  }, []);

  useEffect(() => {
    const customicon = L.map("map-custom-icon").setView([51.505, -0.09], 13);
    
    // Adding tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap",
    }).addTo(customicon);
    
    // // Circle
    // L.circle([51.508, -0.11], {
    //   color: "#ffc102",
    //   fillColor: "#ffc102",
    //   fillOpacity: 0.5,
    //   radius: 500,
    // }).addTo(customicon);
  
    // Custom Icon
    const greenIcon = L.icon({
      iconUrl: "assets/img/logo.svg", // Path to your SVG file
      iconSize: [80, 25], // Size of the icon
      iconAnchor: [22, 94], // Anchor point of the icon
      popupAnchor: [-3, -76], // Point where the popup opens relative to the anchor
    });
  
    // Add the custom marker to the map
    L.marker([51.5, -0.09], { icon: greenIcon }).addTo(customicon);
  
    // Cleanup on component unmount
    return () => {
      customicon.remove();
    };
  }, []);

  useEffect(() => {
    // Initialize the map
    const geomap = L.map("interactive-map").setView([37.8, -96], 4);
  
    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(geomap);
  
    // Function to get color based on density
    function getColor(d:any) {
      return d > 1000
        ? "#800026"
        : d > 500
        ? "#BD0026"
        : d > 200
        ? "#E31A1C"
        : d > 100
        ? "#FC4E2A"
        : d > 50
        ? "#FD8D3C"
        : d > 20
        ? "#FEB24C"
        : d > 10
        ? "#FED976"
        : "#FFEDA0";
    }
  
    // Style function for GeoJSON layers
    function style(feature:any) {
      return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    }
  
    // Highlight feature on hover
    function highlightFeature(e:any) {
      const layer = e.target;
  
      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7,
      });
  
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
  
    // Reset highlight on mouseout
    function resetHighlight(e:any) {
    //   geojson.resetStyle(e.target);
    }
  
    // Zoom to feature on click
    function zoomToFeature(e:any) {
      geomap.fitBounds(e.target.getBounds());
    }
  
    // Add event listeners for interactivity
    function onEachFeature(feature:any, layer:any) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
      });
    }
  
    // // Add GeoJSON data to the map
    // const geojson = L.geoJson(statesData, {
    //   style: style,
    //   onEachFeature: onEachFeature,
    // }).addTo(geomap);
  
    // Cleanup on unmount
    return () => {
      geomap.remove();
    };
  }, []);

//   useEffect(() => {
//     const geomap = L.map("interactive-map").setView([51.505, -0.09], 13);
//     var tiles = L.tileLayer(
//       "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//       {
//         maxZoom: 18,
//         attribution:
//           '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//       }
//     ).addTo(geomap);
//     function getColor(d: number) {
//       return d > 1000
//         ? "#800026"
//         : d > 500
//         ? "#BD0026"
//         : d > 200
//         ? "#E31A1C"
//         : d > 100
//         ? "#FC4E2A"
//         : d > 50
//         ? "#FD8D3C"
//         : d > 20
//         ? "#FEB24C"
//         : d > 10
//         ? "#FED976"
//         : "#FFEDA0";
//     }
//     function style(feature: { properties: { density: any } }) {
//       return {
//         fillColor: getColor(feature.properties.density),
//         weight: 2,
//         opacity: 1,
//         color: "white",
//         dashArray: "3",
//         fillOpacity: 0.7,
//         // fillColor: '#fff'
//       };
//     }
//     // L.geoJson(statesData, { style: style }).addTo(geomap);
//     function highlightFeature(e: { target: any }) {
//       var layer = e.target;
//       layer.setStyle({
//         weight: 5,
//         color: "#666",
//         dashArray: "",
//         fillOpacity: 0.7,
//       });
//       if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//       }
//     }

//     return () => {
//       geomap.remove();
//     };
//   }, []);

  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Sortable JS</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Start::row-1 */}
        <div className="row">
          <div className="col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Leaflet Map</div>
              </div>
              <div className="card-body">
                <div id="map" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">
                  Map With Markers,circles and Polygons
                </div>
              </div>
              <div className="card-body">
                <div id="map1" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Map With Popup</div>
              </div>
              <div className="card-body">
                <div id="map-popup" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Map With Custom Icon</div>
              </div>
              <div className="card-body">
                <div id="map-custom-icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Interactive Choropleth Map</div>
              </div>
              <div className="card-body">
                <div id="interactive-map" />
              </div>
            </div>
          </div>
        </div>
        {/*End::row-1 */}
      </div>
    </div>
  );
};

export default Leaflet;
