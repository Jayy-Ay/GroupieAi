import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: 'Jack',
      email: 'jack@gmail.com',
      password: 'password123',
    },
  })

  const user2 = await prisma.user.create({
    data: {
      username: 'Jill',
      email: 'jill@gmail.com',
      password: 'password456',
    },
  })

  // Create a chatroom owned by user1
  const chatroom = await prisma.chatroom.create({
    data: {
      title: 'AI Chatroom 1',
      owned_by: user1.user_id,
      userParticipants: {
        connect: [{ user_id: user1.user_id }, { user_id: user2.user_id }],
      },
    },
  })

  // Create an AI participant
  const ai = await prisma.aI.create({
    data: {
      model: 'gpt-4',
      prompt_style: 'conversational',
      chatroom_id: chatroom.chatroom_id,
    },
  })

  // Create a message from user1
  await prisma.chatMessage.create({
    data: {
      sender_type: 'user',
      content: 'Hello there AI!',
      chatroom_id: chatroom.chatroom_id,
      user_sender_id: user1.user_id,
    },
  })

  // Create a message from AI
  await prisma.chatMessage.create({
    data: {
      sender_type: 'ai',
      content: 'Hello Jack! How can I assist you today?',
      chatroom_id: chatroom.chatroom_id,
      ai_sender_id: ai.ai_id,
    },
  })
}

main()
  .then(() => {
    console.log('🌱 Seed data created.')
    return prisma.$disconnect()
  })
  .catch((e) => {
    console.error(e)
    return prisma.$disconnect().finally(() => process.exit(1))
  })
