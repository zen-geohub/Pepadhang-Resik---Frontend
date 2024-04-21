import * as maplibregl from 'maplibre-gl'
import "maplibre-gl/dist/maplibre-gl.css";
import { map } from './map';

// Initialize an empty array for filter criteria
export let filterCriteria = [];
export function addFilter(property, value) {
  if (value !== '') {
    filterCriteria.push(['==', ['get', property], value]);
  }
}