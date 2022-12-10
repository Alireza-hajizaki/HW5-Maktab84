const $ = document;

const modalPage = $.querySelector(".modal")
const closeModalBtn = $.querySelector(".close-modal-btn")

//get aside tag necessary elements
const totalOrderedPrice = $.querySelector(".total-ordered-price-text");
const serviceChargeCost = $.querySelector(".total-service-charge-text");
const discount = $.querySelector(".total-discount-text");
const discountCodeInput = $.querySelector("input")
const discountBtn = $.querySelector(".discount-btn")
const totalPrice = $.querySelector(".total-price-tex");
const orderButton = $.querySelector(".order-btn")

const errText = $.querySelector("p")
const errTextNoneDisplay = () => {
    errText.style.display="none";
}

//get main tag necessary elements
const foodPrice = $.querySelectorAll(".food-price-number");
const numberOfFood = $.querySelectorAll(".counter-number");
const increamentNumberOfFoodBtn = $.querySelectorAll(".counter-btn-increment");
const decreamentNumberOfFoodBtn = $.querySelectorAll(".counter-btn-decrement");
const totalFoodPrice = $.querySelectorAll(".food-total-price-number");


//function for calculate total food price
const calculateFoodPrice = () => {
    for(let i = 0;i<foodPrice.length;i++){
        totalFoodPrice[i].innerText = numberOfFood[i].innerText * foodPrice[i].innerText
    }
}
calculateFoodPrice()

//function for calculate all oredered food prices
const calculateTotalOrderedPrice = () => {
    let sum = 0;
    for(let i = 0;i<totalFoodPrice.length;i++){
        sum+= parseFloat(totalFoodPrice[i].innerText)
    }
    totalOrderedPrice.innerText = sum;
}

calculateTotalOrderedPrice();

//function for calculate service charge cost
const calculateServiceChargeCost = () => {
    const serviceCharge = totalOrderedPrice.innerText / 20;
    serviceChargeCost.innerText = serviceCharge;
}

calculateServiceChargeCost()

//function for calculate total prices (ordered price,service charge cost , discount)
const calculateTotalPrice = () => {
    const total = (+totalOrderedPrice.innerText + (+serviceChargeCost.innerText));
    if(+discount.innerText>0){
        const discountValue = (discount.innerText * total) / 100
        const totalWithDiscount = total-discountValue;
        console.log(totalWithDiscount)
        totalPrice.innerText = parseInt(totalWithDiscount)
    }else{totalPrice.innerText = total}
}

calculateTotalPrice()

increamentNumberOfFoodBtn.forEach(btn=>btn.addEventListener("click",()=>{
    let number = parseInt(btn.previousElementSibling.innerText)
    btn.previousElementSibling.innerText = ++number
    calculateFoodPrice()
    calculateTotalOrderedPrice();
    calculateServiceChargeCost();
    calculateTotalPrice();
}))

decreamentNumberOfFoodBtn.forEach(btn=>btn.addEventListener("click",()=>{
    let number = parseInt(btn.nextElementSibling.innerText)
    if(number>0)btn.nextElementSibling.innerText = --number;
    calculateFoodPrice()
    calculateTotalOrderedPrice();
    calculateServiceChargeCost();
    calculateTotalPrice();
}))

//check entered discount code
discountBtn.addEventListener("click",()=>{
    if(+totalOrderedPrice.innerText>0){
        switch(discountCodeInput.value){
            case "Golden":
                discount.innerText = 30;
                discountCodeInput.value = "";
                calculateTotalPrice();
                break;
            case "Silver":
                discount.innerText = 20;
                discountCodeInput.value = "";
                calculateTotalPrice(); 
                break;
            case "Bronze":
                discount.innerText = 10;
                discountCodeInput.value = "";
                calculateTotalPrice();
                break;
            default:
                discountCodeInput.value = "";
                clearTimeout(errTextNoneDisplay)
                errText.innerText = "لطفا کد تخفیف خود را وارد کنید"
                errText.style.display = "block";
                setTimeout(errTextNoneDisplay,1500)
                break;
        }
    }else{
            clearTimeout(errTextNoneDisplay)
            errText.innerText = "اول سفارشات خودتون رو ثبت کنید" 
            errText.style.display = "block";
            setTimeout(errTextNoneDisplay,1500)
            }
})


orderButton.addEventListener("click",()=>{
    //check that user bought something
    if(+totalPrice.innerText>0){
        //show the confirmation of user orders
        modalPage.style.display = "flex";
        //reset everything
        for(let i = 0;i<foodPrice.length;i++){
            numberOfFood[i].innerText = 0;
            discount.innerText = 0;
            calculateFoodPrice()
            calculateTotalOrderedPrice();
            calculateServiceChargeCost();
            calculateTotalPrice();
        }
    }else{
            clearTimeout(errTextNoneDisplay)
            errText.innerText = "سبد خرید شما خالی است"
            errText.style.display = "block";
            setTimeout(errTextNoneDisplay,1500)
    }
})


closeModalBtn.addEventListener("click",()=>{
    modalPage.style.display = "none"
})


