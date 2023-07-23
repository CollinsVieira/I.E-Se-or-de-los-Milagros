// Función para inicializar el mapa
function initMap() {
    // Coordenadas de la ubicación de la institución (puedes ajustar estas coordenadas según la ubicación real)
    var institucionLocation = { lat: -6.762929, lng: -79.835946};
  
    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      center: institucionLocation,
      zoom: 25, center: institucionLocation // Nivel de zoom (puedes ajustar el valor según tus preferencias)
    });
  
    // Colocar un marcador en la ubicación de la institución
    var marker = new google.maps.Marker({
      position: institucionLocation,
      map: map,
      title: 'Institución XYZ' // Título del marcador
    });
  }
  