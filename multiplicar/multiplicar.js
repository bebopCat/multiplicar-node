const fs = require('fs');

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`El dato "${base}" no es valido`)
    }
    else if(!Number(limite)) {
        console.log(`El dato "${limite}" no es valido`)
    } else {
        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i} = ${base*i}`)
        }
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El dato "${base}" no es un numero`);
            return
        }
        if (!Number(limite)) {
            reject(`El dato "${limite}" no es un numero`);
            return
        }
        
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        
            fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
                if(err)
                    reject(err)
                else
                    resolve(`tabla-${base}`);
            });
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}