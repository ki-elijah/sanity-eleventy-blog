export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '614077db87d2d7179ad20273',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-vq5pg76x',
                  apiId: '2d429e52-9aa3-49be-a554-f5171eaf802b'
                },
                {
                  buildHookId: '614077dbb02ed214603d8a90',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-utcw6xdg',
                  apiId: 'c68fe47c-ca6c-4724-998f-88ac5738dc4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ki-elijah/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-utcw6xdg.netlify.app', category: 'apps'}
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
