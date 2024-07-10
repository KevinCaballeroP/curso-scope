function greeting(){
    let useName = 'Ana';
    console.log(useName);
    if (useName === 'Ana'){
        console.log(`Hello ${useName}!`);
    }
}

greeting(); // function scope es cuando solo se puede usar la variable por dentro y no global
console.log(useName); // no dejaria mostar por que esta dentro de la function