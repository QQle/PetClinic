export interface RecordSchema {
  isLoading: boolean;
  error?: string;
  records: Array<{
    id: number;
    type: string;
    gender: string;
    age: number;
    name: string;
    sterilized: boolean;
    vaccinated: boolean;
  }>;
}
