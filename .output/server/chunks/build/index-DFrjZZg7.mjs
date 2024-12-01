import { useSSRContext, defineComponent, withAsyncContext, resolveComponent, withCtx, unref, createVNode, mergeProps, openBlock, createBlock, Fragment, renderList, isRef, ref, reactive, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { s as storeToRefs, e as defineStore, f as useAuth } from './server.mjs';
import { u as useFetch } from './fetch-RaUMkSJ3.mjs';
import moment from 'moment';
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

const useDiccionarioStore = defineStore("diccionarioStore", {
  state: () => ({
    palabras: [],
    mostrarFormulario: false
  }),
  actions: {
    async obtenerPalabras() {
      const respuesta = await useFetch("/api/diccionario/" + useAuth().data.value._id, { method: "GET" }, "$KpcjgsTdjI");
      this.palabras = respuesta.data.value;
    },
    async guardarPalabra(body) {
      const palabra = await $fetch("/api/diccionario", {
        method: "POST",
        body: {
          ...body,
          _estudiante: useAuth().data.value._id
        }
      });
      this.palabras.push(palabra);
    },
    async eliminarPalabra(_id) {
      await $fetch("/api/diccionario/eliminar/" + _id, {
        method: "delete"
      });
      this.palabras = this.palabras.filter((x) => x._id !== _id);
    },
    abrirFormulario() {
      this.mostrarFormulario = true;
    },
    cerrarFormulario() {
      this.mostrarFormulario = false;
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormPalabraDiccionario",
  __ssrInlineRender: true,
  setup(__props) {
    const diccionarioStore = useDiccionarioStore();
    const formulario = ref(null);
    const cargando = ref(false);
    const campos = reactive({
      nombre: "",
      definicion: ""
    });
    const reglas = {
      campoObligatorio: [
        (v) => !!v || "Campo obligatorio!"
      ]
    };
    const procesarFormulario = async () => {
      const { valid } = await formulario.value.validate();
      if (!valid)
        return;
      cargando.value = true;
      await diccionarioStore.guardarPalabra(campos);
      cargando.value = false;
      diccionarioStore.cerrarFormulario();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VForm = resolveComponent("VForm");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VTextarea = resolveComponent("VTextarea");
      const _component_VRow = resolveComponent("VRow");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ title: "Agregar palabra al diccionario" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VForm, {
                    onSubmit: procesarFormulario,
                    ref_key: "formulario",
                    ref: formulario
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<label${_scopeId3}>Palabra:</label>`);
                        _push4(ssrRenderComponent(_component_VTextField, {
                          modelValue: unref(campos).nombre,
                          "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                          rules: reglas.campoObligatorio,
                          class: "mt-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<label${_scopeId3}>Definici\xF3n:</label>`);
                        _push4(ssrRenderComponent(_component_VTextarea, {
                          modelValue: unref(campos).definicion,
                          "onUpdate:modelValue": ($event) => unref(campos).definicion = $event,
                          rules: reglas.campoObligatorio,
                          rows: "2",
                          class: "mt-2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VRow, { class: "mt-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VBtn, {
                                      text: "Guardar palabra",
                                      type: "submit",
                                      loading: unref(cargando)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VBtn, {
                                        text: "Guardar palabra",
                                        type: "submit",
                                        loading: unref(cargando)
                                      }, null, 8, ["loading"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VSpacer),
                                createVNode(_component_VCol, { cols: "auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VBtn, {
                                      text: "Guardar palabra",
                                      type: "submit",
                                      loading: unref(cargando)
                                    }, null, 8, ["loading"])
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
                          createVNode("label", null, "Palabra:"),
                          createVNode(_component_VTextField, {
                            modelValue: unref(campos).nombre,
                            "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                            rules: reglas.campoObligatorio,
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode("label", null, "Definici\xF3n:"),
                          createVNode(_component_VTextarea, {
                            modelValue: unref(campos).definicion,
                            "onUpdate:modelValue": ($event) => unref(campos).definicion = $event,
                            rules: reglas.campoObligatorio,
                            rows: "2",
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VRow, { class: "mt-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_VSpacer),
                              createVNode(_component_VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VBtn, {
                                    text: "Guardar palabra",
                                    type: "submit",
                                    loading: unref(cargando)
                                  }, null, 8, ["loading"])
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
                    createVNode(_component_VForm, {
                      onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                      ref_key: "formulario",
                      ref: formulario
                    }, {
                      default: withCtx(() => [
                        createVNode("label", null, "Palabra:"),
                        createVNode(_component_VTextField, {
                          modelValue: unref(campos).nombre,
                          "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                          rules: reglas.campoObligatorio,
                          class: "mt-2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode("label", null, "Definici\xF3n:"),
                        createVNode(_component_VTextarea, {
                          modelValue: unref(campos).definicion,
                          "onUpdate:modelValue": ($event) => unref(campos).definicion = $event,
                          rules: reglas.campoObligatorio,
                          rows: "2",
                          class: "mt-2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VRow, { class: "mt-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_VSpacer),
                            createVNode(_component_VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_VBtn, {
                                  text: "Guardar palabra",
                                  type: "submit",
                                  loading: unref(cargando)
                                }, null, 8, ["loading"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VForm, {
                    onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                    ref_key: "formulario",
                    ref: formulario
                  }, {
                    default: withCtx(() => [
                      createVNode("label", null, "Palabra:"),
                      createVNode(_component_VTextField, {
                        modelValue: unref(campos).nombre,
                        "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                        rules: reglas.campoObligatorio,
                        class: "mt-2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode("label", null, "Definici\xF3n:"),
                      createVNode(_component_VTextarea, {
                        modelValue: unref(campos).definicion,
                        "onUpdate:modelValue": ($event) => unref(campos).definicion = $event,
                        rules: reglas.campoObligatorio,
                        rows: "2",
                        class: "mt-2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VRow, { class: "mt-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_VSpacer),
                          createVNode(_component_VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VBtn, {
                                text: "Guardar palabra",
                                type: "submit",
                                loading: unref(cargando)
                              }, null, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormPalabraDiccionario.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const diccionarioStore = useDiccionarioStore();
    const { mostrarFormulario, palabras } = storeToRefs(diccionarioStore);
    const reproducirPalabra = (palabra) => {
      const speechSynthesis = (void 0).speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(palabra.nombre);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    };
    const eliminarPalabra = async (_id, active) => {
      await diccionarioStore.eliminarPalabra(_id);
    };
    [__temp, __restore] = withAsyncContext(() => diccionarioStore.obtenerPalabras()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardActions = resolveComponent("VCardActions");
      const _component_VDialog = resolveComponent("VDialog");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_FormPalabraDiccionario = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h4 text-center"${_scopeId}>Diccionario</h1>`);
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          icon: "mdi-plus",
                          class: "rounded-circle",
                          onClick: ($event) => unref(diccionarioStore).abrirFormulario()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            icon: "mdi-plus",
                            class: "rounded-circle",
                            onClick: ($event) => unref(diccionarioStore).abrirFormulario()
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          icon: "mdi-plus",
                          class: "rounded-circle",
                          onClick: ($event) => unref(diccionarioStore).abrirFormulario()
                        }, null, 8, ["onClick"])
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
                  ssrRenderList(unref(palabras), (i) => {
                    _push3(ssrRenderComponent(_component_VCol, {
                      cols: "12",
                      sm: "6",
                      md: "3",
                      key: i._id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_VCard, {
                            title: i.nombre,
                            subtitle: `${unref(moment)(i.createdAt).format("DD-mm-yyyy")}`,
                            text: i.definicion,
                            elevation: "5"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_VCardActions, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_VDialog, { "max-width": "450" }, {
                                        activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                              icon: "mdi-delete",
                                              color: "error",
                                              variant: "tonal",
                                              size: "small"
                                            }), null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                                icon: "mdi-delete",
                                                color: "error",
                                                variant: "tonal",
                                                size: "small"
                                              }), null, 16)
                                            ];
                                          }
                                        }),
                                        default: withCtx(({ isActive }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_VCard, {
                                              title: "Eliminar palabra",
                                              text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_VCardActions, null, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_VBtn, {
                                                          text: "Cancelar",
                                                          color: "error",
                                                          onClick: ($event) => isActive.value = false,
                                                          variant: "tonal"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_VBtn, {
                                                          text: "Confirmar",
                                                          onClick: ($event) => eliminarPalabra(i._id, isActive.value),
                                                          variant: "tonal"
                                                        }, null, _parent9, _scopeId8));
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
                                                            onClick: ($event) => eliminarPalabra(i._id, isActive.value),
                                                            variant: "tonal"
                                                          }, null, 8, ["onClick"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
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
                                                          onClick: ($event) => eliminarPalabra(i._id, isActive.value),
                                                          variant: "tonal"
                                                        }, null, 8, ["onClick"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_VCard, {
                                                title: "Eliminar palabra",
                                                text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
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
                                                        onClick: ($event) => eliminarPalabra(i._id, isActive.value),
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_VSpacer, null, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_VBtn, {
                                        text: "Reproducir",
                                        variant: "tonal",
                                        "append-icon": "mdi-music",
                                        onClick: ($event) => reproducirPalabra(i)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_VDialog, { "max-width": "450" }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                              icon: "mdi-delete",
                                              color: "error",
                                              variant: "tonal",
                                              size: "small"
                                            }), null, 16)
                                          ]),
                                          default: withCtx(({ isActive }) => [
                                            createVNode(_component_VCard, {
                                              title: "Eliminar palabra",
                                              text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
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
                                                      onClick: ($event) => eliminarPalabra(i._id, isActive.value),
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
                                        }, 1024),
                                        createVNode(_component_VSpacer),
                                        createVNode(_component_VBtn, {
                                          text: "Reproducir",
                                          variant: "tonal",
                                          "append-icon": "mdi-music",
                                          onClick: ($event) => reproducirPalabra(i)
                                        }, null, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VDialog, { "max-width": "450" }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                            icon: "mdi-delete",
                                            color: "error",
                                            variant: "tonal",
                                            size: "small"
                                          }), null, 16)
                                        ]),
                                        default: withCtx(({ isActive }) => [
                                          createVNode(_component_VCard, {
                                            title: "Eliminar palabra",
                                            text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
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
                                                    onClick: ($event) => eliminarPalabra(i._id, isActive.value),
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
                                      }, 1024),
                                      createVNode(_component_VSpacer),
                                      createVNode(_component_VBtn, {
                                        text: "Reproducir",
                                        variant: "tonal",
                                        "append-icon": "mdi-music",
                                        onClick: ($event) => reproducirPalabra(i)
                                      }, null, 8, ["onClick"])
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
                              title: i.nombre,
                              subtitle: `${unref(moment)(i.createdAt).format("DD-mm-yyyy")}`,
                              text: i.definicion,
                              elevation: "5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VDialog, { "max-width": "450" }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                          icon: "mdi-delete",
                                          color: "error",
                                          variant: "tonal",
                                          size: "small"
                                        }), null, 16)
                                      ]),
                                      default: withCtx(({ isActive }) => [
                                        createVNode(_component_VCard, {
                                          title: "Eliminar palabra",
                                          text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
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
                                                  onClick: ($event) => eliminarPalabra(i._id, isActive.value),
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
                                    }, 1024),
                                    createVNode(_component_VSpacer),
                                    createVNode(_component_VBtn, {
                                      text: "Reproducir",
                                      variant: "tonal",
                                      "append-icon": "mdi-music",
                                      onClick: ($event) => reproducirPalabra(i)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["title", "subtitle", "text"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(palabras), (i) => {
                      return openBlock(), createBlock(_component_VCol, {
                        cols: "12",
                        sm: "6",
                        md: "3",
                        key: i._id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, {
                            title: i.nombre,
                            subtitle: `${unref(moment)(i.createdAt).format("DD-mm-yyyy")}`,
                            text: i.definicion,
                            elevation: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardActions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VDialog, { "max-width": "450" }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                        icon: "mdi-delete",
                                        color: "error",
                                        variant: "tonal",
                                        size: "small"
                                      }), null, 16)
                                    ]),
                                    default: withCtx(({ isActive }) => [
                                      createVNode(_component_VCard, {
                                        title: "Eliminar palabra",
                                        text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
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
                                                onClick: ($event) => eliminarPalabra(i._id, isActive.value),
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
                                  }, 1024),
                                  createVNode(_component_VSpacer),
                                  createVNode(_component_VBtn, {
                                    text: "Reproducir",
                                    variant: "tonal",
                                    "append-icon": "mdi-music",
                                    onClick: ($event) => reproducirPalabra(i)
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["title", "subtitle", "text"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-h4 text-center" }, "Diccionario"),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        icon: "mdi-plus",
                        class: "rounded-circle",
                        onClick: ($event) => unref(diccionarioStore).abrirFormulario()
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(palabras), (i) => {
                    return openBlock(), createBlock(_component_VCol, {
                      cols: "12",
                      sm: "6",
                      md: "3",
                      key: i._id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VCard, {
                          title: i.nombre,
                          subtitle: `${unref(moment)(i.createdAt).format("DD-mm-yyyy")}`,
                          text: i.definicion,
                          elevation: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDialog, { "max-width": "450" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_VBtn, mergeProps({ ref_for: true }, props, {
                                      icon: "mdi-delete",
                                      color: "error",
                                      variant: "tonal",
                                      size: "small"
                                    }), null, 16)
                                  ]),
                                  default: withCtx(({ isActive }) => [
                                    createVNode(_component_VCard, {
                                      title: "Eliminar palabra",
                                      text: `\xBFEstas seguro de eliminar la palabara '${i.nombre}'?`
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
                                              onClick: ($event) => eliminarPalabra(i._id, isActive.value),
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
                                }, 1024),
                                createVNode(_component_VSpacer),
                                createVNode(_component_VBtn, {
                                  text: "Reproducir",
                                  variant: "tonal",
                                  "append-icon": "mdi-music",
                                  onClick: ($event) => reproducirPalabra(i)
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["title", "subtitle", "text"])
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
      }, _parent));
      _push(ssrRenderComponent(_component_VDialog, {
        "model-value": unref(mostrarFormulario),
        "onUpdate:modelValue": ($event) => isRef(mostrarFormulario) ? mostrarFormulario.value = $event : null,
        "max-width": "450"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormPalabraDiccionario, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormPalabraDiccionario)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/estudiante/diccionario/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DFrjZZg7.mjs.map
