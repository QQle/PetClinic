export interface VetSchema {
  vetID: string;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
  records: Records[];
}

export interface Records {
  id: number;
  type: string;
  gender: string;
  age: number;
  name: string;
  sterilized: boolean;
  vaccinated: boolean;
}
