//Task 1 - Base Structure Setup.

riskDashboard = document.getElementById("riskDashboard") //Select the riskDashboard container.
if (riskDashboard) {
    console.log("riskDashboard loaded"); //Print "Risk Dashboard Loaded" to the console.
}

//Task 2 - Adding Risk Items.

function addRiskItem(riskName, riskLevel, department) {
    console.log(riskName, riskLevel, department)
};