let countEl = document.getElementById("count-El")
let awayCountEl = document.getElementById("awayCount-El")

let count = 0

function onePoint(){
    count += 1
    countEl.textContent = count
    console.log(count)
}

function twoPoints(){
    count += 2
    countEl.textContent = count
    console.log(count)
}

function threePoints(){
    count += 3
    countEl.textContent = count
    console.log(count)
}

let awayCount = 0
function onePointAway(){
    awayCount += 1
    awayCountEl.textContent = awayCount
    console.log(awayCount)
}

function twoPointsAway(){
    awayCount += 2
    awayCountEl.textContent = awayCount
    console.log(awayCount)
}

function threePointsAway(){
    awayCount += 3
    awayCountEl.textContent = awayCount
    console.log(awayCount)
}