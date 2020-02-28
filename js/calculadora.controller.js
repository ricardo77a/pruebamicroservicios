var strApiCalculadora = "http://gavar.com.mx/mobile/calculadora/backend/";
var strCode = "";
var strCreditos = "";
var cal = null;

$( document ).ready(function() {
    console.log( "ready!" );

    //$( "#fechaInicio" ).datepicker();
    //$( "#fechaFin" ).datepicker();


});



function onDateChange(date){
	//document.getElementById('container2').innerHTML = date;
}


function validationCode(){

  //******************************************* */

  if( $("#codeInput").val() != "" ){

    $.ajax({
            url: strApiCalculadora + 'code_datas.php',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify( { "clave": ""+ $("#codeInput").val(), "last-name": "nada" } ),
            processData: false,
            success: function( datas, textStatus, jQxhr ){
                console.log("NEW DATA");
                console.log( datas );

                var dataHijo2 = datas[0];

                console.log( dataHijo2 );

                strCode = dataHijo2.clave_app;
                strCreditos = dataHijo2.creditos_app;

                if( dataHijo2.creditos_app > 0 ){
                  $("#calculatorContainer").show();
                  $("#codeContainer").hide();
                }else{
                  alert("Apreciado "+ dataHijo2.nombre_app +", se han agotado los créditos para realizar el cálculo, favor de dar click en el botón Obtener Cálculos");
                  $("#calculatorContainer").hide();
                  $("#codeContainer").show();
                }
                

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
  }else{
    alert("Es necesario llene el campo con su clave proporcionada por el equipo de MDLcOP");
  }

}

function gotoIntents(){
  //location.href ="http://gavar.com.mx/app/index.php";
  backToCalculator();
}

function goToCalculate(){
  if( strCreditos == 0){

    gotoIntents();    
  }else{
    cleanValues();
    $("#resultados").hide();
    $("#calculatorContainer").show();
  }
}

function cleanValues(){
  $( "#fechaInicio" ).val("");
  $( "#fechaFin" ).val("");
  $( "#salarioDiario" ).val("");
  $( "#salariosDevengados" ).val("");
}


function calculateValues(){
  console.log( "Valor 1: " + $( "#fechaInicio" ).val() );
  console.log( "Valor 1: " + $( "#fechaFin" ).val() );

  if( $( "#fechaInicio" ).val() == "" || $( "#fechaFin" ).val() == "" || $( "#salarioDiario" ).val() == "" || $( "#salariosDevengados" ).val() == "" ){
    

    alert("Seleccione una fecha de inicio y una fecha de fin, también debe proporcionar su Salario Diario Integrado");

  }else{
    console.log( moment( $( "#fechaFin" ).val() ).diff( moment( $( "#fechaInicio" ).val() ), 'days'), ' dias de diferencia');

    
    $( "#calculatorContainer" ).hide();
    $( "#resultados" ).show();
    
    //$( "#salarios" ).html( ""+ ( moment( $( "#fechaFin" ).val() ).diff( moment( $( "#fechaInicio" ).val() ), 'days') * $( "#salarioDiario" ).val() ) );

    var daysWoked = moment( $( "#fechaFin" ).val() ).diff( moment( $( "#fechaInicio" ).val() ), 'days');
    
    $( "#salarios" ).html( ""+ ( $( "#salariosDevengados" ).val() * $( "#salarioDiario" ).val() ) );

    console.log("DIAS TRABAJADOS: " + daysWoked);

    var daysVacations = 20;
    if( daysWoked <= 3650 ){
      //$( "#vacaciones" ).html( "20 días" );
      daysVacations = 20;
    }

    if( daysWoked > 3650 ){
     //$( "#vacaciones" ).html( "25 días" );
     daysVacations = 25;
    }

    var vacacionesProporcionales = 0;
    var aguinaldoDays;

    

    if( daysWoked <= 365 ){
      aguinaldoDays = daysWoked;
    }else{

      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
       var firstDate = new Date((new Date()).getFullYear(),01,00);
       var secondDate = new Date( $( "#fechaFin" ).val() );

      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

      aguinaldoDays = diffDays;

      console.log( "diffDays: "+diffDays);

    }

    if( daysWoked <= 365){
      vacacionesProporcionales = (daysWoked * 20) / 365;

    }else if( daysWoked > 365 && daysWoked <= 730 ){
      vacacionesProporcionales = ( ( daysWoked - 365) * 20) / 365;

    }else if( daysWoked > 730 && daysWoked <= 1095 ){
      vacacionesProporcionales = ( ( daysWoked - 730) * 20) / 365;

    }else if( daysWoked > 1095 && daysWoked <= 1460 ){
      vacacionesProporcionales = ( ( daysWoked - 1095) * 20) / 365;

    }else if( daysWoked > 1460 && daysWoked <= 1825 ){
      vacacionesProporcionales = ( ( daysWoked - 1460) * 20) / 365;

    }else if( daysWoked > 1825 && daysWoked <= 2190 ){
      vacacionesProporcionales = ( ( daysWoked - 1825) * 20) / 365;

    }else if( daysWoked > 2190 && daysWoked <= 2555 ){
      vacacionesProporcionales = ( ( daysWoked - 2190) * 20) / 365;

    }else if( daysWoked > 2555 && daysWoked <= 2920 ){
      vacacionesProporcionales = ( ( daysWoked - 2555) * 20) / 365;

    }else if( daysWoked > 2920 && daysWoked <= 3285 ){
      vacacionesProporcionales = ( ( daysWoked - 2920) * 20) / 365;

    }else if( daysWoked > 3285 && daysWoked <= 3650 ){
      vacacionesProporcionales = ( ( daysWoked - 3285) * 20) / 365;

    }else if( daysWoked > 3650 ){

      var ternario = daysWoked / 365;



      console.log("ternario: "+ ternario);

      var intAñosTotales = 0;

      intAñosTotales = Math.trunc( ternario ); //Cortamos después del punto y dejamos solo el entero en años anteriores.

      console.log("intAñosTotales: "+intAñosTotales);

      intAñosTotales = intAñosTotales * 365;

      console.log("intAñosTotales2: "+intAñosTotales);

      vacacionesProporcionales = ( (daysWoked - intAñosTotales) * 25 ) / 365;

      console.log("vacacionesProporcionales: "+vacacionesProporcionales);

      /*

      var strNumLimpio = ternario.toString().indexOf(".");

      var resultDays = String(ternario).substring((strNumLimpio+1), ternario.length);

      console.log("resultDays: "+ resultDays);

      resultDays = "."+ resultDays;

      resultDays = parseFloat(resultDays);

      vacacionesProporcionales = resultDays * 365;

      console.log( "vacacionesProporcionales: "+vacacionesProporcionales );

      vacacionesProporcionales = ( vacacionesProporcionales * 25) / 365;

      console.log("ENTRA A MAYOR A 10 AÑOS: "+vacacionesProporcionales);
      */

    }

    //$( "#vacaciones" ).html( trunc(vacacionesProporcionales, 2)+ " días" );

    var vacacionesDias = trunc(vacacionesProporcionales , 2);

    $( "#vacaciones" ).html( vacacionesDias + " días ");

    console.log("VACACIONES PROPORCIONALES: "+ vacacionesProporcionales);

    var primaVacacional = ( vacacionesProporcionales / 100 ) * 30.33;

    var montoPrima = primaVacacional * $( "#salarioDiario" ).val();

    $( "#vacacionesProp" ).html( trunc( vacacionesProporcionales * $( "#salarioDiario" ).val(), 2 ) );

    $( "#indemnizacion" ).html( ""+ ( $( "#salarioDiario" ).val() * 90 ) );

    $( "#diasPrima" ).html( trunc(primaVacacional + " días ", 2) );

    $( "#primaMonto" ).html( trunc(  montoPrima, 2 ) ); 



    var aguinaldo;
    

    $( "#diasAguinaldo" ).html( aguinaldoDays + " días " );

    aguinaldo = ( aguinaldoDays * 40 ) / 365;

    aguinaldo = aguinaldo * $( "#salarioDiario" ).val();

    $( "#aguinaldoMonto" ).html( ""+ trunc( aguinaldo , 2) );


    /***************** SALARIOS CAIDOS ********************************/
    var salariosCaidos;

    var oneDaySal = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDateSal = new Date( $( "#fechaFin" ).val() );
    var secondDateSal = new Date();

    var diffDaysSal = Math.round(Math.abs((firstDateSal.getTime() - secondDateSal.getTime())/(oneDaySal)));


    $( "#diasSal" ).html( diffDaysSal + " días " );

    salariosCaidos = ( diffDaysSal * $( "#salarioDiario" ).val() );

    $( "#salMonto" ).html( ""+ trunc( salariosCaidos , 2) );


    disminuyeNumCalculos();

  }
}


function disminuyeNumCalculos(){

  strCreditos = parseInt( strCreditos );
  strCreditos = strCreditos - 1;

  console.log("clave: "+ strCode +"intents: "+ strCreditos );

   $.ajax({
        url: strApiCalculadora + 'resta_code.php',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify( { "clave": strCode, "intents": ""+ strCreditos } ),
        processData: false,
        success: function( datas, textStatus, jQxhr ){ 
            console.log("NEW DATA");
            var strMensajeAgotados = "";

            if( strCreditos == 0){
              alert("Sus créditos se han agotado, favor de contratar más para seguir cálculando");
              //location.href ="http://gavar.com.mx/app/index.php";
              backToCalculator();
            }else{
              alert("Le restan: "+ strCreditos + " créditos disponibles" );
            }
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    }); 
  
}

function calculateAguinaldo(){
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date((new Date()).getFullYear(),01,00);
  var secondDate = new Date( $( "#fechaFin" ).val() );

  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

  return diffDays;
}

/*
function goToCalculator(){
  
  $("#iframeCalcNube").hide();
  $("#codeContainer").show();
}*/

function backToCalculator(){
  $("#iframeCalcNube").show();
  $("#codeContainer").hide();
}


function trunc (x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1

  if (l - decimalLength <= posiciones){
    return x
  }
  // Parte decimal del número
  var isNeg  = x < 0
  var decimal =  x % 1
  var entera  = isNeg ? Math.ceil(x) : Math.floor(x)
  // Parte decimal como número entero
  // Ejemplo: parte decimal = 0.77
  // decimalFormated = 0.77 * (10^posiciones)
  // si posiciones es 2 ==> 0.77 * 100
  // si posiciones es 3 ==> 0.77 * 1000
  var decimalFormated = Math.floor(
    Math.abs(decimal) * Math.pow(10, posiciones)
  )
  // Sustraemos del número original la parte decimal
  // y le sumamos la parte decimal que hemos formateado
  var finalNum = entera + 
    ((decimalFormated / Math.pow(10, posiciones))*(isNeg ? -1 : 1))
  
  return finalNum
}