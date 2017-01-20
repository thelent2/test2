   //https://developers.google.com/maps/documentation/javascript/markers
   (function sample1Code(global){
    var map;
    
    
    global.initCirle = function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: -33.865427, lng: 151.196123},
          mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');

        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);

        //Adds a style to the Data Layer which calls the getCircle() function.
        //Creates a custom image for the point instead of the default red marker.cd
        map.data.setStyle(function(feature) {
          var magnitude = feature.getProperty('mag');
          return {
            icon: getCircle(magnitude)
          };
        });
    }

      //The magnitude property of the earthquake is passed to this function.
      //getCircle() draws a circle whose size is defined by the magnitude value, 
      //and sends that circle back to be used as the earthquake's custom marker.
      function getCircle(magnitude) {
        return {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'red',
          fillOpacity: .2,
          scale: Math.pow(2, magnitude) / 2,
          strokeColor: 'white',
          strokeWeight: .5
        };
      }

      global.eqfeed_callback =function eqfeed_callback(results) {        
        map.data.addGeoJson(results);
      }

      
})(window);
