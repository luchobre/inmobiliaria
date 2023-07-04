//** NAV IN RESPONSIVE */

const toggleButton = document.getElementById("toggle-button");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", function () {
	menu.classList.toggle("show");

	if (menu.classList.contains("show")) {
		gsap.fromTo(
			menu,
			{ opacity: 0, y: -20 },
			{ delay: 0.5, duration: 1, opacity: 1, y: 0 }
		);
	} else {
		gsap.to(menu, { duration: 1, opacity: 0, y: -20 });
	}
});

menu.addEventListener("click", function (event) {
	if (event.target.tagName === "A") {
		menu.classList.remove("show");
	}
});
