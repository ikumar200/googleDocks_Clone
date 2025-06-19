import {Liveblocks} from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import {auth,currentUser} from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";

const convex=new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks=new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req:Request){
    const {sessionClaims}=await auth();
    if(!sessionClaims){
        return new Response("Unauthorized",{status:401});
    }

    const user=await currentUser();
    // console.log({sessionClaims})
    if(!user){
        return new Response("Unauthorized",{status:401});
    }

    const {room} =await req.json();
    // console.log("Liveblocks room auth requested for:", room);
    const document=await convex.query(api.documents.getById,{id:room});

    if(!document){
        return new Response("Unauthorized",{status:401});
    }

/*
    const orgId = (sessionClaims as any).o?.id;
    // const orgId = (sessionClaims as { org_id?: string })?.org_id;

    const isOwner=document.ownerId===user.id;
    const isOrganizationMenber=
    !!(document.organizationId && document.organizationId === orgId);


    if(!isOwner && !isOrganizationMenber){
        return new Response("Unauthorized",{status:401}); 
    }
*/

type CustomClaimsWithOrg = {
  o?: {
    id?: string;
  };
};

const claims = sessionClaims as CustomClaimsWithOrg;
const orgId = claims.o?.id;

const isOwner = document.ownerId === user.id;
const isOrganizationMember =
  !!(document.organizationId && document.organizationId === orgId);

if (!isOwner && !isOrganizationMember) {
  return new Response("Unauthorized", { status: 401 });
}



    const name=user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous"

    const nameToNumber=name.split("").reduce((acc,char)=> acc+ char.charCodeAt(0),0);
    const hue=Math.abs(nameToNumber)%360;
    const color=`hsl(${hue},80%,60%)`;

    const session=liveblocks.prepareSession(user.id,{
        userInfo:{
            name,
            avatar:user.imageUrl,
            color,
        },
    });
    session.allow(room,session.FULL_ACCESS);
    const {body,status}=await session.authorize();

    return new Response(body,{status});
};