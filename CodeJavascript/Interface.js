import { Console } from 'console';
import { createDoc, solve } from './Gen.js';
import * as colors from 'colors';
import * as readline from 'node:readline';

const showMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('================================================'.green);
        console.log('              Seleccione un opción              '.green);
        console.log('================================================'.green);
        console.log('1.'.green + 'Generar datos');
        console.log('2.'.green + 'Ejecutar datos');
        console.log('3.'.green + 'Generar resultados');
        console.log('4.'.green + 'Ejecutar caso especifico');
        console.log('0.'.green + 'Salir\n');
        
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question('Seleccione una opcion: '.green, (opt) => {
        whatIdo(opt);
        read.close();
        resolve(opt);
    });
});}

const stop = () => {
    return new Promise(resolve => {
        const read  = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        read.question('Presione '+'Enter'.green,(opt) => {
            read.close;
            resolve();
        });
    });
}

function whatIdo(opt) {
    switch (opt) {
        case '1':
            createDoc();
            break;
        case '2':
            solve();
            console.log("Se ha generado los archivos con las respuestas.");
            break;
        case '3':
            break;
        case '4':
            break;
        case '0':
            console.log("Cerrando...");
            read.close();
            break;

    }
}

export { showMenu, stop };