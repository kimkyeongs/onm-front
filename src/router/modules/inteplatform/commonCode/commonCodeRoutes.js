import { commonCodeRouteList } from "./commonCodeRouteList";
import Layout from "@/layout/appLayout.vue";
export default {
    path: "/commonCode",
    component: Layout,
    alwaysShow: true,
    children: [...commonCodeRouteList],
};