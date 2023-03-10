<template>
    <div class="">
        <div class="header">
            <div class="container-fluid secondary-menu">
                <div class="row mob">

                    <div class="col-md-12">

                        <div class="row">
                            <div class="col-md-12 header__action">
                                <div class="header__icon">
                                    <div class="row">
                                        <div class="col-3">
                                            <a href="https://www.facebook.com/profile.php?id=100063673085386"
                                                class="navbar-brand" style="text-decoration: none;" target="_blank"
                                                rel="noopener noreferrer"> <font-awesome-icon icon="fa-brands fa-facebook"
                                                    class="header__icon--facebook" /></a>
                                        </div>
                                    </div>
                                </div>
                                <!-- <router-link to="/dispensaires/urgence_garde" class="button_connexion1">Service -->
                                    <!-- d'urgence</router-link> -->
                                <!-- <router-link to="/adhesion" class="button_connexion2">Devenir adhérent</router-link> -->
                                <a href="" class="button_connexion hover-text d-none" type="button"
                                    @mouseover="hover = true" @mouseleave="hover = false">
                                    Se connecter<span class="tooltip-text" id="bottom">Bientôt</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg p-0 large" id="navbar">
            <!-- <div class="container-fluid px-0"> -->
            <a class="navbar-brand p-0" href="/">
                <!-- <img src="/src/assets/images/Ostie-Since-min.png" alt="Logo" class="d-inline-block img-fluid moblogo" id="logo"> -->
            </a>
            <a class="navbar-brand p-0" href="/">
                <!-- <img src="/src/assets/images/Ostie-twix.png" alt="Logo" class="d-inline-block img-fluid logo" id="logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse p-0" id="navbarNav">
                <div class="row mx-0 d-flex w-100">
                    <div class="col-md-12 px-0">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                                <!-- <router-link to="/" class="nav-link">Accueil</router-link> -->
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/accueil" class="nav-link">Partenaires</NuxtLink>
                                <!-- <router-link to="/" class="nav-link">Accueil</router-link> -->
                            </li>
                            <li class="nav-item">
                                <!-- <router-link to="/services" class="nav-link">Nos services</router-link> -->
                            </li>
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Adhésion
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <router-link to="/adhesion" class="dropdown-item--link">Adhérer à
                                            OSTIE</router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <router-link to="/infoAdherent" class="dropdown-item--link">Infos utiles
                                            Adhérents</router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <router-link to="/infoAffilie" class="dropdown-item--link">Infos utiles
                                            Affiliés</router-link>
                                    </li>
                                </ul>
                            </li> -->
                            <li class="nav-item">
                                <NuxtLink to="/article" class="nav-link">Blog</NuxtLink>
                            </li>
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Trouvez-nous
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <router-link to="/dispensaires/all"
                                            class="dropdown-item--link">Dispensaires</router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <router-link to="/antennes" class="dropdown-item--link">Antennes</router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <router-link to="/dispensaires/urgence_garde" class="dropdown-item--link">Service
                                            d'urgence et de garde</router-link>
                                    </li>
                                </ul>
                            </li> -->

                            <li class="nav-item">
                                <!-- <router-link to="/equipe" class="nav-link">Nos équipes</router-link> -->
                            </li>
                            <li class="nav-item">
                                <!-- <router-link to="/apropos" class="nav-link">Qui sommes-nous?</router-link> -->
                            </li>

                            <li class="header1">
                                <div class="col-md-2 header1__icon">
                                    <div class="row">
                                        <div class="col-3">
                                            <font-awesome-icon icon="fa-brands fa-facebook"
                                                class="header__icon--facebook" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </nav>
    </div>
</template>
  
<script lang="ts">
import axios from "axios";
export default {
    name: "Menu",
    components: {},
    data() {
        return {
            searchBar: "displayNone",
            hideSearchBar: "displayNone",
            hover: false,
            host: '',
            services: [],
            scrollPosition: 0,
            showSearchBar: '',
        };
    },
    created() {
    },
    methods: {
        showSearch() {
            this.searchBar = "displayBlock";
            this.showSearchBar = "displayNone";
            this.hideSearchBar = "displayBlock";
        },
        HideSearch() {
            this.showSearchBar = "displayBlock";
            this.hideSearchBar = "displayNone";
            this.searchBar = "displayNone";
        },
    },
}
</script>
  
<style lang="scss" scoped>
@import "../assets/scss/menu.scss";
</style>
  