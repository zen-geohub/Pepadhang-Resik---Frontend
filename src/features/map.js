import * as maplibregl from 'maplibre-gl'
import "maplibre-gl/dist/maplibre-gl.css";

export const map = new maplibregl.Map({
  container: 'map', // container id
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=84QftgmefE2VR1eOodKl`, // style URL
  // style: 'https://demotiles.maplibre.org/style.json',
  center: [110.3647275, -7.801408],
  // center: [0, 0],
  zoom: 14,
  attributionControl: false,
});
export const mapPermohonan = new maplibregl.Map({
  container: 'mapPermohonan', // container id
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=84QftgmefE2VR1eOodKl`, // style URL
  // style: 'https://demotiles.maplibre.org/style.json',
  center: [110.3647275, -7.801408],
  // center: [0, 0],
  zoom: 14,
  attributionControl: false,
});