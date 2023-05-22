radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
    	
    } else if (receivedString == "B") {
    	
    } else if (receivedString == "C") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
        moveMotorZIP.show()
    } else if (receivedString == "D") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
        moveMotorZIP.show()
    } else if (receivedString == "E") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        moveMotorZIP.show()
    } else if (receivedString == "F") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
        moveMotorZIP.show()
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "MA") {
        if (value > 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else if (value < 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        } else {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
        }
    } else if (name == "MB") {
        if (value > 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else if (value < 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        } else {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
        }
    }
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(1)
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
