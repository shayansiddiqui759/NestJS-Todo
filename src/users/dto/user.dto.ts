export interface UserRegisterDTO {
  password: string;
  email: string;
}

export interface UserLoginDTO {
  _id: string;
  email: string;
  password: string;
}
