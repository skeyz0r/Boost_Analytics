
export default async function Boolytics(info:{prisma:any, project:any, path:string})
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