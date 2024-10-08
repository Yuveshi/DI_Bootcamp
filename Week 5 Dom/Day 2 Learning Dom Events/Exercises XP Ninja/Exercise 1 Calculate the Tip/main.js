function calculateTip() {
    // Get the values from the form inputs
    let billAmount = document.getElementById("billAmt").value;
    let serviceQuality = document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("numOfPeople").value;

    // Validate input
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values for the bill amount and service quality.");
        return; // Stop the function
    }

    // Check if numberOfPeople is empty or less than 1
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none"; // Hide the "each" span
    } else {
        document.getElementById("each").style.display = "block"; // Show the "each" span
    }

    // Calculate the tip per person
    let total = (billAmount * serviceQuality) / numberOfPeople;
    total = total.toFixed(2); // Round to 2 decimal places

    // Display the total tip
    document.getElementById("totalTip").style.display = "block"; // Make totalTip div visible
    document.getElementById("tip").textContent = total; // Show the total tip amount
}

// Add event listener to the button
document.getElementById("calculate").onclick = function () {
    calculateTip();
};
