import { ENDPOINT_V1 } from "../static/ApiEnpoints.constant";
import { host, port } from "../static/fake-db/json-server.json";

export const OK: number = 200;
export const NOT_FOUND: number = 404;
export interface IAPIResponse {
  code: number;
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

const API_URL = `${host}:${port}`;

//EJM. 66837fdd09a4f
export const trackingByCode = async (trackingCode: string): Promise<IAPIResponse> => {
  const response = await fetch(`${API_URL}/${ENDPOINT_V1.order.packages}?package.codigo=${trackingCode}`);
  const data = await response.json();

  if (response.status !== OK) {
    const error = data['error'];
    return {
      code: response.status,
      success: false,
      error: error || 'Error de tracking.'
    };
  }

  if (!data.length) {
    return {
      code: NOT_FOUND,
      success: false,
      error: 'Paquete no encontrado'
    }
  }

  return {
    code: OK,
    success: true,
    data: data[0]
  };
};
