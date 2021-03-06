import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import CourseList from "../../components/CourseList";
import { Typography, withStyles } from "@material-ui/core";
import style from "./style";

/**
 * 1. Call api fetch all courses
 * 2. push courses in store
 * 3. render courseItem
 * 4. Material ui + jss
 */

class Home extends Component {
  render() {
    return (
      <div className={this.props.classes.backgroundHome}>
        <Typography
          className={this.props.classes.title}
          variant="h4"
          component="h1"
        >
          DANH SÁCH KHÓA HỌC
        </Typography>
        <CourseList />
      </div>
    );
  }
  componentDidMount() {
    axios({
      url:
        // "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "get",
      params: {
        MaNhom: "GP01",
      },
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// export default withStyles(style)(connect()(Home));
export default connect()(withStyles(style)(Home));
