import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/back",
      component: () => import("@/components/backendLayout.vue"),
      children: [
        {
          path: "dashboard",
          component: () => import("@/views/DashBoard.vue"),
          meta: {
            title: "数据分析",
            icon: "PieChart",
          },
        },
        {
          path: "knowLedge",
          component: () => import("@/views/knowledgeLedge.vue"),
          meta: {
            title: "知识文章",
            icon: "ChatLineSquare",
          },
        },
        {
          path: "consultations",
          component: () => import("@/views/consultations.vue"),
          meta: {
            title: "咨询记录",
            icon: "Message",
          },
        },
        {
          path: "emotional",
          component: () => import("@/views/emotional.vue"),
          meta: {
            title: "情感分析",
            icon: "User",
          },
        },
      ],
    },
  ],
});

export default router;
