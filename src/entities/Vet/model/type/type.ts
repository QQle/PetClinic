export interface VetSchema {
  vetID: string;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
  records: Records[];
}

export interface Records {
  id: string;
  type: string;
  gender: string;
  age: number;
  name: string;
  sterilized: boolean;
  vaccinated: boolean;
  isAccept: boolean;
}
