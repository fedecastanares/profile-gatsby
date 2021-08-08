exports.createPages = async ({ actions, graphql, reporter}) => {
    const resultado = await graphql(`
    query {
        allDatoCmsPortfolio(filter: {id: {regex: "/-es/"}}) {
          nodes{
            slug
          }
        }
      
      }
    `)

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors)
    }
    const projects = resultado.data.allDatoCmsPortfolio.nodes;

    
    projects.map(project => {
        actions.createPage({
            path: project.slug,
            component: require.resolve('./src/components/projects.js'),
            context: {
                slug: project.slug
            }
            
        })
    })
    
}