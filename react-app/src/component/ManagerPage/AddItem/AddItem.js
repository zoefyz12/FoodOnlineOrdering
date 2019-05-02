import React from 'react';
import './AddItem.css';

const AddItem = (props) => {

    const handleSubmit = (event, props) => {
        let body = {
            username: event.target.username.value,
            password: event.target.username.value
        };
        console.log(body, props)
        //userService.userLogin(body)
        event.preventDefault();
    };

    return (
        <div>


            <div>
                <h1>Add Item</h1>
                <form onSubmit={(event) => handleSubmit(event, props)}>
                    <div className="form-group">
                        <label htmlFor="fisrtName">Item ID<span className="text-danger">*</span></label>
                        <input type="number" name="itemId" required
                               placeholder="Enter Item Id" className="form-control" id="itemId"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="wareNum">Warehouse #<span className="text-danger">*</span></label>
                        <input type="number" name="wareNum" required
                               placeholder="Enter Warehouse number" className="form-control" id="wareNum"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemQuantity">Quantity<span className="text-danger">*</span></label>
                        <input type="number" name="itemQuantity" required
                               placeholder="Enter Quantity" className="form-control" id="itemQuantity"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price<span className="text-danger">*</span></label>
                        <input type="number" name="price" required
                               placeholder="Enter Price" className="form-control" id="price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemName">Name<span className="text-danger">*</span></label>
                        <input type="number" name="itemName" required
                               placeholder="Enter Item Name" className="form-control" id="itemName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemWeight">Weight<span className="text-danger">*</span></label>
                        <input type="number" name="itemWeight" required
                               placeholder="Enter Item Weight" className="form-control" id="itemWeight"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemDescription">Description<span className="text-danger">*</span></label>
                        <input type="text" name="itemDescription" required
                               placeholder="Enter Item Description" className="form-control" id="itemDescription"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemCategory">Category<span className="text-danger">*</span></label>
                        <input type="text" name="itemCategory" required
                               placeholder="Enter Item Category" className="form-control" id="itemCategory"/>
                    </div>

                    <div>
                        <label htmlFor="itemPicture">Picture<span className="text-danger">*</span></label>
                        <input type="file" accept="image/*" id="itemPicture"/>
                    </div>
                    <div className="btnCenter">
                    <button
                        className="btn btn-danger"
                    >
                        Add Item
                    </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddItem;