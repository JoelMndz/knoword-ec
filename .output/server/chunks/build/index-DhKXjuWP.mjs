import { _ as __nuxt_component_0 } from './CardCuestionario-Cd2aqfj3.mjs';
import { a as navigateTo } from './server.mjs';
import { defineComponent, withAsyncContext, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch } from './fetch-RaUMkSJ3.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/cuestionario", "$pE7Pzj9PCo")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_CardCuestionario = __nuxt_component_0;
      _push(ssrRenderComponent(_component_VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h4 text-center mt-5"${_scopeId}>Cuestionarios disponibles</h2>`);
            _push2(ssrRenderComponent(_component_VRow, { class: "mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(data), (i) => {
                    _push3(ssrRenderComponent(_component_VCol, {
                      cols: "6",
                      sm: "4",
                      md: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_CardCuestionario, {
                            cuestionario: i,
                            onEjecutarAccion: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/juego/" + i._id)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_CardCuestionario, {
                              cuestionario: i,
                              onEjecutarAccion: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/juego/" + i._id)
                            }, null, 8, ["cuestionario", "onEjecutarAccion"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (i) => {
                      return openBlock(), createBlock(_component_VCol, {
                        cols: "6",
                        sm: "4",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CardCuestionario, {
                            cuestionario: i,
                            onEjecutarAccion: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/juego/" + i._id)
                          }, null, 8, ["cuestionario", "onEjecutarAccion"])
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
              createVNode("h2", { class: "text-h4 text-center mt-5" }, "Cuestionarios disponibles"),
              createVNode(_component_VRow, { class: "mt-5" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (i) => {
                    return openBlock(), createBlock(_component_VCol, {
                      cols: "6",
                      sm: "4",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CardCuestionario, {
                          cuestionario: i,
                          onEjecutarAccion: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/app/estudiante/juego/" + i._id)
                        }, null, 8, ["cuestionario", "onEjecutarAccion"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/estudiante/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DhKXjuWP.mjs.map
