import {Leads} from "./lead"
import {Population} from "./population"

export default async function Boolytics(info:{prisma:any, project:any, status:boolean})
{
 
    if(info.status)
    {
   await Leads(info.prisma, info.project)
    }
    else
    {
   await Population(info.prisma, info.project)
    }

    return('')
}