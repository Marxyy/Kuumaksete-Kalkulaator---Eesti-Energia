const sliderValue = document.querySelector(".current-price");
const inputSlider = document.querySelector(".price-range");

inputSlider.oninput = () => {
	let value = inputSlider.value;
	sliderValue.textContent = value;
};
