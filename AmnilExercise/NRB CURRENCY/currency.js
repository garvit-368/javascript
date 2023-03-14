document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("form").onsubmit = () =>{
        const base = document.querySelector("#local_currency").value;
        fetch(`https://www.nrb.org.np/api/forex/v1/`)
        .then((response) => response.json())
        .then((data) =>{
            const amount = document.querySelector('#amount').value;
            const foreignCurrency = document.querySelector("#foreign_currency").value;
            const rate = data.rates[foreignCurrency];
            function convert(){
                return amount * rate;
            }
            document.querySelector("#results").innerHTML=`${amount} ${base.toUppweCase()} equal to ${foreignCurrency} ${convert().toFixed(4)}`;
        }).catch((error)=>{
            console.log("Error: ", error);
        }

        return false;
    };

})