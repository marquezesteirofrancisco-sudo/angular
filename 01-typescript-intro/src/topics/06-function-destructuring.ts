export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

export interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}


export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    // options.products.forEach((product) => {
    //     total += product.price;
    // });

    // Destructuring the product object directly in the forEach callback
    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
};


const soppingCart = [phone, tablet];
const tax = 0.15;


// const result = taskCalculation({
//         products: soppingCart,
//         tax
//     }
// );

// console.log('Total: ', result[0]);
// console.log('Total + Tax: ', result[1]);


// Destructuring the result of the function call
const [total, taxTotal] = taxCalculation({
        products: soppingCart,
        tax
    }
);


console.log('Total: ', total);
console.log('Total + Tax: ', taxTotal);



 