import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  margin: {
    margin: theme.spacing(1)
  },
  rounded: {
    color: "#fff"
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  }
}));

export default props => {
  const classes = useStyles();

  const { shop, onCheck, id } = props;
  const firstLetterOfShop = shop.name.charAt(0);

  const handleOnClick = (id) => {
    onCheck(id)
  }

  return (
    <div key={shop.id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <IconButton
            aria-label="delete"
            className={classes.margin}
            size="small"
            onClick={() => handleOnClick(id)}
          > */}
            <Avatar
              className={classes.pink}
              variant="rounded"
              src="/static/images/avatar/2.jpg"
              alt={firstLetterOfShop}
            />
          {/* </IconButton> */}
        </ListItemAvatar>
        <ListItemText
          primary={shop.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {shop.localization}
              </Typography>
              {` – Otwarte: ${shop.openHours}`}
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
};
