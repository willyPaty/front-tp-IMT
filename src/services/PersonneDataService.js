import http from "../http-common";

class PersonneDataService {
  getAll() {
    return http.get("/annuaire/api");
  }

  get(id) {
    return http.get(`/annuaire/api/${id}`);
  }

  create(data) {
    return http.post("/annuaire/api", data);
  }
  delete(id) {
    return http.delete(`/annuaire/api/${id}`);
  }
  update(data) {
    return http.put("/annuaire/api", data);
  }

}

export default new PersonneDataService();
