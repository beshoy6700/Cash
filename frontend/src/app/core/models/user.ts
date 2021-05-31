import {Role} from "./role";

export class User {
  id: number;
  image: string;
  username: string;
  password: string;
  name: string;
  role: Role;
  token: string;
}
