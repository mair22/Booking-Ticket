import React, { Component } from "react";
import Infobooking from "./Infobooking";
import danhSachGheData from "../data/danhSachGhe.json";
import "./Style.css";
import Info from "./Info";

export default class Main extends Component {
  renderInfo = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <Info hangGhe={hangGhe} soHangGhe={index}></Info>
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM
                </div>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                {this.renderInfo()}
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: "35px" }} className="text-light mt-2">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <Infobooking></Infobooking>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
