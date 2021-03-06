import http from "../http-common";
//!-- Maj-1.1 09/01/2022

class PersonneDataService {
  getAll() {
    return http.get("/annuaire/entree");
  }

  get(id) {
    return http.get(`/annuaire/entree/${id}`);
  }
  
  create(data) {
    return http.post("/annuaire/entree", data);
  }
  delete(id) {
    return http.delete(`/annuaire/entree/${id}`);
  }
  update(data) {
    return http.put("/annuaire/entree", data);
  }

}

export default new PersonneDataService();
