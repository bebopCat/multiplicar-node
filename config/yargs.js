const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('crear', 'guarda en carpeta la tabla de multiplicar', options)
    .command('listar', 'imprime en consola la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}