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
  specialization: string;
}

export interface Veterinarian {
  id: string;
  photoUrl: string;
  price: number;
  specialization: string;
  surname: string;
  name: string;
  lastName: string;
  position: string;
}
