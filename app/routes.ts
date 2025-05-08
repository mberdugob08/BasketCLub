import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("historia", "routes/Historia.tsx"),
    route("tienda", "routes/Tienda.tsx"),
] satisfies RouteConfig;
