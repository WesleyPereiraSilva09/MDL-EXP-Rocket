//transformando string em numero e numero em string

// const string = "1234";

// console.log(number(string));

// const number = 123455

// console.log(string(number))

//transformando um numero quebrado em 2 casas decimais

let number = 342.545456465673421;

console.log(number.toFixed(2));

//usando upercase e dowmcase

let word = "sera que eu consigo apagar as fotos dela?";

console.log(word.toLocaleUpperCase());

console.log("SIM");

/*Para separar um texto por espaços, pode-se usar o método split(" "), 
que transforma o texto em um array de strings baseado no argumento, 
que no caso são os espaços. Para juntar esse array é possível usar o método join('"), 
que juntaria essas palavras sem nenhum separador, porém colocando um argumento, 
no caso um underscore ( join("_") ) as 
palavras são juntadas com o argumento de separador. */

let phrase = "eu não quero viver o Amor!";
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");

console.log(myArray);

/*Para verificar se um texto possui uma palavra específica, 
podemos usar o método includes(), passando como argumento a palavra a ser verificada, 
que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o 
método é case sensitive. */

let phraseTwo = "i dont now";
console.log(phrase.includes(now));

/*Para criar um array com um método construtor, usa-se new Array(args), 
passando como argumento o tamanho deste vetor ou os valores, 
por exemplo: const array = new Array("a", "b", "c"). */

let array = new arrayTeen(10);
console.log(array);

//Para contar a quantidade de elementos em um array pode-se usar o método length.

/*
Para transformar uma string em um array, 
pode-se usar o objeto Array com o método from(), passando como argumento 
a string a ser transformada em array. 
Por exemplo console.log(Array.from("developer"). */

/*
Existem várias maneiras de manipular arrays, como: 
o método push(), que adiciona um elemento no final do array, 
o método unshift(), que adiciona um elemento no começo do array, 
o método pop(), que retira um elemento do final do array,   
o método shift(), que retira um elemento do começo do array,
o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte 
que você quer selecionar, e retorna os valores destas posições, 
o método splice(), que recebe como argumentos 
a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), 
que encontra o index do valor que recebe como argumento em um array. */
