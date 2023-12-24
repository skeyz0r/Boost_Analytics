const today =  Date.now()
const newDate = new Date()

   
   export async function lead(prisma:any, project:any)
    {
        const projectId = project
        
        const date = await prisma.web_analytics.findMany({
            where:{projectId:projectId},
        select:{
            date: true
        }
    })
    const week = new Date(date[0].date);


    if(Number(date[0].date.setDate(week.getDate() + 7)) <= today)
        {
            await prisma.web_analytics.update({
                where:{
                    projectId:projectId
                },
                data:{
                    leads: 1,
                      date: newDate,
                    leadsAll:{increment: 1}       
                }
            })
        }
    else 
    {
        await prisma.web_analytics.update({
            where:{
                projectId:projectId
            },
            data:{
                leads: {
                    increment: 1,
                },
                leadsAll:{increment: 1}
            }
        })
    }
        }
      
  
   export async function population(prisma:any, project:any)
    {
        const projectId = project
    
     
        const date = await prisma.web_analytics.findMany({
            where:{projectId:projectId},
        select:{
            date: true
        }
    })
    const week = new Date(date[0].date);

    console.log(today, newDate, week)

    
        if(Number(date[0].date.setDate(week.getDate() + 7)) <= today)
        {
        await prisma.web_analytics.update({
            where:{
                projectId:projectId
            },
            data:{
                population: 1,
                populationAll: {increment: 1},
                date: newDate
            }
        })
    }
    else
    {
        await prisma.web_analytics.update({
            where:{
                projectId:projectId
            },
            data:{
                population: {increment: 1},
                populationAll: {increment: 1}
            }
        })
    }
    }

