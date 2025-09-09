import {Link} from "react-router-dom";
const Product =(props) => {
    const {id,title,price,category,images} =props.data;

    return (
        <>
        <div class="col-sm-3">
            
            <div class="card">
                <img src ={images} class="card-img-top" alt ="..." />
                <div class="car-body">
                    <h5 class ="card-ttile">{title}</h5>
                    <p className="card-test">
                        <span className="badge badge-secondary">{category.name}</span>
                    </p>
                    <h2>
                        {""}
                        <span>&#8377;</span>{price}
                    </h2>
                    {/* <a href="" className="btn-primary btn-block">Show Details</a> */}
                    <Link to ={`/product/${id}`} class="btn btn-primary btn-block">
                    Show Details
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Product;