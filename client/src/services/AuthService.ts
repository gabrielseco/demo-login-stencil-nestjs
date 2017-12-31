import { FetchAdapter } from './../adapters/FetchAdapter';
import { LoginStateInterface } from "../components/app-home/app-home";
import { Constants } from './../constants';

export class AuthService {
  private baseUrl: string;
  private fetch: FetchAdapter;
  
  constructor() {
    this.baseUrl = Constants.API_ENDPOINT;
    this.fetch = new FetchAdapter(this.baseUrl);
  }

  async signUp(loginDto: LoginStateInterface) {
    return await this.fetch.post('/users', loginDto);
  }
}