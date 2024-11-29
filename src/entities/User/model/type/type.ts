export interface UserSchema {
  userID: string;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
  role: string;
  pets: Pet[];
}

export interface Pet {}
