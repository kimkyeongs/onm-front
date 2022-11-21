import Layout from "@/layout/appLayout.vue";
import { chargerRoutesList } from "./charger/chargerRouteList";
export default {
    path: "/charger",
    component: Layout,
    alwaysShow: true,
    children: [...chargerRoutesList],
};