function greeting(){
    let username = 'oscar';

    function displayUsurName(){
        return `hello ${username}`;
    }
    return displayUsurName;
}

const g = greeting();
console.log(g);
console.log(g());