import { AuthSchema } from "entities/Authorization";
import { RegistSchema } from "entities/Registration";
import { PetsRegisteredSchema } from "entities/PetsRegistered";
import { UserSchema } from "entities/User";
import { VetSchema } from "entities/Vet";

export interface StateSchema {
  auth: AuthSchema;
  pets: PetsRegisteredSchema;
  regist: RegistSchema;
  user: UserSchema;
  vet: VetSchema;
}

export type StateSchemaKey = keyof StateSchema;
