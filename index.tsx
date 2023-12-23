    async function lead(prisma:any, project:any)
    {
        const projectId = project
    
        await prisma.web_analytics.update({
            where:{
                projectId:projectId
            },
            data:{
                leads: {
                    increment: 1, 
                  },
            }
        })
    }
  
  
    async function population(prisma:any, project:any)
    {
        const projectId = project
    
        await prisma.web_analytics.update({
            where:{
                projectId:projectId
            },
            data:{
                population: {
                    increment: 1, 
                  },
            }
        })
    }
  
  module.exports = {
    lead,
    population,
  };