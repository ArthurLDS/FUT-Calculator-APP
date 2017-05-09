angular.module("futCalculatorApp").config(function($translateProvider){
  var translationsEnglish = {
    //Trade Operations Describes
    SEARCH_SAVED_TRADES: "Search your saved trades here",
    TRADE_NAME: "Trade name",
    PURCHASE_PRICE: "Purchase Price",
    SELL_BID_PRICE: "Sell Bid Price",
    SELL_BUY_NOW_PRICE: "Sell Buy-Now Price",
    NUM_CARDS_SOLD: "Cards sold",

    BID_PROFIT: "Bid profit",
    BUY_NOW_PROFIT: "Buy-Now profit",
    EA_TAX_BID: "Ea Tax Bid",
    EA_TAX_BUY_NOW: "Ea Tax Buy-Now",
    //Trade Operations Buttons
    BTN_CALCULATE_TRADE: "Calculate",
    BTN_CLEAR_TRADE: "Clear",
    BTN_SAVE_TRADE: "Save Trade",
    //Menu Itens
    TRADE_PANEL: "Trade painel",
    ABOUT_DEVELOPER: "About the delveloper",
    ABOUT_THE_APP: "About the APP",
    DOWNLOAD_PLAY_STORE: "Download the APP on Play Store",
    COLLABORATE_GITHUB: "Collaborate with us on GitHub"
  };
  var translationsPortuguese = {
    //Trade Operations Describes
    SEARCH_SAVED_TRADES: "Pesquise seus trades salvos aqui",
    TRADE_NAME: "Nome do Trade",
    PURCHASE_PRICE: "Preço de Compra",
    SELL_BID_PRICE: "Preço da Venda BID",
    SELL_BUY_NOW_PRICE: "Preço da Venda Buy-Now",
    NUM_CARDS_SOLD: "Cartas vendidas",

    BID_PROFIT: "Lucro BID",
    BUY_NOW_PROFIT: "Lucro Buy-Now",
    EA_TAX_BID: "Taxa EA BID",
    EA_TAX_BUY_NOW: "Taxa EA Buy-Now",
    //Trade Operations Buttons
    BTN_CALCULATE_TRADE: "Calcular",
    BTN_CLEAR_TRADE: "Limpar",
    BTN_SAVE_TRADE: "Salvar trade",
    //Menu Itens
    TRADE_PANEL: "Painel de Trade",
    ABOUT_DEVELOPER: "Sobre o desenvolvedor",
    ABOUT_THE_APP: "Sobre o APP",
    DOWNLOAD_PLAY_STORE: "Baixe o APP na Play Store",
    COLLABORATE_GITHUB: "Colabore conosco no GitHub"
  };
  $translateProvider.translations("en", translationsEnglish);
  $translateProvider.translations("pt", translationsPortuguese);

  $translateProvider.preferredLanguage("en");
});
