export interface AddPetsSchema {
  pets: Pet;
  isLoading: boolean;
  error?: string;
  result: "";
}

export interface Pet {
  type: string;
  gender: string;
  age: string;
  sterilized: boolean;
  vaccinated: boolean;
  name: string;
  ownerId: string;
}
