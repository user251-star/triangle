

function triangle(a, b, c){
    if(a + b < c || a + c < b || c + b < a) {
        console.log('invalid');
    }

    else if (a == b && a==c && b == c ){
        console.log('equilateral');
    } 
    else if (a == b || b == c || a == c ){
        console.log('isosceles');
    }
    else {
        console.log('scalene');
    }

}
let a = prompt('Введите сторону а  ');
let b = prompt('Введите сторону b  ');
let c = prompt('Введите сторону c  ');
triangle(a, b, c);