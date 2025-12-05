  // Создаем карту
  let map = L.map("map", {
    center: [50.467, 30.5234],
    zoom: 10,
    minZoom: 4,
    maxZoom: 25,
  });

  // Тайлы OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    minZoom: 4,
    maxZoom: 25,
  }).addTo(map);

  // Маркеры
  var markers = {
    center: L.marker([50.4501, 30.5234])
      .bindPopup("<span class='map__text'><b>Липки 200/20</b></span>")
      .addTo(map),
    troieshyna: L.marker([50.527, 30.585])
      .bindPopup("<span class='map__text'><b>Троещина 200/20</b></span>")
      .addTo(map),
  };

  // Навешиваем событие клика на элементы списка
  document.querySelectorAll(".map__item").forEach(function (item) {
    item.addEventListener("click", function () {
      var place = this.dataset.place;
      var marker = markers[place];
      map.flyTo(marker.getLatLng(), 14, { duration: 1.5 }); // плавный переход
      marker.openPopup(); // открываем popup
    });
  });