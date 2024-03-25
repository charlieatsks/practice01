let n = 16;

for ( let i = n ; i >= 1; i=i-3 ) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat(n-i) + str.repeat(i));

}


let m = 5;
for ( let i = m; i >= 1; i--) {
    let str = '* ';
    console.log(str.repeat(i));
}


let a = 6;
for ( let i = 1; i <= a; i++ ) {
    let str = '* ';
    console.log(str.repeat(i));
}

let b = 5;
for ( let i = 1; i <= b ; i++ ) {
    let str = '* ';
    let space = '  ';
    console.log(space.repeat((b-i)) + str.repeat(i));
}


/*
const items = ['sks', 'shlok', 'sunny', 'abhi', 'charlie', 'phoyam', 'sk', 'cd', 'dani'];

for (let i = items.length - 1 ; i >= 0; i-- ) {

    console.log(`${i+1} . ${items[i] }`);
}
*//*

for ( let outer = 0; outer < 2 ; outer += 1 ) {
    for ( let inner = 0 ; inner < 3 ; inner += 1 ) {
        for ( let innerinner = 0 ; innerinner < 3 ; innerinner += 1 ) {
            console.log (`${outer} - ${inner} - ${innerinner} `);
        }
    }
}

for ( let outer = 0; outer < 2 ; outer += 1 ) {
    for ( let inner = 0 ; inner < 3 ; inner += 1 ) {
            console.log (`${outer} - ${inner} `);
    }
}

*/
