import * as maplibregl from 'maplibre-gl'
import "maplibre-gl/dist/maplibre-gl.css";
import { mapPermohonan } from './map';

export function checkMarker(e) {
  e.target.checked ? $('.markerLogo').html('add_location') : $('.markerLogo').html('location_on')
  let markerAdded

  async function addMarker(e) {
    if (markerAdded) {
      markerAdded.remove()
    }

    const coordinates = e.lngLat

    markerAdded = new maplibregl.Marker()
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(mapPermohonan)

    $('#latitude').html(coordinates.lat)
    $('#longitude').html(coordinates.lng)

    async function getAddress(e) {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&format=geojson&polygon_geojson=1&addressdetails=1`, {
        method: 'GET'
      })
      const data = await response.json()
      return data
    }
    const getData = await getAddress()

    $('#kecamatan').html(getData.features[0].properties.address.city_district)
    $('#kelurahan').html(getData.features[0].properties.address.suburb)
  }

  if (e.target.checked) {
    mapPermohonan.getCanvas().style.cursor = 'pointer';
    mapPermohonan.on('click', addMarker)
  } else {
    mapPermohonan.getCanvas().style.cursor = 'grab';
    mapPermohonan.off('click', addMarker)
    console.log(e.target.checked);
  }
}