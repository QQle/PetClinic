import { AuthSchema } from "entities/Authorization";
import { RegistSchema } from "entities/Registration";
import { PetsRegisteredSchema } from "entities/PetsRegistered";
import { UserSchema } from "entities/User";
import { VetSchema } from "entities/Vet";
import { AddPetsSchema } from "entities/AddPets";
import { ServiceSchema } from "entities/ServiceVet";
import { RecordSchema } from "entities/Records";
import { VolunteersRegisteredSchema } from "entities/VolunteersRegistered";

export interface StateSchema {
  auth: AuthSchema;
  pets: PetsRegisteredSchema;
  regist: RegistSchema;
  user: UserSchema;
  vet: VetSchema;
  addPet: AddPetsSchema;
  service: ServiceSchema;
  records: RecordSchema;
  volunteers: VolunteersRegisteredSchema;
}

export type StateSchemaKey = keyof StateSchema;
