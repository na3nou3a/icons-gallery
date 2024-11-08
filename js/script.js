const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseenter', handleMouseEnterEvent);
  box.addEventListener('mouseleave', handleMouseLeaveEvent);
});
function handleMouseEnterEvent(e) {
  const box = e.currentTarget;
  const mouseXCoordinate = e.clientX;
  const boxXCoordinte = box.getBoundingClientRect().left;
  const boxHalfWidth = box.getBoundingClientRect().width / 2;
  const length = mouseXCoordinate - boxXCoordinte;
  if (length > boxHalfWidth) {
    box.classList.add('right-effect');
  } else {
    box.classList.add('left-effect');
  }
}
function handleMouseLeaveEvent(e) {
  const box = e.currentTarget;
  box.classList.remove('right-effect');
  box.classList.remove('left-effect');
}
