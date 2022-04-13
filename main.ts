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
let roadB = 0
let road = 0
let playerX = 0
let playerY = 0
road = 0
roadB = 1
basic.forever(function () {
	
})
basic.forever(function () {
    basic.clearScreen()
    renderRoad()
    led.plot(playerX, playerY)
})
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
