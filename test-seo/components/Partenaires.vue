<template>
    <div class="container-fluid p-0 mt-5">

        <div class="row">
            <div class="baniere">
                <h1 class="baniere__title text-center">Rejoignez la grande famille OSTIE !</h1>
            </div>
            <div class="col-md-12 content">
                <h1 class="content__title text-center">Ils nous font confiance</h1>
            </div>
            <div class="row p-0 web">
                <div class="col-md-12 clients">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-2 clients__content" v-for="(client, index) in clients"
                            :key="index">
                            <img class="clients__images mb-3" :src="host + client.attributes.logo.data.attributes.url" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="mob">
                <div class="slider" v-for="(logoGroup, groupIndex) in chunkArray(clients, 5)" :key="groupIndex">
                    <div class="slide-track">
                        <div class="slide" v-for="(client, logoIndex) in logoGroup" :key="logoIndex">
                            <img class="clients__images" :src="host + client.attributes.logo.data.attributes.url"
                                height="100" width="250" />
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="slider" v-for="(logoGroup, groupIndex) in chunkArray(clients, 5)" :key="groupIndex">
      <div class="slide-track">
        <div class="slide" v-for="(client, logoIndex) in logoGroup" :key="logoIndex">
          <img class="clients__images" :src="host + client.attributes.logo.data.attributes.url" height="100"
            width="250" />
        </div>
      </div>
    </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            clients: [],
            articles: [],
            host:'',
        }
    },
    async mounted() {
        const response = await axios.get(this.$config.baseURL + "/api/clients?populate=*")
        this.host = this.$config.baseURL
        this.clients = response.data.data
    }
}

</script>

<style lang="scss" scoped>
@import '~/assets/scss/client.scss';
</style>