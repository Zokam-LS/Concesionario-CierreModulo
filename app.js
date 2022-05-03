var autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        precio: 150000,
        km: 200,
        color: 'Azul',
        cuotas: 12,
        anio: 2019,
        patente: 'APL123',
        vendido: false
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        precio: 100000,
        km: 0,
        color: 'Blanco',
        cuotas: 14,
        anio: 2019,
        patente: 'JJK116',
        vendido: false
    }
];

//module.exports = autos;


//ar autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let resultado = this.autos.filter(param => param.patente===patente)
        if (resultado.length===0){
            return null;
        }
        return resultado[0];
    },
    venderAuto: function(patente){
        let autoVendido = this.buscarAuto(patente);
        autoVendido.vendido = true;
    }
};
concesionaria.venderAuto('APL123')
console.log(autos);
