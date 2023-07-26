const InputField = document.querySelector('input');
const reamainingCharactsElement = document.getElementById('remain');

function updateChart(event) {
const enteredChart = event.target.value;
const textLength = enteredChart.length;
const maximumCharts = InputField.maxLength;

const reamainingCharacts = maximumCharts - textLength;

if(reamainingCharacts <= 5 ) {
    InputField.className = 'warning'
    reamainingCharactsElement.className = 'warning'
} else {
    InputField.className = ''
    reamainingCharactsElement.className = ''
}

reamainingCharactsElement.textContent = reamainingCharacts;

}

InputField.addEventListener('input', updateChart);