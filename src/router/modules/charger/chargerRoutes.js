import { chargerRoutesList } from "./chargerRouteList";
import Layout from "@/layout/appLayout.vue";
export default {
    path: "/charger",
    component: Layout,
    alwaysShow: true,
    children: [...chargerRoutesList],
};