import { APPLICATION_JSON, ENDPOINT_V1 } from "../static/ApiEnpoints.constant";
import { host, port } from "../static/fake-db/json-server.json";

export const OK: number = 200;
export const CREATED: number = 201;
export const NOT_FOUND: number = 404;
export const SERVICIO_EXPRES_ID: number = 3;
export interface IAPIResponse {
  code: number;
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

const API_URL = `${host}:${port}`;

export const fetchCustomLocations = async (pagination: any): Promise<IAPIResponse> => {
  const response = await fetch(`${API_URL}/${ENDPOINT_V1.location.list}?_page=${pagination.Page}&_limit=${pagination.PerPage}&status_like=${pagination.Status}`);
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
    success: true,
    data
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
    success: true,
    data
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
    success: true,
    data
  };
};

export const sendEstimatedPricingForm = async (estimatedPricingData: any): Promise<IAPIResponse> => {
  let customHeaders = new Headers();
  customHeaders.append('Content-Type', APPLICATION_JSON);
  const response = await fetch(
    `${API_URL}/${ENDPOINT_V1.service.packageQuotation}?origin_location_id=${estimatedPricingData.origin_location_id}&packagesize_id=${estimatedPricingData.packagesize_id}&service_id=${estimatedPricingData.service_id}&target_location_id=${estimatedPricingData.target_location_id}`,
    {
      method: 'GET',
      headers: customHeaders
    });
  const data = await response.json();

  if (response.status !== OK) {
    return {
      code: response.status,
      success: false,
      error: data.error ?? 'Error de cotización.'
    };
  }

  if (!data.length) {
    return {
      code: NOT_FOUND,
      success: false,
      error: 'Por el momento no tenemos cobertura para el distrito seleccionado.'
    };
  }

  return {
    code: OK,
    success: true,
    data: {
      quotation: data[0]['quotation'],
      quotation_express: data[0]['quotation_express']
    }
  };
};