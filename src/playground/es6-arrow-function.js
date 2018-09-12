function square(x) {
    return x*x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x*x;

console.log(squareArrow(4));

const Name = 'Mike Smith';

const NameArrow = (x) => {
    return x.split(' ')[0];
}

console.log(NameArrow(Name));

const NameArr = (x) => x.split(' ')[1];

console.log(NameArr(Name));

