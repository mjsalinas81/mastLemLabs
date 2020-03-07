import { Member, createDefaultMember } from "../model/member";

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data: any): Promise<Member[]> => {
  const members = data.map(gitHubMember => {
    var member: Member = createDefaultMember();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<Member[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};


const resolveMember = (data: any): Promise<Member> => {
  const member = createDefaultMember();

  member.id = data.id;
  member.login = data.login;
  member.avatar_url = data.avatar_url;
  member.name = data.name;
  member.company = data.company;
  member.location = data.location;

  return Promise.resolve(member);
};

export const getDetailsMember = (memberName: string): Promise<Member> => {
  const urlDetailsMember = `https://api.github.com/users/${memberName}`;

  return fetch(urlDetailsMember)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMember(data).then((memberData: Member) => memberData));
};