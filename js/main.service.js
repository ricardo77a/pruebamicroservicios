(function(){

     'use strict'

     function mainService($http){
         
        this.get = function(){
            /*
                        var url = config.apiUri + 'handler.php';
            
                        return $http({
                                method: 'POST',
                                url: url,
                                data: colorObj,
                                headers: {'Content-Type': 'application/json'}
                            });
                            */
        }
     

     }

     angular
        .module('mdlcop.index')
        .service('mainService', mainService);

 }());