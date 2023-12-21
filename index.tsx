
export default async function Boolytics(info:{prisma:any, project:any, leads:string})
{
    const projectId = info.project

    await info.prisma.web_analytics.update({
        where:{
            projectId:projectId
        },
        data:{
            population: {
                increment: 1, 
              },
        }
    })

        if(window.location.pathname.includes(info.leads))
        {
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
        }
    

    return('')
}