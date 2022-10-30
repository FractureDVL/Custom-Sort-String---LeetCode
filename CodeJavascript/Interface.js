import { Console } from 'console';
import { createDoc, solve, genData, readfile } from './Gen.js';
import { customSortString } from './Solve.js';
import * as colors from 'colors';
import * as readline from 'node:readline';

let fileName2 = 'Answer/result.txt';
let fileName = 'Data/data.txt';



//Show the menu and receive a character
const showMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('================================================'.green);
        console.log('              Seleccione un opción              '.green);
        console.log('================================================'.green);
        console.log('1. '.green + 'Generar datos');
        console.log('2. '.green + 'Ejecutar datos y resultados');
        console.log('3. '.green + 'Ejecutar caso especifico');
        console.log('4. '.green + 'Visualizar los casos de prueba');
        console.log('0. '.green + 'Salir\n');
        
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        read.question('Seleccione una opcion: '.green, (opt) => {
            whatIdo(opt);
            read.close();
            resolve(opt);
        });
    });
}

const stop = () => {
    return new Promise(resolve => {
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        read.question('Presione ' + 'Enter'.green + ' para continuar\n', (opt) => {
            read.close();
            resolve();
        });
    });
}
// read a case for specific order and S
function getCase() {
    let order = "";
    let s = "";
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    read.question('line', (opt) => {
        console.log('Order = '.yellow);
        order = opt;
        read.close();
    });
    read.question('line', (opt) => {
        console.log('s = '.yellow);
        s = opt;
        read.close();
    });
    return customSortString(order, s);
}

//Receive a option to print or make things...
async function whatIdo(opt) {
    switch (opt) {
        case '1':
            createDoc(fileName, genData());
            console.log("Los archivos han sido generados :)");
            console.log("Ruta: " + fileName.cyan);
            break;
        case '2':
            solve(fileName).then(val => createDoc(fileName2, val))
            console.log("Se ha generado los archivos con las respuestas.");
            console.log("Ruta: " + fileName2.cyan);
            break;
        case '3':
            getCase();
            //hace falta
            break;
        case '4':
            console.log(readfile(fileName2));
            break;
        case '0':
            console.log("Cerrando...");
            break;
        default:
            console.log("Ingrese una opción válida");


    }
}

export { showMenu, stop };