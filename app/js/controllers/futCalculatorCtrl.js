angular.module("futCalculatorApp").controller("futCalculatorCtrl", function($scope, $localStorage){
  $scope.collapseShow = false;
  $scope.trade = {};
  $scope.$tradeList = $localStorage.tradeList ? $localStorage.tradeList : [];

  $scope.calculate = function(trade){
    $scope.trade = calculateTrade(trade);
  };

  $scope.saveTrade = function(trade){
    
    if(Object.keys(trade).length <= 5)
      trade = calculateTrade(trade);

    if(!trade.name)
      trade.name = "Unnamed trade";
    $scope.$tradeList.push(trade);
    $localStorage.tradeList = $scope.$tradeList;
    $scope.trade = {};
    $scope.tradeForm.$setPristine(true);
  };

  $scope.deleteTrade = function(trade){
    $scope.$tradeList = $scope.$tradeList.filter(t => t!=trade);
    $localStorage.tradeList = $scope.$tradeList;
  };

  $scope.isEmptyObject = function(obj){
    return Object.keys(obj).length === 0;
  };

  let calculateTrade = function(trade){
     trade.profitBid = calculateProfit(trade.purchasePrice, trade.sellBidPrice) * trade.numCardsSolds;
     trade.eaTaxBid = discont(trade.sellBidPrice, 5) * trade.numCardsSolds;
     trade.isBidProfit = isBidProfit(trade);

     trade.profitBuyNow = calculateProfit(trade.purchasePrice, trade.sellBuyNowPrice) * trade.numCardsSolds;
     trade.eaTaxBuyNow = discont(trade.sellBuyNowPrice, 5) * trade.numCardsSolds;
     trade.isBuyNowProfit = isBuyNowProfit(trade);

     return trade;
  };

  let calculateProfit = function(purchasePrice, sellBidPrice){
    sellBidPrice-= discont(sellBidPrice, 5);
    return sellBidPrice - purchasePrice;
  };

  let discont = function(value, percent){
    return Math.round((value * percent) / 100);
  };

  let isBidProfit = function(trade){
    return trade.profitBid > 0;
  };
  let isBuyNowProfit = function(trade){
    return trade.profitBuyNow > 0;
  };

});
