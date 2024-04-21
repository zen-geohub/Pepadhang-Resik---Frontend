export function reklameOnClick(e) {
  // Get DOM needed 
  const infoInstansi = $('#infoInstansi')
  const infoContainer = $('#infoContainer')

  // Trigger information container when point is clicked and hide the initial instansi state
  function hiddenInstansi() {
    infoInstansi.toggleClass('hidden flex')
    infoContainer.toggleClass('hidden flex')
  }
  infoInstansi.hasClass('hidden') || hiddenInstansi() // If instansi container is shown, hide it

  const coordinates = e.features[0].geometry.coordinates // Get coordinates from clicked point

  // $('#dataContainer').is(':empty') || $('#dataContainer').empty(); // If data container is not empty, empty it

  const dataContainer = $('#dataContainer').find('article') // Find any article element inside dataContainer element

  // For every article element found, if article ID match key name -> modify html with value from object
  dataContainer.each(function () {
    Object.entries(e.features[0].properties).forEach(([key, value]) => {
      $(this).attr('id') !== key || $(this).html(`${value}`)
    })
  });

  // Object.entries(e.features[0].properties).forEach(([key, value]) => {
  //   let container = document.createElement('div');
  //   $(container).addClass('w-full h-fit p-2 rounded-lg border-[1px] border-black relative');
  //   $('#dataContainer').append(container);

  //   const head = document.createElement('p');
  //   const headContent = document.createTextNode(`${key}`);
  //   $(head).addClass('font-bold capitalize');
  //   $(head).append(headContent);
  //   $(container).append(head);

  //   const article = document.createElement('p');
  //   const articleContent = document.createTextNode(`${value}`);
  //   $(article).append(articleContent);
  //   $(container).append(article);
  // });


  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
}