export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV !== "production") return;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-W6WPMEPZT1");
  nuxtApp.router.afterEach((to, from) => {
    gtag("config", "G-W6WPMEPZT1", { page_path: to.fullPath });
  });
});
