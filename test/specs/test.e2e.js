const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const CartPage = require('../pageobjects/cart.page')
const DetailProductPage = require('../pageobjects/detailProduct.page')

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })

    it('should login with problem_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    
    it('should get into detail product page with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
        await DetailProductPage.validateDetailProductPage()
    })

    it('should get into cart page with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
        await CartPage.validateCartPage()
    })

    /*Proses login dengan performance_glitch_user, error_user, dan visual_user credentials memiliki 
    behavior yang sama dengan standard_user dan problem_user credentials.*/
})