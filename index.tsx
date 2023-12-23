   export async function lead(prisma:any, project:any)
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
  
  
   export async function population(prisma:any, project:any)
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
  
