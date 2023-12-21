

export default async function Leads(info:{prisma:any, project:any})
{
    const projectId = info.project

    await info.prisma.web_analytics.update({
        where:{
            projectId:projectId
        },
        data:{
            leads: {
                increment: 1, 
              },
        }
    })
return('')
}