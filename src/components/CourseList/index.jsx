import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import { Container, Grid } from "@material-ui/core";
import CourseItem from "../CourseItem";
import { connect } from "react-redux";
class index extends Component {
  renderCourseList = () => {
    const { courseList } = this.props;
    return courseList.map((item) => {
      return (
        <Grid key={item.maKhoaHoc} item xs={12} sm={6} lg={4} xl={3}>
          <CourseItem data={item} />
        </Grid>
      );
    });
  };

  render() {
    // console.log(this.props.courseList);
    return (
      <div>
        <Container maxWidth="lg">
          <Grid spacing={3} container>
            {this.renderCourseList()}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.courseList,
  };
};

export default connect(mapStateToProps)(index);
