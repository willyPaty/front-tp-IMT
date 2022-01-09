<template>
  <html lang="fr">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ajout d'un contact</title>
      </head>
    <!-- Required meta tags -->
     <!-- Maj-1.1 09/01/2022-->
    <body>
      <div class="col group ">
        <div class="card align-items-center">
          <div class="card-body">
            <h5 class="card-title text-center card-header">MODIFIER</h5>
            <div v-if="currentPersonne">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"> <p class="pa">NOM</p>  <input type="text" class="float-right" id="name" v-model="currentPersonne.name" /> </li>
                <li class="list-group-item"> <p class="pa">Prenom</p>  <input type="text" class="float-right" id="surname" v-model="currentPersonne.surname"/></li>
                <li class="list-group-item"> <p class="pa">Telephone</p> <input type="text" class="float-right" id="phone" v-model="currentPersonne.phone"/></li>
                <li class="list-group-item"> <p class="pa">Ville</p> <input type="text" class="float-right" id="city" v-model="currentPersonne.city" /></li>
              </ul>
              <!-- A INCLURE DANS LE FORM -->
              <button class="btn btn-danger btn1" @click="deletePersonne">
                Supprimer
              </button>
              <!-- A INCLURE DANS LE FORM -->
              <button type="submit" class="btn btn-success btn2 " @click="updatePersonne">
                 Modifier
              </button>
              <p>{{ message }}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: "",
    };
  },
  methods: {
    getPersonne(id) {
      // A COMPLETER
      PersonneDataService.get(id)
        .then((response) => {
          this.currentPersonne = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePersonne() {
      // A COMPLETER
      PersonneDataService.update(this.currentPersonne)
        .then((response) => {
          this.message = "Personne modifiée avec succès!";
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deletePersonne() {
      // A COMPLETER
      PersonneDataService.delete(this.currentPersonne.id)
        .then((response) => {
          this.$router.push({ name: "personnes" });
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getPersonne(this.$route.params.id);
  },
};
</script>

<style>
.btn1
{
  display: flex;
  float: left;
  margin-top: 15px;
  
}
.btn2
{
  display: flex;
  float: right;
  margin-top: 15px;
}

.pa
{
  text-align: center;
  margin: 0.5px;
  text-transform: uppercase;
  text-decoration: underline;
  margin-bottom: 5px;
  letter-spacing: 2px;
}
.group
{
  width: 440px;
  display: flex;
  margin-left: 24em;
 
}
</style>
