document.addEventListener("DOMContentLoaded", () => {
    // Get references to all necessary DOM elements
    const couponApplyButton = document.getElementById("coupon-apply-button");  // Button for applying coupon
    const couponCodeInput = document.getElementById("coupon-code");            // Input field where user types coupon code
    const totalAmount = document.getElementById("total-amount");               // Span showing original total amount
    const shippingAmount = document.getElementById("shipping-amount");         // Span showing shipping cost
    const finalAmount = document.getElementById("final-amount");               // Span showing final amount after discount
    const discountAmount = document.getElementById("discount-amount");         // Span showing discount amount
    const couponDiscount = document.getElementById("coupon-discount");         // Paragraph or container for showing coupon status

    // Define available coupon codes and their corresponding discount amounts
    const coupons = {
        "10OFF": 10,
        "20OFF": 20,
        "30OFF": 30,
        "40OFF": 40,
        "50OFF": 50,
        "60OFF": 60,
        "70OFF": 70,
        "80OFF": 80,
        "90OFF": 90,
        "100OFF": 100,
    }

    // Add event listener for when the user clicks the "Apply Coupon" button
    couponApplyButton.addEventListener("click", () => {
        // Convert entered coupon code to uppercase to match keys in the `coupons` object
        const couponCode = couponCodeInput.value.toUpperCase();

        // Look up the discount amount from the `coupons` object
        const discount = coupons[couponCode];

        // If a valid coupon code was entered
        if (discount) {
            // Parse and calculate all relevant amounts
            const total = Number(totalAmount.innerHTML.replace("$", ""));       // Convert total amount to number
            const shipping = Number(shippingAmount.innerHTML.replace("$", "")); // Convert shipping amount to number
            const final = total + shipping - discount;                          // Calculate the final amount after discount

            // Update the DOM elements with the new calculated values
            totalAmount.innerHTML = "$" + total.toFixed(2);                     // Ensure total is formatted to 2 decimal places
            shippingAmount.innerHTML = "$" + shipping.toFixed(2);               // Same for shipping
            finalAmount.innerHTML = "$" + final.toFixed(2);                     // Update final amount after applying discount
            discountAmount.innerHTML = "-$" + discount.toFixed(2);              // Show discount as a negative amount

            // Unhide discount info elements if hidden
            couponDiscount.classList.remove("hidden");
            discountAmount.classList.remove("hidden");

        } else {
            // Show alert if coupon code is not found
            alert("Invalid coupon code");
        }
    });
});
