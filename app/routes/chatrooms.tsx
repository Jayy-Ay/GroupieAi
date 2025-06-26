// app/routes/chatrooms.tsx
import { json, LoaderFunction } from "@remix-run/node";
import { prisma } from "~/lib/prisma.server";

export const loader: LoaderFunction = async () => {
  const chatrooms = await prisma.chatroom.findMany({
    include: { ai_participants: true, user_participants: true },
  });
  return json(chatrooms);
};

export default function ChatroomsPage() {
  return <div>See console or network tab for data</div>;
}
