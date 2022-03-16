// jedna funkcja która będzie nam liczyła nasze bmi

function Calculate() {
	const height = document.getElementById('height-input').value;
	const weight = document.getElementById('weight-input').value;
	// pobieramy wartość z inputów z id height-input i weight-input

	// wzór - result to number Weight podzielony przez number Height/100 i wzięty do kwadratu (wynik BMI)
	const result = (parseFloat(weight) / (parseFloat(height) / 100) ** 2).toFixed(
		1
	);

	if (!isNaN(result)) {
		document.getElementById('bmi-output').innerHTML = result;
		//wynik naszego BMI jest wypisywany jako RESULT do bmi-output(tam gdzie value)

		if (result < 18.5) {
			document.getElementById('bmi-status').innerHTML = 'Underweight 💀';
		} else if (result < 25) {
			document.getElementById('bmi-status').innerHTML = 'Healthy ❤️';
		} else if (result < 30) {
			document.getElementById('bmi-status').innerHTML = 'Overweight 🤔';
		} else {
			document.getElementById('bmi-status').innerHTML = 'Obesity 😟';
		}
	}
}
