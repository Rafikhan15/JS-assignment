
// Problem 4: Create a array and (find first odd Friend string lenght name to display).

const friendList = ['hasane', 'billal', 'sarowar', 'shuvo', 'shifat', 'tonmoy'];

function oddFriend(friendList) {

    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].length % 2 != 0) {

            return friendList[i];
        }


    }


}

console.log(oddFriend(friendList));
// output: sarowar

// 