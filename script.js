const cafeInput = document.getElementById("cafe");
const almocoInput = document.getElementById("almoco");
const jantaInput = document.getElementById("janta");
const totalDisplay = document.getElementById("total");

const inputs = [cafeInput, almocoInput, jantaInput];

inputs.forEach((input) => {
    input.addEventListener("input", updateTotal);
});

function updateTotal() {
    let total = 0;
    total += parseFloat(cafeInput.value) * 0.75;
    total += parseFloat(almocoInput.value) * 1.5;
    total += parseFloat(jantaInput.value) * 1.5;

    totalDisplay.textContent = `Total: R$ ${total.toFixed(2)}`;
}
