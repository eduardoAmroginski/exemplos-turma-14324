// Importa a classe Carro do arquivo Carro.js
// Isso permite usar a definição da classe neste arquivo.
import Carro from "./Carro.js";


// Cria um novo objeto (instância) da classe Carro
// Passando como parâmetros a marca "Ford" e o modelo "Fiesta"
const carro = new Carro("Ford", "Fiesta")

// Cria outro objeto da classe Carro, mas agora com marca e modelo diferentes
// Esse exemplo simula um carro mais “luxuoso”
const carroDeRico = new Carro("Ferrari", "FXX")


// Chama o método mostrarMarcaModelo() do objeto carro
// Esse método provavelmente retorna uma string com o nome da marca e o modelo
console.log(carro.mostrarMarcaModelo());

// Exibe no console o objeto carro completo, convertendo-o para formato JSON
// O JSON.stringify transforma o objeto em texto legível, com espaçamento e indentação
console.log("carro ==> ", JSON.stringify(carro, null, 2))


// Faz o mesmo para o carroDeRico: mostra a marca e modelo no console
console.log(carroDeRico.mostrarMarcaModelo());

// E exibe também o objeto completo no formato JSON, de forma organizada
console.log("carroDeRico ==> ", JSON.stringify(carroDeRico, null, 2))

// Resumo didático:
// - Esse código importa uma classe (Carro), cria dois objetos baseados nela, e mostra seus dados no console.
// - O JSON.stringify() é usado para visualizar o conteúdo completo do objeto de forma legível.
// - O método mostrarMarcaModelo() é usado para retornar informações específicas do carro (geralmente uma frase com marca e modelo).