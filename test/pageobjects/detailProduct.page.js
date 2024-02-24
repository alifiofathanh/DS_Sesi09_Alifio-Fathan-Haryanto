const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class DetailProductPage extends Page {
    get buttonAddtoCartOnDetail () { return $('#add-to-cart-sauce-labs-bike-light'); }

    async validateDetailProductPage() {
        expect(browser).toHaveUrlContaining('/inventory-item.html?id=0')
        expect(this.buttonAddtoCartOnDetail).toBeDisplayed()
    }
    
    open () {
        return super.open('/inventory-item.html?id=0'); 
    }
}

module.exports = new DetailProductPage();