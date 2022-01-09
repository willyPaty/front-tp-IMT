
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
            <h5 class="card-title text-center card-header">AJOUTER</h5>
            <div class="submit-form">
              <div v-if="!submitted">
                <div v-if="personne">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <p class="pa">NOM</p>  <input type="text" class="float-right" id="name" v-model="personne.name" placeholder="Nom" /> </li>
                    <li class="list-group-item"> <p class="pa">Prenom</p>  <input type="text" class="float-right" id="surname" v-model="personne.surname" placeholder="Prenom"/></li>
                    <li class="list-group-item"> <p class="pa">Telephone</p> <input type="text" class="float-right" id="phone" v-model="personne.phone" placeholder="téléphone"/></li>
                    <li class="list-group-item"> <p class="pa">Ville</p> <input type="text" class="float-right" id="city" v-model="personne.city" placeholder="ville"/></li>
                  </ul>
                  <button @click="creerPersonne" class="btn btn-outline-success btn1">
                    Ajouter
                  </button>
                </div>
              </div>
              <div v-else>
                <p class="text-primary text-align-center">Personne ajoutée avec succès!</p>
                <button class="btn btn-outline-success btn2" @click="resetForm">
                  Ajouter une nouvelle personne
                </button>
              </div>
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
  name: "add-personne",
  data() {
    return {
      personne: {
        name: "",
        surname: "",
        phone: "",
        city: "",
      },
      submitted: false,
    };
  },
  methods: {
    creerPersonne() {
      var data = {
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city,
      };
      // A COMPLETER
      PersonneDataService.create(data)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    resetForm() {
      this.submitted = false;
      this.personne = {};
    },
  },
};
</script>

<style>
.btn1
{
  display: flex;
  margin-left: 5.5em;
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
