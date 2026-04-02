<script setup>
import SideBar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useAdminStore } from "@/store";

const adminStore = useAdminStore();
const { isCollapsed } = storeToRefs(adminStore);
const asideWidth = computed(() => (isCollapsed.value ? "64px" : "264px"));
</script>

<template>
  <div class="backend-layout">
    <el-container class="main-container">
      <el-aside :width="asideWidth" class="sidebar-aside">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main class="main-content">
          <router-view class="content-container" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.backend-layout {
  height: 100vh;

  .el-header {
    height: 74px;
  }

  .main-container {
    height: 100%;

    .sidebar-aside {
      overflow: hidden;
      // 禁用侧边栏宽度过渡，避免折叠时出现残留帧
      transition: width 0s linear !important;
    }

    .el-aside {
      height: 100%;
      background-color: #f0f2f5;
    }

    .content-container {
      min-height: calc(100% - 64px);
      padding: 20px;
      background: #fff;
    }
  }
}
</style>
