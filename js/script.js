const burgerBtn = document.querySelector('#burgerBtn')
const navMenu = document.querySelector('.nav__list')
const navElem = document.querySelectorAll('.nav__elem a')

burgerBtn.addEventListener('click', () => {
	navMenu.classList.toggle('active')
})

navElem.forEach((link) => {
	link.addEventListener('click', () => {
		navMenu.classList.remove('active')
	})
})

const mainbutton = document.getElementById("main-action")
mainbutton.onclick = () => {
	document.getElementById("auto").scrollIntoView({ behavior: "smooth" })
}

const buttons = document.querySelectorAll(".btnorder")
buttons.forEach((b) => {
	b.onclick = () => {
		document.getElementById("price").scrollIntoView({ behavior: "smooth" });
	}
})

const price = document.getElementById("price-action")
price.onclick = () => {
	if (document.getElementById("name").value === "") {
		alert("Заполните поле ввода имя")
	} else if (document.getElementById("phone").value === "") {
		alert("Заполните поле ввода телефон")
	} else if (document.getElementById("car").value === "") {
		alert("Заполните поле ввода машин")
	} else {
		alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время")
	}
}


