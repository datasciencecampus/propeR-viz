function mapPoint(point){
  return [point[1],point[0]]
}

function mapPolygon(poly){
  return poly.map(function(line){return mapLineString(line)})
}

function mapLineString(line){
  return line.map(function(d){return [d[1],d[0]]})
}

function getLineColor(feature, layer) {
  console.log(layer.feature)
  return layer.feature.properties.mode == 'TRANSIT'    ?    '#000000':
  layer.feature.properties.mode == 'WALK'     ?   '#A14296':
  layer.feature.properties.mode == 'BUS'     ?   '#48C1B1':
  layer.feature.properties.mode == 'RAIL'     ?   '#4D7BC5':
  layer.feature.properties.mode == 'CAR'     ?   '#E825D6':
  layer.feature.properties.mode == 'BICYCLE'     ?   '#4AA6C3':
  '#4AA6C3';
};

function polyPopUp(feature, layer) {

  var fillColorOrig = layer.options.fillColor
  var opacityOrig = layer.options.opacity
  var colorOrig = layer.options.opacity

  layer.bindPopup( "<b>Origin: </b>"
  + feature.properties.name + "<br>"
  + "<b>Time: </b>"
  + (feature.properties.time/60)
  + " mins");
  layer.on("mouseover",function(d){
    this.setStyle({
      "fillColor": "yellow",
      "opacity": "1",
      "color": "black"
    });
  })
  layer.on("mouseout",function(d){
    this.setStyle({
      "fillColor": fillColorOrig,
      "opacity": opacityOrig,
      "color": colorOrig
    });
  })
}

function jobCentrePopUp(feature, layer) {
  layer.bindPopup( "<b>Name: </b>"
  + feature.properties.jobcentre_office + "<br>"
  + "<b>ID: </b>"
  + feature.properties.name + "<br>"
  + "<b>Address: </b>"
  + feature.properties.office_address + ", "
  + feature.properties.postcode);
  layer.on("mouseover",function(d){
    layer.setIcon(pinIcon_large)
  });
  layer.on("mouseout",function(d){
    layer.setIcon(pinIcon)
  });
}

function sportsStadiumPopUp(feature, layer) {
  layer.bindPopup( "<b>Name: </b>"
  + feature.properties.name + "<br>"
  + "<b>Capacity: </b>"
  + feature.properties.capacity);
  layer.on("mouseover",function(d){
    layer.setIcon(pinIcon_large)
  });
  layer.on("mouseout",function(d){
    layer.setIcon(pinIcon)
  });
}

function originPopUp(feature, layer) {
  layer.bindPopup( "<b>Name: </b>"
  + feature.properties.name);
  layer.on("mouseover",function(d){
    layer.setIcon(pinIcon_large)
  });
  layer.on("mouseout",function(d){
    layer.setIcon(pinIcon)
  });
}

function lsoaPopUp(feature, layer) {
  layer.bindPopup("<b>Name: </b>" + feature.properties.lsoa11nm + "<br>"
  + "<b>CD: </b>" + feature.properties.lsoa11cd + "<br>"
  + "<b>ID: </b>" + feature.properties.objectid + "<br>"
  + "<b>Population: </b>" + feature.properties.population);
}

function pointToPointPopup(feature, layer) {
  layer.bindPopup("<b>Mode: </b>" + feature.properties.mode + "<br>"
  + "<b>Route: </b>" + feature.properties.route + "<br>"
  + "<b>Agency: </b>" + feature.properties.agencyName + "<br>"
  + "<b>Distance: </b>" + (feature.properties.distance/1000).toFixed(2) + " km" + "<br>"
  + "<b>Duration: </b>" + (feature.properties.duration/60).toFixed(2) + " mins");
}
