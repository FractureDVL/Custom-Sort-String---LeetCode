import { showMenu, stop } from './Interface.js';

console.clear();

//Keep the main running to receive a character, 0 to close*
const main = async () => {
    var opt = '';
    do {
            opt = await showMenu();
            // console.log({ opt })
            await stop();
            
    } while (opt !== '0');

}
main();