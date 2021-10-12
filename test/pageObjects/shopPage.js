class ShopPage {
  get checkout() {
    return $("*=Checkout");
  }
  get cards() {
    return $$("div.card.h-100");
  }

  addProductToCart(products) {
    this.cards
      .filter((card) =>
        products.includes(card.$("div h4.card-title a").getText())
      )
      .map((productCard) => productCard.$(".card-footer button").click());
  }
}
module.exports = new ShopPage();
