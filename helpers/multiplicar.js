const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            // salida += `${base} X ${i} = ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.yellow(base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${colors.red(base * i)}\n`;
        }

        if (listar) {
            console.log('================'.green);
            console.log('   Tabla del'.yellow, colors.red(base));
            console.log('================'.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}
