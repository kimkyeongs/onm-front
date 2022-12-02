import { batchJobInfoRouteList } from "./batchJobInfoRouteList";
import Layout from "@/layout/appLayout.vue";
export default {
    path: "/batchJobInfo",
    component: Layout,
    alwaysShow: true,
    children: [...batchJobInfoRouteList],
};