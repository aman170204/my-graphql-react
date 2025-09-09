import {Link} from "react-router-dom";
const Category = (props) =>{
    const{id,name,image} =props.data;
    return(
        <div class ="col-sm-3">
            <div class ="card">
                <img src={image} alt="..." class="card-img-top" />
                <div class ="card-body">
                    <h5 class ="card=title">{name}</h5>
                     {/* <a href="#" class="btn-primary btn-block">
                        Select
                        </a> */}
                        <Link to='/products' className="btn btn-priary btn-block">
                        Select
                        </Link>
                </div>
            </div>
        </div>
    );
}

export default Category;