
		function submit() {
			let a = parseInt(document.getElementById("n1").value);
			let b = parseInt(document.getElementById("n2").value);
			let mode = document.getElementById("mode").value;
			let result = 0;


			switch (mode) {
				case "+":
					result = a + b;
					break;
				case "-":
					result = a - b;
					break;
				case "*":
					result = a * b;
					break;
				case "/":
					result = a / b;
					break;
			}

			document.getElementById("output").innerHTML = result;
			//alert("Answer: "+result);
		}