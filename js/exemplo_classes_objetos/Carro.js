// Exporta a classe Carro como padrão (default) deste módulo
// Isso permite que outros arquivos possam importá-la usando "import Carro from './Carro.js'"
export default class Carro {

    // O método constructor é chamado automaticamente quando criamos um novo objeto dessa classe
    // Ele recebe dois parâmetros: marca e modelo, e os atribui às propriedades do objeto
    constructor(marca, modelo) {
        // Atribui o valor recebido no parâmetro 'marca' à propriedade 'marca' do objeto
        this.marca = marca;

        // Atribui o valor recebido no parâmetro 'modelo' à propriedade 'modelo' do objeto
        this.modelo = modelo;
    }

    // Método que retorna uma string com as informações do carro
    // Ele acessa as propriedades do objeto (marca e modelo) e as formata em uma mensagem
    mostrarMarcaModelo() {
        // Retorna uma string interpolada (usando template literals)
        // O "\n" serve para quebrar a linha entre marca e modelo
        return `Marca: ${this.marca} \n Modelo: ${this.modelo}`;
    }
}


// Resumo didático:
// - A classe Carro serve como um “molde” para criar objetos que representam carros reais.
// - O constructor define as propriedades iniciais de cada carro (marca e modelo).
// - O método mostrarMarcaModelo() retorna uma descrição formatada do carro.
// - O uso do export default permite que a classe seja importada facilmente em outros arquivos.