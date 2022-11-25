
export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.auth && user.auth.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}

export function authHeaderNode() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.auth && user.auth.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

export function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.auth && user.auth.isLoggedIn && user.auth.accessToken) {
    return true;
  } else {
    return false;
  }
}