import { ServiceSchema } from "./model/type/type";
import { ServiceActions } from "./model/slice/ServiceSlice";
import { ServiceReducer } from "./model/slice/ServiceSlice";
import { getServices } from "./model/service/getServices";
import { serviceData } from "./model/selectors/serviceData";
import { getVeterinarian } from "./model/service/getVeterinarian";
import { vetData } from "./model/selectors/vetData";
export {
  type ServiceSchema,
  ServiceActions,
  ServiceReducer,
  getServices,
  serviceData,
  getVeterinarian,
  vetData,
};
