function moveStuff () {
    for (let index = 0; index <= avoidX.length; index++) {
        if (avoidX[index] == 0 || (avoidX[index] == 1 || (avoidX[index] == 2 || (avoidX[index] == 3 || avoidX[index] == 4)))) {
            if (control.millis() > avoidT[index] + avoidS[index]) {
                avoidY[index] = avoidY[index] + 1
                avoidT[index] = control.millis()
            }
        }
    }
}
function renderStuff () {
    for (let index = 0; index <= avoidX.length; index++) {
        if (avoidX[index] == 0 || (avoidX[index] == 1 || (avoidX[index] == 2 || (avoidX[index] == 3 || avoidX[index] == 4)))) {
            led.plot(avoidX[index], avoidY[index])
        }
    }
}
function renderRoad () {
    if (road == 0) {
        led.plotBrightness(0, 0, roadB)
        led.plotBrightness(0, 1, roadB)
        led.plotBrightness(0, 4, roadB)
        led.plotBrightness(4, 0, roadB)
        led.plotBrightness(4, 1, roadB)
        led.plotBrightness(4, 4, roadB)
    }
    if (road == 1) {
        led.plotBrightness(0, 1, roadB)
        led.plotBrightness(0, 2, roadB)
        led.plotBrightness(4, 1, roadB)
        led.plotBrightness(4, 2, roadB)
    }
    if (road == 2) {
        led.plotBrightness(0, 2, roadB)
        led.plotBrightness(0, 3, roadB)
        led.plotBrightness(4, 2, roadB)
        led.plotBrightness(4, 3, roadB)
    }
    if (road == 3) {
        led.plotBrightness(0, 0, roadB)
        led.plotBrightness(0, 3, roadB)
        led.plotBrightness(0, 4, roadB)
        led.plotBrightness(4, 0, roadB)
        led.plotBrightness(4, 3, roadB)
        led.plotBrightness(4, 4, roadB)
    }
}
let avoidT: number[] = []
let avoidS: number[] = []
let avoidY: number[] = []
let avoidX: number[] = []
let roadB = 0
let road = 0
let playerX = 2
let playerY = 4
road = 0
roadB = 5
avoidX = []
avoidY = []
avoidS = []
avoidT = []
basic.forever(function () {
    basic.pause(2000)
    avoidX.push(randint(0, 4))
    avoidY.push(0)
    avoidS.push(200)
    avoidT.push(control.millis())
})
// render game
basic.forever(function () {
    basic.clearScreen()
    renderRoad()
    led.plot(playerX, playerY)
    renderStuff()
    moveStuff()
})
// road state change
basic.forever(function () {
    road = 0
    basic.pause(200)
    road = 1
    basic.pause(200)
    road = 2
    basic.pause(200)
    road = 3
    basic.pause(200)
})
// Tilt Loop
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 10 && input.rotation(Rotation.Roll) < 90) {
        playerX += 1
    }
    if (input.rotation(Rotation.Roll) < -10 && input.rotation(Rotation.Roll) > -90) {
        playerX += -1
    }
    playerX = Math.constrain(playerX, 0, 4)
    playerY = Math.constrain(playerY, 0, 4)
    basic.pause(200)
})
