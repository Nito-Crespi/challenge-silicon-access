//src/context/AuthService.js

export default class AuthService {
  static getStoredToken() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("tokenExpiration");
    const itemData = localStorage.getItem("itemData");

    if (
      token &&
      expirationDate &&
      new Date().getTime() < Number(expirationDate)
    ) {
      return { token, itemData: JSON.parse(itemData) };
    }
    this.clearToken();
    return null;
  }

  static storeToken(data) {
    const expirationDate = new Date().getTime() + data.jwt_duration * 1000;
    const itemData = JSON.stringify({
      userInfo: data.user,
      customerInfo: data.customer[0] || {},
      profile: data.profile,
      catalogData: {
        carColors: data.carcolor || [],
        carBrands: data.carbrand || [],
        carModels: data.carmodel || [],
        carTypes: data.cartype || [],
        idTypes: data.idtype || [],
        insurances: data.insurance || [],
      },
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem("tokenExpiration", expirationDate);
    localStorage.setItem("itemData", itemData);
  }

  static clearToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    localStorage.removeItem("itemData");
  }
}
