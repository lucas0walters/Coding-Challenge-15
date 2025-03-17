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

    //Task 3 - Removing Risk Items.
    const resolveBtn = document.createElement("button"); //A resolve button
    resolveBtn.textContent = "Resolve"; //sets the text for the button
    resolveBtn.addEventListener("click", (event) => { //Adding an event listener to the button
        riskDashboard.removeChild(riskCard) //removeChild ticket from riskDashboard
        event.stopPropagation(); //Use stopPropagation() in the "Resolve" button’s event handler to prevent bubbling.
    });

    //Task 5
    const increaseBtn = document.createElement("button"); //An increase risk level button
    increaseBtn.textContent = "Increase Risk Level"; //sets the text for the button
    increaseBtn.addEventListener("click", (event) => { //Adding an event listener to the button
        riskTable = {Low: "Medium",Medium: "High",High: "High"}
        riskCard.setAttribute("class", `riskCard ${riskTable[riskCard.classList[1]]}`)
        event.stopPropagation(); //Use stopPropagation() in the increase button’s event handler to prevent bubbling.
    });

    riskCard.appendChild(increaseBtn);
    riskCard.appendChild(resolveBtn); //adds the resolve button using appendChild
    riskDashboard.appendChild(riskCard); //Appends it to the riskDashboard.
};

//Test Cases

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR");

// Click inside a risk card does not trigger a dashboard-wide event.