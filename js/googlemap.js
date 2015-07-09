/////////////////* GOOGLE MAP */////////////////////////

function googlemap() {
    "use strict";      
    google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function() {
        var proj = this.getProjection();
        var aPoint = proj.fromLatLngToContainerPixel(latlng);
        aPoint.x = aPoint.x+offsetX;
        aPoint.y = aPoint.y+offsetY;
        map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
    }; 
    ov.draw = function() {}; 
    ov.setMap(this); 
};
    var latlng = new google.maps.LatLng(39.63416, -79.95607);
    
    var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
];

    var myMapOptions = {
        zoom: 17,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        center: latlng,
        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
    }
    };

if ($(window).width() > 640) {
    var map = new google.maps.Map(document.getElementById("google-map"), myMapOptions);
}
else {
    var map = new google.maps.Map(document.getElementById("mobile-map"), myMapOptions);
}
    
    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
    map.mapTypes.set('tehgrayz', mapType);
    map.setMapTypeId('tehgrayz');
    var image = 'images/marker1.png';

    var marker = new google.maps.Marker({
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: image,
        map: map,
        position: latlng
    });
}

jQuery(window).load(function () {
    "use strict";
    googlemap();
});

$(window).resize(function () {
    "use strict";
    googlemap();
});