import { _ as __nuxt_component_0 } from './CardCuestionario-Cd2aqfj3.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, withAsyncContext, ref, computed, createTextVNode, Fragment, toDisplayString, watch, createCommentVNode, withDirectives, isRef, vModelText } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import moment from 'moment';
import { s as storeToRefs, e as defineStore, f as useAuth, l as useRoute$1, _ as _export_sfc } from './server.mjs';
import { u as useFetch } from './fetch-RaUMkSJ3.mjs';
import confetti from 'canvas-confetti';
import { f as formatearTiempo } from './index-BTN8gWCh.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/ninoFeliz.png");
const useJuegoEstudiante = defineStore("juegoEstudianteStore", {
  state: () => ({
    cuestionarioActual: null,
    respuestas: [],
    inicio: null,
    fin: null,
    estado: "Pendiente",
    indicePreguntaActual: 0,
    tiempo: null,
    respuestasCorrectasSeguidas: 0
  }),
  actions: {
    empezarJuego(datos) {
      this.cuestionarioActual = datos.cuestionario;
      this.inicio = moment();
      this.tiempo = datos.tiempo;
      this.estado = "En progreso";
    },
    siguientePalabra(correcto) {
      var _a;
      this.respuestas.push(!!correcto);
      if (this.indicePreguntaActual + 1 === ((_a = this.cuestionarioActual) == null ? void 0 : _a.palabras.length)) {
        return this.terminaJuego();
      }
      this.indicePreguntaActual++;
    },
    terminaJuego() {
      this.estado = "Terminado";
      this.fin = moment();
      this.guadarJuego();
    },
    restablecerValores() {
      this.inicio = null;
      this.estado = "Pendiente";
      this.cuestionarioActual = null;
      this.indicePreguntaActual = 0;
      this.respuestasCorrectasSeguidas = 0;
      this.respuestas = [];
    },
    async guadarJuego() {
      var _a, _b, _c;
      await $fetch("/api/juego", {
        method: "POST",
        body: {
          _cuestionario: (_a = this.cuestionarioActual) == null ? void 0 : _a._id,
          _estudiante: (_b = useAuth().data.value) == null ? void 0 : _b._id,
          inicio: this.inicio,
          fin: this.fin,
          respuestas: (_c = this.cuestionarioActual) == null ? void 0 : _c.palabras.map((x, i) => {
            return {
              _palabra: x._id,
              correcta: i < this.respuestas.length ? this.respuestas[i] : false
            };
          })
        }
      });
    }
  },
  getters: {
    palabraActual(state) {
      var _a;
      if (!state.cuestionarioActual)
        return;
      return (_a = state.cuestionarioActual) == null ? void 0 : _a.palabras[state.indicePreguntaActual];
    },
    resultadoJuego(state) {
      return {
        puntaje: state.respuestas.filter((x) => x).length * 10,
        respuestasCorrectas: state.respuestas.filter((x) => x).length,
        tiempo: moment(moment(state.fin).diff(state.inicio)).seconds()
      };
    }
  }
});
var EstadosJuego = /* @__PURE__ */ ((EstadosJuego2) => {
  EstadosJuego2["Pendiente"] = "Pendiente";
  EstadosJuego2["EnProgreso"] = "En progreso";
  EstadosJuego2["Terminado"] = "Terminado";
  return EstadosJuego2;
})(EstadosJuego || {});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LobbyJuego",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const juegoStore = useJuegoEstudiante();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/cuestionario/por-id/" + useRoute$1().params.id, "$dcp8r5tc70")), __temp = await __temp, __restore(), __temp);
    const cuestionario = ref(data.value);
    const tiempo = ref(90);
    const formatearTiempo2 = computed(() => {
      if (!tiempo.value)
        return "";
      const minuto = tiempo.value / 60;
      const segundos = tiempo.value % 60;
      return `${Math.trunc(minuto)}:${segundos == 0 ? "00" : segundos}`;
    });
    const empezarJuego = () => {
      juegoStore.empezarJuego({
        cuestionario: cuestionario.value,
        tiempo: tiempo.value
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VSwitch = resolveComponent("VSwitch");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_CardCuestionario = __nuxt_component_0;
      const _component_VCard = resolveComponent("VCard");
      const _component_v_fab = resolveComponent("v-fab");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center"${_scopeId2}><p class="text-h6 me-3"${_scopeId2}>L\xEDmite de tiempo</p>`);
                  _push3(ssrRenderComponent(_component_VSwitch, {
                    color: "primary",
                    "hide-details": "",
                    "model-value": unref(tiempo) != null,
                    "onUpdate:modelValue": (x) => tiempo.value = x ? 90 : null
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex justify-center align-center"${_scopeId2}>`);
                  if (unref(tiempo) != null) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-minus",
                      variant: "text",
                      color: "error",
                      disabled: unref(tiempo) == 90,
                      onClick: ($event) => tiempo.value -= 30
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-h2"${_scopeId2}>${ssrInterpolate(unref(formatearTiempo2))}</p>`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-plus",
                      variant: "text",
                      disabled: unref(tiempo) == 60 * 5,
                      onClick: ($event) => tiempo.value += 30
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<p class="text-h2"${_scopeId2}>Ninguno</p>`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_VRow, {
                    class: "ma-0 pa-0",
                    justify: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCol, {
                          cols: "auto",
                          class: "d-flex align-center"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VCol, {
                            cols: "auto",
                            class: "d-flex align-center"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VRow, {
                    class: "text-center mt-5",
                    justify: "space-between",
                    align: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCol, {
                          cols: "4",
                          lg: "5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-h6 mb-1"${_scopeId4}>Modo de juego</p><p class="text-md-h2 text-h3 mb-1 d-flex justify-center align-center"${_scopeId4}>Cl\xE1sico <img class="ms-1" height="40"${ssrRenderAttr("src", _imports_0)}${_scopeId4}></p><p${_scopeId4}>Adivina la palabra bas\xE1ndote en su definici\xF3n y primera letra.</p>`);
                            } else {
                              return [
                                createVNode("p", { class: "text-h6 mb-1" }, "Modo de juego"),
                                createVNode("p", { class: "text-md-h2 text-h3 mb-1 d-flex justify-center align-center" }, [
                                  createTextVNode("Cl\xE1sico "),
                                  createVNode("img", {
                                    class: "ms-1",
                                    height: "40",
                                    src: _imports_0
                                  })
                                ]),
                                createVNode("p", null, "Adivina la palabra bas\xE1ndote en su definici\xF3n y primera letra.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VCol, {
                          cols: "4",
                          md: "3",
                          lg: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CardCuestionario, { cuestionario: unref(cuestionario) }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CardCuestionario, { cuestionario: unref(cuestionario) }, null, 8, ["cuestionario"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VCol, {
                          cols: "4",
                          lg: "5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCard, {
                                class: "py-10",
                                variant: "text",
                                onClick: empezarJuego
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p class="text-md-h2 text-h3 mb-2"${_scopeId5}>Comenzar juego</p><p${_scopeId5}>Presiona `);
                                    _push6(ssrRenderComponent(_component_VBtn, {
                                      color: "grey",
                                      size: "x-small",
                                      text: "enter"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</p>`);
                                  } else {
                                    return [
                                      createVNode("p", { class: "text-md-h2 text-h3 mb-2" }, "Comenzar juego"),
                                      createVNode("p", null, [
                                        createTextVNode("Presiona "),
                                        createVNode(_component_VBtn, {
                                          color: "grey",
                                          size: "x-small",
                                          text: "enter"
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCard, {
                                  class: "py-10",
                                  variant: "text",
                                  onClick: empezarJuego
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-md-h2 text-h3 mb-2" }, "Comenzar juego"),
                                    createVNode("p", null, [
                                      createTextVNode("Presiona "),
                                      createVNode(_component_VBtn, {
                                        color: "grey",
                                        size: "x-small",
                                        text: "enter"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VCol, {
                            cols: "4",
                            lg: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-h6 mb-1" }, "Modo de juego"),
                              createVNode("p", { class: "text-md-h2 text-h3 mb-1 d-flex justify-center align-center" }, [
                                createTextVNode("Cl\xE1sico "),
                                createVNode("img", {
                                  class: "ms-1",
                                  height: "40",
                                  src: _imports_0
                                })
                              ]),
                              createVNode("p", null, "Adivina la palabra bas\xE1ndote en su definici\xF3n y primera letra.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, {
                            cols: "4",
                            md: "3",
                            lg: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_CardCuestionario, { cuestionario: unref(cuestionario) }, null, 8, ["cuestionario"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, {
                            cols: "4",
                            lg: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VCard, {
                                class: "py-10",
                                variant: "text",
                                onClick: empezarJuego
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-md-h2 text-h3 mb-2" }, "Comenzar juego"),
                                  createVNode("p", null, [
                                    createTextVNode("Presiona "),
                                    createVNode(_component_VBtn, {
                                      color: "grey",
                                      size: "x-small",
                                      text: "enter"
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center" }, [
                      createVNode("p", { class: "text-h6 me-3" }, "L\xEDmite de tiempo"),
                      createVNode(_component_VSwitch, {
                        color: "primary",
                        "hide-details": "",
                        "model-value": unref(tiempo) != null,
                        "onUpdate:modelValue": (x) => tiempo.value = x ? 90 : null
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "d-flex justify-center align-center" }, [
                      unref(tiempo) != null ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_VBtn, {
                          icon: "mdi-minus",
                          variant: "text",
                          color: "error",
                          disabled: unref(tiempo) == 90,
                          onClick: ($event) => tiempo.value -= 30
                        }, null, 8, ["disabled", "onClick"]),
                        createVNode("p", { class: "text-h2" }, toDisplayString(unref(formatearTiempo2)), 1),
                        createVNode(_component_VBtn, {
                          icon: "mdi-plus",
                          variant: "text",
                          disabled: unref(tiempo) == 60 * 5,
                          onClick: ($event) => tiempo.value += 30
                        }, null, 8, ["disabled", "onClick"])
                      ], 64)) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-h2"
                      }, "Ninguno"))
                    ]),
                    createVNode(_component_VRow, {
                      class: "ma-0 pa-0",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VCol, {
                          cols: "auto",
                          class: "d-flex align-center"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VRow, {
                      class: "text-center mt-5",
                      justify: "space-between",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VCol, {
                          cols: "4",
                          lg: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-h6 mb-1" }, "Modo de juego"),
                            createVNode("p", { class: "text-md-h2 text-h3 mb-1 d-flex justify-center align-center" }, [
                              createTextVNode("Cl\xE1sico "),
                              createVNode("img", {
                                class: "ms-1",
                                height: "40",
                                src: _imports_0
                              })
                            ]),
                            createVNode("p", null, "Adivina la palabra bas\xE1ndote en su definici\xF3n y primera letra.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VCol, {
                          cols: "4",
                          md: "3",
                          lg: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_CardCuestionario, { cuestionario: unref(cuestionario) }, null, 8, ["cuestionario"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VCol, {
                          cols: "4",
                          lg: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VCard, {
                              class: "py-10",
                              variant: "text",
                              onClick: empezarJuego
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-md-h2 text-h3 mb-2" }, "Comenzar juego"),
                                createVNode("p", null, [
                                  createTextVNode("Presiona "),
                                  createVNode(_component_VBtn, {
                                    color: "grey",
                                    size: "x-small",
                                    text: "enter"
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCol, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center" }, [
                    createVNode("p", { class: "text-h6 me-3" }, "L\xEDmite de tiempo"),
                    createVNode(_component_VSwitch, {
                      color: "primary",
                      "hide-details": "",
                      "model-value": unref(tiempo) != null,
                      "onUpdate:modelValue": (x) => tiempo.value = x ? 90 : null
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "d-flex justify-center align-center" }, [
                    unref(tiempo) != null ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_VBtn, {
                        icon: "mdi-minus",
                        variant: "text",
                        color: "error",
                        disabled: unref(tiempo) == 90,
                        onClick: ($event) => tiempo.value -= 30
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode("p", { class: "text-h2" }, toDisplayString(unref(formatearTiempo2)), 1),
                      createVNode(_component_VBtn, {
                        icon: "mdi-plus",
                        variant: "text",
                        disabled: unref(tiempo) == 60 * 5,
                        onClick: ($event) => tiempo.value += 30
                      }, null, 8, ["disabled", "onClick"])
                    ], 64)) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-h2"
                    }, "Ninguno"))
                  ]),
                  createVNode(_component_VRow, {
                    class: "ma-0 pa-0",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VCol, {
                        cols: "auto",
                        class: "d-flex align-center"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VRow, {
                    class: "text-center mt-5",
                    justify: "space-between",
                    align: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VCol, {
                        cols: "4",
                        lg: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-h6 mb-1" }, "Modo de juego"),
                          createVNode("p", { class: "text-md-h2 text-h3 mb-1 d-flex justify-center align-center" }, [
                            createTextVNode("Cl\xE1sico "),
                            createVNode("img", {
                              class: "ms-1",
                              height: "40",
                              src: _imports_0
                            })
                          ]),
                          createVNode("p", null, "Adivina la palabra bas\xE1ndote en su definici\xF3n y primera letra.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VCol, {
                        cols: "4",
                        md: "3",
                        lg: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CardCuestionario, { cuestionario: unref(cuestionario) }, null, 8, ["cuestionario"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VCol, {
                        cols: "4",
                        lg: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, {
                            class: "py-10",
                            variant: "text",
                            onClick: empezarJuego
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-md-h2 text-h3 mb-2" }, "Comenzar juego"),
                              createVNode("p", null, [
                                createTextVNode("Presiona "),
                                createVNode(_component_VBtn, {
                                  color: "grey",
                                  size: "x-small",
                                  text: "enter"
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_fab, {
        icon: "mdi-arrow-left",
        class: "ms-4 mb-4",
        location: "top start",
        size: "64",
        absolute: "",
        app: ""
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LobbyJuego.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PanelPreguntas",
  __ssrInlineRender: true,
  setup(__props) {
    const juegoStore = useJuegoEstudiante();
    const { tiempo, palabraActual } = storeToRefs(juegoStore);
    const respuesta = ref("");
    const audioCorrecto = new Audio("/correcto.mp3");
    const tiempoRestante = ref(0);
    ref(null);
    const formatearTiempo2 = computed(() => {
      const minuto = tiempoRestante.value / 60;
      const segundos = tiempoRestante.value % 60;
      if (minuto >= 1)
        return `${Math.trunc(minuto)}:${segundos == 0 ? "00" : segundos < 10 ? "0" + segundos : segundos}`;
      return segundos;
    });
    const medirPorcentajeAcierto = computed(() => {
      var _a2;
      var _a;
      const caracteresInput = respuesta.value.toLocaleLowerCase().split("");
      const caracteresPalabra = (_a2 = (_a = palabraActual.value) == null ? void 0 : _a.palabra.toLocaleLowerCase().split("")) != null ? _a2 : [];
      let aciertos = 0;
      let error = false;
      for (let i = 0; i < caracteresInput.length; i++) {
        if (caracteresPalabra[i] === caracteresInput[i])
          aciertos++;
        else {
          error = true;
          aciertos = 0;
          break;
        }
      }
      return {
        porcentaje: error ? 100 : aciertos / caracteresPalabra.length * 100,
        error
      };
    });
    const lanzarConfeti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#ff0", "#0ff", "#f0f"]
        // Colores personalizables
      });
    };
    const medirPorcentajeTiempo = computed(() => {
      const resultado = { porcentaje: 100, color: "green" };
      if (!tiempo.value)
        return resultado;
      resultado.porcentaje = tiempoRestante.value / tiempo.value * 100;
      resultado.color = "green";
      return resultado;
    });
    const saltarPregunta = () => {
      juegoStore.siguientePalabra(false);
      respuesta.value = "";
    };
    watch(respuesta, (nuevo, anterior) => {
      var _a;
      if (nuevo.toLocaleLowerCase() === ((_a = palabraActual.value) == null ? void 0 : _a.palabra.toLocaleLowerCase())) {
        audioCorrecto.play();
        lanzarConfeti();
        juegoStore.siguientePalabra(true);
        respuesta.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VFadeTransition = resolveComponent("VFadeTransition");
      const _component_VProgressCircular = resolveComponent("VProgressCircular");
      const _component_VProgressLinear = resolveComponent("VProgressLinear");
      const _component_VBtn = resolveComponent("VBtn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VRow, {
        style: { "height": "55vh" },
        align: "center",
        justify: "center",
        class: "text-h3 text-md-h2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VFadeTransition, { mode: "out-in" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d, _e;
                      if (_push4) {
                        _push4(`<p data-v-432bfb8b${_scopeId3}>`);
                        if ((_a = unref(palabraActual)) == null ? void 0 : _a.tipo) {
                          _push4(`<span class="text-h4 font-weight-black" data-v-432bfb8b${_scopeId3}>${ssrInterpolate(unref(palabraActual).tipo)}.</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(` ${ssrInterpolate((_b = unref(palabraActual)) == null ? void 0 : _b.definicion)}</p>`);
                      } else {
                        return [
                          (openBlock(), createBlock("p", {
                            key: (_c = unref(palabraActual)) == null ? void 0 : _c._id
                          }, [
                            ((_d = unref(palabraActual)) == null ? void 0 : _d.tipo) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-h4 font-weight-black"
                            }, toDisplayString(unref(palabraActual).tipo) + ".", 1)) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString((_e = unref(palabraActual)) == null ? void 0 : _e.definicion), 1)
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VFadeTransition, { mode: "out-in" }, {
                      default: withCtx(() => {
                        var _a, _b, _c;
                        return [
                          (openBlock(), createBlock("p", {
                            key: (_a = unref(palabraActual)) == null ? void 0 : _a._id
                          }, [
                            ((_b = unref(palabraActual)) == null ? void 0 : _b.tipo) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-h4 font-weight-black"
                            }, toDisplayString(unref(palabraActual).tipo) + ".", 1)) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString((_c = unref(palabraActual)) == null ? void 0 : _c.definicion), 1)
                          ]))
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCol, { cols: "auto" }, {
                default: withCtx(() => [
                  createVNode(_component_VFadeTransition, { mode: "out-in" }, {
                    default: withCtx(() => {
                      var _a, _b, _c;
                      return [
                        (openBlock(), createBlock("p", {
                          key: (_a = unref(palabraActual)) == null ? void 0 : _a._id
                        }, [
                          ((_b = unref(palabraActual)) == null ? void 0 : _b.tipo) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-h4 font-weight-black"
                          }, toDisplayString(unref(palabraActual).tipo) + ".", 1)) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString((_c = unref(palabraActual)) == null ? void 0 : _c.definicion), 1)
                        ]))
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="progress-container" data-v-432bfb8b>`);
      if (unref(tiempo) != null) {
        _push(ssrRenderComponent(_component_VProgressCircular, {
          class: "text-h4 progress-circular",
          size: "100",
          rotate: "360",
          "model-value": unref(medirPorcentajeTiempo).porcentaje,
          color: unref(medirPorcentajeTiempo).color,
          width: "5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span color="red" data-v-432bfb8b${_scopeId}>${ssrInterpolate(unref(formatearTiempo2))}</span>`);
            } else {
              return [
                createVNode("span", { color: "red" }, toDisplayString(unref(formatearTiempo2)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_VProgressCircular, {
          class: "progress-circular",
          size: "100",
          rotate: "360",
          "model-value": unref(medirPorcentajeTiempo).porcentaje,
          color: unref(medirPorcentajeTiempo).color,
          width: "5"
        }, null, _parent));
      }
      _push(ssrRenderComponent(_component_VProgressLinear, {
        color: unref(medirPorcentajeAcierto).error ? "#DC2626" : "green",
        "model-value": unref(medirPorcentajeAcierto).porcentaje,
        class: "progress-linear"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_VRow, {
        class: "px-md-5 mt-16",
        style: { "height": "20vh" },
        align: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCol, {
              cols: "8",
              md: "9",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "width": "100%" })}" data-v-432bfb8b${_scopeId2}><input${ssrRenderAttr("value", unref(respuesta))}${ssrRenderAttr("placeholder", `Empieza con ${(_a = unref(palabraActual)) == null ? void 0 : _a.palabra[0]}`)} autofocus type="text" data-v-432bfb8b${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "width": "100%" } }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(respuesta) ? respuesta.value = $event : null,
                        placeholder: `Empieza con ${(_b = unref(palabraActual)) == null ? void 0 : _b.palabra[0]}`,
                        autofocus: "",
                        type: "text"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(respuesta)]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCol, {
              cols: "4",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VBtn, {
                    text: "Siguiente",
                    block: "",
                    variant: "tonal",
                    size: "x-large",
                    onClick: saltarPregunta
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VBtn, {
                      text: "Siguiente",
                      block: "",
                      variant: "tonal",
                      size: "x-large",
                      onClick: saltarPregunta
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCol, {
                cols: "8",
                md: "9",
                class: "d-flex"
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { style: { "width": "100%" } }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(respuesta) ? respuesta.value = $event : null,
                        placeholder: `Empieza con ${(_a = unref(palabraActual)) == null ? void 0 : _a.palabra[0]}`,
                        autofocus: "",
                        type: "text"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(respuesta)]
                      ])
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_VCol, {
                cols: "4",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VBtn, {
                    text: "Siguiente",
                    block: "",
                    variant: "tonal",
                    size: "x-large",
                    onClick: saltarPregunta
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PanelPreguntas.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-432bfb8b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResultadoJuego",
  __ssrInlineRender: true,
  setup(__props) {
    const juegoStore = useJuegoEstudiante();
    const { resultadoJuego, cuestionarioActual } = storeToRefs(juegoStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VDivider = resolveComponent("VDivider");
      _push(ssrRenderComponent(_component_VContainer, mergeProps({ class: "text-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VRow, {
              class: "py-10",
              style: { "background-color": "#F6F6F6" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<h2 class="text-h5"${_scopeId3}>${ssrInterpolate((_a = unref(cuestionarioActual)) == null ? void 0 : _a.nombre)}</h2><div${_scopeId3}><h1 class="text-h2 mt-3"${_scopeId3}>BUEN INTENTO</h1>`);
                        _push4(ssrRenderComponent(_component_VBtn, {
                          text: "Ir al inicio",
                          color: "error",
                          class: "mt-4",
                          onClick: ($event) => _ctx.$router.push("/")
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VBtn, {
                          text: "Jugar de nuevo",
                          color: "secondary",
                          class: "text-black mt-4 ms-2",
                          onClick: ($event) => unref(juegoStore).restablecerValores()
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-h5" }, toDisplayString((_b = unref(cuestionarioActual)) == null ? void 0 : _b.nombre), 1),
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-h2 mt-3" }, "BUEN INTENTO"),
                            createVNode(_component_VBtn, {
                              text: "Ir al inicio",
                              color: "error",
                              class: "mt-4",
                              onClick: ($event) => _ctx.$router.push("/")
                            }, null, 8, ["onClick"]),
                            createVNode(_component_VBtn, {
                              text: "Jugar de nuevo",
                              color: "secondary",
                              class: "text-black mt-4 ms-2",
                              onClick: ($event) => unref(juegoStore).restablecerValores()
                            }, null, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("h2", { class: "text-h5" }, toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.nombre), 1),
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-h2 mt-3" }, "BUEN INTENTO"),
                            createVNode(_component_VBtn, {
                              text: "Ir al inicio",
                              color: "error",
                              class: "mt-4",
                              onClick: ($event) => _ctx.$router.push("/")
                            }, null, 8, ["onClick"]),
                            createVNode(_component_VBtn, {
                              text: "Jugar de nuevo",
                              color: "secondary",
                              class: "text-black mt-4 ms-2",
                              onClick: ($event) => unref(juegoStore).restablecerValores()
                            }, null, 8, ["onClick"])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VRow, {
              class: "mt-5",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, { cols: "8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCard, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p class="text-grey"${_scopeId7}>Tiempo total</p><p class="text-h4"${_scopeId7}>${ssrInterpolate(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo))}</p>`);
                                              } else {
                                                return [
                                                  createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                                  createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_VDivider, {
                                            vertical: "",
                                            thickness: "3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              var _a, _b;
                                              if (_push8) {
                                                _push8(`<p class="text-grey"${_scopeId7}>Preguntas correctas</p><p class="text-h4"${_scopeId7}>${ssrInterpolate(unref(resultadoJuego).respuestasCorrectas)}/${ssrInterpolate((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length)}</p>`);
                                              } else {
                                                return [
                                                  createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                                  createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_b = unref(cuestionarioActual)) == null ? void 0 : _b.palabras.length), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_VDivider, {
                                            vertical: "",
                                            thickness: "3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p class="text-grey"${_scopeId7}>Puntaje</p><p class="text-h4 d-flex align-center justify-center"${_scopeId7}>${ssrInterpolate(unref(resultadoJuego).puntaje)} <span class="text-h5"${_scopeId7}>\u{1F48E}</span></p>`);
                                              } else {
                                                return [
                                                  createVNode("p", { class: "text-grey" }, "Puntaje"),
                                                  createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                                    createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                                    createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_VCol, null, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                                createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VDivider, {
                                              vertical: "",
                                              thickness: "3"
                                            }),
                                            createVNode(_component_VCol, { cols: "auto" }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                                  createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length), 1)
                                                ];
                                              }),
                                              _: 1
                                            }),
                                            createVNode(_component_VDivider, {
                                              vertical: "",
                                              thickness: "3"
                                            }),
                                            createVNode(_component_VCol, null, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "text-grey" }, "Puntaje"),
                                                createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                                  createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                                  createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_VCol, null, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                              createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VDivider, {
                                            vertical: "",
                                            thickness: "3"
                                          }),
                                          createVNode(_component_VCol, { cols: "auto" }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                                createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length), 1)
                                              ];
                                            }),
                                            _: 1
                                          }),
                                          createVNode(_component_VDivider, {
                                            vertical: "",
                                            thickness: "3"
                                          }),
                                          createVNode(_component_VCol, null, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-grey" }, "Puntaje"),
                                              createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                                createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                                createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_VCol, null, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                            createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VDivider, {
                                          vertical: "",
                                          thickness: "3"
                                        }),
                                        createVNode(_component_VCol, { cols: "auto" }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                              createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length), 1)
                                            ];
                                          }),
                                          _: 1
                                        }),
                                        createVNode(_component_VDivider, {
                                          vertical: "",
                                          thickness: "3"
                                        }),
                                        createVNode(_component_VCol, null, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-grey" }, "Puntaje"),
                                            createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                              createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                              createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VCard, { elevation: "10" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                          createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VDivider, {
                                        vertical: "",
                                        thickness: "3"
                                      }),
                                      createVNode(_component_VCol, { cols: "auto" }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                            createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length), 1)
                                          ];
                                        }),
                                        _: 1
                                      }),
                                      createVNode(_component_VDivider, {
                                        vertical: "",
                                        thickness: "3"
                                      }),
                                      createVNode(_component_VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-grey" }, "Puntaje"),
                                          createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                            createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                            createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, { cols: "8" }, {
                      default: withCtx(() => [
                        createVNode(_component_VCard, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_component_VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                        createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_VDivider, {
                                      vertical: "",
                                      thickness: "3"
                                    }),
                                    createVNode(_component_VCol, { cols: "auto" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                          createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length), 1)
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(_component_VDivider, {
                                      vertical: "",
                                      thickness: "3"
                                    }),
                                    createVNode(_component_VCol, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-grey" }, "Puntaje"),
                                        createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                          createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                          createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VRow, {
                class: "py-10",
                style: { "background-color": "#F6F6F6" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("h2", { class: "text-h5" }, toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.nombre), 1),
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-h2 mt-3" }, "BUEN INTENTO"),
                          createVNode(_component_VBtn, {
                            text: "Ir al inicio",
                            color: "error",
                            class: "mt-4",
                            onClick: ($event) => _ctx.$router.push("/")
                          }, null, 8, ["onClick"]),
                          createVNode(_component_VBtn, {
                            text: "Jugar de nuevo",
                            color: "secondary",
                            class: "text-black mt-4 ms-2",
                            onClick: ($event) => unref(juegoStore).restablecerValores()
                          }, null, 8, ["onClick"])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, {
                class: "mt-5",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VCol, { cols: "8" }, {
                    default: withCtx(() => [
                      createVNode(_component_VCard, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_VRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-grey" }, "Tiempo total"),
                                      createVNode("p", { class: "text-h4" }, toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(resultadoJuego).tiempo)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VDivider, {
                                    vertical: "",
                                    thickness: "3"
                                  }),
                                  createVNode(_component_VCol, { cols: "auto" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode("p", { class: "text-grey" }, "Preguntas correctas"),
                                        createVNode("p", { class: "text-h4" }, toDisplayString(unref(resultadoJuego).respuestasCorrectas) + "/" + toDisplayString((_a = unref(cuestionarioActual)) == null ? void 0 : _a.palabras.length), 1)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(_component_VDivider, {
                                    vertical: "",
                                    thickness: "3"
                                  }),
                                  createVNode(_component_VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-grey" }, "Puntaje"),
                                      createVNode("p", { class: "text-h4 d-flex align-center justify-center" }, [
                                        createTextVNode(toDisplayString(unref(resultadoJuego).puntaje) + " ", 1),
                                        createVNode("span", { class: "text-h5" }, "\u{1F48E}")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResultadoJuego.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const juegoStore = useJuegoEstudiante();
    const { estado } = storeToRefs(juegoStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_LobbyJuego = _sfc_main$3;
      const _component_PanelPreguntas = __nuxt_component_1;
      const _component_VRow = resolveComponent("VRow");
      const _component_ResultadoJuego = _sfc_main$1;
      _push(ssrRenderComponent(_component_VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(estado) === ("EstadosJuego" in _ctx ? _ctx.EstadosJuego : unref(EstadosJuego)).Pendiente) {
              _push2(ssrRenderComponent(_component_LobbyJuego, null, null, _parent2, _scopeId));
            } else if (unref(estado) === ("EstadosJuego" in _ctx ? _ctx.EstadosJuego : unref(EstadosJuego)).EnProgreso) {
              _push2(ssrRenderComponent(_component_PanelPreguntas, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ResultadoJuego, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ResultadoJuego)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              unref(estado) === ("EstadosJuego" in _ctx ? _ctx.EstadosJuego : unref(EstadosJuego)).Pendiente ? (openBlock(), createBlock(_component_LobbyJuego, { key: 0 })) : unref(estado) === ("EstadosJuego" in _ctx ? _ctx.EstadosJuego : unref(EstadosJuego)).EnProgreso ? (openBlock(), createBlock(_component_PanelPreguntas, { key: 1 })) : (openBlock(), createBlock(_component_VRow, { key: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_ResultadoJuego)
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/estudiante/juego/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BA6uofXb.mjs.map
