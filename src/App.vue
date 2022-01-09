
<template>
  <html lang="fr">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/src/components/style.css">
      <title>App-Vue</title>
    </head>
    <!-- Required meta tags -->

    <body>
      <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <router-link to="/personnes" class="navbar-brand"
            >Front SpringBoot App</router-link
          >
          <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/personnes" class="nav-link"
                >Personnes</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/ajouter-personne" class="nav-link"
                >Ajouter</router-link
              >
            </li>
          </div>
        </nav>

        <div class="container mt-3">
          <router-view />
        </div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "app",
};
</script>
