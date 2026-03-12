class Automovel {
    modelo
    marca
    cor
    ano
    motor

    constructor(modelo, marca, cor, ano, motor) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar() {
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    frear() {
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }

    estercar() {
        `O veículo ${this.marca} ${this.modelo} está acelerando`
    }
}



const veiculo1 = new Automovel('Fiesta', 'Ford', 'Branco', 2015, '1.5L')
console.log(veiculo1.acelerar())