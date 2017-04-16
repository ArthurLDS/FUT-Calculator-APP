describe("Calculates of Trades Tests", function(){

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
    angular.mock.inject(function($controller, $rootScope){
      $scope = $rootScope.$new();
      $controller("futCalculatorCtrl", {$scope : $scope});
      $scope.tradeForm = {};
      $scope.tradeForm.$setPristine = function(){};
      $scope.$tradeList = [];
    });
  });

  it("Should save a trade in tradeList", function(){
      let localStorage;
      angular.mock.inject(function($controller, $rootScope, $localStorage){
          localStorage = $localStorage;
      });
      $scope.saveTrade(tradeCalculated);
      expect($scope.$tradeList).toEqual(tradeList);
      expect(localStorage.tradeList).toEqual(tradeList);
  });
  it("Should delete a trade in tradeList", function(){
      let localStorage;
      angular.mock.inject(function($controller, $rootScope, $localStorage){
          localStorage = $localStorage;
      });
      $scope.deleteTrade(tradeCalculated);
      expect($scope.$tradeList).toEqual([]);
      expect(localStorage.tradeList).toEqual([]);
  });
  it("Shouldn't save a trade with incompletes properties", function(){
      $scope.trade = new Trade("Test trade", 200, 400, 450, 2);
      $scope.saveTrade($scope.trade);
      expect($scope.trade).toEqual({});
  });
  it("Should put default name for unnamed trades", function(){
      let trade = new Trade("", 200, 400, 450, 2);
      $scope.trade = trade;
      $scope.calculate($scope.trade);
      $scope.saveTrade($scope.trade);
      expect(trade.name).toEqual("Unnamed trade");
  });
});

function Trade(name, purchasePrice, sellBidPrice, sellBuyNowPrice, numCardsSolds){
  this.name = name;
  this.purchasePrice = purchasePrice;
  this.sellBidPrice = sellBidPrice
  this.sellBuyNowPrice = sellBuyNowPrice;
  this.numCardsSolds = numCardsSolds;
};

function getTradeNotCalculated(name){
  return new Trade("Trade mitico", 200, 250, 300, 2);
}

function getTradeCalculated(){
  return {"name":"Trade mitico","purchasePrice":200,"sellBidPrice":250,"sellBuyNowPrice":300,"numCardsSolds":2,"profitBid":74,"eaTaxBid":26,"isBidProfit":true,"profitBuyNow":170,"eaTaxBuyNow":30,"isBuyNowProfit":true}
}
function getTradeList(){
  return [
    {"name":"Trade mitico","purchasePrice":200,"sellBidPrice":250,"sellBuyNowPrice":300,"numCardsSolds":2,"profitBid":74,"eaTaxBid":26,"isBidProfit":true,"profitBuyNow":170,"eaTaxBuyNow":30,"isBuyNowProfit":true}
  ];
};
