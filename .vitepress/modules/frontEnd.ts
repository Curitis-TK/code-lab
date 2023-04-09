import {DefaultTheme} from "vitepress";

export function sidebarFrontEnd(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Linux',
            items: [
                { text: '配置EPEL源', link: '/linux/config-epel-repo' },
            ]
        }
    ]
}
