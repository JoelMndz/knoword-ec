import { _ as _sfc_main$1 } from './FormPalabraCuestionario-2SGxZR6e.mjs';
import { useSSRContext, defineComponent, withAsyncContext, ref, resolveComponent, withCtx, unref, isRef, createVNode, createTextVNode, mergeProps, TransitionGroup, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch } from './fetch-RaUMkSJ3.mjs';
import { _ as _export_sfc, l as useRoute$1 } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/cuestionario/por-id/" + useRoute$1().params.id, "$f4JV9hUrzS")), __temp = await __temp, __restore(), __temp);
    const cuestionario = ref(data.value);
    const mostrarFormularioPalabra = ref(false);
    const filtro = ref("");
    const agregarPalabra = async (palabra) => {
      mostrarFormularioPalabra.value = false;
      cuestionario.value.palabras.push(palabra);
      const respuesta = await $fetch("/api/cuestionario/palabra", {
        method: "POST",
        body: {
          ...palabra,
          _cuestionario: cuestionario.value._id
        }
      });
      cuestionario.value.palabras = respuesta == null ? void 0 : respuesta.palabras;
    };
    const eliminarPalabra = async (indice, i, isActive) => {
      cuestionario.value.palabras = cuestionario.value.palabras.filter((x, index) => x._id && x._id !== i._id || index !== indice);
      if (i._id)
        await $fetch("/api/cuestionario/palabra/eliminar", {
          method: "PUT",
          body: {
            _cuestionario: cuestionario.value._id,
            _palabra: i._id
          }
        });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VIcon = resolveComponent("VIcon");
      const _component_VCard = resolveComponent("VCard");
      const _component_VDialog = resolveComponent("VDialog");
      const _component_VCardActions = resolveComponent("VCardActions");
      const _component_FormPalabraCuestionario = _sfc_main$1;
      _push(ssrRenderComponent(_component_VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h3 text-center" data-v-c00fc943${_scopeId}>${ssrInterpolate(unref(cuestionario).nombre)}</h2>`);
            _push2(ssrRenderComponent(_component_VRow, { class: "mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VTextField, {
                          modelValue: unref(filtro),
                          "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                          modelModifiers: { trim: true },
                          "prepend-inner-icon": "mdi-magnify",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VTextField, {
                            modelValue: unref(filtro),
                            "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                            modelModifiers: { trim: true },
                            "prepend-inner-icon": "mdi-magnify",
                            clearable: ""
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
                            onClick: ($event) => mostrarFormularioPalabra.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VIcon, { icon: "mdi-plus" }),
                              createTextVNode(" Agregar palabra ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
                          modelValue: unref(filtro),
                          "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                          modelModifiers: { trim: true },
                          "prepend-inner-icon": "mdi-magnify",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          onClick: ($event) => mostrarFormularioPalabra.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VIcon, { icon: "mdi-plus" }),
                            createTextVNode(" Agregar palabra ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
                  if (unref(cuestionario).palabras.length > 0) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(cuestionario).palabras.filter((x) => x.palabra.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i, indice) => {
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
                                  _push5(ssrRenderComponent(_component_VDialog, null, {
                                    activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                          icon: "mdi-delete",
                                          variant: "text",
                                          color: "error"
                                        }), null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                            icon: "mdi-delete",
                                            variant: "text",
                                            color: "error"
                                          }), null, 16)
                                        ];
                                      }
                                    }),
                                    default: withCtx(({ isActive }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_VCard, {
                                          title: "Eliminar palabra",
                                          text: `\xBFEstas seguro de eliminar la palabara '${i.palabra}'?`
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
                                                      onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                                                        onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                                                      onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                                            title: "Eliminar palabra",
                                            text: `\xBFEstas seguro de eliminar la palabara '${i.palabra}'?`
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
                                                    onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                                    createVNode(_component_VDialog, null, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                          icon: "mdi-delete",
                                          variant: "text",
                                          color: "error"
                                        }), null, 16)
                                      ]),
                                      default: withCtx(({ isActive }) => [
                                        createVNode(_component_VCard, {
                                          title: "Eliminar palabra",
                                          text: `\xBFEstas seguro de eliminar la palabara '${i.palabra}'?`
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
                                                  onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                              createVNode(_component_VCard, {
                                title: i.palabra,
                                subtitle: i.definicion
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_VDialog, null, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                        icon: "mdi-delete",
                                        variant: "text",
                                        color: "error"
                                      }), null, 16)
                                    ]),
                                    default: withCtx(({ isActive }) => [
                                      createVNode(_component_VCard, {
                                        title: "Eliminar palabra",
                                        text: `\xBFEstas seguro de eliminar la palabara '${i.palabra}'?`
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
                                                onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                              }, 1032, ["title", "subtitle"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_VCol, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p data-v-c00fc943${_scopeId3}>No hay preguntas</p>`);
                        } else {
                          return [
                            createVNode("p", null, "No hay preguntas")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(TransitionGroup, { name: "palabras" }, {
                      default: withCtx(() => [
                        unref(cuestionario).palabras.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(cuestionario).palabras.filter((x) => x.palabra.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i, indice) => {
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
                                  createVNode(_component_VDialog, null, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                        icon: "mdi-delete",
                                        variant: "text",
                                        color: "error"
                                      }), null, 16)
                                    ]),
                                    default: withCtx(({ isActive }) => [
                                      createVNode(_component_VCard, {
                                        title: "Eliminar palabra",
                                        text: `\xBFEstas seguro de eliminar la palabara '${i.palabra}'?`
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
                                                onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                              }, 1032, ["title", "subtitle"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)) : (openBlock(), createBlock(_component_VCol, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode("p", null, "No hay preguntas")
                          ]),
                          _: 1
                        }))
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
              createVNode("h2", { class: "text-h3 text-center" }, toDisplayString(unref(cuestionario).nombre), 1),
              createVNode(_component_VRow, { class: "mt-5" }, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextField, {
                        modelValue: unref(filtro),
                        "onUpdate:modelValue": ($event) => isRef(filtro) ? filtro.value = $event : null,
                        modelModifiers: { trim: true },
                        "prepend-inner-icon": "mdi-magnify",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        onClick: ($event) => mostrarFormularioPalabra.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VIcon, { icon: "mdi-plus" }),
                          createTextVNode(" Agregar palabra ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
                      unref(cuestionario).palabras.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(cuestionario).palabras.filter((x) => x.palabra.toLocaleLowerCase().includes(unref(filtro).toLocaleLowerCase())), (i, indice) => {
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
                                createVNode(_component_VDialog, null, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                      icon: "mdi-delete",
                                      variant: "text",
                                      color: "error"
                                    }), null, 16)
                                  ]),
                                  default: withCtx(({ isActive }) => [
                                    createVNode(_component_VCard, {
                                      title: "Eliminar palabra",
                                      text: `\xBFEstas seguro de eliminar la palabara '${i.palabra}'?`
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
                                              onClick: ($event) => eliminarPalabra(indice, i, isActive.value),
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
                            }, 1032, ["title", "subtitle"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)) : (openBlock(), createBlock(_component_VCol, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode("p", null, "No hay preguntas")
                        ]),
                        _: 1
                      }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/profesor/cuestionario/detalle/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c00fc943"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0re3yjIo.mjs.map
