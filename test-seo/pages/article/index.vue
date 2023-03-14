<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const id = route.params.id
const host = config.public.baseURL
const { data: articles } = await useFetch(host + `/api/articles?populate=*&pagination[start]=0&pagination[limit]=1000`)
const { data: articleOne } = await useFetch(host + `/api/actualites?filters[is_popular][$eq]=1&populate=*&pagination[start]=0&pagination[limit]=1000`)
const { data: categories } = await useFetch(host + `/api/categorie-articles?populate=*&pagination[start]=0&pagination[limit]=1000`)

useHead({
    title: 'Nos articles',
    meta: [
        { name: 'description', content: `Notre page d'article mag santé` }
    ],
    // script: [{ children: 'console.log(\'Hello world\')' }]
}
)
</script>
<template>
    <div>
        <div class="row decal">
            <div class="col-md-12 alaUne">
                <div class="row alaUne__content">
                    <div class="col-md-1 alaUne__content--ostie">
                        <span class="alaUne__content--ostie__text">OSTIE</span>
                    </div>
                    <div class="col-md-11 alaUne__content--border">
                        <h1 class="alaUne__content--titre">
                            À la une
                        </h1>
                    </div>
                </div>
                {{ }}
                <div class="row actu" v-for="article in articleOne.data" :key="article.id">
                    <div class="col-md-4 actu__content1">
                        <h1 class="actu__content1--titre">News {{ article.id }}</h1>
                        <NuxtLink :to="'/article/' + article.id" class="actu__content1--text">{{
                            article.attributes.title }}
                        </NuxtLink>
                        <hr class="my-2">
                        <p class="actu__content1--text" v-if="article.attributes.author_of_the_article != null">
                            par {{ article.attributes.author_of_the_article }}</p>
                        <p class="actu__content1--text" v-else>pas d'auteur</p>
                    </div>
                    <div class="col-md-8 actu__content2">
                        <img :src="host + article.attributes.image.data.attributes.url" alt="a la une"
                            class="img-fluid actu__image">
                    </div>
                </div>
                <div class="row justify-content-center news">
                    <div class="col-md-6 text-center">
                        <h1 class="news__titre">Toute l'actu</h1>
                    </div>
                </div>
            <div class="row toute__actus">
                <div class="col-md-3 toute__actus--content" v-for="article in articles.data" :key="article.id">

                    <!-- <img :src="host + article.attributes.image.data.attributes.url" class="img-fluid" alt="famille" />
                    <p class="text-muted text-center toute__actus--date">{{ article.attributes.date_publish }}
                    </p> -->
                    <hr class="my-3">
                    <NuxtLink :to="'/article/' + article.id" class="actu__content1--text">
                        <img :src="host + article.attributes.image.data.attributes.url" class="img-fluid" alt="famille" />
                    
                        <p class="text-muted text-center toute__actus--date">{{ article.attributes.date_publish }}</p>
                        <p>{{article.attributes.title }}</p>
                    </NuxtLink>
                    <!-- <Nuxtlink :to="'/articles/' + article.id" class="link_article">
                        <p class="toute__actus--titre">{{ article.attributes.title }}</p>
                    </Nuxtlink> -->
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="container section-article">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    
                    <div class="row">
                        <h4>Nos articles</h4>
                        <div class="col-md-5 col-card" v-for="article in paginate" :key="article._id">
                            <router-link :to="{ path: '/article/' + article.id }" class="link_article">
                                <div class="card text-start">
                                    <div class="image-article">
                                        <img :src="host + article.attributes.image.data.attributes.url"
                                            class="card-img-top" alt="famille" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{{ article.attributes.title }}</h5>
                                        <p class="card-text" v-html="markDownToHtml(article.attributes.extrait)"></p>
                                        <p class="lire__suite">Lire la suite&nbsp;>></p>
                                    </div>
                                        </div>
                                        </router-link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="col-md-12">
                                        <h4>Catégories</h4>
                                        <hr style="margin: 17px 0" />
                                        <p class="categories"><span @click="getAllArticle()">Tous</span></p>
                                        <p class="categories" v-for="category in categories">
                                            <span role="button" v-bind:class="category_id == category.id ? 'text-primary' : ''"
                                                @click="getArticleCategory(category.id)">{{ category.attributes.name }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
    </div>
</template>

<!-- <script> 
// import axios from "axios";
// import { marked } from "marked";
// import { title } from "process";

// import Paginate from "vuejs-paginate-next";

// export default {
//     name: "Articles",
    // data() {
    //     return {
    //         category_id: null,
    //         host: '',
    //         articles: [],
    //         articleOne: [],
    //         categories: [],
    //         pagination: "",
    //         page: "",
    //         currentPage: 1,
    //         itemsPerPage: 8,
    //         resultCount: 0,
    //     };
    // },

    // async mounted() {
    //     this.host = this.$config.baseURL
    //     const response = await axios.get(this.$config.baseURL + "/api/articles?populate=*&pagination[start]=0&pagination[limit]=1000")
    //     this.articles = response.data.data;
    //     this.pagination = response.data.meta;
    //     this.page = this.pagination.pagination.total;
    //     const results = await axios.get(this.$config.baseURL + "/api/actualites?filters[is_popular][$eq]=1&populate=*&pagination[start]=0&pagination[limit]=1000")
    //     this.articleOne = results.data.data
    //     // console.log(this.articleOne);

    //     const res = await axios.get(this.$config.baseURL + "/api/categorie-articles?populate=*&pagination[start]=0&pagination[limit]=1000")
    //     this.categories = res.data.data;
    // },
    // async getArticleCategory(idCategory) {
    //     this.category_id = idCategory;
    //     this.articles = [];
    //     await axios.get(this.$config.baseURL + "/api/articles?populate=*&pagination[start]=0&pagination[limit]=1000")
    //     for (let i = 0; i < response.length; i++) {
    //         if (response[i].attributes.categorie_article.data.id == idCategory) {
    //             const _articles = this.articles;
    //             _articles.push(response[i]);
    //         }
    //     }
    // },
    // if (localStorage.getItem('reloaded')) {
    //     localStorage.removeItem('reloaded');
    //     location.reload()
    // } else {
    //     localStorage.setItem('reloaded', '1');
    //     // location.reload();
    // }
};
</script>-->

<style lang="scss" scoped>
@import "../../assets/scss/magSante.scss";

.paginate-number {
    text-align: center;

    button {
        padding: 0 9px;
        border: 2px solid $sea;
        color: #2a897c;
        margin: 0 4px;

        &:hover {
            background-color: $sea;
            transition: 0.4s;
            cursor: pointer;
        }
    }

    .current {
        background: $sea;
        color: #fff;
    }
}

.section-article {
    padding: 67px 0;
}

.image-article {
    height: 16vw !important;
    overflow: hidden;
}

.card.text-start {
    max-height: 554px;
    border: none;
}

.col-card {
    border: 1px solid #e5dada;
    padding: 0;
    margin-top: 0px !important;
    margin: 5% 3%;
}

.categories:hover {
    background: whitesmoke;
    cursor: pointer;
    transition: 0.4s;
}

@media screen and (max-width: 768px) {
    .image-article {
        display: block !important;
        height: 43vw !important;
    }

    .col-card {
        margin: 0px;
    }

    .col-card {
        margin: 30px 0;
        width: 100%;
    }
}

@media screen and (max-width: 447px) {
    .img-smile-mg {
        width: 92vw;
    }

    .content__head {
        text-align: center;
        font-size: 37px;
        margin-top: 30px;
    }

    .content__text--souhait {
        font-family: "ostrich_sansblack" !important;
    }
}
</style>
