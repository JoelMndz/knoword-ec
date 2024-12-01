import { f as useAuth, V as VApp, a as navigateTo } from './server.mjs';
import { defineComponent, computed, resolveComponent, unref, withCtx, createSlots, createTextVNode, createVNode, openBlock, createBlock, Fragment, createCommentVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { R as Rol } from './index-Dy9oekSq.mjs';
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { signOut, data } = useAuth();
    const usuario = computed(() => data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VAppBar = resolveComponent("VAppBar");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VMain = resolveComponent("VMain");
      _push(ssrRenderComponent(unref(VApp), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VAppBar, null, createSlots({
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VBtn, {
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/"),
                    class: "text-h5",
                    variant: "text",
                    color: "black"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Learning Words`);
                      } else {
                        return [
                          createTextVNode("Learning Words")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (((_a = unref(usuario)) == null ? void 0 : _a.rol) === unref(Rol).Estudiante) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante"),
                      text: "Cuestionario",
                      variant: "text",
                      color: "black"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VBtn, {
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/diccionario"),
                      text: "Diccionario",
                      variant: "text",
                      class: "mx-3",
                      color: "black"
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_VBtn, {
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/"),
                      class: "text-h5",
                      variant: "text",
                      color: "black"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Learning Words")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    ((_b = unref(usuario)) == null ? void 0 : _b.rol) === unref(Rol).Estudiante ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_VBtn, {
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante"),
                        text: "Cuestionario",
                        variant: "text",
                        color: "black"
                      }, null, 8, ["onClick"]),
                      createVNode(_component_VBtn, {
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/diccionario"),
                        text: "Diccionario",
                        variant: "text",
                        class: "mx-3",
                        color: "black"
                      }, null, 8, ["onClick"])
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              unref(data) ? {
                name: "append",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_VBtn, {
                      class: "me-3",
                      "prepend-icon": "mdi-account",
                      color: "dark",
                      text: unref(data).nombre
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VBtn, {
                      color: "error",
                      icon: "mdi-logout",
                      class: "me-3",
                      size: "small",
                      onClick: ($event) => unref(signOut)(),
                      variant: "tonal"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_VBtn, {
                        class: "me-3",
                        "prepend-icon": "mdi-account",
                        color: "dark",
                        text: unref(data).nombre
                      }, null, 8, ["text"]),
                      createVNode(_component_VBtn, {
                        color: "error",
                        icon: "mdi-logout",
                        class: "me-3",
                        size: "small",
                        onClick: ($event) => unref(signOut)(),
                        variant: "tonal"
                      }, null, 8, ["onClick"])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VAppBar, null, createSlots({
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_VBtn, {
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/"),
                      class: "text-h5",
                      variant: "text",
                      color: "black"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Learning Words")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    ((_a = unref(usuario)) == null ? void 0 : _a.rol) === unref(Rol).Estudiante ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_VBtn, {
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante"),
                        text: "Cuestionario",
                        variant: "text",
                        color: "black"
                      }, null, 8, ["onClick"]),
                      createVNode(_component_VBtn, {
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/diccionario"),
                        text: "Diccionario",
                        variant: "text",
                        class: "mx-3",
                        color: "black"
                      }, null, 8, ["onClick"])
                    ], 64)) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                unref(data) ? {
                  name: "append",
                  fn: withCtx(() => [
                    createVNode(_component_VBtn, {
                      class: "me-3",
                      "prepend-icon": "mdi-account",
                      color: "dark",
                      text: unref(data).nombre
                    }, null, 8, ["text"]),
                    createVNode(_component_VBtn, {
                      color: "error",
                      icon: "mdi-logout",
                      class: "me-3",
                      size: "small",
                      onClick: ($event) => unref(signOut)(),
                      variant: "tonal"
                    }, null, 8, ["onClick"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1024),
              createVNode(_component_VMain, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Bp17j29r.mjs.map
