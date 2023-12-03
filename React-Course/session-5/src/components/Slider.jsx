import './css/Slider.css'
const Slider = () => {
    return (
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/Header_43a6fbaa-305a-4bda-8ef7-5e7f4e1278da.png?format=jpg&quality=90&v=1694450194&width=1024" className="d-block w-100 height-500" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )   
}


export default Slider