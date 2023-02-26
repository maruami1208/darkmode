let btnDarkMode = document.querySelector("#toggle");
let body = document.querySelector("html");
btnDarkMode.addEventListener("click", (e) => {
	if (btnDarkMode.checked) {
		body.classList.remove("all");
		body.classList.add("dark");
	} else {
		body.classList.add("all");
		body.classList.remove("dark");
	}
});
