import React from "react";
import { useNavigate } from "react-router-dom";


function ProductItem({ image, name, id, price }) {
    const navigate = useNavigate();
    return (


        <div className="card">
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    Price {price} $
                </p>
                <div

                    className="btn btn-outline-primary text-dark"
                    onClick={() => {
                        navigate("/products/" + id);
                    }}
                >
                    Details</div>
            </div>
        </div>


    );
}

export default ProductItem;





