
class SessionStorageUtil {

    getToken() {
        return sessionStorage.getItem('token');
    }
    
    setToken() {
        sessionStorage.setItem('token', token);
        console.log("Token Add");
    }

    removeToken() {
        sessionStorage.removeItem(token);
        sessionStorage.clear();
    }
}

export default new SessionStorageUtil();