export interface Member {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
}

export const createDefaultMember = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  name: '',
  company: '',
  location: ''
});
