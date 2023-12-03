import './Products.css'
const Product = (props) => {
    return (
        <div className="card">
            <img src={props.product.image} alt =""/>
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <h3>Price: {props.product.price}</h3>
            <button onClick={() => {
                console.log("You are buying this product", props.product.title)
            }}>Buy</button>
        </div>
    );
}


export default Product