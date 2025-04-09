import {
  createOllamaModel,
  generateChatResponse,
} from "@@/server/services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  const ollamaModel = createOllamaModel();

  const response = await generateChatResponse(ollamaModel, messages);

  return {
    id,
    role: "assistant",
    content: response,
  };
});
