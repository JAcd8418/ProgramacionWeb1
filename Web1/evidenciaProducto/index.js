btnComparar.addEventLister('click', function(){
    const btnComparar = document.getElementById('btnComparar');
    let resultado = document.querySelector('#resultado');
    
    /* Equipo uno*/
    const discoDuro1 = document.querySelector('#discoDuro1').value;
    const memoriaRam1= document.querySelector('#memoriaRam1').value;
    const tarjetaVideo1 = document.querySelector('#tarjetaVideo1').value;
    const pantalla1 = document.querySelector('#pantalla1').value;
    const precio1 = document.querySelector('#precio1').value;

    /*Equipo dos*/
    const discoDuro2 = document.querySelector('#discoDuro2').value;
    const memoriaRam2= document.querySelector('#memoriaRam2').value;
    const tarjetaVideo2 = document.querySelector('#tarjetaVideo2').value;
    const pantalla2 = document.querySelector('#pantalla2').value;
    const precio2 = document.querySelector('#precio2').value;

    let equipo1 = 0;
    let equipo2 = 0;

    if(discoDuro1>discoDuro2){
        equipo1 = equipo1 + 1;
    }
    else {
        equipo2 = equipo2 +1;
    }
    
        if(memoriaRam1>memoriaRam2){
            equipo1 = equipo1 + 1;
        }
        else{
            equipo2 = equipo2 + 1;
        }
            if(tarjetaVideo1>tarjetaVideo2){
                equipo1 = equipo1 + 1;
            }
            else{
                equipo2 = equipo2 + 1;
            }
                if(tarjetaVideo1>tarjetaVideo2){
                    equipo1 = equipo1 + 1;
                }
                    if(precio1>precio2){
                        equipo1 = equipo1 + 1;
                    }
                    else{
                        equipo2 = equipo2 + 1;
                    }
    if(equipo1>equipo2){
        resultado.textContent="El Equipo uno tiene mejores caracteristicas  ";
    }
    else{
        resultado.textContent = "El Epquipo Dos tiene mejores caracteristicas  ";
    }
    
    const Container = document.querySelector('#container');
    const cuadroTabla = document.createElement('div');
    const tabla = document.createElement('table');

    const filaUno = document.createElement('tr');
    const caracteristica = document.createElement('th');
    const datos = document.createElement('th');

    const filaDos = document.createElement('tr');
    const discoDuro = document.createElement('td');
    const datoDiscoDuro = document.createElement('td');

    const filaTres = document.createElement('tr');
    const memoria = document.createElement('td');
    const datomemoria = document.createElement('td');

    const filaCuatro = document.createElement('tr');
    const tarjetaVideo = document.createElement('td');
    const datoTarjetaVideo = document.createElement('td');

    const filaQuinta = document.createElement('tr');
    const pantalla = document.createElement('td');
    const datoPantalla = document.createElement('td');

    const filaSexta = document.createElement('tr');
    const precio = document.createElement('td');
    const datoPrecio = document.createElement('td');


    Container.append(cuadroTabla);
    cuadroTabla.append(tabla);
    tabla.append(filaUno);
    filaUno.append(caracteristica);
    filaUno.append(datos);
    tabla.append(filaDos);
    filaDos.append(discoDuro);
    filaDos.append(datoDiscoDuro);
    tabla.append(filaTres);
    filaTres.append(memoria);
    filaTres.append(datomemoria);
    tabla.append(filaCuatro);
    filaCuatro.append(tarjetaVideo);
    filaCuatro.append(datoTarjetaVideo);
    tabla.append(filaQuinta);
    filaQuinta.append(pantalla);
    filaQuinta.append(datoPantalla);
    tabla.append(filaSexta);
    filaSexta.append(precio);
    filaSexta.append(datoPrecio);

    caracteristica.textContent = "Caracteristicas del equipo";
    datos.textContent = "Datos";
    discoDuro.textContent = "Disco Duro :";
    datoDiscoDuro.textContent = discoDuro + "GB";
    memoria.textContent = "Memoria RAM :";
    datomemoria.textContent = memoria + "GB";
    tarjetaVideo.textContent = "Trjeta de Video :";
    datoTarjetaVideo.textContent = tarjetaVideo + "MB";
    precio.textContent = "Precio  :";
    datoPrecio.textContent = precio;
})