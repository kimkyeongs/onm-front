import { platformRouteList } from "./platform/platformRouteList";
import Layout from "@/layout/appLayout.vue";
export default {
    path: "/platform",
    component: Layout,
    alwaysShow: true,
    children: [...platformRouteList],
};