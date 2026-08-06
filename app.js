const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const Dropdowns = document.querySelectorAll(".Dropdown select");

const btn = document.querySelector("form button");

const fromcurr = document.querySelector(".From select");

const tocurr = document.querySelector(".To select");

const msg = document.querySelector(".Msg");

for(let select of Dropdowns){
    for(currcode in countryList){
        let Newopt = document.createElement("option");
        Newopt.innerText = currcode;
        Newopt.value = currcode;
        select.append(Newopt);
        if(select.name === "From" && currcode === "USD"){
            Newopt.selected = "selected"
        }else if(select.name === "To" && currcode === "INR"){
            Newopt.selected = "selected"
        }
    }
    
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}

const updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

const updateExchangeRate = async () => {
    let amt = document.querySelector(".Amount input");
    let amtval = amt.value;
    if(amtval === "" || amtval < 1){
        amtval = 1;
        amt.value = "1";
    }

    const fromVal = fromcurr.value.toLowerCase();
    const toVal = tocurr.value.toLowerCase();
    const finalURL = `${URL}/${fromVal}.json`;

    try {
        let response = await fetch(finalURL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        let rate = data[fromVal][toVal];
        let finalAmount = amtval * rate;
        msg.innerText = `${amtval} ${fromcurr.value} = ${finalAmount.toFixed(2)} ${tocurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate.";
        console.error(error);
    }
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});