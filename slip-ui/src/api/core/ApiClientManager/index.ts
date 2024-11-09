import axios from 'axios';

import { BASE_URL } from './constants';

export class ApiClientManager {
  private client = axios.create({
    baseURL: BASE_URL,
  });

  getClient() {
    return this.client;
  }
}

export const apiClientManager = new ApiClientManager();
