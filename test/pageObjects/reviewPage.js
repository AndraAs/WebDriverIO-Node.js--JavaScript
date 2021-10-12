class ReviewPage {
  get productPrices() {
    return $$("tr td.col-sm-1.col-md-1.text-center:nth-child(4) strong");
  }
  get totalPrices() {
    return $("td.text-right h3 strong");
  }
  get successBtn(){
      return $(".btn-success")
  }
  get country(){
      return $("#country")
  }
  get ellipsisMsg(){
      return $("div.lds-ellipsis")
  }
  get optionList(){
      return $("=India")
  }
  get purchaseVal(){
      return $("[value='Purchase']")
  }
  get successAlert(){
   return $(".alert-success")
  }
  sumOfProducts() {
    const sumOfProducts = this.productPrices
      .map((productPrice) =>
        parseInt(productPrice.getText().split(".")[1].trim())
      )
      .reduce((acc, price) => acc + price, 0);
    return sumOfProducts;
  }
  totalFormattedPrice() {
    return parseInt(this.totalPrices.getText().split(".")[1].trim());
  }
}
module.exports = new ReviewPage();
