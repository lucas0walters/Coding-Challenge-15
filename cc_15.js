//Task 1 - Base Structure Setup.

const riskDashboard = document.getElementById("riskDashboard"); //Select the riskDashboard container.
if (riskDashboard) {
    console.log("riskDashboard loaded"); //Print "Risk Dashboard Loaded" to the console.
};

//Task 2 - Adding Risk Items.

function addRiskItem(riskName, riskLevel, department) { //Write a function addRiskItem(riskName, riskLevel, department) that:
    let riskCard = document.createElement("div"); //Creates a new risk card (div)
    riskCard.innerHTML = `<h3>${riskName}</h3><p>Risk level: <u>${riskLevel}</u><p>Department: <u>${department}</u></p>`;
    riskCard.setAttribute("class", `riskCard ${riskLevel}`); //Assigns a class "riskCard" to each card.
    riskDashboard.appendChild(riskCard); //Appends it to the riskDashboard.
};

//Test Case: Task 2

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");