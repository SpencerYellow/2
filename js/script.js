let chooseBtn = document.getElementById('choose'),
	recieveBtn = document.getElementById('recieve'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Децствительно все!"
};

function out() {
	heading.textContent = "Все включено!"
}

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function(){
	heading.textContent = "Все включено!"
});

recieveBtn.addEventListener('click', function() {
	modal.style.display = "block"
});

close.addEventListener('click', function() {
	modal.style.display = "none"
});


