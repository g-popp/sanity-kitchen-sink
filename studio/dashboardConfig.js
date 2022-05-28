export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62921797f27d9078ba36d323',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4ye13jxb',
                  apiId: 'e8b16232-ffdb-44ec-8b21-bdc7d8850f1c'
                },
                {
                  buildHookId: '629217976a676d786fc7a31c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1vv4z57w',
                  apiId: '0dfedf99-f9d8-4705-969c-5c1aa74685df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/g-popp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1vv4z57w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
