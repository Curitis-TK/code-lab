import {DefaultTheme} from "vitepress";

export function sidebarLinux(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Linux',
            items: [
                { text: '配置EPEL源', link: '/linux/config-epel-repo' },
                { text: '常用软件', link: '/linux/common-software' },
                { text: '安装Go', link: '/linux/install-go' },
                { text: '安装Docker', link: '/linux/install-docker' },
                { text: '安装Kubernetes', link: '/linux/install-k8s' },
                { text: '安装Nginx', link: '/linux/install-nginx' },
                { text: '自签SSL证书', link: '/linux/self-signed-ssl-cert' },
            ]
        },
        {
            text: 'Advance',
            collapsed: true,
            items: [
                {text: '在Kubernetes上部署应用', link: '/linux/advance-deploy-with-k8s'}
            ]
        },
        {
            text: 'Nginx',
            collapsed: true,
            items: [
                {text: 'Nginx与防火墙', link: '/linux/advance-nginx-with-waf'},
            ]
        }
    ]
}
