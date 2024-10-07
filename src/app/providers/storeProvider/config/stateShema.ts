import { AuthSchema } from "entities/Authorization";
import { RegistSchema } from "entities/Registration";
import { UserSchema } from "entities/User";

export interface StateSchema {
    auth: AuthSchema;
    regist: RegistSchema;
    user: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;