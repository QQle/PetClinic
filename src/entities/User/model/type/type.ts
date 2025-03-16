export interface UserSchema {
  userID: string;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
  role: string;
  pets: Pet[];
}

export interface Pet {
  id: string;
  type: string;
  gender: string;
  age: number;
  name: string;
  sterilized: boolean;
  vaccinated: boolean;
  needRevaccination: boolean;
}
