export interface DetailMemberEntity {
    login: string;
    name: string;
    company: string;
    location: string;
    email: string;
    bio: string;
    avatar_url: string;
  }
  
  export const createDefaultDetailMemberEntity = () => ({
    login: "",
    name: "",
    company: "",
    location: "",
    email: "",
    bio: "",
    avatar_url: ""
  });