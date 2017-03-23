angular.module("futCalculatorApp").config(function($httpProvider){
  $httpProvider.interceptors.push("loadingInterceptor");
});
