import { _ as _sfc_main$1 } from './FormPalabraCuestionario-2SGxZR6e.mjs';
import { useSSRContext, defineComponent, ref, reactive, resolveComponent, withCtx, unref, createVNode, isRef, createTextVNode, TransitionGroup, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useCuestionarioProfesorStore } from './cuestionario-B0MM_laY.mjs';
import { _ as _export_sfc, f as useAuth } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuevo",
  __ssrInlineRender: true,
  setup(__props) {
    const cuestionarStore = useCuestionarioProfesorStore();
    const mostrarFormularioPalabra = ref(false);
    const cargando = ref(false);
    const campos = reactive({
      nombre: "",
      palabras: []
    });
    const filtro = ref("");
    const campoRequerido = [
      (v) => !!v || "Campo requerido!"
    ];
    const procesarFormulario = () => {
      cargando.value = true;
      cuestionarStore.crearCuestionario({
        ...campos,
        _profesor: useAuth().data.value._id
      });
      cargando.value = false;
    };
    const agregarPalabra = (palabra) => {
      campos.palabras.push(palabra);
      mostrarFormularioPalabra.value = false;
    };
    const eliminarPalabra = (indice) => {
      campos.palabras = campos.palabras.filter((i, index) => index !== indice);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VIcon = resolveComponent("VIcon");
      const _component_VCard = resolveComponent("VCard");
      const _component_VDialog = resolveComponent("VDialog");
      const _component_FormPalabraCuestionario = _sfc_main$1;
      _push(ssrRenderComponent(_component_VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center mb-4 text-h4" data-v-2dc4ccbb${_scopeId}>Crear cuestionario</h1>`);
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          text: "Cancelar",
                          to: "/app/profesor",
                          color: "error",
                          readonly: unref(cargando),
                          variant: "tonal"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            text: "Cancelar",
                            to: "/app/profesor",
                            color: "error",
                            readonly: unref(cargando),
                            variant: "tonal"
                          }, null, 8, ["readonly"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          text: "Guardar cuestionario",
                          disabled: unref(campos).palabras.length === 0 || !unref(campos).nombre,
                          loading: unref(cargando),
                          onClick: procesarFormulario
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            text: "Guardar cuestionario",
                            disabled: unref(campos).palabras.length === 0 || !unref(campos).nombre,
                            loading: unref(cargando),
                            onClick: procesarFormulario
                          }, null, 8, ["disabled", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VSpacer),
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          text: "Cancelar",
                          to: "/app/profesor",
                          color: "error",
                          readonly: unref(cargando),
                          variant: "tonal"
                        }, null, 8, ["readonly"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          text: "Guardar cuestionario",
                          disabled: unref(campos).palabras.length === 0 || !unref(campos).nombre,
                          loading: unref(cargando),
                          onClick: procesarFormulario
                        }, null, 8, ["disabled", "loading"])
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
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VTextField, {
                          label: "Nombre",
                          modelValue: unref(campos).nombre,
                          "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                          rules: campoRequerido
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VTextField, {
                            label: "Nombre",
                            modelValue: unref(campos).nombre,
                            "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                            rules: campoRequerido
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextField, {
                          label: "Nombre",
                          modelValue: unref(campos).nombre,
                          "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                          rules: campoRequerido
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VTextField, {
                          "prepend-inner-icon": "mdi-magnify",
                          clearable: "",
                          modelValue: unref(filtro),
                          "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                          modelModifiers: { trim: true },
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VTextField, {
                            "prepend-inner-icon": "mdi-magnify",
                            clearable: "",
                            modelValue: unref(filtro),
                            "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                            modelModifiers: { trim: true },
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          readonly: unref(cargando),
                          onClick: ($event) => mostrarFormularioPalabra.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VIcon, { icon: "mdi-plus" }, null, _parent5, _scopeId4));
                              _push5(` Agregar palabra `);
                            } else {
                              return [
                                createVNode(_component_VIcon, { icon: "mdi-plus" }),
                                createTextVNode(" Agregar palabra ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            readonly: unref(cargando),
                            onClick: ($event) => mostrarFormularioPalabra.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VIcon, { icon: "mdi-plus" }),
                              createTextVNode(" Agregar palabra ")
                            ]),
                            _: 1
                          }, 8, ["readonly", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextField, {
                          "prepend-inner-icon": "mdi-magnify",
                          clearable: "",
                          modelValue: unref(filtro),
                          "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                          modelModifiers: { trim: true },
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          readonly: unref(cargando),
                          onClick: ($event) => mostrarFormularioPalabra.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VIcon, { icon: "mdi-plus" }),
                            createTextVNode(" Agregar palabra ")
                          ]),
                          _: 1
                        }, 8, ["readonly", "onClick"])
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
                  ssrRenderList(!unref(filtro) ? unref(campos).palabras : unref(campos).palabras.filter((x) => x.palabra.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i, indice) => {
                    _push3(ssrRenderComponent(_component_VCol, {
                      cols: "12",
                      key: indice
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_VCard, {
                            title: i.palabra,
                            subtitle: i.definicion
                          }, {
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_VBtn, {
                                  icon: "mdi-delete",
                                  variant: "text",
                                  color: "error",
                                  readonly: unref(cargando),
                                  onClick: ($event) => eliminarPalabra(indice)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_VBtn, {
                                    icon: "mdi-delete",
                                    variant: "text",
                                    color: "error",
                                    readonly: unref(cargando),
                                    onClick: ($event) => eliminarPalabra(indice)
                                  }, null, 8, ["readonly", "onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_VCard, {
                              title: i.palabra,
                              subtitle: i.definicion
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_VBtn, {
                                  icon: "mdi-delete",
                                  variant: "text",
                                  color: "error",
                                  readonly: unref(cargando),
                                  onClick: ($event) => eliminarPalabra(indice)
                                }, null, 8, ["readonly", "onClick"])
                              ]),
                              _: 2
                            }, 1032, ["title", "subtitle"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(TransitionGroup, { name: "palabras" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(!unref(filtro) ? unref(campos).palabras : unref(campos).palabras.filter((x) => x.palabra.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i, indice) => {
                          return openBlock(), createBlock(_component_VCol, {
                            cols: "12",
                            key: indice
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VCard, {
                                title: i.palabra,
                                subtitle: i.definicion
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_VBtn, {
                                    icon: "mdi-delete",
                                    variant: "text",
                                    color: "error",
                                    readonly: unref(cargando),
                                    onClick: ($event) => eliminarPalabra(indice)
                                  }, null, 8, ["readonly", "onClick"])
                                ]),
                                _: 2
                              }, 1032, ["title", "subtitle"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VDialog, {
              "max-width": "600",
              modelValue: unref(mostrarFormularioPalabra),
              "onUpdate:modelValue": ($event) => isRef(mostrarFormularioPalabra) ? mostrarFormularioPalabra.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormPalabraCuestionario, { onProcesarFormulario: agregarPalabra }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormPalabraCuestionario, { onProcesarFormulario: agregarPalabra })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-center mb-4 text-h4" }, "Crear cuestionario"),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VSpacer),
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        text: "Cancelar",
                        to: "/app/profesor",
                        color: "error",
                        readonly: unref(cargando),
                        variant: "tonal"
                      }, null, 8, ["readonly"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        text: "Guardar cuestionario",
                        disabled: unref(campos).palabras.length === 0 || !unref(campos).nombre,
                        loading: unref(cargando),
                        onClick: procesarFormulario
                      }, null, 8, ["disabled", "loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextField, {
                        label: "Nombre",
                        modelValue: unref(campos).nombre,
                        "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                        rules: campoRequerido
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextField, {
                        "prepend-inner-icon": "mdi-magnify",
                        clearable: "",
                        modelValue: unref(filtro),
                        "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                        modelModifiers: { trim: true },
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        readonly: unref(cargando),
                        onClick: ($event) => mostrarFormularioPalabra.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VIcon, { icon: "mdi-plus" }),
                          createTextVNode(" Agregar palabra ")
                        ]),
                        _: 1
                      }, 8, ["readonly", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(TransitionGroup, { name: "palabras" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(!unref(filtro) ? unref(campos).palabras : unref(campos).palabras.filter((x) => x.palabra.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i, indice) => {
                        return openBlock(), createBlock(_component_VCol, {
                          cols: "12",
                          key: indice
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VCard, {
                              title: i.palabra,
                              subtitle: i.definicion
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_VBtn, {
                                  icon: "mdi-delete",
                                  variant: "text",
                                  color: "error",
                                  readonly: unref(cargando),
                                  onClick: ($event) => eliminarPalabra(indice)
                                }, null, 8, ["readonly", "onClick"])
                              ]),
                              _: 2
                            }, 1032, ["title", "subtitle"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VDialog, {
                "max-width": "600",
                modelValue: unref(mostrarFormularioPalabra),
                "onUpdate:modelValue": ($event) => isRef(mostrarFormularioPalabra) ? mostrarFormularioPalabra.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormPalabraCuestionario, { onProcesarFormulario: agregarPalabra })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/profesor/cuestionario/nuevo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nuevo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dc4ccbb"]]);

export { nuevo as default };
//# sourceMappingURL=nuevo-DLYFc6PB.mjs.map
