//Вызов формы
let form = document.getElementById("form");
let btn = document.getElementsByClassName("contact__button")[0];
let btn1 = document.getElementsByClassName("contact__button")[1];
let close = document.getElementById("close");

btn.onclick = function() {
	form.style.display = "flex";
	history.pushState({page: 2}, "title 2", "?Form");
}
btn1.onclick = function() {
	form.style.display = "flex";
	history.pushState({page: 2}, "title 2", "?Form");
}
close.onclick = function() {
	form.style.display = "none";
	history.pushState({page: 2}, "title 2", "?Home");
}

//History API
addEventListener("popstate",function(e){
    form.style.display = "none";
    history.pushState({page: 1}, "title 1", "?Home");
}, true);

//LocalStorage
if (window.localStorage) {
	//Сохраняем данные input, textarea
	var elements = document.querySelectorAll('[name]');
	for (var i = 0, length = elements.length; i < length; i++) {
		(function(element) {
			var name = element.getAttribute('name');
			element.value = localStorage.getItem(name) || '';
			element.onkeyup = function() {
				localStorage.setItem(name, element.value);
			};
		})(elements[i]);
	}
}