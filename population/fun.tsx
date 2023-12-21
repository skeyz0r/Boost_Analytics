
export default async function Population(prisma:any, project:any)
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