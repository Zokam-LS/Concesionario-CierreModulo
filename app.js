var autos = require('./autos');

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
    },
    autosParaLaVenta: function(){
        let autos = this.autos;
        let autosDisponibles = autos.filter(function(element){
            return element.vendido===false;
        });
        return autosDisponibles;
    }
}