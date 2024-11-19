export interface ServiceSchema {
  isLoading: boolean;
  error?: string;
  result: Service[];
}

export interface Service {
  id: number;
  title: string;
  price: number;
  description: string;
}
