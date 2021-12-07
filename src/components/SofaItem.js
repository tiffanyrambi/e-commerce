import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SofaItem = props => {
    return(
        <div className="col mb-5">
            <div className="card h-100 shadow">
                
                <div className="card-body p-4">
                    <div className="card-title d-flex">
                        <span className="badge bg-light p-3 rounded text-dark "><strong>NEW</strong></span>
                        <div className="d-grid gap-2 d-md-flex me-3 ">
                            <button className="btn me-md-2" type="button">
                                <FontAwesomeIcon icon="list"  size="lg" />
                            </button>
                            <button className="btn" type="button">
                                <FontAwesomeIcon icon="heart"  size="lg" />
                            </button>
                        </div>
                    </div>
                    <img className="card-img-top" src={props.imgsrc} alt="..." />
                    
                    <div className="text-center">
                        <h5 className="fw-bolder">Wooden Chair</h5>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    
                    <div className="d-flex ">
                        <FontAwesomeIcon icon="star"  size="lg" color="orange" />
                        <FontAwesomeIcon icon="star"  size="lg" color="orange" />
                        <FontAwesomeIcon icon="star"  size="lg" color="orange" />
                        <FontAwesomeIcon icon="star"  size="lg" color="orange" />
                        <FontAwesomeIcon icon="star"  size="lg" color="#DFD8CA" />

                        <div class="form-control d-flex btn-harga">
                            <div class="form-control-wrapper has-feedback has-success">
                                <span class="fa fa-check form-control-feedback feedback-success text-center" aria-hidden="true"><strong>12.000</strong></span>
                            </div>
                            
                        </div>
                        <button class="btn border">
                            <FontAwesomeIcon icon="shopping-cart" size="lg" />
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SofaItem;