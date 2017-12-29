import { Component, State } from '@stencil/core';
import { AuthService } from '../../services/LoginService';

export interface LoginStateInterface {
  email: string;
  password: string;
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  authService: AuthService = new AuthService();
  @State() state: LoginStateInterface = {
    email: '',
    password: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.authService.signUp(this.state).then(response => {
      console.log('response from service', response);
    });
  }

  handleChange(event) {
    this.state = {
      ...this.state,
      [event.target.name]: event.target.value
    }
  }

  render() {
    return (
      <div class="login-page">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={this.state.email} onInput={() => this.handleChange(event)}></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} onInput={() => this.handleChange(event)}></input>
          <button type="submit">Send</button>
        </form>
        <pre>
          {JSON.stringify(this.state, null, 4)}
        </pre>
      </div>
    );
  }
}
