export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from middleware');
  return;
})