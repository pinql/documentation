/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Pinql Documentation",
  tagline: "Connect with Pinql APIs",
  url: "https://doc-pinql.netlify.app/docs/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pinql", // Usually your GitHub org/user name.
  projectName: "", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Pinql Logo",
        src: "img/full-logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/pinql/documentation",
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
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "RESTful API",
              to: "docs/rest/introduction",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/pinql/documentation",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pinql`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
