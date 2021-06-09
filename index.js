// Code your solution in this file!
//1
const headQuarters = 42
const blockFeet = 264

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
        return (pickupLocation-headQuarters);
    } else if (pickupLocation < 42) {
        return (headQuarters - pickupLocation);
    }
}

//2
function distanceFromHqInFeet (num1) {
    return (distanceFromHqInBlocks(num1)* blockFeet);
}

//3
function distanceTravelledInFeet (startBlock, endBlock) {
    //Calculates the number of feet a passanger travels 
    //given a start block and end block. Uses block = 264 feet
    if (startBlock > endBlock) {
        return ((startBlock-endBlock)*blockFeet); }
    else if (startBlock < endBlock) {
        return ((endBlock-startBlock)*blockFeet); }
}

//4
function calculatesFarePrice (start, destination) {
    let travel = distanceTravelledInFeet (start, destination)
    if (travel < 400) {
        return 0;
    }
    
    else if (travel > 400 && travel < 2000) {
        return (travel-400) * .02;
    }

    else if (travel > 2001 && travel <2500) {
        return 25;
    }

    else if (travel > 2500) {
        return "cannot travel that far";
}


//function calculatesFarePrice(start, destination) {
   //let t = distanceTravelledInFeet(start, destination)
   //let d = t - 400
   //let f
   //if (t <= 400) {
     //   f = 0
   //}
   //else if (d > 400 && d < 2000) {
     //   f = t * .02
   //}
   //else if (t > 2000) {
     //  f = 25
   }
   //else if (t > 2500) {
     //  return "cannot travel that far"
   //}
   //return f
//} 