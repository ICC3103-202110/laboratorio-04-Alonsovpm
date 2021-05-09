var prompt = require('prompt-sync')();

const view = counter =>{
    let string = `count: ${counter}\n\n(+) (-)\n\n\n(q) for quit\n`;
    return string;
}

const update = (msg, counter) =>{
    if(msg === "+"){
        return counter + 1;
    }
    if(msg === "-"){
        return counter - 1;
    }
}

const app = counter =>{
    while(true){
        const currentView = view(counter);
        console.clear();
        console.log(view(counter));
        const msg = prompt("What would you do? ");
        counter=update(msg, counter);
        if (msg === "q"){
            break;
        }
    }
}

app(0);