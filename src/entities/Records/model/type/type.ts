export interface RecordSchema {
  isLoading: boolean;
  error?: string;
  records: Array<{
    id: string;
    petName: string;
    veterinarianName: string;
    serviceName: string;
    dateOfAdmission: Date;
  }>;
  addRecords: Array<{
    userId: string;
    petId: string;
    veterinarianId: string;
    favorsId: string;
    dateOfAdmission: Date;
  }>;
  NearestEntry: Array<{
    veterinarianId: string;
    veterinarianName: string;
    specialization: string;
    nearestAvailableDate: string;
    nearestAvailableTime: string;
    favor: string;
  }>;
}
