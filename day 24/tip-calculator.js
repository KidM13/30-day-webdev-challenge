document.addEventListener("DOMContentLoaded",()=>{
    const billInput = document.getElementById("bill");
    const tipInput = document.getElementById("tip");
    const tipAmountSpan = document.getElementById("tip-amount");
    const totalSpan = document.getElementById("total");
    const calculateBtn = document.getElementById("calculate");
    calculateBtn.addEventListener("click", () =>{
        const bill = parseFloat(billInput.value);
        const tipPercent = parseFloat(tipInput.value);
        if (isNaN(bill) || isNaN(tipPercent))
            return;
        const tipAmount = bill * (tipPercent /100);
        const totalAmount = bill + tipAmount;

        tipAmountSpan.textContent = tipAmount.toFixed(2);
        totalSpan.textContent = totalAmount.toFixed(2);
    });
});