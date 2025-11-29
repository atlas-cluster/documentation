// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Atlas Documentation",
    tagline: "Documentation for the Atlas Cluster Platform",
    favicon: "img/favicon.ico",

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: "https://docs.atlas-cluster.de",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    onBrokenLinks: "throw",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    routeBasePath: "/",
                    editUrl: "https://github.com/atlas-cluster/documentation/",
                },
                blog: false,
                theme: {
                    customCss: "./docs/theme.css",
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: "Atlas Docs",
                logo: {
                    alt: "Atlas Logo",
                    src: "img/logo.png",
                    srcDark: "img/logo-dark.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "introductionSidebar",
                        position: "left",
                        label: "Introduction",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "setupSidebar",
                        position: "left",
                        label: "Setup",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "infrastructureSidebar",
                        position: "left",
                        label: "Infrastructure",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "networkingSidebar",
                        position: "left",
                        label: "Networking",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "devopsSidebar",
                        position: "left",
                        label: "DevOps",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "securitySidebar",
                        position: "left",
                        label: "Security",
                    },
                    {
                        href: "https://github.com/atlas-cluster/",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Introduction",
                                to: "/",
                            },
                            {
                                label: "Setup",
                                to: "/setup",
                            },
                            {
                                label: "Infrastructure",
                                to: "/infrastructure",
                            },
                            {
                                label: "Networking",
                                to: "/networking",
                            },
                            {
                                label: "DevOps",
                                to: "/devops",
                            },
                            {
                                label: "Security",
                                to: "/security",
                            }
                        ],
                    },
                    {
                        title: "Platforms",
                        items: [
                            {
                                label: "Portainer",
                                href: "https://atlas-cluster.de",
                            },
                            {
                                label: "Traefik",
                                href: "https://traefik.atlas-cluster.de",
                            },
                            {
                                label: "Documentation",
                                href: "https://docs.atlas-cluster.de",
                            }
                        ]
                    },
                    {
                        title: "Logging & Monitoring",
                        items: [
                            {
                                label: "Grafana",
                                href: "https://monitoring.atlas-cluster.de",
                            },
                            {
                                label: "Loki",
                                href: "https://logs.atlas-cluster.de",
                            },
                            {
                                label: "Prometheus",
                                href: "https://prometheus.atlas-cluster.de",
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/atlas-cluster",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Atlas Cluster`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexPages: true
            },
        ],
    ],
};

export default config;
