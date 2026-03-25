class Auto{
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){
        this.#id = id;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#preco = preco;
        this.#disponivel = true;

        if(!marca || marca.length < 2 || !modelo || modelo.length < 2 || !preco || preco <= 0){
            return console.error("Dados inválidos!");
        }
    }

    getId(){
        return this.#id;
    }

    getMarca(){
        return this.#marca;
    }

    getModelo(){
        return this.#modelo;
    }

    getPreco(){
        return this.#preco;
    }

    setPreco(preco){
        return preco <= 0  || this.#disponivel === true || isNaN(preco) ? console.error("Preço inválido") : this.#preco = preco;
    }

    getDisponivel(){
        return this.#disponivel;
    }

    CarVendido(){
        if(this.#disponivel === true){
            this.#disponivel = false;
            return console.log("Veículo vendido!");
        }

        return console.error("Veículo indisponível!");
    }

    voltaEstoque(){
        if(this.#disponivel === false){
            this.#disponivel = true;
            return console.log("Veículo na garagem");
        }
    }

    Infos(){
        return {
            id: this.getId(),
            marca: this.getMarca(),
            modelo: this.getModelo(),
            preco: this.getPreco(),
            disponivel: this.getDisponivel()
        }
    }
}
class Car extends Auto{
    #portas

    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco)
        this.#portas = portas

        if(isNaN(portas)){
            return console.error("O número de portas deve ser um número!!");
        }

        if(portas <= 0){
            return console.error("Número de portas inválido!");
        }
    }
}

class Bike extends Auto{
    #cilindradas

    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco)
        this.#cilindradas = cilindradas

        if(cilindradas <= 0){
            return console.error("Cilindradas inválidas");
        }

        if(isNaN(cilindradas)){
            return console.error("Cilindradas devem ser um número válido");
        }

        if(cilindradas > 50 || cilindradas < 2000){
            return console.error("Cilindradas fora do intervalo válido");
        }
    }
}

const peugeotzao = new Car(1, 'Peugeot', '206 1.4', 10000)
console.log(peugeotzao.Infos());
peugeotzao.CarVendido();
console.log(peugeotzao.Infos());
peugeotzao.setPreco(2000000);
peugeotzao.CarVendido();
peugeotzao.voltaEstoque();
console.log(peugeotzao.Infos())