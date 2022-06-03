let xhReq = new XMLHttpRequest();
xhReq.open("GET", "./data.json", false);
xhReq.send(null);
let data = JSON.parse(xhReq.responseText);
let pvData = data[0];
let heatpumpData = data[1];
let electricWorkData = data[2];
let offGridData = data[3];
let evChargingData = data[4];

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
const solutions = document.querySelectorAll(".check");
const interest = document.querySelector(".interest-sum");
const contractSum = document.querySelector(".contract-sum");
const managementFee = document.querySelector(".management-fee-sum");
const period = document.querySelector(".period-sum");
const projectCost = document.querySelector(".project-cost-sum");
const pricePerMonth = document.querySelector(".price-per-month");
// const inputPeriod = document.querySelectorAll("option");
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

solutions.forEach((solution) => {
	solution.addEventListener("change", () => {
		if (solution.value === "pv") {
			userSum.textContent = `${pvData.defaultSum} €`;
			range.value = pvData.defaultSum;
			inputSlider.style.backgroundSize = "20% 100%";
			interest.textContent = `${pvData.interest} %`;
			contractSum.textContent = `${pvData.contractFee} €`;
			managementFee.textContent = `${pvData.monthlyPayment} €`;
			period.textContent = `${pvData.defaultPeriod} kuud`;
			projectCost.textContent = `${pvData.defaultSum} €`;
		} else if (solution.value === "heatpump") {
			userSum.textContent = `${heatpumpData.defaultSum} €`;
			range.value = heatpumpData.defaultSum;
			inputSlider.style.backgroundSize = "5% 100%";
			interest.textContent = `${heatpumpData.interest} %`;
			contractSum.textContent = `${heatpumpData.contractFee} €`;
			managementFee.textContent = `${heatpumpData.monthlyPayment} €`;
			period.textContent = `${heatpumpData.defaultPeriod} kuud`;
			projectCost.textContent = `${heatpumpData.defaultSum} €`;
		} else if (solution.value === "electric-work") {
			userSum.textContent = `${electricWorkData.defaultSum} €`;
			range.value = electricWorkData.defaultSum;
			inputSlider.style.backgroundSize = "5% 100%";
			interest.textContent = `${electricWorkData.interest} %`;
			contractSum.textContent = `${electricWorkData.contractFee} €`;
			managementFee.textContent = `${electricWorkData.monthlyPayment} €`;
			period.textContent = `${electricWorkData.defaultPeriod} kuud`;
			projectCost.textContent = `${electricWorkData.defaultSum} €`;
		} else if (solution.value === "off-grid") {
			userSum.textContent = `${offGridData.defaultSum} €`;
			range.value = offGridData.defaultSum;
			inputSlider.style.backgroundSize = "20% 100%";
			interest.textContent = `${offGridData.interest} %`;
			contractSum.textContent = `${offGridData.contractFee} €`;
			managementFee.textContent = `${offGridData.monthlyPayment} €`;
			period.textContent = `${offGridData.defaultPeriod} kuud`;
			projectCost.textContent = `${offGridData.defaultSum} €`;
		} else if (solution.value === "ev-charging") {
			userSum.textContent = `${evChargingData.defaultSum} €`;
			range.value = evChargingData.defaultSum;
			inputSlider.style.backgroundSize = "5% 100%";
			interest.textContent = `${evChargingData.interest} %`;
			contractSum.textContent = `${evChargingData.contractFee} €`;
			managementFee.textContent = `${evChargingData.monthlyPayment} €`;
			period.textContent = `${evChargingData.defaultPeriod} kuud`;
			projectCost.textContent = `${evChargingData.defaultSum} €`;
		}
	});
});
