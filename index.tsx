import {Leads} from "./lead"
import {Population} from "./population"

export default async function Boolytics(info:{prisma:any, project:any, status:boolean})
{
 
    if(info.status)
    {
    Leads(info.prisma, info.project)
    }
    else
    {
    Population(info.prisma, info.project)
    }

    return('')
}