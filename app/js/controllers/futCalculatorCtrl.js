angular.module("futCalculatorApp").controller("futCalculatorCtrl", function($scope){

  $scope.calculate = function(trade){

     $scope.trade.profitBid = calculateProfit(trade.purchasePrice, trade.sellBidPrice) * trade.numCardsSolds;
     $scope.trade.eaTaxBid = discont(trade.sellBidPrice, 5) * trade.numCardsSolds;

     $scope.trade.profitBuyNow = calculateProfit(trade.purchasePrice, trade.sellBuyNowPrice) * trade.numCardsSolds;
     $scope.trade.eaTaxBuyNow = discont(trade.sellBuyNowPrice, 5) * trade.numCardsSolds;
  };

  let calculateProfit = function(purchasePrice, sellBidPrice){
    sellBidPrice-= discont(sellBidPrice, 5);
    return sellBidPrice - purchasePrice;
  };

  let discont = function(value, percent){
    return Math.round((value * percent) / 100);
  }
});
