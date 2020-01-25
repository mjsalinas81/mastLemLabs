// Ejercicio 9
class SlothMachine {
    constructor() {
        this.numMonedas = 0;
    }
    play() {
        this.numMonedas += 1;
        const booleano1 = Math.random() >= 0.5;
        const booleano2 = Math.random() >= 0.5;
        const booleano3 = Math.random() >= 0.5;
        if (booleano1 === booleano2 === booleano3 === true) {
            console.log(`"Congratulations!!!. You won ${this.numMonedas} coins!!"`);
            this.numMonedas = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}
const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
