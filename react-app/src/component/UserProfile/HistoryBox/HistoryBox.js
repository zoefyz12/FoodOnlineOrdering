import React, {Component} from 'react';
import UserStoreService from "../../../common/services/User/UserStoreService";
import userService from "../../../common/services/User/UserService";


class HistoryBox extends Component {

    state = {

        orderHistoryDetail: [],
        cancelButton: false,
        ifcancellable: null,
        status:this.props.orderStatus

    };


    componentDidMount() {

        let body = {
            order_id: this.props.orderId,
        };
       // console.log(body.authorization, "token")
        userService.getOrderHistoryDetail(JSON.stringify(body)).then((data) => {
            console.log(data);

            this.setState({orderHistoryDetail: data.orderdetail, ifcancellable: !data.ifcancellable});
            console.log(this.state.orderHistoryDetail,"orderHistory")
        }).catch((error) => {
            alert(error.message);
        });

    }

    handleCancel = () => {

        this.setState({status: 'canceled', ifcancellable: false});

        console.log(this.props.orderId)
        let body = {
            order_id: this.props.orderId,
        };
        // console.log(body.authorization, "token")
        userService.order_cancel(JSON.stringify(body)).then((data) => {
            console.log(data);
            alert("Cancel Order Succeed!");
        }).catch((error) => {
            alert(error.message);
        });

    };




    render() {
        return (
            <div>

                    <div>
                        <div >
                            <p className="borderexample"></p>
                            <div className="text-muted m-b-30 freeFont">

                                OrderId: {this.props.orderId}
                            </div>
                            <div className="text-muted m-b-30 freeFont">
                                OrderStatus: {this.state.status}
                            </div>
                            <div className="text-muted m-b-30 freeFont">
                                Date: {this.props.orderDate}
                            </div>
                            <div className="text-muted m-b-30 freeFont">
                                TotalPrice: {this.props.totalPrice} </div>
                        </div>

                        <div className="row clearfix">
                            <div className="col-md-12 column">
                                <table
                                    className="table table-bordered table-hover"
                                    id="tab_logic"
                                >
                                    <thead>
                                    <tr>

                                        <th className="text-center freeFont" > Picture </th>
                                        <th className="text-center freeFont"> Name </th>
                                        <th className="text-center freeFont"> Price </th>
                                        <th className="text-center freeFont"> Quantity </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.orderHistoryDetail.map((item, idx) => (
                                        <tr id="addr0" key={idx}>

                                            <td>
                                                <img className="rounded managerpicsize imagesize " src= {item.picurl} />
                                            </td>
                                            <td>
                                                <p className="fontsize" >{item.name}</p>
                                            </td>
                                            <td>
                                                <p className="fontsize" > {item.price}</p>
                                            </td>
                                            <td>
                                                <p className="fontsize" >{item.quantity}</p>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>

                                <button
                                    onClick={this.handleCancel}
                                    className=" btn btn-danger pull-right mb-3"
                                    disabled={this.state.ifcancellable}
                                >
                                    Cancel Order
                                </button>


                            </div>
                        </div>

                    </div>
                </div>

        )

    };
}
export default HistoryBox;