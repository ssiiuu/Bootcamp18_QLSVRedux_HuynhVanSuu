import "./App.css";
import Axios_QuanLySinhVien from "./Axios_QuanLySinhVien/Axios_QuanLySinhVien";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Page_QLSV/Home/HomePage";
import ChiTietSinhVIen from "./Page_QLSV/ChiTietSinhVien/ChiTietSinhVIen";
import NavRouter from "./Component_Router/NavRouter/NavRouter";
import LoadingComponent from "./Component_Router/LoadingComponent/LoadingComponent";
function App() {
  return (
    <BrowserRouter>
      <NavRouter />
      <LoadingComponent />
      <Switch>
        <Route exact path={"/"} component={HomePage} />

        <Route path={"/dssv"} component={Axios_QuanLySinhVien} />
        <Route path={"/detail/:id"} component={ChiTietSinhVIen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
