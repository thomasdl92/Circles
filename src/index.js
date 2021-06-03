import './style.css';
import Circle from './components/Circle';

const holder = document.getElementById('root');

const arrCircles = [];

function circleWizard() {
  arrCircles.push(new Circle(holder));
  if (arrCircles.length === 100) {
    document.querySelectorAll('.circle').forEach((circle) => {
      circle.style.backgroundColor = 'pink';
    }, clearInterval(interval));
  }
}

const interval = setInterval(circleWizard, 200);
