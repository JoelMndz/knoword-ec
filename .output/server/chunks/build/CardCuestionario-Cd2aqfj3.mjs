import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardCuestionario",
  __ssrInlineRender: true,
  props: {
    cuestionario: {
      type: Object,
      required: true
    }
  },
  emits: ["ejecutarAccion"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VImg = resolveComponent("VImg");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_v_list = resolveComponent("v-list");
      const _component_VFab = resolveComponent("VFab");
      const _component_VCardActions = resolveComponent("VCardActions");
      const _component_VAvatar = resolveComponent("VAvatar");
      _push(ssrRenderComponent(_component_VCard, mergeProps({
        class: "text-white",
        color: "primary",
        onClick: ($event) => _ctx.$emit("ejecutarAccion")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VImg, {
              src: "/libro.png",
              gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)",
              "max-height": "250",
              cover: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(`<div class="container" data-v-95664006${_scopeId3}><h1 class="text-h4 text-start" data-v-95664006${_scopeId3}>${ssrInterpolate((_a = __props.cuestionario) == null ? void 0 : _a.nombre)}</h1>`);
                        if (_ctx.$slots.opcionesMenu) {
                          _push4(`<div class="menu" data-v-95664006${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_menu, null, {
                            activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_VBtn, mergeProps(props, {
                                  icon: "mdi-dots-horizontal",
                                  class: "rounded-circle",
                                  size: "small"
                                }), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_VBtn, mergeProps(props, {
                                    icon: "mdi-dots-horizontal",
                                    class: "rounded-circle",
                                    size: "small"
                                  }), null, 16)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderSlot(_ctx.$slots, "opcionesMenu", {}, null, _push6, _parent6, _scopeId5);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "opcionesMenu", {}, void 0, true)
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "opcionesMenu", {}, void 0, true)
                                    ]),
                                    _: 3
                                  })
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_VFab, {
                          text: `${(_b = __props.cuestionario) == null ? void 0 : _b.palabras.length} terms`,
                          size: "small",
                          location: "bottom end",
                          absolute: "",
                          app: "",
                          class: "pa-10 text-red"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "container" }, [
                            createVNode("h1", { class: "text-h4 text-start" }, toDisplayString((_c = __props.cuestionario) == null ? void 0 : _c.nombre), 1),
                            _ctx.$slots.opcionesMenu ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "menu"
                            }, [
                              createVNode(_component_v_menu, null, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_VBtn, mergeProps(props, {
                                    icon: "mdi-dots-horizontal",
                                    class: "rounded-circle",
                                    size: "small"
                                  }), null, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "opcionesMenu", {}, void 0, true)
                                    ]),
                                    _: 3
                                  })
                                ]),
                                _: 3
                              })
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_VFab, {
                            text: `${(_d = __props.cuestionario) == null ? void 0 : _d.palabras.length} terms`,
                            size: "small",
                            location: "bottom end",
                            absolute: "",
                            app: "",
                            class: "pa-10 text-red"
                          }, null, 8, ["text"])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCardText, null, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createVNode("div", { class: "container" }, [
                            createVNode("h1", { class: "text-h4 text-start" }, toDisplayString((_a = __props.cuestionario) == null ? void 0 : _a.nombre), 1),
                            _ctx.$slots.opcionesMenu ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "menu"
                            }, [
                              createVNode(_component_v_menu, null, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_VBtn, mergeProps(props, {
                                    icon: "mdi-dots-horizontal",
                                    class: "rounded-circle",
                                    size: "small"
                                  }), null, 16)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "opcionesMenu", {}, void 0, true)
                                    ]),
                                    _: 3
                                  })
                                ]),
                                _: 3
                              })
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_VFab, {
                            text: `${(_b = __props.cuestionario) == null ? void 0 : _b.palabras.length} terms`,
                            size: "small",
                            location: "bottom end",
                            absolute: "",
                            app: "",
                            class: "pa-10 text-red"
                          }, null, 8, ["text"])
                        ];
                      }),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardActions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VAvatar, {
                    text: (_a = __props.cuestionario) == null ? void 0 : _a._profesor.nombre[0],
                    color: "white",
                    class: "text-overline ms-1",
                    size: "25"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate((_b = __props.cuestionario) == null ? void 0 : _b._profesor.nombre)}`);
                } else {
                  return [
                    createVNode(_component_VAvatar, {
                      text: (_c = __props.cuestionario) == null ? void 0 : _c._profesor.nombre[0],
                      color: "white",
                      class: "text-overline ms-1",
                      size: "25"
                    }, null, 8, ["text"]),
                    createTextVNode(" " + toDisplayString((_d = __props.cuestionario) == null ? void 0 : _d._profesor.nombre), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VImg, {
                src: "/libro.png",
                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)",
                "max-height": "250",
                cover: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_VCardText, null, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "container" }, [
                          createVNode("h1", { class: "text-h4 text-start" }, toDisplayString((_a = __props.cuestionario) == null ? void 0 : _a.nombre), 1),
                          _ctx.$slots.opcionesMenu ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "menu"
                          }, [
                            createVNode(_component_v_menu, null, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_VBtn, mergeProps(props, {
                                  icon: "mdi-dots-horizontal",
                                  class: "rounded-circle",
                                  size: "small"
                                }), null, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "opcionesMenu", {}, void 0, true)
                                  ]),
                                  _: 3
                                })
                              ]),
                              _: 3
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_VFab, {
                          text: `${(_b = __props.cuestionario) == null ? void 0 : _b.palabras.length} terms`,
                          size: "small",
                          location: "bottom end",
                          absolute: "",
                          app: "",
                          class: "pa-10 text-red"
                        }, null, 8, ["text"])
                      ];
                    }),
                    _: 3
                  })
                ]),
                _: 3
              }),
              createVNode(_component_VCardActions, null, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(_component_VAvatar, {
                      text: (_a = __props.cuestionario) == null ? void 0 : _a._profesor.nombre[0],
                      color: "white",
                      class: "text-overline ms-1",
                      size: "25"
                    }, null, 8, ["text"]),
                    createTextVNode(" " + toDisplayString((_b = __props.cuestionario) == null ? void 0 : _b._profesor.nombre), 1)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardCuestionario.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95664006"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CardCuestionario-Cd2aqfj3.mjs.map
