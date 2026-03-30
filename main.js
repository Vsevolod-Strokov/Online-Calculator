let digits = document.querySelectorAll('.digit')
let array_of_digits = []
let output_text = document.querySelector('.output')
let preview = document.querySelector('.preview').textContent
let preview_initial = preview
let all_buttons = document.querySelectorAll('.calc__buttons-button')

let array_input = []

function listener(butt) {
	array_input.push(butt.target.innerText)
	val = array_input.join('')
	document.querySelector('.preview').textContent = val
}

for (let i of all_buttons){
	i.addEventListener('click', listener)
}


function digits_logger (button) {
	let current = button.target.textContent.trim()
	array_of_digits.push(current)
	// console.log((current))
	// value = array_of_digits.join('')
	// console.log(Number(value))
	preview = array_of_digits
}


for (let i of digits) {
	i.addEventListener('click', digits_logger)
}





function calculate () {
	
	let i = 0
	
	// Умножение и деление
	while(history.length > i) {
		
		// if (history[i] == Number(history[i]))
		// {
		// 	i++
		// 	continue
		// }

		if (history[i] == '×') {
			multiply = history[i-1] * history[i+1]
			history.splice(i-1, 3, multiply)
			console.log(history)
			i--
			continue
		}

		if (history[i] == '/') {
			division = history[i-1] / history[i+1]
			if (Number.isInteger(division) == false)
				{
					division = Number(division.toFixed(2))
				}
			history.splice(i-1, 3, division)
			console.log(history)
			i--
			continue
		}

		i++

	}

	let y = 0
	while(history.length > y)
	{
		if (history[y] == '-') {
			minus = history[y-1] - history[y+1]
			history.splice(y-1, 3, minus)
			console.log(history)
			y--
		}

		if (history[y] == '+') {
			plus = history[y-1] + history[y+1]
			history.splice(y-1, 3, plus)
			console.log(history)
			y--
		}
		y++
	}

		array_of_digits = []
		output_text.style.transition = "0.5s"
		output_text.style.scale = 1.2
		output_text.textContent = history
	}


	// for (let i = 0; i < history.length; i++) {
	// 	if (history[i] == '×') {
	// 		multiply = history[i-1] * history[i+1]
	// 		history.splice(i-1, 3, multiply)
	// 		console.log(history)
			
	// 	}

	// 	else 
	// 	}	
	// 	else 	
	// 	i++
		
// }








let opers = document.querySelectorAll('.operator')

let history = []

function operators_logger(operator) {
	let tmp = operator.target.textContent.trim()
	console.log(`Нажат оператор ${tmp}`)
	if (array_of_digits.length != 0) {
		value = Number(array_of_digits.join(''))
		array_of_digits = []
		history.push(value, tmp)
	}
	else if (array_of_digits.length == 0) {
		history.push(tmp)
	}
	console.log(history)
	// calculate()
}


for (op of opers) {
	op.addEventListener('click', operators_logger)
} 




function final() {
	if (array_of_digits.length != 0)
		{
		value = Number(array_of_digits.join(''))
		history.push(value)
		// console.log(` вот тут херня: ${history}`)
		console.log(history)
		}
	calculate()
}


let eq = document.querySelector('.equal')
eq.addEventListener('click', final)








function removeAll () {
	array_of_digits = []
	history = []
	array_input = []
	console.log(output_text.textContent)
	output_text.textContent = "0"
	document.querySelector('.preview').textContent = preview_initial

	output_text.style.scale = "1"

	console.clear()
}

let clear = document.querySelector('.bin')
clear.addEventListener('click', removeAll)
