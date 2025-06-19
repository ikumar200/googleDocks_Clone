"use client";

import { ReactNode} from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullscreenLoader } from "@/components/fullscreen-loader";

import { LEFT_MARGIN_DEFAULT,RIGHT_MARGIN_DEFAULT } from "@/constants/margins";

export function Room({ children }: { children: ReactNode }) {
    const params=useParams();

  return (
    <LiveblocksProvider 
    throttle={16}
    authEndpoint="/api/liveblocks-auth"
    >
      <RoomProvider 
      id={params.documentId as string} 
      initialStorage={{leftMargin:LEFT_MARGIN_DEFAULT,rightMargin:RIGHT_MARGIN_DEFAULT}}>
        <ClientSideSuspense fallback={<FullscreenLoader label="Room loading..."/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}