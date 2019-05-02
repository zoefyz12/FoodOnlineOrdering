import React, {Component} from 'react';
import './ManagerPage.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "@material-ui/core/Modal/Modal";
import AddItem from "./AddItem/AddItem";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import logo from "../images/ezgif-1-e382b6df9dbb.png";
import userService from "../../common/services/User/UserService";

class ManagerPage extends Component {
    state = {
        rows: ['1','1','1'],
        name: ['Boise POLARIS® Premium Multipurpose Paper, Letter Paper Size, FSC® Certified, White, 500 Sheets Per Ream, Case Of 10 Reams',
            'Realspace® Magellan Performance Collection L-Shaped Desk, Espresso Realspace® Magellan Performance Collection L-Shaped Desk, Espresso',
            'Lenovo® IdeaPad™ 530S Laptop, 14" Screen, AMD Ryzen™ 5, 8GB Memory, 256GB Solid State Drive, Windows® 10 Home'],
        pic: ['https://officedepot.scene7.com/is/image/officedepot/196697_p_boise_polaris_premium_multipurpose_paper?$OD-Med$',
            'https://officedepot.scene7.com/is/image/officedepot/956652_p_realspace_magellan_performance_collection_l_desk?$OD-Med$',
            'https://officedepot.scene7.com/is/image/officedepot/2553990_o01_lenovo_ideapad_530s_laptop?$OD-Med$'],
        detailItem:['burger1 * 1 burger * 2 burger * 3'],
        OrderTime: ['04/27/2019 15:43','04/20/2019 24:35','04/14/2019 09:51'],
        column: ['1','2','3'],
        open: false,
        scroll: 'body',
    };
    componentDidMount() {


        userService.manager_display().then((data) => {

            console.log(data);
            //
            // this.setState({nameData: data, allData: UserStoreService.getAllItem(), itemIds: itemIds});
            // console.log(this.state.allData, "ComponentDidmMount allData");
            // console.log(this.state.nameData);
        }).catch((error) => {
            alert(error.message);
        });

        // fetch data from backend and assign all to displayCare
    }
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleOpen = scroll => () => {
        this.setState({open: true, scroll});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    render() {
        return (
            <div>
                <div className="container">
                    <img className="rounded mx-auto d-block Mlogo" src={logo}/>
                    <Navbar bg="white" variant="light">
                        <Nav className="float-right">
                            <Nav.Link >Hi, Manager</Nav.Link>
                            <Nav.Link onClick={this.handleOpen('body')}>Add Item</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        scroll={this.state.scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="simple-modal-description"
                    >
                        <DialogContent>

                        <AddItem/>
                        </DialogContent>
                    </Dialog>
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                <tr>
                                    <th className="text-center"> Order Id </th>
                                    <th className="text-center"> Order Detail </th>
                                    <th className="text-center"> Order Time </th>
                                    <th className="text-center"> Pick up </th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.rows.map((item, idx) => (
                                    <tr id="addr0" key={idx}>
                                        <td>{idx}</td>
                                        <td>
                                            {this.state.detailItem}
                                        </td>
                                        <td>
                                            {this.state.OrderTime[idx]}
                                        </td>
                                        <td>
                                            <button
                                                onClick={this.handleRemoveRow}
                                                className=" btn btn-danger"
                                            >
                                                Pick up
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagerPage;