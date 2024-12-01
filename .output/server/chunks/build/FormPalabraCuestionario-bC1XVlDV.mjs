import { useSSRContext, defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, withModifiers } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormPalabraCuestionario",
  __ssrInlineRender: true,
  emits: ["procesarFormulario"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const formulario = ref(null);
    const campos = reactive({
      palabra: "",
      definicion: "",
      tipo: null
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
      emit("procesarFormulario", {
        ...campos,
        tipo: campos.tipo
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VForm = resolveComponent("VForm");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VTextarea = resolveComponent("VTextarea");
      const _component_VSelect = resolveComponent("VSelect");
      const _component_VRow = resolveComponent("VRow");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ title: "Agregar una palabra" }, _attrs), {
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
                          modelValue: unref(campos).palabra,
                          "onUpdate:modelValue": ($event) => unref(campos).palabra = $event,
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
                        _push4(`<label${_scopeId3}>Tipo:</label>`);
                        _push4(ssrRenderComponent(_component_VSelect, {
                          modelValue: unref(campos).tipo,
                          "onUpdate:modelValue": ($event) => unref(campos).tipo = $event,
                          rules: reglas.campoObligatorio,
                          items: ["verbs", "simple answer"],
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
                                      type: "submit"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VBtn, {
                                        text: "Guardar palabra",
                                        type: "submit"
                                      })
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
                                      type: "submit"
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
                          createVNode("label", null, "Palabra:"),
                          createVNode(_component_VTextField, {
                            modelValue: unref(campos).palabra,
                            "onUpdate:modelValue": ($event) => unref(campos).palabra = $event,
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
                          createVNode("label", null, "Tipo:"),
                          createVNode(_component_VSelect, {
                            modelValue: unref(campos).tipo,
                            "onUpdate:modelValue": ($event) => unref(campos).tipo = $event,
                            rules: reglas.campoObligatorio,
                            items: ["verbs", "simple answer"],
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VRow, { class: "mt-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_VSpacer),
                              createVNode(_component_VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VBtn, {
                                    text: "Guardar palabra",
                                    type: "submit"
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
                    createVNode(_component_VForm, {
                      onSubmit: withModifiers(procesarFormulario, ["prevent"]),
                      ref_key: "formulario",
                      ref: formulario
                    }, {
                      default: withCtx(() => [
                        createVNode("label", null, "Palabra:"),
                        createVNode(_component_VTextField, {
                          modelValue: unref(campos).palabra,
                          "onUpdate:modelValue": ($event) => unref(campos).palabra = $event,
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
                        createVNode("label", null, "Tipo:"),
                        createVNode(_component_VSelect, {
                          modelValue: unref(campos).tipo,
                          "onUpdate:modelValue": ($event) => unref(campos).tipo = $event,
                          rules: reglas.campoObligatorio,
                          items: ["verbs", "simple answer"],
                          class: "mt-2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VRow, { class: "mt-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_VSpacer),
                            createVNode(_component_VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_VBtn, {
                                  text: "Guardar palabra",
                                  type: "submit"
                                })
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
                        modelValue: unref(campos).palabra,
                        "onUpdate:modelValue": ($event) => unref(campos).palabra = $event,
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
                      createVNode("label", null, "Tipo:"),
                      createVNode(_component_VSelect, {
                        modelValue: unref(campos).tipo,
                        "onUpdate:modelValue": ($event) => unref(campos).tipo = $event,
                        rules: reglas.campoObligatorio,
                        items: ["verbs", "simple answer"],
                        class: "mt-2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VRow, { class: "mt-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_VSpacer),
                          createVNode(_component_VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VBtn, {
                                text: "Guardar palabra",
                                type: "submit"
                              })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormPalabraCuestionario.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FormPalabraCuestionario-bC1XVlDV.mjs.map
