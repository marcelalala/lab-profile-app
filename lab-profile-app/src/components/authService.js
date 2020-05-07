import axios from 'axios';
 
class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }

  login(username, password) {
    return this.service.post('/auth/login', {username, password})
    .then(response => response.data)
  }
   
  logout() {
    return this.service.get('/auth/logout', {})
    .then(response => response.data)
  }

  signup(username, password, campus, course) {
    return this.service.post('/auth/signup', {username, password, campus, course})
    .then(response => response.data)
  }
 
  loggedin(){
    return this.service.get('/auth/loggedin')
    .then(response => response.data)
  }
}
 
export default AuthService;