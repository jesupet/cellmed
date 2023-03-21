<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu_principal">
        <ul class="navbar-nav mb-2 mb-lg-0 w-100">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:8000">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">C&eacute;lulas Madre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item logo inicio">
              <a href="#">
                  <img src="assets/img/logo.svg" alt="Logo">
                  <span></span>
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Preguntas Frecuentes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn degradado" href="#">Agenda tu visita</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'NavBar',
  props: {

  }
}
</script>

