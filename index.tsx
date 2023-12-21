import {Leads} from "./lead"
import {Population} from "./population"

export default async function Boolytics(info:{prisma:any, project:any, status:boolean})
{
   if(info.status)
   {
   Population(info.prisma, info.project)
   }
   else
   {
    Leads(info.prisma, info.project)
   }

    return('')
}