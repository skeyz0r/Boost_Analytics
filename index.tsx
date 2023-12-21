

export default async function BooAnalytics(prisma:any, project:any)
{

    const projectId = project.projectId
    const population = project.population + 1

    
await prisma.web_analytics.update({
    where:{
        projectId:projectId
    },
    data:{
      population: population
    }
})
}