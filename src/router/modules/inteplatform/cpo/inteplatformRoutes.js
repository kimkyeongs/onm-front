import Layout from "@/layout/appLayout.vue";
import { inteplatformRoutesList } from "./inteplatformRouteList";
export default {
    path: "/inteplatform",
    component: Layout,
    alwaysShow: true,
    children: [...inteplatformRoutesList],
};