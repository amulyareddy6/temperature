document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            result.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            result.innerText = "Please enter a valid temperature in Celsius.";
        }
    });
});
