angular.module("futCalculatorApp").config(function($translateProvider){
  var translationsEnglish = {
    //Trade Operations Describes
    SEARCH_SAVED_TRADES: "Search your saved trades here",
    TRADE_NAME: "Trade name",
    PURCHASE_PRICE: "Purchase Price",
    SELL_BID_PRICE: "Sell Bid Price",
    SELL_BUY_NOW_PRICE: "Sell Buy-Now Price",
    NUM_CARDS_SOLD: "Cards sold",
    //Trade Operations Buttons
    BTN_CALCULATE_TRADE: "Calculate",
    BTN_CLEAR_TRADE: "Clear",
    BTN_SAVE_TRADE: "Save Trade"
  };
  var translationsPortuguese = {
    //Trade Operations Describes
    SEARCH_SAVED_TRADES: "Pesquise seus trades salvos aqui",
    TRADE_NAME: "Nome do Trade",
    PURCHASE_PRICE: "Preço de Compra",
    SELL_BID_PRICE: "Preço de Venda no BID",
    SELL_BUY_NOW_PRICE: "Preço de Venda no Buy-Now",
    NUM_CARDS_SOLD: "Cartas vendidas",
    //Trade Operations Buttons
    BTN_CALCULATE_TRADE: "Calcular",
    BTN_CLEAR_TRADE: "Limpar",
    BTN_SAVE_TRADE: "Salvar trade"
  };
  $translateProvider.translations("en", translationsEnglish);
  $translateProvider.translations("pt", translationsPortuguese);

  $translateProvider.preferredLanguage("en");
});
