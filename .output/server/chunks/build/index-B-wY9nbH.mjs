import { _ as __nuxt_component_0 } from './CardCuestionario-Cd2aqfj3.mjs';
import { f as formatearTiempo } from './index-BTN8gWCh.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, resolveComponent, withCtx, createVNode, unref, isRef, createTextVNode, mergeProps, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';
import { u as useCuestionarioProfesorStore } from './cuestionario-B0MM_laY.mjs';
import { s as storeToRefs } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'requrl';
import 'consola/core';
import 'mongoose';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardRespuestasCuestionario",
  __ssrInlineRender: true,
  props: {
    cuestionario: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const resultados = ref([]);
    const cabecera = [
      { title: "Estudiante", key: "estudiante" },
      { title: "Fecha", key: "fecha" },
      { title: "Aciertos", key: "aciertos" },
      { title: "Tiempo", key: "tiempo" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VDataTable = resolveComponent("VDataTable");
      _push(ssrRenderComponent(_component_VCard, mergeProps({
        title: `Resultados - ${__props.cuestionario.nombre}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VDataTable, {
                    headers: cabecera,
                    "no-data-text": "No hay datos",
                    items: unref(resultados)
                  }, {
                    "item.estudiante": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item._estudiante.nombre)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item._estudiante.nombre), 1)
                        ];
                      }
                    }),
                    "item.fecha": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(new Date(item.createdAt).toLocaleDateString())}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleDateString()), 1)
                        ];
                      }
                    }),
                    "item.aciertos": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.respuestas.filter((x) => x.correcta).length)} / ${ssrInterpolate(item.respuestas.length)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.respuestas.filter((x) => x.correcta).length) + " / " + toDisplayString(item.respuestas.length), 1)
                        ];
                      }
                    }),
                    "item.tiempo": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(moment)(unref(moment)(item.fin).diff(unref(moment)(item.inicio))).seconds()))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(moment)(unref(moment)(item.fin).diff(unref(moment)(item.inicio))).seconds())), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VDataTable, {
                      headers: cabecera,
                      "no-data-text": "No hay datos",
                      items: unref(resultados)
                    }, {
                      "item.estudiante": withCtx(({ item }) => [
                        createTextVNode(toDisplayString(item._estudiante.nombre), 1)
                      ]),
                      "item.fecha": withCtx(({ item }) => [
                        createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleDateString()), 1)
                      ]),
                      "item.aciertos": withCtx(({ item }) => [
                        createTextVNode(toDisplayString(item.respuestas.filter((x) => x.correcta).length) + " / " + toDisplayString(item.respuestas.length), 1)
                      ]),
                      "item.tiempo": withCtx(({ item }) => [
                        createTextVNode(toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(moment)(unref(moment)(item.fin).diff(unref(moment)(item.inicio))).seconds())), 1)
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VDataTable, {
                    headers: cabecera,
                    "no-data-text": "No hay datos",
                    items: unref(resultados)
                  }, {
                    "item.estudiante": withCtx(({ item }) => [
                      createTextVNode(toDisplayString(item._estudiante.nombre), 1)
                    ]),
                    "item.fecha": withCtx(({ item }) => [
                      createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleDateString()), 1)
                    ]),
                    "item.aciertos": withCtx(({ item }) => [
                      createTextVNode(toDisplayString(item.respuestas.filter((x) => x.correcta).length) + " / " + toDisplayString(item.respuestas.length), 1)
                    ]),
                    "item.tiempo": withCtx(({ item }) => [
                      createTextVNode(toDisplayString(("formatearTiempo" in _ctx ? _ctx.formatearTiempo : unref(formatearTiempo))(unref(moment)(unref(moment)(item.fin).diff(unref(moment)(item.inicio))).seconds())), 1)
                    ]),
                    _: 1
                  }, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardRespuestasCuestionario.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const cuestionarioStore = useCuestionarioProfesorStore();
    const { cuestionarios } = storeToRefs(cuestionarioStore);
    const filtro = ref("");
    const eliminarCuestionario = (id, active) => {
      cuestionarioStore.eliminarCuestionario(id);
    };
    [__temp, __restore] = withAsyncContext(() => cuestionarioStore.obtenerCuestionarios()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_CardCuestionario = __nuxt_component_0;
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_VDialog = resolveComponent("VDialog");
      const _component_CardRespuestasCuestionario = _sfc_main$1;
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardActions = resolveComponent("VCardActions");
      _push(ssrRenderComponent(_component_VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 text-center"${_scopeId}>Cuestionarios</h1>`);
            _push2(ssrRenderComponent(_component_VRow, { class: "mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          icon: "mdi-plus",
                          to: "/app/profesor/cuestionario/nuevo"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            icon: "mdi-plus",
                            to: "/app/profesor/cuestionario/nuevo"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VTextField, {
                          modelValue: unref(filtro),
                          "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                          clearable: "",
                          "prepend-inner-icon": "mdi-magnify"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VTextField, {
                            modelValue: unref(filtro),
                            "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                            clearable: "",
                            "prepend-inner-icon": "mdi-magnify"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          icon: "mdi-plus",
                          to: "/app/profesor/cuestionario/nuevo"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextField, {
                          modelValue: unref(filtro),
                          "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                          clearable: "",
                          "prepend-inner-icon": "mdi-magnify"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(!unref(filtro) ? unref(cuestionarios) : unref(cuestionarios).filter((x) => x.nombre.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i) => {
                    _push3(ssrRenderComponent(_component_VCol, {
                      cols: "6",
                      sm: "4",
                      md: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_CardCuestionario, { cuestionario: i }, {
                            opcionesMenu: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  link: "",
                                  to: `/app/profesor/cuestionario/detalle/${i._id}`
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Ver detalle`);
                                          } else {
                                            return [
                                              createTextVNode("Ver detalle")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Ver detalle")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VDialog, { "max-width": "650" }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Ver Resultados`);
                                                } else {
                                                  return [
                                                    createTextVNode("Ver Resultados")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ver Resultados")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Ver Resultados")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_CardRespuestasCuestionario, { cuestionario: i }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_CardRespuestasCuestionario, { cuestionario: i }, null, 8, ["cuestionario"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VDialog, { "max-width": "450" }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Eliminar`);
                                                } else {
                                                  return [
                                                    createTextVNode("Eliminar")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Eliminar")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Eliminar")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ];
                                    }
                                  }),
                                  default: withCtx(({ isActive }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_VCard, {
                                        title: "Eliminar Cuestionario",
                                        text: `\xBFEstas seguro de eliminar el cuestionario '${i.nombre}'?`
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_VCardActions, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_VBtn, {
                                                    text: "Cancelar",
                                                    color: "error",
                                                    onClick: ($event) => isActive.value = false,
                                                    variant: "tonal"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_VBtn, {
                                                    text: "Confirmar",
                                                    onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                                    variant: "tonal"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_VBtn, {
                                                      text: "Cancelar",
                                                      color: "error",
                                                      onClick: ($event) => isActive.value = false,
                                                      variant: "tonal"
                                                    }, null, 8, ["onClick"]),
                                                    createVNode(_component_VBtn, {
                                                      text: "Confirmar",
                                                      onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                                      variant: "tonal"
                                                    }, null, 8, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_VCardActions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_VBtn, {
                                                    text: "Cancelar",
                                                    color: "error",
                                                    onClick: ($event) => isActive.value = false,
                                                    variant: "tonal"
                                                  }, null, 8, ["onClick"]),
                                                  createVNode(_component_VBtn, {
                                                    text: "Confirmar",
                                                    onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                                    variant: "tonal"
                                                  }, null, 8, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_VCard, {
                                          title: "Eliminar Cuestionario",
                                          text: `\xBFEstas seguro de eliminar el cuestionario '${i.nombre}'?`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_VCardActions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_VBtn, {
                                                  text: "Cancelar",
                                                  color: "error",
                                                  onClick: ($event) => isActive.value = false,
                                                  variant: "tonal"
                                                }, null, 8, ["onClick"]),
                                                createVNode(_component_VBtn, {
                                                  text: "Confirmar",
                                                  onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                                  variant: "tonal"
                                                }, null, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["text"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item, {
                                    link: "",
                                    to: `/app/profesor/cuestionario/detalle/${i._id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Ver detalle")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_VDialog, { "max-width": "650" }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Ver Resultados")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_CardRespuestasCuestionario, { cuestionario: i }, null, 8, ["cuestionario"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_VDialog, { "max-width": "450" }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Eliminar")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(({ isActive }) => [
                                      createVNode(_component_VCard, {
                                        title: "Eliminar Cuestionario",
                                        text: `\xBFEstas seguro de eliminar el cuestionario '${i.nombre}'?`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VCardActions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_VBtn, {
                                                text: "Cancelar",
                                                color: "error",
                                                onClick: ($event) => isActive.value = false,
                                                variant: "tonal"
                                              }, null, 8, ["onClick"]),
                                              createVNode(_component_VBtn, {
                                                text: "Confirmar",
                                                onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                                variant: "tonal"
                                              }, null, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["text"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_CardCuestionario, { cuestionario: i }, {
                              opcionesMenu: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  link: "",
                                  to: `/app/profesor/cuestionario/detalle/${i._id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Ver detalle")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to"]),
                                createVNode(_component_VDialog, { "max-width": "650" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Ver Resultados")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_CardRespuestasCuestionario, { cuestionario: i }, null, 8, ["cuestionario"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_VDialog, { "max-width": "450" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Eliminar")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(({ isActive }) => [
                                    createVNode(_component_VCard, {
                                      title: "Eliminar Cuestionario",
                                      text: `\xBFEstas seguro de eliminar el cuestionario '${i.nombre}'?`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VCardActions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_VBtn, {
                                              text: "Cancelar",
                                              color: "error",
                                              onClick: ($event) => isActive.value = false,
                                              variant: "tonal"
                                            }, null, 8, ["onClick"]),
                                            createVNode(_component_VBtn, {
                                              text: "Confirmar",
                                              onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                              variant: "tonal"
                                            }, null, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["text"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["cuestionario"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(!unref(filtro) ? unref(cuestionarios) : unref(cuestionarios).filter((x) => x.nombre.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i) => {
                      return openBlock(), createBlock(_component_VCol, {
                        cols: "6",
                        sm: "4",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CardCuestionario, { cuestionario: i }, {
                            opcionesMenu: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                link: "",
                                to: `/app/profesor/cuestionario/detalle/${i._id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Ver detalle")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createVNode(_component_VDialog, { "max-width": "650" }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Ver Resultados")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_CardRespuestasCuestionario, { cuestionario: i }, null, 8, ["cuestionario"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_VDialog, { "max-width": "450" }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Eliminar")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(({ isActive }) => [
                                  createVNode(_component_VCard, {
                                    title: "Eliminar Cuestionario",
                                    text: `\xBFEstas seguro de eliminar el cuestionario '${i.nombre}'?`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_VBtn, {
                                            text: "Cancelar",
                                            color: "error",
                                            onClick: ($event) => isActive.value = false,
                                            variant: "tonal"
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_VBtn, {
                                            text: "Confirmar",
                                            onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                            variant: "tonal"
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["text"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["cuestionario"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-h3 text-center" }, "Cuestionarios"),
              createVNode(_component_VRow, { class: "mt-5" }, {
                default: withCtx(() => [
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        icon: "mdi-plus",
                        to: "/app/profesor/cuestionario/nuevo"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextField, {
                        modelValue: unref(filtro),
                        "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                        clearable: "",
                        "prepend-inner-icon": "mdi-magnify"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(!unref(filtro) ? unref(cuestionarios) : unref(cuestionarios).filter((x) => x.nombre.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i) => {
                    return openBlock(), createBlock(_component_VCol, {
                      cols: "6",
                      sm: "4",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CardCuestionario, { cuestionario: i }, {
                          opcionesMenu: withCtx(() => [
                            createVNode(_component_v_list_item, {
                              link: "",
                              to: `/app/profesor/cuestionario/detalle/${i._id}`
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Ver detalle")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            createVNode(_component_VDialog, { "max-width": "650" }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Ver Resultados")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_CardRespuestasCuestionario, { cuestionario: i }, null, 8, ["cuestionario"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_VDialog, { "max-width": "450" }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_list_item, mergeProps({ ref_for: true }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Eliminar")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: withCtx(({ isActive }) => [
                                createVNode(_component_VCard, {
                                  title: "Eliminar Cuestionario",
                                  text: `\xBFEstas seguro de eliminar el cuestionario '${i.nombre}'?`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_VBtn, {
                                          text: "Cancelar",
                                          color: "error",
                                          onClick: ($event) => isActive.value = false,
                                          variant: "tonal"
                                        }, null, 8, ["onClick"]),
                                        createVNode(_component_VBtn, {
                                          text: "Confirmar",
                                          onClick: ($event) => eliminarCuestionario(i._id, isActive.value),
                                          variant: "tonal"
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["text"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["cuestionario"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/profesor/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B-wY9nbH.mjs.map
