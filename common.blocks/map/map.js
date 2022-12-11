DG.then(function () {
  let map = DG.map("map", { center: [54.98, 82.89], zoom: 13 });
  DG.marker([54.98, 82.89]).addTo(map);
})