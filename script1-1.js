let b = 5;
for ( let i = 1; i <= b ; i++ ) {
    let str = '* ';
    let space = '  ';
    console.log(space.repeat((b-i)) + str.repeat((2* i)-1));
}

let d = 5;
for ( let i = 1 ; i >= d ; i++ ) {
    let str = "* ";
    console.log(str.repeat(i));
}

let n = 5;
for ( let i = n ; i >= 1; i-- ) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat(n-i) + str.repeat((2* i)-1));
}

/*
let a = 5;
for ( let i = 1; i <= a; i++ ) {
    let str = '* ';
    console.log(str.repeat(i));
}

let m = 5;
for ( let i = m; i >= 1; i--) {
    let str = '* ';
    console.log(str.repeat(i));
}
*/
