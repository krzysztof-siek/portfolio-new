const contactForm = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactSubmit = document.getElementById('contactSubmit')

let nameError = true
let emailError = true
let messageError = true




name.addEventListener('change', function(e) {
	let element = `help-${e.target.name}`
	let help = document.querySelector(`.${element}`)
	if(e.target.value.length >= 3) {
		help.classList.add('hide')
		name.classList.add('verify')
		nameError = false;
	} else {
		name.classList.remove('verify')
		help.classList.remove('hide')
		nameError = true;
	}
})

email.addEventListener('change', function(e) {
	let emailValue = e.target.value
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let result = re.test(String(emailValue).toLowerCase());
	let element = `help-${e.target.name}`
	let help = document.querySelector(`.${element}`)
	if(result) {
		help.classList.add('hide')
		email.classList.add('verify')
		emailError = false;
	} else {
		email.classList.remove('verify')
		help.classList.remove('hide')
		emailError = true;
	}
})

message.addEventListener('change', function(e) {
	let element = `help-${e.target.name}`
	let help = document.querySelector(`.${element}`)
	if(e.target.value.length >= 10) {
		messageError = false;
		help.classList.add('hide')
	} else {
		messageError = true;
		help.classList.remove('hide')
	}
	
})


contactForm.addEventListener('submit', function(e) {
	e.preventDefault();
	if(!nameError && !emailError && !messageError) {
		console.log('prawidlowa validacja')
		nameVal = name.value;
		emailVal = email.value;
		messageVal = message.value;
		// To odkomentować żeby działało 
		// contactForm.submit(function (e) {
		//     e.preventDefault();
		// });
		const formSent = document.querySelector('.form-sent')
         formSent.classList.add('show')
         const hideSentForm = () => {
             formSent.classList.remove('show')
         }
         setTimeout(hideSentForm, 3000);
	} else {
		if(nameError) {
			name.classList.remove('verify')
			let help = document.querySelector(`.help-name`)
			help.classList.remove('hide')
		} 
		if(emailError) {
			email.classList.remove('verify')
			let help = document.querySelector(`.help-email`)
			help.classList.remove('hide')
		} 
		if(messageError) {
			message.classList.remove('verify')
			let help = document.querySelector(`.help-message`)
			help.classList.remove('hide')
		}
	}
})
