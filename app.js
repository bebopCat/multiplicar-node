const { argv } = require('./config/yargs.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombre => console.log(`Archivo creado ${nombre}`.green))
            .catch(err => console.log(err));
    break;

    default:
        console.log('comando no reconocido')
    break;
}

console.log('argumentos'.trap);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


