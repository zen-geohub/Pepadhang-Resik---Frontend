import * as maplibregl from 'maplibre-gl'
import "maplibre-gl/dist/maplibre-gl.css";
import { addFilter, filterCriteria } from './src/features/filter';
import { map, mapPermohonan } from './src/features/map';
import { reklamePointLayer, reklamePointSource } from './src/data/spatialData';
import { reklameOnClick } from './src/features/reklamePoint';
import { checkMarker } from './src/features/advertisingApplication';

map.on('load', () => {
  map.addControl(new maplibregl.NavigationControl, 'bottom-left')

  map.addSource('reklamePoint', reklamePointSource)
  map.addLayer(reklamePointLayer)
  
  map.on('click', 'reklamePoint', reklameOnClick);
  map.on('mouseenter', 'reklamePoint', () => { // Change the cursor to a pointer when the mouse is over the places layer.
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'reklamePoint', () => {// Change it back to a pointer when it leaves.
    map.getCanvas().style.cursor = '';
  });

  $('#submitFilter').on('click', () => {
    // If filter option is selected, get the value the option
    const filterUkuran = $('#filterUkuran option:selected').val()
    const filterJenisReklame = $('#filterJenisReklame option:selected').val()
    const filterNaskah = $('#filterNaskah option:selected').val()

    // Add equality filters for each property if corresponding value is not empty
    addFilter('ukuran', filterUkuran);
    addFilter('jenis_rklm', filterJenisReklame);
    addFilter('naskah', filterNaskah);

    map.setFilter('reklamePoint', ['all', ...filterCriteria]);
  })
})

mapPermohonan.on('load', () => {
  mapPermohonan.addControl(new maplibregl.NavigationControl, 'top-left')
  $('.markerLabel').css('display', 'block')

  $('#addMarker').on('change', checkMarker)
})

$('#collapseRightbar').on('click', () => {
  $('#collapseRightbar').children().toggleClass('rotate-180');
  $('#rightbar').toggleClass('translate-x-[320px]')
})

$('#filterButton').on('click', function () {
  $(this).toggleClass('bg-white text-[#1E2E4A] hover:bg-[#ffffff20]')
  $('#filterContainer').toggleClass('-translate-x-[400px]')
})

function modalPermohonan () {
  $('#modalPermohonan').toggleClass('flex hidden')
}
$('#closeModalPermohonan').on('click', modalPermohonan)
$('#permohonanButton').on('click', modalPermohonan)