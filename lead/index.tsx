

export async function Lead(prisma:any, project:any)
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