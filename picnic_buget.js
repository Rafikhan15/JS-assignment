
// Problem 3: ( Picnic Buget predict ) create picnicBudget function and using error handle.



function picnicBudget(people) {
    // when user not provide any number input as a function parameter
    if (isNaN(people)) {
        console.log('Sir! Please enter number');
    }

    first_100_people_taka = 5000;
    second_200_people_taka = 4000;
    third_rest_people_taka = 3000;
    // First 100 people picnic cost
    if (people <= 100) {
        const first_100_taka = people * first_100_people_taka;
        return first_100_taka;
    }
    // First 100 people and 100+ more and less than 200 people picnic cost
    else if (people <= 200) {
        const first_100_taka = 100 * first_100_people_taka;
        const rest_people = people - 100;
        const second_200_taka = rest_people * second_200_people_taka;
        const total_taka = first_100_taka + second_200_taka;

        return total_taka;
    }
    //  200 people and 200+ more and geater than 200 people picnic cost
    else {
        const first_100_taka = 100 * first_100_people_taka;
        const second_200_taka = 100 * second_200_people_taka;
        const rest_people = people - 200;
        const rest_taka = rest_people * third_rest_people_taka;

        return first_100_taka + second_200_taka + rest_taka;


    }


}
// when user not provide number input a into the function parameter

try {
    console.log(picnicBudget(120));
    // output:580000
} catch (error) {
    console.log('Sir! Please do not enter text.Please enter a number');
}



// 