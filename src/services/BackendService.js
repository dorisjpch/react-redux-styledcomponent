import { fetchData } from '../utils';

export const getHeaders = ({ ...props } = {}) => {
  return {
    credentials: 'include',
    headers: {
      Accept: 'application/json'
    },
    ...props
  };
};

/**
 * API Services
 *
 * @export
 * @class BackendService
 */
class BackendService {
  constructor(config) {
    this.apiURL = "http://localhost:3000";
    this.getDataSearchQuery = this.getDataSearchQuery.bind(this);
  }

  /**
   * Service call
   *
   * @returns {Promise} Respuesta del endpoint
   * @memberof BackendService
   */

  getDataSearchQuery(query) {
    let url = '/api/people/' + query; // para correr contra el api backend-api-person


    if (this.apiURL) {
      url = `${this.apiURL + url}`;
    }
    return fetchData(url, getHeaders({ method: 'get' }));
  }

}

export default new BackendService();
