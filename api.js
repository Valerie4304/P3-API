let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.881832, lng: -87.623177 },
    zoom: 15,
  });
}

window.initMap = initMap;

url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCTuZ1cbDwdp2Mq9GKXYzAH2ToH2SWgqe8&callback=initMap"
mapKey = "AIzaSyCTuZ1cbDwdp2Mq9GKXYzAH2ToH2SWgqe8"
lat = "41.881832"
lng = "-87.623177"
zoom = "15"

mapParams = {"lat": lat,
                "lng": lng,
                "zoom": zoom,
                "appid": mapKey,
}

function makeApiCall(){
    $.ajax({
        url: url,
        type: "GET",
        data: mapParams,
        success: function(resp){
            console.log(resp);
        },
        error: function(error){
            console.log(error);
        }
    });
}

url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCTuZ1cbDwdp2Mq9GKXYzAH2ToH2SWgqe8&callback=initMap"
     mapKey = "AIzaSyCTuZ1cbDwdp2Mq9GKXYzAH2ToH2SWgqe8"
     lat = "41.881832"
     lon = "-87.623177"
     weatherParams = {"lat": lat,
                         "lng": lng,
                         "units": "imperial", 
                         "appid": mapKey,
                         "zoom": zoom,
                         }
