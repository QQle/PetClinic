export interface ServiceSchema {
  isLoading: boolean;
  error?: string;
  result: Favor[];
  veterinarian: Veterinarian[];
}

export interface Favor {
  id: string;
  title: string;
  basePrice: number;
  description: string;
}

export interface Veterinarian {
  id: string;
  img: string;
  price: number;
  surname: string;
  name: string;
  lastName: string;
  position: string;
}
