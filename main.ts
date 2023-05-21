radio.onReceivedString(function (receivedString) {
    if (receivedString == "STOP") {
        Kitronik_Move_Motor.stop()
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "HAUT") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, Math.map(value, 550, 1023, 10, 100))
    } else if (name == "BAS") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, Math.map(value, 1, 450, 10, 100))
    } else if (name == "GAUCHE") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, Math.map(value, 1, 450, 10, 100))
    } else if (name == "DROITE") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, Math.map(value, 550, 1023, 10, 100))
    } else {
    	
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
