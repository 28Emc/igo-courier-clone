import { ENDPOINT_V1 } from "../static/ApiEnpoints.constant";

export const OK: number = 200;
export interface IAPIResponse {
  code: number;
  message?: string;
  error?: string;
  data?: any;
}

const API_URL = import.meta.env.API_URL || 'https://igo.pe/courier-api/public';

//EJM. 66837fdd09a4f
export const trackingByCode = async (trackingCode: string): Promise<IAPIResponse> => {
  const response = await fetch(`${API_URL}/${ENDPOINT_V1.order.packages}/${trackingCode}/tracking`);
  const data = await response.json();

  if (response.status !== OK) {
    const error = data['error'];
    return {
      code: response.status,
      error: error || 'Error de tracking.'
    };
  }

  return {
    code: OK,
    ...data
  };
};
