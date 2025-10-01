import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'nodejs-course',
    {
      type: 'category',
      label: 'Part 1: Node.js',
      items: [
        'working-with-modern-nodejs-tools',
        'javascript-and-typescript',
        'nodejs-concurrency-essentials',
        'nodejs-http-requests',
        'introduction-to-bundle',
        'unit-testing',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: Fastify in Details',
      items: [
        'creating-fastify-example-project',
        'setup-fastify-with-typescript',
        'fastify-html-template',
        'handling-form-data',
        'using-database',
        'using-sessions',
        'rest-api-with-fastify',
        'fastify-with-node-testing',
        'authenticating-and-authorizing-request',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Projects',
      items: [
        'fastify-project-structure',
        'navigation-and-chart',
        'orders-and-validation',
        'authentication',
        'administration',
        'deployment',
      ],
    },
  ],
};

export default sidebars;
