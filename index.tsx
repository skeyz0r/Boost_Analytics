import {Leads} from "./lead"

export default async function Boolytics(info:{prisma:any, project:any, status:boolean})
{
 
    Leads(info.prisma, info.project)
   

    return('')
}