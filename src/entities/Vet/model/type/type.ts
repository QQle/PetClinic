export interface VetSchema {
  vetID: string;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
  records: Records[];
}

export interface Records {
  bidId: string;
  type: string;
  gender: string;
  age: number;
  clientName: string;
  petName: string;
  favorName: string;
  sterilized: boolean;
  vaccinated: boolean;
  isAccept: boolean;
}
