export interface ServiceSchema {
  isLoading: boolean;
  error?: string;
  result: Array<{
    id: number;
    title: string;
    price: number;
    description: string;
  }>;
  veterinarian: Array<{
    id: number;
    img: string;
    price: number;
    surname: string;
    name: string;
    lastName: string;
    position: string;
  }>;
}
