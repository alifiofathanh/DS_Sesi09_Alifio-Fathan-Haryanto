const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page {
    get buttonCheckout () { return $('#checkout'); }

    async validateCartPage() {
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(this.buttonCheckout).toBeDisplayed()
    }
    
    open () {
        return super.open('/cart.html'); 
    }
}

module.exports = new CartPage();