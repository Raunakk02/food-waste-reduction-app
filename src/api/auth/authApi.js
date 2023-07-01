import axios from 'axios';
import { backendBaseUrl } from 'utils/constants';

export default class API {
  constructor() {
    this.instance = axios.create({
      baseURL: `${backendBaseUrl}/api`,
      headers: {
        Authorization: JSON.parse(localStorage.getItem('userAuth'))
          ?.authorization
      }
    });
  }

  //auth
  login(body) {
    return this.instance.post('/v1/login', body);
  }
  register(body) {
    return this.instance.post('/v1/register', body);
  }
  resetPass(body) {
    return this.instance.post('/v1/password/reset', body);
  }
  mobileAndEmailOtp(body) {
    return this.instance.post('/v1/getOTP', body);
  }
  mobileAndEmailOtpVerify(body) {
    return this.instance.post('/v1/verifyOTP', body);
  }
  setPin(body) {
    return this.instance.put('/v1/pin/set', body);
  }
  verifyPin(body) {
    return this.instance.post('/v1/pin/verify', body);
  }
  resetPin(body) {
    return this.instance.post('/v1/pin/reset', body);
  }
  resetPassword(body) {
    return this.instance.post('/auth/reset/pass', body);
  }
  //user apis
  getCategoryList(businessType) {
    return this.instance.get(`/user/category/merchant/${businessType}`);
  }
}
