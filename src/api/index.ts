import { http } from "@/utils";
type userType = {
  name: string;
};
export const testHttp = () => {
  return http.get<any>("/api/v1/doctor/hot");
};
