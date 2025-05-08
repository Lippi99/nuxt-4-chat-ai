import {
  createOllamaModel,
  generateChatResponse,
} from "../services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  const openaiModel = createOllamaModel();

  const response = await generateChatResponse(openaiModel, messages);

  return {
    id,
    role: "assistant",
    content: response,
  };
});
