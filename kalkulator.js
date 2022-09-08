const operator = (operator) => {
	let angka = document.getElementById("angka");
	onclick = function () {
		if (operator == 'AC'){
          angka.value = '';
        } else if (operator == 'Del'){
            angka.value = angka.value.slice(0, -1); 
        } else {
            angka.value += operator;
        }
	};
};

const number = (number) => {
	let angka = document.getElementById("angka");
	onclick = function () {
		angka.value += number;
	};
};

const calculate = (calc) => {
    let angka = document.getElementById('angka');
    onclick = function () {
        angka.value = eval(angka.value);
    }
};