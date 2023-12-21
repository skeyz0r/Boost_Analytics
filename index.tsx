

export default async function BooAnalytics(info:{prisma:any, project:any})
{

    const projectId = info.project.projectId
    const population = info.project.population + 1

    
await info.prisma.web_analytics.update({
    where:{
        projectId:projectId
    },
    data:{
      population: population
    }
})
}