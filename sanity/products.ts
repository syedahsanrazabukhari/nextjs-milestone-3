export default {
    name: 'Product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: "id",
            type: "number",
            title: "Product ID",
            default: Date.now()
        },
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'Productdetail',
            type: 'string',
            title: 'Product detail'
        },
        {
            name: 'Productprice',
            type: 'string',
            title: 'Product Price'
        },
        {
            name: 'ProductImage',
            type: 'image',
            title: 'Product Image'
        }
    ]
}
