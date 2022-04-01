<template>
  <button
    @click="handldeBtnClick"
    class="h-button"
    :class="[
      `h-button-${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
  >
    <i v-if="icon" :class="[icon, { 'is-loading': loading }]"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts" name="h-button">
import { useSlots } from "vue";
import { hButtonType, nativeType } from "./types";
// * 组件props类型
interface IHbuttonPropsType {
  type?: hButtonType; // 按钮类型
  plain?: boolean; // plain -> 是否为朴素按钮
  round?: boolean; // round -> 是否为圆角按钮
  circle?: boolean; // circle -> 是否为圆形按钮
  icon?: string; // icon -> 自定义图标
  loading?: boolean; // loading -> 自定义图标是否旋转
  autofocus?: boolean; // autofocus -> 原生 autofocus 属性
  nativeType?: nativeType; // nativeType -> 原生 type  属性
  // ! autoInsertSpace?: boolean; // autoInsertSpace -> 自动在两个中文字符之间插入空格
  disabled?: boolean; // disabled -> 是否为禁用状态
}
// * 组件props
const props = withDefaults(defineProps<IHbuttonPropsType>(), {
  type: "default",
  plain: false,
  round: false,
  circle: false,
  icon: "",
  loading: false,
  autofocus: false,
  nativeType: "",
  // ! autoInsertSpace: false,
  disabled: false,
});
// * 组件emit
const emit = defineEmits(["click"]);

// ! todo autoInsertSpace属性需要将中文字符之间插入空格
// const slots: any = useSlots();
// const { children } = slots.default()[0];
// const chineseReg = /[\u4e00-\u9fa5]+/g;
// if (
//   children.length == 2 &&
//   children.match(chineseReg)[0].length == 2 &&
//   props.autoInsertSpace
// ) {
//   slots.default()[0].children = children[0] + " " + children[1];
// }

// # 监听按钮的点击事件
const handldeBtnClick = () => emit("click");
</script>

<style scoped lang="less">
@import "./css/base.less";
</style>
