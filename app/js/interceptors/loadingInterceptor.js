angular.module("futCalculatorApp").factory("loadingInterceptor", function($q, $rootScope, $timeout){
  return{
        request: function(config){
           $rootScope.loading = true;
           console.log($rootScope.loading);
           return config;
        },
        requestError: function(rejection){
           $rootScope.loading = false;
           return $q.reject(rejection);
        },
        response: function(response){
           $timeout(function(){
              $rootScope.loading = false;
           }, 2000);

           return response;
        },
        responseError: function(rejection){
           $rootScope.loading = false;
           return $q.reject(rejection);
        }
    };
});
