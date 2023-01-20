import { googleFormsToJson } from 'react-google-forms-hooks'

// can use both full and shortened form url
const result = async ()=> googleFormsToJson(
  'https://docs.google.com/forms/d/e/1FAIpQLScv-TtVMfCgYwjgpFsFzljNy0ZvVcUUAD6Hi8s3RAxcIUhN5A/viewform'
)

console.log(result?.fields)
// will output the form fields in an appropriate structure
// [
//   {
//     label: 'Do you want to give some feedback?',
//     type: 'LONG_ANSWER',
//     id: '1864908950',
//     required: false
//   },
//   ...
// ]

/* 
    {
      "label": "Do you want to give some feedback?",
      "type": "SHORT_ANSWER",
      "id": "1864908921",
      "required": false
    }


Una pila de un computador se carga con cajas de una cinta transportadora. \n Las cajas están marcadas con un número o un operador (+, -, *, o /). La pila del computador se carga hasta que la caja superior es una caja marcada con un operador. Este operador se utiliza entonces en las dos cajas inferiores. A continuación, las tres casillas se funden en una sola y se marcan con el resultado del cálculo. En la pila del computador, los cálculos se introducen de forma diferente a una calculadora normal. Por ejemplo, los siguientes cálculos deben introducirse de esta manera:.- 2+3 debe introducirse como 2 3 + .-10-2 debe introducirse como 10 2 .-5*2+3 debe introducirse como 5 2 * 3 +.- 5+2*3 debe introducirse como 5 2 3 * +.- (8+2)*(3+4) debe introducirse como 8 2 + 3 4 + *

    */

/* 
    {"id":"2081366314","poisition":0},
    {"id":"2081366315","poisition":1},
    {"id":"2081366316","poisition":2},
    {"id":"2081366317","poisition":3},
    {"id":"2081366318","poisition":4},
    {"id":"2081366319","poisition":5},
    {"id":"2081366320","poisition":6},
    {"id":"2081366321","poisition":7},
    {"id":"2081366322","poisition":8},
    {"id":"2081366323","poisition":9},
    {"id":"2081366324","poisition":10},
    {"id":"2081366325","poisition":11},
    {"id":"2081366326","poisition":12},
    {"id":"2081366327","poisition":13},
    {"id":"2081366328","poisition":14},
    {"id":"2081366329","poisition":15},
    {"id":"2081366330","poisition":16},
    {"id":"2081366331","poisition":17},
    {"id":"2081366332","poisition":18},
    {"id":"2081366333","poisition":19},
    {"id":"2081366334","poisition":20},
    {"id":"2081366335","poisition":21},
    {"id":"2081366336","poisition":22},
    {"id":"2081366337","poisition":23},
    {"id":"2081366338","poisition":24},
    {"id":"2081366339","poisition":25},
    {"id":"2081366340","poisition":26},
    {"id":"2081366341","poisition":27},
    {"id":"2081366342","poisition":28},
    {"id":"2081366343","poisition":29},
    {"id":"2081366344","poisition":30},
    {"id":"2081366345","poisition":31},
    {"id":"2081366346","poisition":32},
    {"id":"2081366347","poisition":33}


*/

