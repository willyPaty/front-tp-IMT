<template>
  <html lang="fr">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ajout d'un contact</title>
    </head>
    <!-- Required meta tags -->
    <body>
      <div class="row row-cols-1 row-cols-md-2 g-4 grp">
        <div class="card-group">
          <div class="card align-items-center">
            <div class="card-body">
              <h5 class="card-title  card-header">NOM</h5>
              <p class="card-text"> 
                <br>
                <ul class="list-group list-group-flush ">
                  <li 
                    class="list-group-item text-transform-uppercase"
                    :class="{ active: id == currentIndex }"
                    v-for="(personne, id) in personnes"
                    :key="id"
                    @click="setActivePersonne(personne, id)"
                  >
                    {{ personne.name }}
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div class="card align-items-center ">
            <div class="card-body">
              <h5 class="card-header card-title">PRENOM</h5>
              <p class="card-text">
                <br>
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item text-transform-none"
                    :class="{ active: id == currentIndex }"
                    v-for="(personne, id) in personnes"
                    :key="id"
                    @click="setActivePersonne(personne, id)"
                  >
                    {{ personne.surname }}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div v-if="currentPersonne">
          <div class="col ">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title text-center card-header">MODIFIER</h5>
                <ul class="list-group list-group-flush text-center">
                  <li class="list-group-item"><div class="type"><br>Nom :</div><div class="add"><br>{{ currentPersonne.name }}</div> </li>
                  <li class="list-group-item"><div class="type">Prenom :</div><div class="add">{{ currentPersonne.surname }}</div> </li>
                  <li class="list-group-item"><div class="type">Telephone :</div><div class="add">{{ currentPersonne.phone }}</div></li>
                  <li class="list-group-item"><div class="type">Ville :</div><div class="add">{{ currentPersonne.city }}</div></li>
                  <li class="list-group-item"> <br><router-link :to="'/personnes/' + currentPersonne.id" class="btn btn-outline-dark"> Modifier </router-link> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <p class="card-title card-header">Cliquez sur une des personnes pour afficher les détails.</p>
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
  name: "personnes",
  data() {
    return {
      personnes: [],
      currentPersonne: null,
      currentIndex: -1,
    };
  },
  methods: {
    getPersonnes() {
      PersonneDataService.getAll()
        .then((response) => {
          this.personnes = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    setActivePersonne(personne, index) {
      this.currentPersonne = personne;
      this.currentIndex = personne ? index : -1;
    },
  },
  mounted() {
    this.getPersonnes();
  },
};
</script>

<style>
.grp
{
  margin-top: 3em;
}
.type
{
  float: left;
}
.add
{
  margin-left: auto;
  margin-right: auto;
  width: 6em
}

</style>
