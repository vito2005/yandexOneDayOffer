/**
 * Функция, перемещающая элемент по горизонтали
 * на заданное расстояние в течение указанного времени.
 *
 * @param {HTMLElement} elem - перемещаемый элемент
 * @param {number} time - время анимации, мс
 * @param {number} distance - расстояние к перемещению, пиксели
 */
function moveX(elem, time, distance) {
  let start = performance.now()

  function goLeft(now) {
    let progress = (now - start) / time

    if (progress > 1) {
      progress = 1
    }

    elem.style.transform = `translateX(${progress * distance}px)`
    requestAnimationFrame(goLeft)
  }

  requestAnimationFrame(goLeft)
}
const elem = document.getElementById('red')
moveX(elem, 5000, 500)

// XXXXX
// XXXXX
// XXXXX

// 0----------0---0--------0----------0--------------0

// 0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-X

// 0000000000000000000000000000000000000000000000X
