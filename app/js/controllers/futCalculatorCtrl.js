angular.module("futCalculatorApp").controller("futCalculatorCtrl", function($scope){
  $scope.collapseShow = false;
  $scope.trade = {};
  $scope.tradeList = [];

  $scope.calculate = function(trade){

     $scope.trade.profitBid = calculateProfit(trade.purchasePrice, trade.sellBidPrice) * trade.numCardsSolds;
     $scope.trade.eaTaxBid = discont(trade.sellBidPrice, 5) * trade.numCardsSolds;
     $scope.trade.isBidProfit = isBidProfit(trade);

     $scope.trade.profitBuyNow = calculateProfit(trade.purchasePrice, trade.sellBuyNowPrice) * trade.numCardsSolds;
     $scope.trade.eaTaxBuyNow = discont(trade.sellBuyNowPrice, 5) * trade.numCardsSolds;
     $scope.trade.isBuyNowProfit = isBuyNowProfit(trade);
  };

  $scope.saveTrade = function(trade){
    $scope.tradeList.push(trade);
    $scope.trade = {};
    console.log($scope.tradeList);
  };

  let calculateProfit = function(purchasePrice, sellBidPrice){
    sellBidPrice-= discont(sellBidPrice, 5);
    return sellBidPrice - purchasePrice;
  };

  let discont = function(value, percent){
    return Math.round((value * percent) / 100);
  }

  let isBidProfit = function(trade){
    return trade.profitBid > 0;
  };
  let isBuyNowProfit = function(trade){
    return trade.profitBuyNow > 0;
  };

});
