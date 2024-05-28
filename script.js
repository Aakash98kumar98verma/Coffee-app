
// Variable to track whether a card is clicked
let cardClicked = false;

// Function to toggle the "clicked" class on the card and enable/disable the "Total Amount" button
function toggleCard(element) {
    element.classList.toggle("clicked");
    cardClicked = !cardClicked;
    document.getElementById("btn").querySelector("button").disabled = !cardClicked;
}

// Function to calculate the total amount and display the payment details
function calculateTotal() {
    const coffeeType = document.getElementById("coffeeType").value;
    const quantity = parseInt(document.getElementById("coffeeQuantity").value);

    let perCupValue = 0;
    let discountPercentage = 0;

    // Set values based on coffee type
    switch (coffeeType) {
        case "espresso":
            perCupValue = 75;
            break;
        case "latte":
            perCupValue = 80;
            break;
        case "cappuccino":
            perCupValue = 90;
            break;
        // Add more cases if needed
    }

    // Set discount based on the clicked card
    const clickedCard = document.querySelector(".card.clicked");
    if (clickedCard) {
        switch (clickedCard.id) {
            case "gold":
                discountPercentage = 25;
                break;
            case "silver":
                discountPercentage = 15;
                break;
            case "regular":
                discountPercentage = 5;
                break;
        }
    }

    // Calculate total discount
    const totalDiscount = ((perCupValue * quantity) * discountPercentage) / 100;

    // Calculate total amount after discount
    const totalAmount = (perCupValue * quantity) - totalDiscount;

    // Display values in respective divs
    document.getElementById("perCup").textContent = perCupValue * quantity + " Rs";
    document.getElementById("discount").textContent = discountPercentage + "%";
    document.getElementById("totalDis").textContent = totalDiscount * quantity + " Rs";
    document.getElementById("total").textContent = totalAmount * quantity + " Rs";

    // Hide card-container and select-option divs
    document.getElementById("card-container").style.display = "none";
    document.getElementById("select-option").style.display = "none";

    // Show the pay div
    document.getElementById("pay").style.display = "block";
}

function showThankYou() {
    alert("Thank you! Have a great day..!");
    location.reload();
}

// Function to cancel the transaction and refresh the page
function cancelAndRefresh() {
    // Reload the current page
    location.reload();
}