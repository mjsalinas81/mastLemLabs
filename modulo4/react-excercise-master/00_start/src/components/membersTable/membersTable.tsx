import * as React from "react";
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
});

interface Props {}

export const MembersTableComponent = (props: Props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const [organization, setOrganization] = React.useState("lemoncode");
  const { searchContainer } = useStyles(props);

  const loadMembers = () => {
    memberAPI.getAllMembers(organization).then(members => setMembers(members));
  };

//<>
  return (
    <div className="row">
      <h2> Members Page</h2>
      <div className={searchContainer}>
          <TextField
                  label="Organization"
                  margin="normal"
                  value={organization} onChange={e => setOrganization(e.target.value)}
                /> &nbsp;
          <Button variant={"outlined"} onClick={loadMembers}>Load</Button>
      </div>  

        {members.map((member: MemberEntity) => (
          <MemberRow key={member.id} member={member} />
        ))}
    </div>
  );
};
