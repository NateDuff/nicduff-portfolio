export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f920c4895b711258e73fad5',
                  title: 'Sanity Studio',
                  name: 'nicduff-portfolio-studio',
                  apiId: '3e6067b8-d76d-4c00-a45b-7d6be9c3cd62'
                },
                {
                  buildHookId: '5f920c48d91b34242c0419d9',
                  title: 'Portfolio Website',
                  name: 'nicduff-portfolio',
                  apiId: '544e32bd-89ef-421a-a034-684c2643bddb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NateDuff/nicduff-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://nicduff-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
