import axios from 'axios';
import { authHeader, isAuthenticated } from '../util/auth-header';

const RestService = (defaultConfig={}) => {

  const _buildConfig = (url, config, method="GET") =>  {
    const newConfig = Object.assign({}, defaultConfig);
    newConfig.url = url;
    newConfig.method = method;
    newConfig.headers = {...newConfig.headers, ...config.headers, ...authHeader()};
    return newConfig;
  };

  const _forceReAuthenticate = () => {
    document.location.href="/";
    throw new Error('Force re-authentication');
  }

  const _get = (url, config={}) => {
    const newConfig = _buildConfig(url, config, "GET");
    if(isAuthenticated()) {
      return axios(newConfig);
    }
    _forceReAuthenticate();
  }

  const _getAuth = (url, config={}) => {
    const newConfig = _buildConfig(url, config, "GET");
    return axios(newConfig);
  }

  const _put = (url, config={}) => {
    const newConfig = _buildConfig(url, config, "PUT");
    if(isAuthenticated()) {
      return axios(newConfig);
    }
    _forceReAuthenticate();
  }

  const _post = (url, config={}) => {
    const newConfig = _buildConfig(url, config, "POST");
    if(isAuthenticated()) {
      return axios(newConfig);
    }
    _forceReAuthenticate();
  }

  const _delete = (url, config={}) => {
    const newConfig = _buildConfig(url, config, "DELETE");
    if(isAuthenticated()) {
      return axios(newConfig);
    }
    _forceReAuthenticate();
  }

  const _patch = (url, config={}) => {
    const newConfig = _buildConfig(url, config, "PATCH");
    if(isAuthenticated()) {
      return axios(newConfig);
    }
    _forceReAuthenticate();
  }

  return {
    get: _get,
    getAuth: _getAuth,
    put: _put,
    post: _post,
    delete: _delete,
    patch: _patch,
  }
}

export default RestService;