export type Category = {
    label: string;
    menuItems: MenuItem[];
}

export type MenuItem = {
    label: string;
    link?: string;
    subItems?: MenuItem[];
    routes?: string[];
    activatedRoutes?: string[];
};


