export const reklamePointSource = {
  type: 'vector',
  scheme: 'tms',
  tiles: [`http://localhost:8080/geoserver/gwc/service/tms/1.0.0/Reklame:2023_reklame_gdb@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf`]
}

export const reklamePointLayer = {
  "id": "reklamePoint",
  "type": "circle",
  "source": "reklamePoint",
  "source-layer": "2023_reklame_gdb",
  'paint': {
    'circle-radius': 5,
    'circle-color': {
      'property': 'ukuran',
      'type': 'categorical',
      'stops': [
        ['Sedang', 'red'],
        ['Besar', 'blue'],
        // ['', 'green']
      ]
    }
  }
}