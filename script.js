const inputSlider = document.querySelector(".price-range");
const slideValue = document.querySelector(".current-price");
const range = document.querySelector('input[type="range"]');
const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const btn = document.querySelector(".submit-btn");
const closeBtn = document.querySelector(".popup-btn");
const pv = document.querySelector("#pv");
const heatpump = document.querySelector("#heatpump");
const electricWork = document.querySelector("#electric-work");
const offGrid = document.querySelector("#off-grid");
const evCharging = document.querySelector("#ev-charging");
const userSum = document.querySelector(".current-price");
const minValue = document.querySelector(".min-value");
const maxValue = document.querySelector(".max-value");
const defaultValue = inputSlider.value;

inputSlider.oninput = () => {
	let value = inputSlider.value;
	slideValue.textContent = value + " €";
	// slideValue.style.left = value / 260 + "%";
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
