const inputSlider = document.querySelector(".price-range");
const slideValue = document.querySelector(".current-price");
const range = document.querySelector('input[type="range"]');
const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const btn = document.querySelector(".submit-btn");
const closeBtn = document.querySelector(".popup-btn");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const solutionPv = document.querySelector(".pv");
const solutionHp = document.querySelector(".heatpump");
const solutionEw = document.querySelector(".electric-work");

const solutionOg = document.querySelector(".off-grid");
const solutionEv = document.querySelector(".ev-charging");

inputSlider.oninput = () => {
	let value = inputSlider.value;
	slideValue.textContent = value + " €";
	slideValue.style.left = value / 277 + "%";
	const min = range.min;
	const max = range.max;
	const rangeValue = range.value;

	inputSlider.style.backgroundSize =
		((rangeValue - min) * 100) / (max - min) + "% 100%";
};

btn.onclick = () => {
	container.classList.add("is-blurred");
	popup.classList.add("show-popup");
};

closeBtn.onclick = () => {
	container.classList.remove("is-blurred");
	popup.classList.remove("show-popup");
};

solutionPv.addEventListener("click", (e) => {
	e.target.classList.toggle("selected");
});
solutionHp.addEventListener("click", (e) => {
	e.target.classList.toggle("selected");
});
solutionEw.addEventListener("click", (e) => {
	e.target.classList.toggle("selected");
});
solutionOg.addEventListener("click", (e) => {
	e.target.classList.toggle("selected");
});
solutionEv.addEventListener("click", (e) => {
	e.target.classList.toggle("selected");
});
