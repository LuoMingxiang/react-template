import { http } from "@/utils";
export const testHttp = () => {
  return http.get<any>("/api/v1/doctor/hot");
};
