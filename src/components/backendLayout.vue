<script setup>
import SideBar from "./SideBar.vue";
import Navbar from "./Navbar.vue";
</script>

<template>
  <div class="backend-layout">
    <el-container class="main-container">
      <el-aside width="264px">
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
