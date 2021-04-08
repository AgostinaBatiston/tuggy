const APIPROVINCIAS = "https://apis.datos.gob.ar/georef/api/provincias"

$(document).ready(function() {

    $("#btnModal").hide();

    $.get(APIPROVINCIAS, function(datos, estado) {
        $('#selectProvincias').empty();
        //console.log(datos);

        for (const provincia of datos.provincias) {
            //console.log(provincia);
            $('#selectProvincias').append(`<option value="${provincia.id}">${provincia.nombre}</option>`)
        }

        $("#spnModal").hide();

        cargarMunicios(datos.provincias[0].id);

        $("#btnModal").show();
    });
});

$('#selectProvincias').change(function(e) {
    // console.log($(this).val());
    // console.log($(e.target).val());

    let idProvincia = $(this).val();

    cargarMunicios(idProvincia);
    /*
    let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`
    console.log(apiMunicipios);
    $.get(apiMunicipios, function(datos,estado){
         $('#selectMunicipios').empty();
         //console.log(datos);
         for (const municipio of datos.municipios) {
             //console.log(provincia);
             $('#selectMunicipios').append(`<option value="${municipio.id}">${municipio.nombre}</option>`)
         }
    });
    */
});

function cargarMunicios(id) {
    let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&campos=id,nombre&max=100`
    console.log(apiMunicipios);
    //SE REALIZA LA LLAMADA GET Y SE CARGAR EL SELECT
    $.get(apiMunicipios, function(datos, estado) {
        $('#selectMunicipios').empty();
        //console.log(datos);
        for (const municipio of datos.municipios) {
            //console.log(provincia);
            $('#selectMunicipios').append(`<option value="${municipio.id}">${municipio.nombre}</option>`)
        }
    });
}
//MANEJO DEL EVENTO SUBMIT DEL FORMULARIO EN EL MODAL
$("#modalForm").submit(function(e) {
    e.preventDefault();
    //console.log($(this).children());
    //OBTENGO TODOS LOS INPUT DEL FORMULARIO ID modalForm
    let inputs = $('#modalForm :input')
        //OBTENGO EL TEXTO DE LA PROVINCIA Y MUNICIPIO SELECCIONADO. RECORDEMOS QUE EN value SE ENCUENTRA EL ID DE LA PROVINCIA Y EL MUNICIPIO
    let provinciaActual = $('#selectProvincias').find(":selected").text()
    let municipioActual = $('#selectMunicipios').find(":selected").text()
        //console.log($('#selectProvincias').find(":selected").text());
        //CREO UN OBJETO LITERAL CON LA ESTRUCTURA DEL FORMULARIO
    let info = {
        nombre: inputs[0].value,
        direccion: inputs[1].value,
        provincia: provinciaActual,
        municipio: municipioActual
    }
    console.log(info);
    //AGREGO UNA SALIDA AL HTML CON LA INFORMACION DEL OBJETO
    $("#contenidoGenerado").append(`<div class="card bg-light mb-3" style="max-width: 18rem;">
                                        <div class="card-header">${info.nombre}</div>
                                        <div class="card-body">
                                        <h5 class="card-title">${info.direccion}</h5>
                                        <p class="card-text">${info.provincia} - ${info.municipio}</p>
                                        </div>
                                    </div>`);
    //OCULTO EL MODAL 
    $('#exampleModal').modal('hide')
});