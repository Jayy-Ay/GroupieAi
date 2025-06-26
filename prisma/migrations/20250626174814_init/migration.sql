-- CreateEnum
CREATE TYPE "SenderType" AS ENUM ('user', 'ai');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Chatroom" (
    "chatroom_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "owned_by" INTEGER NOT NULL,

    CONSTRAINT "Chatroom_pkey" PRIMARY KEY ("chatroom_id")
);

-- CreateTable
CREATE TABLE "AI" (
    "ai_id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "prompt_style" TEXT NOT NULL,
    "chatroom_id" INTEGER NOT NULL,

    CONSTRAINT "AI_pkey" PRIMARY KEY ("ai_id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "message_id" SERIAL NOT NULL,
    "sender_type" "SenderType" NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatroom_id" INTEGER NOT NULL,
    "user_sender_id" INTEGER,
    "ai_sender_id" INTEGER,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("message_id")
);

-- CreateTable
CREATE TABLE "_UserChatrooms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserChatrooms_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_UserChatrooms_B_index" ON "_UserChatrooms"("B");

-- AddForeignKey
ALTER TABLE "Chatroom" ADD CONSTRAINT "Chatroom_owned_by_fkey" FOREIGN KEY ("owned_by") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AI" ADD CONSTRAINT "AI_chatroom_id_fkey" FOREIGN KEY ("chatroom_id") REFERENCES "Chatroom"("chatroom_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatroom_id_fkey" FOREIGN KEY ("chatroom_id") REFERENCES "Chatroom"("chatroom_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_user_sender_id_fkey" FOREIGN KEY ("user_sender_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_ai_sender_id_fkey" FOREIGN KEY ("ai_sender_id") REFERENCES "AI"("ai_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserChatrooms" ADD CONSTRAINT "_UserChatrooms_A_fkey" FOREIGN KEY ("A") REFERENCES "Chatroom"("chatroom_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserChatrooms" ADD CONSTRAINT "_UserChatrooms_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
