var banners = []

// Генерируем тестовый массив баннеров
for (var i = 1; i <= 5; i++) {
  banners.push({
    data: i,
    w: Math.floor(Math.random() * 1000) + 1, // Вес баннера от 1 до 1000 к примеру
  })
}
console.log(banners)
var wt = 0 // Сумма веса всех баннеров
for (var i = 0; i < banners.length; i++) {
  var banner = banners[i]
  wt += banner.w
  banner.bound = wt // Определяем границу, которая зависит от веса
}
console.log(banners) // Проверить наглядно какие границы созданы
// Генерируем число от 0 до wt
var r = Math.floor(Math.random() * wt + 1)
for (var i = 0; i < banners.length; i++) {
  // Ищем какой баннер попал в полученное случайное число
  var banner = banners[i]
  if (r > banner.bound - banner.w && r < banner.bound) {
    console.log('banner ' + banner.data) // В итоге при таком подходе вероятность выпадения более ценного баннера выше, главное чтоб вес был > 0, иначе баннер найден неправильно.
  }
}
