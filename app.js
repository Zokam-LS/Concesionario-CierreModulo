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
    },
    autosNuevos: function(){
        let disponibles = this.autosParaLaVenta();
        let autosNuevos = disponibles.filter((element)=>element.km<=100);
        return autosNuevos;
    },
    listaDeVentas: function(){
        let autos = this.autos;
        let autosVendidos = autos.filter((element)=>element.vendido===true);
        let arrayDeVentas = [];
        autosVendidos.forEach(element => {
            arrayDeVentas.push(element.precio);
        });
        return arrayDeVentas;
    },
    totalDeVentas: function(){
        let listaDeVentas = this.listaDeVentas();
        let totalDeVentas = listaDeVentas.length>0?listaDeVentas.reduce(
            (accumulator,actual)=>accumulator+=actual):0;
            return totalDeVentas;
    }
};