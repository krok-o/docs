import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9f5'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '049'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '235'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', '9f4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'fce'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd9a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2fb'),
    routes: [
      {
        path: '/docs/basic-concepts/basics',
        component: ComponentCreator('/docs/basic-concepts/basics', '5d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basic-concepts/commands',
        component: ComponentCreator('/docs/basic-concepts/commands', 'f2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basic-concepts/events',
        component: ComponentCreator('/docs/basic-concepts/events', 'b46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basic-concepts/providers',
        component: ComponentCreator('/docs/basic-concepts/providers', '169'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basic-concepts/repositories',
        component: ComponentCreator('/docs/basic-concepts/repositories', '979'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/basic-concepts',
        component: ComponentCreator('/docs/category/basic-concepts', '259'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/installation-guide',
        component: ComponentCreator('/docs/category/installation-guide', 'e04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---operator',
        component: ComponentCreator('/docs/category/tutorial---operator', '8ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation-guide/operator-installation',
        component: ComponentCreator('/docs/installation-guide/operator-installation', '6e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-operator/adding-a-new-repositroy',
        component: ComponentCreator('/docs/tutorial-operator/adding-a-new-repositroy', '613'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-operator/real-life-setup',
        component: ComponentCreator('/docs/tutorial-operator/real-life-setup', '62a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-operator/testing-the-operator-with-some-basic-commands',
        component: ComponentCreator('/docs/tutorial-operator/testing-the-operator-with-some-basic-commands', '47b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ec6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
