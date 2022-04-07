import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  bat_loading_action,
  tat_loading_action,
} from "../../Axios_QuanLySinhVien/Redux/actions/loadingAction";
import LoadingComponent from "../../Component_Router/LoadingComponent/LoadingComponent";

class ChiTietSinhVIen extends Component {
  state = {
    thongTinChiTiet: null,
  };
  componentDidMount() {
    let idUrl = this.props.match.params.id;
    // console.log(this.props.match.params.id);
    this.props.batLoading();
    axios({
      method: "GET",
      url: `https://624902de20197bb4626e6a21.mockapi.io/sv/${idUrl}`,
    })
      .then((res) => {
        // console.log("res", res);
        this.setState({ thongTinChiTiet: res.data });
        this.props.tatLoading();
      })
      .catch((err) => {
        console.log(err);
        this.props.tatLoading();
      });
  }
  render() {
    // console.log(this.props.match);
    return (
      <div className="container">
        <p>Tên: {this.state.thongTinChiTiet?.name}</p>
        <p>Email: {this.state.thongTinChiTiet?.email}</p>
        <p>Phone: {this.state.thongTinChiTiet?.phone}</p>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    batLoading: () => {
      dispatch(bat_loading_action());
    },
    tatLoading: () => {
      dispatch(tat_loading_action());
    },
  };
};

export default connect(null, mapDispatchToProps)(ChiTietSinhVIen);
