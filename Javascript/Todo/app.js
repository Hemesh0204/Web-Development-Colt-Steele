let userinput = prompt('Please enter the action you want to perform');
let tasks = [];
while (userinput != 'q') {
    if (userinput === 'add'){
        let value_to_insert = prompt("Please enter the task");
        tasks.push(value_to_insert);
    }

    else if (userinput === 'view'){
        console.log('********************');
        for (let i = 0; i < tasks.length; i++){
            console.log(`${i} : ${tasks[i]}`);
        }
        console.log('********************');
    }

    else if (userinput === 'delete'){
        if (tasks.length === 0){
            console.log("Nothing to delete please add some thing");
        }
        else {
            let index = prompt("Please enter the index");
            const removed = tasks.splice(index, 1);
            console.log("Value Deleted!");
        }
    }

    userinput = prompt('Please enter the action you want to perform');
    
}
console.log('you have quit');