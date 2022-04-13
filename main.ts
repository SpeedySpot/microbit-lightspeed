function renderStuff () {
    for (let index = 0; index <= 4; index++) {
        led.plot(avoidX[index], avoidY[index])
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
let avoidY: number[] = []
let avoidX: number[] = []
let roadB: number = []
let road: number = []
let playerX = 2
let playerY = 4
road = 0
roadB = 5
avoidX = []
avoidY = []
let avoidS: number[] = []
basic.forever(function () {
    basic.pause(1000)
    avoidX.push(3)
    avoidY.push(1)
    avoidS.push(1)
})
// render game
basic.forever(function () {
    basic.clearScreen()
    renderRoad()
    led.plot(playerX, playerY)
    renderStuff()
})
basic.forever(function () {
	
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
    if (input.rotation(Rotation.Roll) > 30 && input.rotation(Rotation.Roll) < 90) {
        playerX += 1
    }
    if (input.rotation(Rotation.Roll) < -30 && input.rotation(Rotation.Roll) > -90) {
        playerX += -1
    }
    if (input.rotation(Rotation.Pitch) > 30 && input.rotation(Rotation.Pitch) < 90) {
        playerY += 1
    }
    if (input.rotation(Rotation.Pitch) < -30 && input.rotation(Rotation.Pitch) > -90) {
        playerY += -1
    }
    playerX = Math.constrain(playerX, 0, 4)
    playerY = Math.constrain(playerY, 0, 4)
    basic.pause(200)
})
