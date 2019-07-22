import Point from '../model/point.js';

export default function task2_2() {
  const el = document.getElementById('task2_2');
  el.addEventListener('click', () => {
    const point = new Point(1,2);
    alert(`${point.getFirstCoordinate} ${point.getSecondCoordinate}`);
  });
}