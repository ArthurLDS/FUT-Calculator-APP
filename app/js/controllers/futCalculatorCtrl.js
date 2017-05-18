angular.module("futCalculatorApp").controller("futCalculatorCtrl", function($scope, $localStorage, $translate){

  $scope.collapseShow = false;
  $scope.currentLanguage = $translate.proposedLanguage();
  $scope.trade = {};
  $scope.$tradeList = $localStorage.tradeList ? $localStorage.tradeList : [];
  $scope.calculate = function(trade){
    $scope.trade = calculateTrade(trade);
  };

  $scope.saveTrade = function(trade){

    if(Object.keys(trade).length <= 5)
      trade = calculateTrade(trade);

    trade.name = trade.name || "Unnamed trade";

    $scope.$tradeList.push(trade);
    $localStorage.tradeList = $scope.$tradeList;
    $scope.trade = {};
    $scope.tradeForm.$setPristine(true);
    $scope.searchTradeFilter = "";
    alertify.success(`${trade.name} saved successfully!`);
  };

  $scope.deleteTrade = function(trade){
    $scope.$tradeList = $scope.$tradeList.filter(t => t!=trade);
    $localStorage.tradeList = $scope.$tradeList;
    alertify.success(`${trade.name} Deleted successfully!`);
  };

  $scope.editTrade = async function(trade){

    let translations = await $translate(['TRADE_EDITION', 'TRADE_INPUT_NAME_EDT']);
    console.log(translations);

    alertify.prompt(translations.TRADE_EDITION, translations.TRADE_INPUT_NAME_EDT, trade.name, function(evt, value){
      $scope.$apply(function() {
        trade.name = value;
      });
      alertify.success("Trade edited successfully");
    },
    function(){
    });
  }

  $scope.isEmptyObject = function(obj){
    return Object.keys(obj).length === 0;
  };

  $scope.clearTradeForm = function(){
    $scope.tradeForm.$setPristine(true);
    $scope.trade = {};
  };

  $scope.changeLanguage = function(langKey){
    $translate.use(langKey);
  };

  $scope.isTradeProfit = function(trade){
    if(trade.isBuyNowProfit && trade.isBidProfit)
      return 1;
    else if(trade.isBuyNowProfit || trade.isBidProfit)
      return 2;
    else
      return 3;
  }

  let calculateTrade = function(trade){
    trade.profitBid = calculateProfit(trade.purchasePrice, trade.sellBidPrice) * trade.numCardsSolds;
    trade.eaTaxBid = discont(trade.sellBidPrice, 5) * trade.numCardsSolds;
    trade.isBidProfit = isBidProfit(trade);

    trade.profitBuyNow = calculateProfit(trade.purchasePrice, trade.sellBuyNowPrice) * trade.numCardsSolds;
    trade.eaTaxBuyNow = discont(trade.sellBuyNowPrice, 5) * trade.numCardsSolds;
    trade.isBuyNowProfit = isBuyNowProfit(trade);

    return trade;
  };

  var calculateProfit = function(purchasePrice, sellBidPrice){
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
