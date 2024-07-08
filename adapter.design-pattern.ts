// Existing class we want to reuse the logic
class AmericanPlug {
    plugNow() {
        return 'done plug 110V'
    }
}

// New interface to work with old objects
interface EuropeanPlug {
    plugIt(): void
}

// This is the adapter class. 
// It adapts the American to be able to plug as European.
class AmericanWithEuropeanAdapter implements EuropeanPlug {
    adaptee: AmericanPlug = new AmericanPlug()

    plugIt() {
        const result = this.adaptee.plugNow()
        return result.replace('110', '220')
    }
}

const adaptedPlug = new AmericanWithEuropeanAdapter()

function client(plug: EuropeanPlug) {
    console.log(plug.plugIt())
}

client(adaptedPlug)