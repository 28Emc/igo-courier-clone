import { ENDPOINT_V1, APPLICATION_JSON } from "../static/ApiEnpoints.constant";

export const OK: number = 200;
export interface IAPIResponse {
  code: number;
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

const API_URL = import.meta.env.API_URL || 'https://igo.pe/courier-api/public';

export const sendContactForm = async (contactData: any): Promise<IAPIResponse> => {
  let customHeaders = new Headers();
  customHeaders.append('Content-Type', APPLICATION_JSON);
  const response = await fetch(
    `${API_URL}/${ENDPOINT_V1.contact.messages}`,
    {
      method: 'POST',
      body: JSON.stringify(contactData),
      headers: customHeaders
    });
  const data: IAPIResponse = await response.json();

  if (!data.success) {
    return {
      code: data.code,
      success: false,
      error: data.error ?? 'Error de contacto.'
    };
  }

  return data;
};
