import {Leads} from "./lead"
import {Population} from "./population"

export default async function Boolytics(prisma:any, project:any, status:boolean)
{
 
    if(status)
    {
   await Leads(prisma, project)
    }
    else
    {
   await Population(prisma, project)
    }

}