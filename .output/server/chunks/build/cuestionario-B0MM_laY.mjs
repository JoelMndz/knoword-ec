import { e as defineStore, a as navigateTo, f as useAuth } from './server.mjs';

const useCuestionarioProfesorStore = defineStore("cuestionarioProfesorStore", {
  state: () => ({
    cuestionarios: []
  }),
  actions: {
    async crearCuestionario(body) {
      const data = await $fetch("/api/cuestionario/", {
        method: "post",
        body
      });
      this.cuestionarios.push(data);
      navigateTo("/app/profesor");
    },
    async obtenerCuestionarios() {
      const data = await $fetch("/api/cuestionario/por-profesor/" + useAuth().data.value._id);
      this.cuestionarios = data;
    },
    async eliminarCuestionario(id) {
      await $fetch("/api/cuestionario/eliminar/" + id, {
        method: "DELETE"
      });
      this.cuestionarios = this.cuestionarios.filter((x) => x._id !== id);
    }
  }
});

export { useCuestionarioProfesorStore as u };
//# sourceMappingURL=cuestionario-B0MM_laY.mjs.map
