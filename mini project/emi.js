let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100 ;

const displayChart = () => {
    const ctx = document.getElementById("myChart").getContent("2d");
    const myChart = new Chart (ctx, {
        type: "bar" , 
        data: {

        }
    })
}

const updateData = () => {

};



