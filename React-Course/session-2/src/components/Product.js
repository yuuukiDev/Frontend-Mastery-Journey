const Product = (props) => {
    const state = {
        seller: "Amazon"
    }
    return (
        <h4>
        Product: {props.product_name}<br/>
        Description: {props.product_description}<br/>
        Price: {props.product_price}<br/>
        Date of Release: {props.product_release_date}<br/>
        Sold by: {state.seller}<br/>
        </h4>
    );
}


export default Product;