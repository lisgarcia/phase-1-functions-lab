// Code your solution in this file!
const hqLocStreet=42
const feetPerBlock= 264
const pricePerFoot= 0.02

function distanceFromHqInBlocks(startingLocation) {
    return (Math.abs(startingLocation-hqLocStreet))
}
//distanceFromHqInBlocks(43)

function distanceFromHqInFeet (startingLocation) {
    return (distanceFromHqInBlocks(startingLocation) * feetPerBlock)
}
distanceFromHqInFeet(50)

function distanceTravelledInFeet (start, destination) {
    return ((Math.abs(start-destination)*feetPerBlock))
}

function calculatesFarePrice (start, destination) {
    let distanceTraveled= distanceTravelledInFeet(start, destination)

    if (distanceTraveled <400) 
            return 0
    
    else if (distanceTraveled <2000 === distanceTraveled >400 ); 
        return ((distanceTraveled-400)*pricePerFoot) 
    
    // else if (distanceTraveled > 2000 === 2500 > distanceTraveled); 
    //     return 25
    
    // else if (distanceTraveled > 2500); 
    //     return 'cannot travel that far'
    
}
console.log(calculatesFarePrice(52, 48))






































// const hqLocStreet= 42
// const blocksToFeet = 264
// // 1
// function distanceFromHqInBlocks (custLoc) {
//     return Math.abs(custLoc - hqLocStreet)
// }
// distanceFromHqInBlocks(38)

// //2
// function distanceFromHqInFeet (dist) {
//     return (distanceFromHqInBlocks(dist)*blocksToFeet)
// }
// distanceFromHqInFeet(43)

// //3
// function distanceTravelledInFeet (start, destination) {
//     return (Math.abs(start-destination))*blocksToFeet
// }
// distanceTravelledInFeet(34, 28)

// //4
// function calculatesFarePrice (start, destination) {
// let distTrav= ((Math.abs(start-destination))*blocksToFeet)
//     if (distTrav<400) {
//         return (0*distTrav)
//     }
//     else if (distTrav > 400 === distTrav< 2000)
//         return ((distTrav-400)*.02)
//     else if (distTrav >2000 === distTrav<2500)
//         return 25
//     else if (distTrav>2500)
//         return "cannot travel that far"
// }
// calculatesFarePrice(34, 32)