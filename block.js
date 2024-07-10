function fruit(){
    if(true){
        var fruit1 = 'Apple'; //si es function scope
        let fruit2 = 'Kiwi'; // solo es block scope
        const fruit3 = 'pera';;// solo es block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruit();