describe("Calculate Trades Tests", function(){

  var tradeNotCalculated = getTradeNotCalculated();
  var tradeCalculated = getTradeCalculated();

  beforeEach(function(){
    angular.mock.module("futCalculatorApp");

    angular.mock.inject(function($controller, $rootScope, $localStorage){
      localStorage = $localStorage;
      $scope = $rootScope.$new();

      $controller("futCalculatorCtrl", {
        $scope : $scope
      });
    });
  });

  it('Should calculate bid profit of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    $scope.calculate(tradeNotCalculated);
    expect($scope.trade.profitBid).toEqual(tradeCalculated.profitBid);
  });
  it('Should calculate buy now profit of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    $scope.calculate(tradeNotCalculated);
    expect($scope.trade.profitBuyNow).toEqual(tradeCalculated.profitBuyNow);
  });
  it('Should calculate bid EA tax  of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    $scope.calculate(tradeNotCalculated);
    expect($scope.trade.eaTaxBid).toEqual(tradeCalculated.eaTaxBid);
  });
  it('Should calculate buy now EA tax  of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    $scope.calculate(tradeNotCalculated);
    expect($scope.trade.eaTaxBuyNow).toEqual(tradeCalculated.eaTaxBuyNow);
  });
});

describe("Crud of trades Tests", function(){
  var tradeCalculated = getTradeCalculated();
  var tradeNotCalculated = getTradeNotCalculated();
  var tradeList = getTradeList();

  beforeEach(function(){
    angular.mock.module("futCalculatorApp");
    angular.mock.inject(function($controller, $rootScope, $localStorage){
      $scope = $rootScope.$new();
      $controller("futCalculatorCtrl", {$scope : $scope});
      $scope.tradeForm = {};
      $scope.tradeForm.$setPristine = function(){

      };
      $scope.$tradeList = [];
    });
  });

  it("Shold catch the trade", function(){
      $scope.saveTrade(tradeCalculated);
      expect($scope.$tradeList).toEqual(tradeList);
  });

});

function getTradeNotCalculated(){
  return {"name":"Trade mitico","purchasePrice":200,"sellBidPrice":250,"sellBuyNowPrice":300,"numCardsSolds":2};
}

function getTradeCalculated(){
  return {"name":"Trade mitico","purchasePrice":200,"sellBidPrice":250,"sellBuyNowPrice":300,"numCardsSolds":2,"profitBid":74,"eaTaxBid":26,"isBidProfit":true,"profitBuyNow":170,"eaTaxBuyNow":30,"isBuyNowProfit":true}
}
function getTradeList(){
  return [
    {"name":"Trade mitico","purchasePrice":200,"sellBidPrice":250,"sellBuyNowPrice":300,"numCardsSolds":2,"profitBid":74,"eaTaxBid":26,"isBidProfit":true,"profitBuyNow":170,"eaTaxBuyNow":30,"isBuyNowProfit":true}
  ];
};
