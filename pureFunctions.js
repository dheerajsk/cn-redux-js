
// pure function
function sum(a, b){
    console.log(a+b);
}

sum(2,3) // 5

const c=10;

// Impure function
function sum(a, b){
    console.log(a+b+c);
}

sum(2,3) // 15