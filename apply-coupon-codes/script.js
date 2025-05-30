document.addEventListener("DOMContentLoaded", () => {
    const couponApplyButton = document.getElementById("coupon-apply-button");  // this is the button element for applying the coupon
    const couponCodeInput = document.getElementById("coupon-code");  // this is the input element for the coupon code
    const totalAmount = document.getElementById("total-amount");  // this is a span element where the total amount will be displayed
    const shippingAmount = document.getElementById("shipping-amount");  // this is a span element where the shipping amount will be displayed
    const finalAmount = document.getElementById("final-amount");  // this is a span element where the final amount will be displayed
    const discountAmount = document.getElementById("discount-amount");  // this is a span element where the discount amount will be displayed
    const couponDiscount = document.getElementById("coupon-discount");  // this is a paragraph element

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

    couponApplyButton.addEventListener("click", () => {
        const couponCode = couponCodeInput.value.toUpperCase();
        const discount = coupons[couponCode];
        if(discount) {
            const total = Number(totalAmount.innerHTML.replace("$", ""));
            const shipping = Number(shippingAmount.innerHTML.replace("$", ""));
            const final = total + shipping - discount;
            totalAmount.innerHTML = "$" + total.toFixed(2);
            shippingAmount.innerHTML = "$" + shipping.toFixed(2);
            finalAmount.innerHTML = "$" + final.toFixed(2);
            discountAmount.innerHTML = "-$" + discount.toFixed(2);
            couponDiscount.classList.remove("hidden");
            discountAmount.classList.remove("hidden");
        } else {
            alert("Invalid coupon code");
        }
    })
    
})