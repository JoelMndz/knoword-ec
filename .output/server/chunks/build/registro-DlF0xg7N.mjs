import { _ as _sfc_main$1, a as _sfc_main$2 } from './InputPassword-opClZn_y.mjs';
import { defineComponent, ref, reactive, resolveComponent, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { R as Rol } from './index-Dy9oekSq.mjs';
import { u as useFetch } from './fetch-RaUMkSJ3.mjs';
import { a as navigateTo } from './server.mjs';
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
  __name: "registro",
  __ssrInlineRender: true,
  setup(__props) {
    const formulario = ref(null);
    const error = ref(null);
    const campos = reactive({
      nombre: "",
      email: "",
      password: "",
      rol: Rol.Estudiante
    });
    const cargando = ref(false);
    const reglas = {
      nombre: [
        (v) => v.length >= 4 || "M\xEDnimo 4 caracteres"
      ],
      email: [
        (v) => /.+@.+\..+/.test(v) || "El email no tiene el formato correcto!"
      ],
      password: [
        (v) => v.length >= 8 || "M\xEDnimo 8 caracteres"
      ]
    };
    const procesarFormulario = async () => {
      const { valid } = await formulario.value.validate();
      if (!valid)
        return;
      cargando.value = true;
      const respuesta = await useFetch("/api/autenticacion/registro", {
        method: "POST",
        body: campos
      }, "$T6Dt6sISwQ");
      cargando.value = false;
      if (respuesta.error.value) {
        error.value = respuesta.error.value.statusMessage;
      } else {
        navigateTo("/");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VForm = resolveComponent("VForm");
      const _component_ErrorAlert = _sfc_main$1;
      const _component_VTextField = resolveComponent("VTextField");
      const _component_InputPassword = _sfc_main$2;
      const _component_VSelect = resolveComponent("VSelect");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VRow, {
              style: { "height": "90vh" },
              justify: "center",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, {
                    cols: "9",
                    md: "7",
                    lg: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCard, { class: "pa-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCardTitle, { class: "text-h4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Crear cuenta`);
                                  } else {
                                    return [
                                      createTextVNode("Crear cuenta")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VForm, {
                                      ref_key: "formulario",
                                      ref: formulario,
                                      onSubmit: procesarFormulario,
                                      readonly: unref(cargando)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (unref(error)) {
                                            _push7(ssrRenderComponent(_component_ErrorAlert, {
                                              texto: unref(error),
                                              class: "mb-3"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<label${_scopeId6}>Nombre:</label>`);
                                          _push7(ssrRenderComponent(_component_VTextField, {
                                            modelValue: unref(campos).nombre,
                                            "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                            modelModifiers: { trim: true },
                                            type: "text",
                                            class: "mt-2",
                                            rules: reglas.nombre,
                                            placeholder: "Ingresa tu nombre"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<label${_scopeId6}>Email:</label>`);
                                          _push7(ssrRenderComponent(_component_VTextField, {
                                            modelValue: unref(campos).email,
                                            "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                            modelModifiers: { trim: true },
                                            type: "email",
                                            class: "mt-2",
                                            rules: reglas.email,
                                            placeholder: "Ingresa tu email"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<label${_scopeId6}>Password:</label>`);
                                          _push7(ssrRenderComponent(_component_InputPassword, {
                                            model: unref(campos).password,
                                            "onUpdate:model": ($event) => unref(campos).password = $event,
                                            modelModifiers: { trim: true },
                                            class: "mt-2",
                                            placeholder: "Ingresa la contrase\xF1a",
                                            rules: reglas.password
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<label${_scopeId6}>Eres un:</label>`);
                                          _push7(ssrRenderComponent(_component_VSelect, {
                                            modelValue: unref(campos).rol,
                                            "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                            items: Object.values(unref(Rol)),
                                            class: "mt-2"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_VBtn, {
                                            text: "Registrarse",
                                            class: "py-6",
                                            block: "",
                                            type: "submit",
                                            loading: unref(cargando)
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_VBtn, {
                                            text: "\xBFYa tienes cuenta?",
                                            to: "/",
                                            block: "",
                                            class: "mt-3",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            unref(error) ? (openBlock(), createBlock(_component_ErrorAlert, {
                                              key: 0,
                                              texto: unref(error),
                                              class: "mb-3"
                                            }, null, 8, ["texto"])) : createCommentVNode("", true),
                                            createVNode("label", null, "Nombre:"),
                                            createVNode(_component_VTextField, {
                                              modelValue: unref(campos).nombre,
                                              "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                              modelModifiers: { trim: true },
                                              type: "text",
                                              class: "mt-2",
                                              rules: reglas.nombre,
                                              placeholder: "Ingresa tu nombre"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode("label", null, "Email:"),
                                            createVNode(_component_VTextField, {
                                              modelValue: unref(campos).email,
                                              "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                              modelModifiers: { trim: true },
                                              type: "email",
                                              class: "mt-2",
                                              rules: reglas.email,
                                              placeholder: "Ingresa tu email"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode("label", null, "Password:"),
                                            createVNode(_component_InputPassword, {
                                              model: unref(campos).password,
                                              "onUpdate:model": ($event) => unref(campos).password = $event,
                                              modelModifiers: { trim: true },
                                              class: "mt-2",
                                              placeholder: "Ingresa la contrase\xF1a",
                                              rules: reglas.password
                                            }, null, 8, ["model", "onUpdate:model", "rules"]),
                                            createVNode("label", null, "Eres un:"),
                                            createVNode(_component_VSelect, {
                                              modelValue: unref(campos).rol,
                                              "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                              items: Object.values(unref(Rol)),
                                              class: "mt-2"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_VBtn, {
                                              text: "Registrarse",
                                              class: "py-6",
                                              block: "",
                                              type: "submit",
                                              loading: unref(cargando)
                                            }, null, 8, ["loading"]),
                                            createVNode(_component_VBtn, {
                                              text: "\xBFYa tienes cuenta?",
                                              to: "/",
                                              block: "",
                                              class: "mt-3",
                                              variant: "outlined"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VForm, {
                                        ref_key: "formulario",
                                        ref: formulario,
                                        onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                                        readonly: unref(cargando)
                                      }, {
                                        default: withCtx(() => [
                                          unref(error) ? (openBlock(), createBlock(_component_ErrorAlert, {
                                            key: 0,
                                            texto: unref(error),
                                            class: "mb-3"
                                          }, null, 8, ["texto"])) : createCommentVNode("", true),
                                          createVNode("label", null, "Nombre:"),
                                          createVNode(_component_VTextField, {
                                            modelValue: unref(campos).nombre,
                                            "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                            modelModifiers: { trim: true },
                                            type: "text",
                                            class: "mt-2",
                                            rules: reglas.nombre,
                                            placeholder: "Ingresa tu nombre"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode("label", null, "Email:"),
                                          createVNode(_component_VTextField, {
                                            modelValue: unref(campos).email,
                                            "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                            modelModifiers: { trim: true },
                                            type: "email",
                                            class: "mt-2",
                                            rules: reglas.email,
                                            placeholder: "Ingresa tu email"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode("label", null, "Password:"),
                                          createVNode(_component_InputPassword, {
                                            model: unref(campos).password,
                                            "onUpdate:model": ($event) => unref(campos).password = $event,
                                            modelModifiers: { trim: true },
                                            class: "mt-2",
                                            placeholder: "Ingresa la contrase\xF1a",
                                            rules: reglas.password
                                          }, null, 8, ["model", "onUpdate:model", "rules"]),
                                          createVNode("label", null, "Eres un:"),
                                          createVNode(_component_VSelect, {
                                            modelValue: unref(campos).rol,
                                            "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                            items: Object.values(unref(Rol)),
                                            class: "mt-2"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_VBtn, {
                                            text: "Registrarse",
                                            class: "py-6",
                                            block: "",
                                            type: "submit",
                                            loading: unref(cargando)
                                          }, null, 8, ["loading"]),
                                          createVNode(_component_VBtn, {
                                            text: "\xBFYa tienes cuenta?",
                                            to: "/",
                                            block: "",
                                            class: "mt-3",
                                            variant: "outlined"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["readonly"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCardTitle, { class: "text-h4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Crear cuenta")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VForm, {
                                      ref_key: "formulario",
                                      ref: formulario,
                                      onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                                      readonly: unref(cargando)
                                    }, {
                                      default: withCtx(() => [
                                        unref(error) ? (openBlock(), createBlock(_component_ErrorAlert, {
                                          key: 0,
                                          texto: unref(error),
                                          class: "mb-3"
                                        }, null, 8, ["texto"])) : createCommentVNode("", true),
                                        createVNode("label", null, "Nombre:"),
                                        createVNode(_component_VTextField, {
                                          modelValue: unref(campos).nombre,
                                          "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                          modelModifiers: { trim: true },
                                          type: "text",
                                          class: "mt-2",
                                          rules: reglas.nombre,
                                          placeholder: "Ingresa tu nombre"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode("label", null, "Email:"),
                                        createVNode(_component_VTextField, {
                                          modelValue: unref(campos).email,
                                          "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                          modelModifiers: { trim: true },
                                          type: "email",
                                          class: "mt-2",
                                          rules: reglas.email,
                                          placeholder: "Ingresa tu email"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode("label", null, "Password:"),
                                        createVNode(_component_InputPassword, {
                                          model: unref(campos).password,
                                          "onUpdate:model": ($event) => unref(campos).password = $event,
                                          modelModifiers: { trim: true },
                                          class: "mt-2",
                                          placeholder: "Ingresa la contrase\xF1a",
                                          rules: reglas.password
                                        }, null, 8, ["model", "onUpdate:model", "rules"]),
                                        createVNode("label", null, "Eres un:"),
                                        createVNode(_component_VSelect, {
                                          modelValue: unref(campos).rol,
                                          "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                          items: Object.values(unref(Rol)),
                                          class: "mt-2"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                        createVNode(_component_VBtn, {
                                          text: "Registrarse",
                                          class: "py-6",
                                          block: "",
                                          type: "submit",
                                          loading: unref(cargando)
                                        }, null, 8, ["loading"]),
                                        createVNode(_component_VBtn, {
                                          text: "\xBFYa tienes cuenta?",
                                          to: "/",
                                          block: "",
                                          class: "mt-3",
                                          variant: "outlined"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["readonly"])
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
                          createVNode(_component_VCard, { class: "pa-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h4" }, {
                                default: withCtx(() => [
                                  createTextVNode("Crear cuenta")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VForm, {
                                    ref_key: "formulario",
                                    ref: formulario,
                                    onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                                    readonly: unref(cargando)
                                  }, {
                                    default: withCtx(() => [
                                      unref(error) ? (openBlock(), createBlock(_component_ErrorAlert, {
                                        key: 0,
                                        texto: unref(error),
                                        class: "mb-3"
                                      }, null, 8, ["texto"])) : createCommentVNode("", true),
                                      createVNode("label", null, "Nombre:"),
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(campos).nombre,
                                        "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                        modelModifiers: { trim: true },
                                        type: "text",
                                        class: "mt-2",
                                        rules: reglas.nombre,
                                        placeholder: "Ingresa tu nombre"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode("label", null, "Email:"),
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(campos).email,
                                        "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                        modelModifiers: { trim: true },
                                        type: "email",
                                        class: "mt-2",
                                        rules: reglas.email,
                                        placeholder: "Ingresa tu email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode("label", null, "Password:"),
                                      createVNode(_component_InputPassword, {
                                        model: unref(campos).password,
                                        "onUpdate:model": ($event) => unref(campos).password = $event,
                                        modelModifiers: { trim: true },
                                        class: "mt-2",
                                        placeholder: "Ingresa la contrase\xF1a",
                                        rules: reglas.password
                                      }, null, 8, ["model", "onUpdate:model", "rules"]),
                                      createVNode("label", null, "Eres un:"),
                                      createVNode(_component_VSelect, {
                                        modelValue: unref(campos).rol,
                                        "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                        items: Object.values(unref(Rol)),
                                        class: "mt-2"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                      createVNode(_component_VBtn, {
                                        text: "Registrarse",
                                        class: "py-6",
                                        block: "",
                                        type: "submit",
                                        loading: unref(cargando)
                                      }, null, 8, ["loading"]),
                                      createVNode(_component_VBtn, {
                                        text: "\xBFYa tienes cuenta?",
                                        to: "/",
                                        block: "",
                                        class: "mt-3",
                                        variant: "outlined"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["readonly"])
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
                    createVNode(_component_VCol, {
                      cols: "9",
                      md: "7",
                      lg: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VCard, { class: "pa-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_VCardTitle, { class: "text-h4" }, {
                              default: withCtx(() => [
                                createTextVNode("Crear cuenta")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_component_VForm, {
                                  ref_key: "formulario",
                                  ref: formulario,
                                  onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                                  readonly: unref(cargando)
                                }, {
                                  default: withCtx(() => [
                                    unref(error) ? (openBlock(), createBlock(_component_ErrorAlert, {
                                      key: 0,
                                      texto: unref(error),
                                      class: "mb-3"
                                    }, null, 8, ["texto"])) : createCommentVNode("", true),
                                    createVNode("label", null, "Nombre:"),
                                    createVNode(_component_VTextField, {
                                      modelValue: unref(campos).nombre,
                                      "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                      modelModifiers: { trim: true },
                                      type: "text",
                                      class: "mt-2",
                                      rules: reglas.nombre,
                                      placeholder: "Ingresa tu nombre"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode("label", null, "Email:"),
                                    createVNode(_component_VTextField, {
                                      modelValue: unref(campos).email,
                                      "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                      modelModifiers: { trim: true },
                                      type: "email",
                                      class: "mt-2",
                                      rules: reglas.email,
                                      placeholder: "Ingresa tu email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode("label", null, "Password:"),
                                    createVNode(_component_InputPassword, {
                                      model: unref(campos).password,
                                      "onUpdate:model": ($event) => unref(campos).password = $event,
                                      modelModifiers: { trim: true },
                                      class: "mt-2",
                                      placeholder: "Ingresa la contrase\xF1a",
                                      rules: reglas.password
                                    }, null, 8, ["model", "onUpdate:model", "rules"]),
                                    createVNode("label", null, "Eres un:"),
                                    createVNode(_component_VSelect, {
                                      modelValue: unref(campos).rol,
                                      "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                      items: Object.values(unref(Rol)),
                                      class: "mt-2"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                    createVNode(_component_VBtn, {
                                      text: "Registrarse",
                                      class: "py-6",
                                      block: "",
                                      type: "submit",
                                      loading: unref(cargando)
                                    }, null, 8, ["loading"]),
                                    createVNode(_component_VBtn, {
                                      text: "\xBFYa tienes cuenta?",
                                      to: "/",
                                      block: "",
                                      class: "mt-3",
                                      variant: "outlined"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["readonly"])
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
                style: { "height": "90vh" },
                justify: "center",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VCol, {
                    cols: "9",
                    md: "7",
                    lg: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VCard, { class: "pa-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCardTitle, { class: "text-h4" }, {
                            default: withCtx(() => [
                              createTextVNode("Crear cuenta")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_VForm, {
                                ref_key: "formulario",
                                ref: formulario,
                                onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                                readonly: unref(cargando)
                              }, {
                                default: withCtx(() => [
                                  unref(error) ? (openBlock(), createBlock(_component_ErrorAlert, {
                                    key: 0,
                                    texto: unref(error),
                                    class: "mb-3"
                                  }, null, 8, ["texto"])) : createCommentVNode("", true),
                                  createVNode("label", null, "Nombre:"),
                                  createVNode(_component_VTextField, {
                                    modelValue: unref(campos).nombre,
                                    "onUpdate:modelValue": ($event) => unref(campos).nombre = $event,
                                    modelModifiers: { trim: true },
                                    type: "text",
                                    class: "mt-2",
                                    rules: reglas.nombre,
                                    placeholder: "Ingresa tu nombre"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode("label", null, "Email:"),
                                  createVNode(_component_VTextField, {
                                    modelValue: unref(campos).email,
                                    "onUpdate:modelValue": ($event) => unref(campos).email = $event,
                                    modelModifiers: { trim: true },
                                    type: "email",
                                    class: "mt-2",
                                    rules: reglas.email,
                                    placeholder: "Ingresa tu email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode("label", null, "Password:"),
                                  createVNode(_component_InputPassword, {
                                    model: unref(campos).password,
                                    "onUpdate:model": ($event) => unref(campos).password = $event,
                                    modelModifiers: { trim: true },
                                    class: "mt-2",
                                    placeholder: "Ingresa la contrase\xF1a",
                                    rules: reglas.password
                                  }, null, 8, ["model", "onUpdate:model", "rules"]),
                                  createVNode("label", null, "Eres un:"),
                                  createVNode(_component_VSelect, {
                                    modelValue: unref(campos).rol,
                                    "onUpdate:modelValue": ($event) => unref(campos).rol = $event,
                                    items: Object.values(unref(Rol)),
                                    class: "mt-2"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                  createVNode(_component_VBtn, {
                                    text: "Registrarse",
                                    class: "py-6",
                                    block: "",
                                    type: "submit",
                                    loading: unref(cargando)
                                  }, null, 8, ["loading"]),
                                  createVNode(_component_VBtn, {
                                    text: "\xBFYa tienes cuenta?",
                                    to: "/",
                                    block: "",
                                    class: "mt-3",
                                    variant: "outlined"
                                  })
                                ]),
                                _: 1
                              }, 8, ["readonly"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/registro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=registro-DlF0xg7N.mjs.map
