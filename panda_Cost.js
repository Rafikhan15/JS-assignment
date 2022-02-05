
//Problem 2:  How much does it cost to order different numbers of Singara, Samucha, and Jilapi.? 

function pandaCost(singara_quantity, samucha_quantity, jilapi_quantity) {

    const per_SingaraPrice = 7;
    const per_SamuchaPrice = 10;
    const per_JilapiPrice = 15;

    singara_price = singara_quantity * per_SingaraPrice;
    samucha_price = samucha_quantity * per_SamuchaPrice;
    jilapi_price = jilapi_quantity * per_JilapiPrice;

    // when user not provide any number input as a function parameter

    if (isNaN(singara_quantity, samucha_quantity, jilapi_quantity)) {
        console.log('Sir! Please enter three number for singara,samucha,jilapi');
    }
    else {
        return singara_price + samucha_price + jilapi_price;

    }

}
// when user not provide number input into the function parameter
try {
    console.log(pandaCost(1, 1, 1));
    // output: 32
} catch (error) {
    console.log('Sir! Please do not enter text.Please enter a number');
}


// 