import * as React from "react";
import { MemberEntity } from "../../model/member";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    marginTop: "2em"
  },
  title: {
    fontSize: "2em", 
    fontWeight: "bold" ,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
});

export const MemberRow = (props: { member: MemberEntity }) => {
    const memberRowStyle = useStyles(props);

    return(
      <Link to={`/detailMember/${props.member.login}`}>
          <Card className={memberRowStyle.card} variant="outlined">
            <CardContent>
              <img
                src={props.member.avatar_url}
                style={{ maxWidth: "10rem", borderRadius: "100px" }}
              />
              <Typography className={memberRowStyle.title} color="textSecondary" gutterBottom>
              {props.member.login}
              </Typography>            
            </CardContent>
            <CardActions>
                  <Button size="small" color="primary">Detail ({props.member.id})</Button>
            </CardActions>
          </Card>
        </Link>
      );
}
