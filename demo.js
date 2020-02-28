var myApp = angular.module('mdlcop.index', ['ngSidebarJS']);

//var strApi = "http://localhost/app/backend/";
var strApi = "http://gavar.com.mx/mobile/backend/";

var strTitle = "Bienvenido alumno Maestría Tec";
//var strTitle = "";



function AppCtrl(SidebarJS, $scope, $route, $compile, $apply, menuService) {

  $("#menuIcon").show();



  

  //$('#modalStart').modal('show');

}//END CONTROLLER



  
  myApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }]).component('app', {
    controller: ['SidebarJS', AppCtrl],
    controllerAs: 'app',
    templateUrl: '',
  });
  









  myApp.controller('secondController',function(SidebarJS, $scope, $attrs, $compile, $http){
    


    $scope.trTitle = strTitle;

  
    $scope.toggleSidebarJS = function toggleSidebarJS(sidebarName) {
      SidebarJS.toggle(sidebarName);
    };

    $scope.isVisibleSidebarJS = function isVisibleSidebarJS(sidebarName) {
      return SidebarJS.isVisible(sidebarName);
    };

    $scope.onSidebarOpen = function onSidebarOpen() {
      //console.log('is open!');
    };

    $scope.onSidebarClose = function onSidebarClose() {
      //console.log('is close!');
    };

    $scope.onSidebarChangeVisibility = function onSidebarChangeVisibility(event) {
      //console.log(event);
    };


    /** SPINNER */
    $scope.loadSpinner = function(){
      $('#spinnerContainer').show();
      setTimeout(function(){
        $('#spinnerContainer').hide();
      }, 1500);
    }



    /************************************************************************** CALCULATOR FUNCTIONS ****************************************************************/
    $scope.goToCalculatorAngular = function(){
      
    }

    $scope.gotoIntentsRegister = function(){
      $("#iframeCalcNube").show();
      $("#codeContainer").hide();
    }

    $scope.goToCalculatorCleaned = function(){
      if( strCreditos == 0){
        $("#resultados").hide();
        $scope.gotoIntentsRegister(); 
        $("#backButtonCalculator").hide();
      }else{
        $scope.cleanCalculateValues();
        $("#resultados").hide();
        $("#calculatorContainer").show();
        navigationCalc = 3;
      }
    }

    $scope.cleanCalculateValues = function(){
      $( "#fechaInicio" ).val("");
      $( "#fechaFin" ).val("");
      $( "#salarioDiario" ).val("");
      $( "#salariosDevengados" ).val("");
      
      $("#btnSendResultEmail").show();
    }

    
    $scope.ajaxExample = function(){

      if( $("#codeInput").val() != "" ){
      
                  navigationCalc = 2;
                  $.ajax({
                    url: strApi + 'code_datas.php',
                    dataType: 'json',
                    type: 'post',
                    contentType: 'application/json',
                    data: JSON.stringify( { "clave": ""+ $("#codeInput").val(), "last-name": "nada" } ),
                    processData: false,
                    success: function( datas, textStatus, jQxhr ){
                        console.log("NEW DATA");
                        console.log( datas );

                        
                        

                    },
                    error: function( jqXhr, textStatus, errorThrown ){
                        console.log( errorThrown );
                    }
                });

      }else{
        alert("Es necesario llene el campo con su clave ");
      }

    }



    
    

    setTimeout(function(){
      $('body').css("background-color","white");
      $('#secondControllerId').show();
      $('#spinnerContainer').hide();
    }, 2500);




  }).config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }]);

  /********* SPINNER JAVASCRIPT ************/
  function loadSpinnerJS(){
    $('#spinnerContainer').show();
    setTimeout(function(){ 
      $('#spinnerContainer').hide();
    }, 1500);
  }



