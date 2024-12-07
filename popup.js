document.getElementById('calculateBtn').addEventListener('click', function() {
    // Input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value); // Annual interest rate
    const loanTenure = parseFloat(document.getElementById('loanTenure').value); // Loan tenure in months

    // Input validation
    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTenure)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    // Calculate monthly interest rate and EMI
    const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert annual interest rate to monthly
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / 
                (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    // Calculate total payment and total interest
    const totalPayment = emi * loanTenure;
    const totalInterest = totalPayment - loanAmount;

    // Display results
    document.getElementById('emiResult').textContent = emi.toFixed(2);
    document.getElementById('totalInterestResult').textContent = totalInterest.toFixed(2);
    document.getElementById('totalPaymentResult').textContent = totalPayment.toFixed(2);
});
