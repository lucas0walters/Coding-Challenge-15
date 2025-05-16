//Task 1 - Base Structure Setup.

const riskDashboard = document.getElementById("riskDashboard"); //Select the riskDashboard container.
if (riskDashboard) {
    console.log("riskDashboard loaded"); //Print "Risk Dashboard Loaded" to the console.
};

//Task 2 - Adding Risk Items.

function addRiskItem(riskName, riskLevel, department) { //Write a function addRiskItem(riskName, riskLevel, department) that:
    let riskCard = document.createElement("div"); //Creates a new risk card (div)
    riskCard.setAttribute("class", `riskCard ${riskLevel}`); //Assigns a class "riskCard" to each card.

    // Create and append the risk name
    const nameElem = document.createElement("h3");
    nameElem.textContent = riskName;
    riskCard.appendChild(nameElem);

    // Create and append the risk level
    const levelElem = document.createElement("p");
    const levelLabel = document.createTextNode("Risk level: ");
    const levelUnderline = document.createElement("u");
    levelUnderline.textContent = riskLevel;
    levelElem.appendChild(levelLabel);
    levelElem.appendChild(levelUnderline);
    riskCard.appendChild(levelElem);

    // Create and append the department
    const deptElem = document.createElement("p");
    const deptLabel = document.createTextNode("Department: ");
    const deptUnderline = document.createElement("u");
    deptUnderline.textContent = department;
    deptElem.appendChild(deptLabel);
    deptElem.appendChild(deptUnderline);
    riskCard.appendChild(deptElem);

    // Resolve button
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.addEventListener("click", (event) => {
        riskDashboard.removeChild(riskCard);
        event.stopPropagation();
    });

    // Increase Risk Level button
    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "Increase Risk Level";
    increaseBtn.addEventListener("click", (event) => {
        const riskTable = {Low: "Medium", Medium: "High", High: "High"};
        const currentLevel = riskCard.classList[1];
        const newLevel = riskTable[currentLevel] || currentLevel;
        riskCard.setAttribute("class", `riskCard ${newLevel}`);
        // Update the displayed risk level text
        levelUnderline.textContent = newLevel;
        event.stopPropagation();
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