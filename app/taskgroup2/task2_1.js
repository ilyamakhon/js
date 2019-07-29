export default function task2_1() {
	const el = document.getElementById('task2_1');
	el.addEventListener('click', () => {
		const num1 = prompt('please enter first number: ');
		const num2 = prompt('please enter second number: ');

		alert(isOdd(parseInt(num1), parseInt(num2)));
	});
}

function isOdd(num1, num2) {
	const isOdd2 = num2 % 2 === 0;
	const isOdd1 = num1 % 2 === 0;

	if (isOdd2 && num1 % 2 !== 0) {
		return num1;
	}

	if (isOdd1 && num2 % 2 !== 0) {
		return num2;
	}

	return isOdd1 && isOdd2 ? num1 * num2 : num1 + num2;
}
