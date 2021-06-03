import randomColor from 'randomcolor';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default class Circle {
  #size = randomNumber(50, 250);
  #x = randomNumber(this.#size, window.innerWidth - this.#size);
  #y = randomNumber(this.#size, window.innerHeight - this.#size);
  #holder;
  constructor(holder) {
    this.#holder = holder;
    this.htmlRef = this.#generateHTML();
    this.#setStyling();
  }

  #generateHTML() {
    this.#holder.insertAdjacentHTML(
      'beforeend',
      `
          <div class="circle"></div>
        `
    );
    return this.#holder.querySelector('.circle:last-child');
  }

  #setStyling() {
    const styles = {
      left: this.#x + 'px',
      top: this.#y + 'px',
      width: this.#size + 'px',
      height: this.#size + 'px',
      borderColor: randomColor(),
      backgroundColor: randomColor(),
    };
    Object.assign(this.htmlRef.style, styles);
  }
}
