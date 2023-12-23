const container = document.querySelector('.container');
const active = document.querySelector('.active');
const clear = document.querySelector('.clear');

let n = 600;

for (let i = 0; i < n; i++) {
	const square = document.createElement('div');
	square.setAttribute('class', 'square');
	container.append(square);
	square.addEventListener('mouseover', () => {
		square.style.background = randomColor();
		square.style.boxShadow = `0 0 3px ${randomColor()}`;
	});
	square.addEventListener('mouseout', () => {
		square.style.background = '';
		square.style.boxShadow = '';
	});
	active.addEventListener('click', () => {
		square.style.background = randomColor();
	});
	clear.addEventListener('click', () => {
		square.style.background = '';
	});
}

function randomColor() {
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 10);
	}
	return color;
}

const white = document.querySelector('.whitediv');

cursor();

function cursor() {
	window.addEventListener('mousemove', (e) => {
		const target = e.target;
		if (!target) return;
		white.style.left = e.pageX + 'px';
		white.style.top = e.pageY + 'px';
	});
}
