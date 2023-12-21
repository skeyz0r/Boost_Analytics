

export default async function Leads(prisma:any, project:any)
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