import * as React from "react";
import { memberAPI } from "../../api/memberAPI";
import {DetailMemberEntity, createDefaultDetailMemberEntity } from "../../model/detailMember";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

export const DetailMemberComponent = (props: Props) => {
    const [member, setMember] = React.useState<DetailMemberEntity>(createDefaultDetailMemberEntity());
  
    const loadMember = () => {
      memberAPI
      .getMember(props.match.params.id)
      .then(member => setMember(member));
    };
  
  React.useEffect(()=> loadMember());
  
    return (
        <>      
          <div>
            <h2> {member.name}</h2>
            <img
              src={member.avatar_url}
              style={{ maxWidth: "10rem", borderRadius: "100px" }}
            />
            <p>{member.login}</p>
            <p>{member.location}</p>
            <p>{member.company}</p>
            <p>{member.bio}</p>
          </div>
        </>
      );
  
    };
