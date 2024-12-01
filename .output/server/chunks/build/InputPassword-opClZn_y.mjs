import { useSSRContext, defineComponent, resolveComponent, mergeProps, useModel, ref, unref, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ErrorAlert",
  __ssrInlineRender: true,
  props: ["texto"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VAlert = resolveComponent("VAlert");
      _push(ssrRenderComponent(_component_VAlert, mergeProps({
        title: "Error",
        text: __props.texto,
        color: "error",
        variant: "tonal"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ErrorAlert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputPassword",
  __ssrInlineRender: true,
  props: {
    "model": {
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:model"],
  setup(__props) {
    const model = useModel(__props, "model");
    const mostrarPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VIcon = resolveComponent("VIcon");
      _push(ssrRenderComponent(_component_VTextField, mergeProps({
        type: unref(mostrarPassword) ? "text" : "password",
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event
      }, _attrs), {
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VIcon, {
              icon: unref(mostrarPassword) ? "mdi-eye-off" : "mdi-eye",
              onClick: ($event) => mostrarPassword.value = !unref(mostrarPassword)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VIcon, {
                icon: unref(mostrarPassword) ? "mdi-eye-off" : "mdi-eye",
                onClick: ($event) => mostrarPassword.value = !unref(mostrarPassword)
              }, null, 8, ["icon", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InputPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=InputPassword-opClZn_y.mjs.map
