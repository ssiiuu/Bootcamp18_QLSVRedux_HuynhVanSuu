import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachSinhVien from "./DanhSachSinhVien/DanhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import {
  bat_loading_action,
  tat_loading_action,
} from "./Redux/actions/loadingAction";
import { SET_DANH_SACH_SV } from "./Redux/constants/quanLySVConstant";
import { sinhVienService } from "./sinhVienService/sinhVienService";

class Axios_QuanLySinhVien extends Component {
  componentDidMount() {
    this.props.batLoading();
    sinhVienService
      .layDanhSachSinhVien()
      .then((res) => {
        // console.log(res);
        // this.setState({ dssv: res.data });
        this.props.setDSSV(res.data);
        this.props.tatLoading();
      })
      .catch((err) => {
        console.log(err);
        this.props.tatLoading();
      });
  }
  render() {
    return (
      <div className="container">
        <p className="display-3 pt-3 text-center">Quản Lý Sinh Viên</p>
        <ModalSinhVien />
        <DanhSachSinhVien />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setDSSV: (dssv) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: dssv,
      });
    },
    batLoading: () => {
      dispatch(bat_loading_action());
    },
    tatLoading: () => {
      dispatch(tat_loading_action());
    },
  };
};

export default connect(null, mapDispatchToProps)(Axios_QuanLySinhVien);
