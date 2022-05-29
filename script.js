const inputSlider = document.querySelector(".price-range");
const slideValue = document.querySelector(".current-price");

inputSlider.oninput = () => {
	let value = inputSlider.value;
	slideValue.textContent = value + " €";
	slideValue.style.left = value / 273 + "%";
};
