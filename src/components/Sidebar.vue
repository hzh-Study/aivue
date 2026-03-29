<script setup>
// 组件逻辑
import { useRouter } from "vue-router";
const router = useRouter();
const imgUrl = new URL("@/assets/images/机器人.png", import.meta.url).href;
const selectMenu = (key) => {
  const currentRoute = router.options.routes[0];
  console.log(key);
  router.push(`${currentRoute.path}/${key}`);
};
</script>

<template>
  <el-menu default-active="2" class="menu-style">
    <div class="brand">
      <el-image style="width: 50px; height: 50px; margin-right: 10px" :src="imgUrl" alt="logo" fit="logo" />
      <div class="info-card">
        <h1 class="brand-title">心理健康AI助手</h1>
        <p class="brand-subtitle">管理后台</p>
      </div>
    </div>
    <el-menu-item @click="selectMenu(item.path)" v-for="item in router.options.routes[0].children" :key="item.path"
      :index="item.path">
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.menu-style {
  height: 100%;

  .brand {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;

    .info-card {
      .brand-title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 4px 0;
      }
    }
  }
}
</style>
