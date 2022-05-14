irRemote.connectInfrared(DigitalPin.P11)
turtleBit.OFFLed()
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Ok)) {
        turtleBit.LED_brightness(255)
        turtleBit.SetLed(
        LR.LeftSide,
        255,
        255,
        255
        )
        turtleBit.SetLed(
        LR.RightSide,
        255,
        255,
        255
        )
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        turtleBit.state(MotorState.stop)
        turtleBit.run(DIR.Run_back, 100)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
        turtleBit.state(MotorState.stop)
        turtleBit.run(DIR.Turn_Right, 21)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        turtleBit.state(MotorState.stop)
        turtleBit.run(DIR.Turn_Left, 21)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
        turtleBit.state(MotorState.stop)
        turtleBit.run(DIR.Run_forward, 100)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        turtleBit.OFFLed()
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_2)) {
        turtleBit.state(MotorState.stop)
    }
})
