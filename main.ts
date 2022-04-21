input.onButtonPressed(Button.A, function () {
    if (scene == 0) {
        scene = 1
        scoreT = control.millis()
    }
    if (scene == 2) {
        basic.clearScreen()
        scene = 3
    }
})
function moveStuff () {
    for (let index = 0; index <= avoidX.length; index++) {
        if (avoidX[index] == 0 || (avoidX[index] == 1 || (avoidX[index] == 2 || (avoidX[index] == 3 || avoidX[index] == 4)))) {
            if (control.millis() > avoidT[index] + avoidS[index]) {
                avoidY[index] = avoidY[index] + 1
                avoidT[index] = control.millis()
            }
            if (avoidY[index] > 4) {
                avoidT.removeAt(index)
                avoidS.removeAt(index)
                avoidX.removeAt(index)
                avoidY.removeAt(index)
            }
            if (avoidY[index] == playerY && avoidX[index] == playerX) {
                basic.clearScreen()
                score = control.millis() - scoreT
                scene = 2
            }
        }
    }
}
function gameOver () {
    if (scene == 2) {
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 2)
        led.plot(3, 3)
        led.plot(4, 4)
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(1, 3)
        led.plot(0, 4)
        basic.pause(500)
        basic.clearScreen()
    }
    if (scene == 2) {
        led.plot(2, 1)
        led.plot(2, 3)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        basic.pause(500)
        basic.clearScreen()
    }
}
function renderStuff () {
    for (let index = 0; index <= avoidX.length; index++) {
        if (avoidX[index] == 0 || (avoidX[index] == 1 || (avoidX[index] == 2 || (avoidX[index] == 3 || avoidX[index] == 4)))) {
            led.plot(avoidX[index], avoidY[index])
        }
    }
}
function pressA () {
    if (scene == 0) {
        led.plot(0, 3)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(4, 3)
        led.plot(1, 4)
        led.plot(3, 4)
        basic.pause(500)
        basic.clearScreen()
    }
    if (scene == 0) {
        led.plot(2, 1)
        led.plot(2, 3)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        basic.pause(500)
        basic.clearScreen()
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
let playerY = 0
let playerX = 0
let scene = 0
let scoreT = 0
let score = 0
score = 0
scoreT = 0
scene = 0
let nextMove = 0
let speed = 200
let spawnRate = 2000
playerX = 2
playerY = 4
road = 0
roadB = 5
avoidX = []
avoidY = []
avoidS = []
avoidT = []
nextMove = 0
basic.forever(function () {
    if (scene == 1) {
        if (speed >= 150) {
            basic.pause(5000)
            speed += -10
        }
    }
})
// render game
basic.forever(function () {
    if (scene == 0) {
        pressA()
    }
    if (scene == 1) {
        basic.clearScreen()
        renderRoad()
        led.plot(playerX, playerY)
        renderStuff()
        moveStuff()
    }
    if (scene == 2) {
        gameOver()
    }
    if (scene == 3) {
        basic.showNumber(score)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (scene == 1) {
        basic.pause(spawnRate)
        avoidX.push(randint(0, 4))
        avoidY.push(0)
        avoidS.push(speed)
        avoidT.push(control.millis())
    }
})
basic.forever(function () {
    if (scene == 1) {
        if (spawnRate >= 500) {
            basic.pause(3000)
            spawnRate += -100
        }
    }
})
// road state change
basic.forever(function () {
    if (scene == 1) {
        road = 0
        basic.pause(speed)
        road = 1
        basic.pause(speed)
        road = 2
        basic.pause(speed)
        road = 3
        basic.pause(speed)
    }
})
// Tilt Loop
basic.forever(function () {
    if (scene == 1) {
        nextMove = 2
        if (input.rotation(Rotation.Roll) > 7 && input.rotation(Rotation.Roll) < 90) {
            playerX += 1
            if (input.rotation(Rotation.Roll) > 7 && input.rotation(Rotation.Roll) < 35) {
                nextMove = 0
            } else {
                nextMove = 1
            }
        }
        if (input.rotation(Rotation.Roll) < -7 && input.rotation(Rotation.Roll) > -90) {
            playerX += -1
            if (input.rotation(Rotation.Roll) < -7 && input.rotation(Rotation.Roll) > -35) {
                nextMove = 0
            } else {
                nextMove = 1
            }
        }
        playerX = Math.constrain(playerX, 0, 4)
        playerY = Math.constrain(playerY, 0, 4)
        if (nextMove == 0) {
            basic.pause(200)
        } else {
            basic.pause(100)
        }
    }
})
