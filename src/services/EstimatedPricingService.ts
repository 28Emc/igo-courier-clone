import { APPLICATION_JSON, ENDPOINT_V1 } from "../static/ApiEnpoints.constant";

export const OK: number = 200;
export const SERVICIO_EXPRES_ID: number = 3;
export interface IAPIResponse {
  code: number;
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

const API_URL = import.meta.env.API_URL || 'https://igo.pe/courier-api/public';

export const fetchCustomLocations = async (pagination: any): Promise<IAPIResponse> => {
  const response = await fetch(`${API_URL}/${ENDPOINT_V1.location.list}?page=${pagination.Page}&perpage=${pagination.PerPage}&status=${pagination.Status}`);
  const data = await response.json();

  if (response.status !== OK) {
    const error = data['error'];
    return {
      code: response.status,
      success: false,
      error: error || 'Error de consulta de distritos.'
    };
  }

  return {
    code: OK,
    ...data
  };
};

export const fetchCustomServiceTypes = async (pagination: any): Promise<IAPIResponse> => {
  const response = await fetch(`${API_URL}/${ENDPOINT_V1.service.list}?page=${pagination.Page}&perpage=${pagination.PerPage}&status=${pagination.Status}`);
  const data = await response.json();

  if (response.status !== OK) {
    const error = data['error'];
    return {
      code: response.status,
      success: false,
      error: error || 'Error de consulta de tipos de servicios.'
    };
  }

  return {
    code: OK,
    ...data
  };
};

export const fetchCustomPackageTypes = async (pagination: any): Promise<IAPIResponse> => {
  const response = await fetch(`${API_URL}/${ENDPOINT_V1.package.list}?page=${pagination.Page}&perpage=${pagination.PerPage}&status=${pagination.Status}`);
  const data = await response.json();

  if (response.status !== OK) {
    const error = data['error'];
    return {
      code: response.status,
      success: false,
      error: error || 'Error de consulta de tipos de paquetes.'
    };
  }

  return {
    code: OK,
    ...data
  };
};

export const sendEstimatedPricingForm = async (estimatedPricingData: any): Promise<IAPIResponse> => {
  let customHeaders = new Headers();
  customHeaders.append('Content-Type', APPLICATION_JSON);
  const response = await fetch(
    `${API_URL}/${ENDPOINT_V1.service.packageQuotation}`,
    {
      method: 'POST',
      body: JSON.stringify(estimatedPricingData),
      headers: customHeaders
    });
  const data: IAPIResponse = await response.json();

  if (!data.success) {
    return {
      code: data.code,
      success: false,
      error: data.error ?? 'Error de cotización.'
    };
  }

  return data;
};