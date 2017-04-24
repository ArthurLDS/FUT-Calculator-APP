describe("Calculates of Trades Tests", function(){
  beforeEach(function(){
    angular.mock.module("futCalculatorApp");
    angular.mock.inject(function($controller, $rootScope, $localStorage, $animate){
      animate = $animate;
      localStorage = $localStorage;

      $scope = $rootScope.$new();
      $controller("futCalculatorCtrl", {
        $scope : $scope
      });
    });

    trade = new Trade("Trade Test", 200, 250, 300, 2);
    $scope.calculate(trade);
  });

  it('Should calculate bid profit of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    console.log(trade);
    expect(trade.profitBid).toEqual(74);
  });
  it('Should calculate buy now profit of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    expect(trade.profitBuyNow).toEqual(170);
  });
  it('Should calculate bid EA tax  of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    expect(trade.eaTaxBid).toEqual(26);
  });
  it('Should calculate buy now EA tax  of the trade with purchasePrice 200 and sell prices 250 and 300', function() {
    expect(trade.eaTaxBuyNow).toEqual(30);
  });
});

describe("Crud of trades Tests", function(){
  beforeEach(function(){
    angular.mock.module("futCalculatorApp");
    angular.mock.inject(function($controller, $rootScope){
      $scope = $rootScope.$new();

      $controller("futCalculatorCtrl", {$scope : $scope});
      $scope.tradeForm = {};
      $scope.tradeForm.$setPristine = function(){};
      $scope.$tradeList = [];
    });

    tradeSample = new Trade("Trade mitico", 200, 250, 300, 2);
    $scope.calculate(trade);
    tradeListSample = getTradeList(tradeSample);
  });

  it("Should save a trade in tradeList", function(){
      let localStorage;
      angular.mock.inject(function($localStorage){
          localStorage = $localStorage;
      });
      $scope.saveTrade(tradeSample);
      expect($scope.$tradeList).toEqual(tradeListSample);
      expect(localStorage.tradeList).toEqual(tradeListSample);
  });
  it("Should delete a trade in tradeList", function(){
      let localStorage;
      angular.mock.inject(function($localStorage){
          localStorage = $localStorage;
      });
      $scope.deleteTrade(tradeSample);
      expect($scope.$tradeList).toEqual([]);
      expect(localStorage.tradeList).toEqual([]);
  });
  it("Shouldn't save a trade with incompletes properties", function(){
      let trade = new Trade("Test trade", 200, 250, 300, 2);
      $scope.saveTrade(trade);
      expect($scope.trade).toEqual({});
  });
  it("Should put default name for unnamed trade", function(){
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
  return new Trade("Trade mitico", 200, 250, 300, 2, 74, 26, true, 170, 30, true);
}
function getTradeList(trade){
  return new Array(trade);
};
