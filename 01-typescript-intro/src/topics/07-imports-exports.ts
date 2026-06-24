import { type Product, type TaxCalculationOptions, taxCalculation} from './06-function-destructuring';

const shoppingCard : Product[] = [

    {
        description: 'iPhone 12',
        price: 800
    },
    {
        description: 'iPad Air',
        price: 350
    }

];


// Tax = 0.15
const taxCalculationOptions: TaxCalculationOptions = {
    products: shoppingCard,
    tax: 0.15
}


const [total, tax ] = taxCalculation(taxCalculationOptions);

console.log('Total: ', total);
console.log('Tax: ', tax);