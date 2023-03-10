<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const id = route.params.id
const host = config.public.baseURL
// const { data: articles } = await useFetch(host + `/api/articles/${id}?populate[0]=article_detail&populate[1]=seo.metaImage&populate[2]=seo.metaSocial`)
const { data: articles } = await useFetch(host + `/api/articles/${id}?populate[0]=image&populate[1]=article_detail&populate[2]=article_detail.image&populate[3]=seo.metaImage&populate[4]=seo.metaSocial&populate[5]=seo.metaSocial.image`)
</script>

<template>
    <div class="container-fluid">
        <Head>
            <Title>TEst page | {{ articles.data.attributes.seo.metaTitle }}</Title>
            <Meta name="description" :content="articles.data.attributes.seo.metaDescription" />
            <Meta :content="articles.data.attributes.seo.metaSocial[0].title" property="og:title" />
            <Meta :content="articles.data.attributes.seo.metaSocial[0].description" property="og:description" />
            <Meta :content="host + articles.data.attributes.seo.metaSocial[0].image.data.attributes.url" property="og:image" />
            <Meta :content="articles.data.attributes.seo.metaSocial[1].title" property="twitter:title" />
            <Meta :content="articles.data.attributes.seo.metaSocial[1].description" property="twitter:description" />
            <Meta :content="host + articles.data.attributes.seo.metaSocial[1].image.data.attributes.url" property="twitter:image" />
            <Meta content="article" property="og:type"/>
            <Meta :content="host + articles.data.attributes.seo.metaSocial[1].image.data.attributes.url" name="twitter:card" />
            <link :href="articles.data.attributes.seo.canonicalURL" rel="canonical" />
        </Head> 
        <div class="row mb-5">
            <div class="col-md-8 titre">
                <h5 class="titre__mini mb-4">
                    REDÉFINIR LES SOINS DE SANTÉ POUR LA VIE MODERNE. de la vie
                </h5>
                <h1 class="titre__articles">
                    {{ articles.data.attributes.title }}
                </h1>
                <p class="titre__details">
                    <span class="titre__details--auteur">{{
                        articles.data.attributes.author_of_the_article
                    }}</span><span class="titre__details--date">{{ articles.data.attributes.date_publish }}</span>
                </p>
            <img :src="host + articles.data.attributes.image.data.attributes.url" alt="image article"
                class="image__categorie" />
        </div>
    </div>
        <!-- <router-link to="/" class="titre__back--lien link-cat">
            <span class="image__iconTags"><font-awesome-icon icon="fa-solid fa-tags" /></span>
            <p class="image__textCategorie">
                {{ articles.data.attributes.categorie_article.data.attributes.name }}
            </p>
        </router-link> -->
    </div>
</template>

<style> @import '../../assets/scss/articlesDetails.scss';</style>