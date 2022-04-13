
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blockvault/__docusaurus/debug',
    component: ComponentCreator('/blockvault/__docusaurus/debug','d9c'),
    exact: true
  },
  {
    path: '/blockvault/__docusaurus/debug/config',
    component: ComponentCreator('/blockvault/__docusaurus/debug/config','86e'),
    exact: true
  },
  {
    path: '/blockvault/__docusaurus/debug/content',
    component: ComponentCreator('/blockvault/__docusaurus/debug/content','8ea'),
    exact: true
  },
  {
    path: '/blockvault/__docusaurus/debug/globalData',
    component: ComponentCreator('/blockvault/__docusaurus/debug/globalData','f0e'),
    exact: true
  },
  {
    path: '/blockvault/__docusaurus/debug/metadata',
    component: ComponentCreator('/blockvault/__docusaurus/debug/metadata','482'),
    exact: true
  },
  {
    path: '/blockvault/__docusaurus/debug/registry',
    component: ComponentCreator('/blockvault/__docusaurus/debug/registry','36a'),
    exact: true
  },
  {
    path: '/blockvault/__docusaurus/debug/routes',
    component: ComponentCreator('/blockvault/__docusaurus/debug/routes','bb9'),
    exact: true
  },
  {
    path: '/blockvault/blog',
    component: ComponentCreator('/blockvault/blog','40e'),
    exact: true
  },
  {
    path: '/blockvault/blog/archive',
    component: ComponentCreator('/blockvault/blog/archive','1b9'),
    exact: true
  },
  {
    path: '/blockvault/blog/first-blog-post',
    component: ComponentCreator('/blockvault/blog/first-blog-post','fd4'),
    exact: true
  },
  {
    path: '/blockvault/blog/long-blog-post',
    component: ComponentCreator('/blockvault/blog/long-blog-post','af7'),
    exact: true
  },
  {
    path: '/blockvault/blog/mdx-blog-post',
    component: ComponentCreator('/blockvault/blog/mdx-blog-post','88d'),
    exact: true
  },
  {
    path: '/blockvault/blog/tags',
    component: ComponentCreator('/blockvault/blog/tags','0cb'),
    exact: true
  },
  {
    path: '/blockvault/blog/tags/docusaurus',
    component: ComponentCreator('/blockvault/blog/tags/docusaurus','da6'),
    exact: true
  },
  {
    path: '/blockvault/blog/tags/facebook',
    component: ComponentCreator('/blockvault/blog/tags/facebook','8f4'),
    exact: true
  },
  {
    path: '/blockvault/blog/tags/hello',
    component: ComponentCreator('/blockvault/blog/tags/hello','cf7'),
    exact: true
  },
  {
    path: '/blockvault/blog/tags/hola',
    component: ComponentCreator('/blockvault/blog/tags/hola','7df'),
    exact: true
  },
  {
    path: '/blockvault/blog/welcome',
    component: ComponentCreator('/blockvault/blog/welcome','ff7'),
    exact: true
  },
  {
    path: '/blockvault/markdown-page',
    component: ComponentCreator('/blockvault/markdown-page','643'),
    exact: true
  },
  {
    path: '/blockvault/docs',
    component: ComponentCreator('/blockvault/docs','7c3'),
    routes: [
      {
        path: '/blockvault/docs/intro',
        component: ComponentCreator('/blockvault/docs/intro','f12'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/blockvault/docs/tutorial-basics/congratulations','d2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/blockvault/docs/tutorial-basics/create-a-blog-post','e81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/blockvault/docs/tutorial-basics/create-a-document','5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/blockvault/docs/tutorial-basics/create-a-page','cf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/blockvault/docs/tutorial-basics/deploy-your-site','517'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/blockvault/docs/tutorial-basics/markdown-features','6e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/blockvault/docs/tutorial-extras/manage-docs-versions','1d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/blockvault/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/blockvault/docs/tutorial-extras/translate-your-site','35f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/blockvault/',
    component: ComponentCreator('/blockvault/','3d0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
