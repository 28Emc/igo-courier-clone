const API_V1 = 'api';

export const APPLICATION_JSON = 'application/json';

export const ENDPOINT_V1 = {
  location: {
    list: `${API_V1}/locations`,
  },
  package: {
    list: `${API_V1}/packagesizes`,
  },
  order: {
    packages: `${API_V1}/packages`,
  },
  service: {
    list: `${API_V1}/services`,
    packageQuotation: `${API_V1}/quotation`,
  },
  contact: {
    messages: `${API_V1}/messages`,
    complaints: `${API_V1}/complaints`,
  }
};
