import { FetchAdapter } from './../adapters/FetchAdapter';
import { LoginStateInterface } from "../components/app-home/app-home";

export class AuthService {
  private baseUrl: string;
  private fetch: FetchAdapter;
  constructor() {
    this.baseUrl = 'http://localhost:3000';
    this.fetch = new FetchAdapter(this.baseUrl);
  }

  async signUp(loginDto: LoginStateInterface) {
    return await this.fetch.post('/users', loginDto);
  }
}