import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl = nuxtApp.$config.baseURL;
    
    let api = axios.create({
        baseURL: defaultUrl,
        headers: {
            common: {},
        },
    });
    return {
        provide: {
            api: api,
        },
    };
});