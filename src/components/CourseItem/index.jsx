import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
  //   function để đưua style vào component với props tên CLASSES
} from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";

class index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image={data.hinhAnh}
            title="Contemplative Reptile"
            className={this.props.classes.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.moTa}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={this.props.classes.btnAction}
            variant="contained"
            size="small"
            color="primary"
          >
            DETAIL
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(index);
