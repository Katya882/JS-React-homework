const users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,340.50",
        "name": "Sophia Mitchell",
        "gender": "female",
        "phone": "+1 (810) 456-7890",
        "address": "112 Maple Street, Portland, Maine, 04101"
    },
    {
        "index": 1,
        "isActive": false,
        "balance": "$1,892.30",
        "name": "Liam Anderson",
        "gender": "male",
        "phone": "+1 (923) 555-1122",
        "address": "224 Ocean Drive, Miami, Florida, 33139"
    },
    {
        "index": 2,
        "isActive": true,
        "balance": "$4,102.80",
        "name": "Olivia Carter",
        "gender": "female",
        "phone": "+1 (756) 678-9901",
        "address": "345 Pine Avenue, Seattle, Washington, 98101"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$3,475.20",
        "name": "Noah Thompson",
        "gender": "male",
        "phone": "+1 (890) 234-5678",
        "address": "786 Sunset Boulevard, Los Angeles, California, 90028"
    },
    {
        "index": 4,
        "isActive": false,
        "balance": "$2,764.15",
        "name": "Emma Brown",
        "gender": "female",
        "phone": "+1 (671) 999-4433",
        "address": "981 River Road, Austin, Texas, 73301"
    },
    {
        "index": 5,
        "isActive": true,
        "balance": "$1,523.45",
        "name": "James Wilson",
        "gender": "male",
        "phone": "+1 (345) 666-7899",
        "address": "567 Park Lane, Denver, Colorado, 80203"
    }
];

function convertBalance(balance){
    return Number(balance.slice(1).split(",").join(""))
}

const usersMo2 = users.filter(function (user){
    return convertBalance(user.balance) > 2000;
});

const numberPhone = usersMo2.map(function (user){
    return user.phone;
});

const totalBalance = users.reduce(function (sum, user){
    return sum + convertBalance(user.balance);
}, 0);

console.log("Phone numbers of users with balance > $2000:");
console.log(numberPhone);

console.log("Total sum of all user balances:");
console.log("$" + totalBalance.toFixed(2));


const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

function convert(obj){
    const result = {};

    function extract(currentObj){
        Object.entries(obj).forEach(function ([key,value]){

            if (typeof value === "object" && value !== null){
                extract(value);
            }else {
                result[key] = value;
            }
        })
    }

    extract(obj);

    return result;
}




