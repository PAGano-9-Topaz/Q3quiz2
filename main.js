

// 			onchange js event
		document.getElementById("fullname").onchange = function() {changeToCapital()}
		function changeToCapital(){
			var fname = document.getElementById("fullname");
			fname.value = fname.value.toUpperCase();
		}

		function Willkommen() {
			var a = document.getElementById('fullname').value
			window.alert('Hello ' + a + '!' + ' Thank you for filling out this section, please proceed.')
			}
		function Vater() {
			var b = document.getElementById('valueB').value
			var c = document.getElementById('valueA').value
			var d = b - c
			window.alert('Your total is: '+ d + '₱!' + ' Thank you for filling out this section, please proceed.')
			}	
		function Mutter() {
			var f = document.getElementById('email').value
			window.alert("We've sent the file to be printed at your email " + f + "!")
		}

		function Bruder() {
			window.location.reload()
		}

