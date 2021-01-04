//Climber Function


function climber(steps){
    let level = 0;
    let upcounter = 0;
    let downcounter = 0;
    let uparray = [];
    let downarray = [];

    for (var i=0; i<steps.length; i++){
        if (steps[i] == 'up'){
            level ++;
            upcounter ++;
        }
        else {
            level --;
            downcounter ++;
        }

        // if (i > 0){
        //     if (steps[i] != steps[i-1]){
                if (steps[i] == ' up'){
                    downarray.push(downcounter); 
                } else {
                    uparray.push(upcounter);
                }
            }



    console.log(`saat ini berada di level: ${level}`);

    if (upcounter > 0) uparray.push(upcounter);
    if (downcounter > 0) downarray.push(downcounter);

    // callback function for biggestInt - function can be referred down below`
    let biggeststepup = biggestInt(uparray); 
    let biggeststepdown = biggestInt(downarray);

    if (biggeststepup > biggeststepdown) console.log(`step berurut terbanyak adalah kenaikan, sebanyak: ${biggeststepup}`);
    else if (biggeststepup < biggeststepdown) console.log(`step berurut terbanyak adalah penurunan, sebanyak: ${biggeststepdown}`);
    else console.log(`step berurut terbanyak adalah sebanding, sebanyak: ${biggeststepdown}`);
}

// to define function for biggestInt
function biggestInt(array){
    let max = array[0];
    for (var i=0; i<array.length; i++){
        if (max < array[i]) max = array[i];
    }
    return max;
}

climber(['up','up', 'down', 'down', 'down', 'up']);
climber(['up', 'up', 'down', 'down', 'up', 'up', 'up']);
climber(['up', 'up', 'down', 'down', 'up', 'up','down', 'down']); 