import React, { Component } from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
class LoadingComponent extends Component {
  render() {
    return this.props.isLoading ? (
      <div className="container my-5">
        <ReactLoading type={"spin"} color={"green"} height={60} width={60} />
      </div>
    ) : (
      <></>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
};

export default connect(mapStateToProps)(LoadingComponent);
