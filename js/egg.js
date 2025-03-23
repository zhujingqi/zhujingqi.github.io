let eggCode = ['z', 'h', 'u', 'j', 'i', 'n', 'g', 'q', 'i'];
let inputLog = [];

window.addEventListener('keydown', function(e) {
	let key = e.key.toLowerCase();
	inputLog.push(key);

	if (inputLog.length > eggCode.length) {
		inputLog.shift();
	}

	if (inputLog.join('') === eggCode.join('')) {
		rotate180();
		inputLog = [];
	}
});

function rotate180() {
	document.body.style.transition = "transform 1s ease";
	document.body.style.transform = "rotate(180deg)";
}

let eggCode2 = ['j', 'a', 'c', 'k', 'y'];
let inputLog2 = [];

window.addEventListener('keydown', function(e) {
	let key = e.key.toLowerCase();
	inputLog2.push(key);

	if (inputLog2.length > eggCode2.length) {
		inputLog2.shift();
	}

	if (inputLog2.join('') === eggCode2.join('')) {
		shakeit();
		inputLog2 = [];
	}
});

function shakeit() {
	document.body.classList.add('shake-it');
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translate(0, 0); }
  10% { transform: translate(-10px, 0); }
  20% { transform: translate(10px, 0); }
  30% { transform: translate(-10px, 0); }
  40% { transform: translate(10px, 0); }
  50% { transform: translate(-5px, 0); }
  60% { transform: translate(5px, 0); }
  70% { transform: translate(-2px, 0); }
  80% { transform: translate(2px, 0); }
  90% { transform: translate(-1px, 0); }
  100% { transform: translate(0, 0); }
}

.shake-it {
  animation: shake 0.5s infinite;
}`;
document.head.appendChild(style);
