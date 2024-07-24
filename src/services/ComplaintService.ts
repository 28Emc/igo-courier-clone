import { ENDPOINT_V1, APPLICATION_JSON } from "../static/ApiEnpoints.constant";
import { host, port } from "../static/fake-db/json-server.json";

export const OK: number = 200;
export const CREATED: number = 201;
export interface IAPIResponse {
  code: number;
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

const API_URL = `${host}:${port}`;

export const sendComplaintForm = async (complaintData: any): Promise<IAPIResponse> => {
  let customHeaders = new Headers();
  customHeaders.append('Content-Type', APPLICATION_JSON);
  const response = await fetch(
    `${API_URL}/${ENDPOINT_V1.contact.complaints}`,
    {
      method: 'POST',
      body: JSON.stringify(complaintData),
      headers: customHeaders
    });
  const data: IAPIResponse = await response.json();

  if (response.status !== CREATED) {
    return {
      code: data.code,
      success: false,
      error: data.error ?? 'Error de libro de reclamaciones.'
    };
  }

  return {
    code: CREATED,
    success: true,
    data: 'Tu información ha sido registrada correctamente. Nos contacteremos con usted lo antes posible.'
  };
};
