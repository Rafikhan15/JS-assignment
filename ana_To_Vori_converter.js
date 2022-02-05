
// Problem 1: (Ana To Vori converter) using anaToVori function error handing.

function anaToVori(ana) {
    // when user not provide input as a function parameter
    if (isNaN(ana)) {
        console.log('Sir! Please enter a number for Ana To Vori convertion');
    }
    else {
        return ana / 16;

    }


}

// when user not provide input a number into the function parameter

try {
    console.log(anaToVori(32));
    // output: 2
} catch (error) {
    console.log('Sir! Please Enter a Vaild Number');
}



// 



