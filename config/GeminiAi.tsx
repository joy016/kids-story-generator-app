/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: 'user',
      parts: [
        {
          text: 'create kids story on the description for 5-8 years kids, Educational story, and all images in Paper cut style: story of boy and magic school, give me 5 chapter, with detailed image text prompt for each of chapter and Image prompt for story cover book with story name all in JSON field format\n',
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: '```json\n{\n  "story_name": "The Boy Who Went to Magic School",\n  "cover_image": {\n    "description": "A whimsical paper cut illustration of a boy with a bright smile, wearing a pointy wizard hat, flying on a broomstick towards a castle made of candy and gingerbread. The sky is filled with swirling stars and magical sparkles.  The words \'The Boy Who Went to Magic School\' are written in a whimsical font above the castle.",\n    "style": "Paper cut"\n  },\n  "chapters": [\n    {\n      "chapter_title": "A Curious Invitation",\n      "description": "A paper cut image of a young boy, Toby, looking confused and excited as he holds a golden envelope with a wax seal that says \'Magic School\' in sparkly letters. He is standing in his bedroom surrounded by toy trains and stuffed animals.",\n      "image_prompt": "A young boy with brown hair and blue eyes, wearing a striped shirt and blue jeans, looking at a golden envelope with a wax seal that says \'Magic School\' in sparkly letters. His bedroom is filled with toy trains and stuffed animals, creating a sense of childhood wonder. The image should be in paper cut style, with layers of paper creating depth and texture."\n    },\n    {\n      "chapter_title": "The Magic School Bus",\n      "description": "A paper cut illustration of a colorful bus with wheels made of candy and a roof made of gingerbread. It\'s filled with magical creatures like talking animals and whimsical fairies. Toby, wearing a wizard\'s hat and a happy expression, is waving from the window. The bus is driving through a rainbow-colored sky towards a magical castle.",\n      "image_prompt": "A bus with bright colors and playful shapes, with candy wheels, a gingerbread roof, and windows made of shimmering glass. Inside, animals wearing hats and holding wands, a fairy with iridescent wings, and Toby, wearing a pointy wizard\'s hat and a wide smile, are waving from the window. The bus is traveling through a sky painted with a vibrant rainbow, heading towards a castle made of clouds and candy. The image should be in paper cut style, with intricate details and playful textures."\n    },\n    {\n      "chapter_title": "Lessons in Magic",\n      "description": "A paper cut image showing Toby sitting in a classroom made of clouds, with a kindly old wizard teacher. Toby is learning how to make a magic wand glow, with swirling sparkles coming out of his fingertips. Other children around him are practicing spells with different colored lights and shapes.",\n      "image_prompt": "A classroom made of clouds and fluffy cotton candy, with a window overlooking a sparkling, fantastical world. A kindly old wizard with a long beard and a twinkling eye teaches a group of children with different animal ears and wings. Toby, with a determined expression, is holding a glowing wand, surrounded by magical sparks and swirling light. Other students are practicing spells, casting colorful beams of light and creating shapes from the air. The image should be in paper cut style, with intricate details and a whimsical atmosphere."\n    },\n    {\n      "chapter_title": "The Magical Challenge",\n      "description": "A paper cut image of Toby racing against other students in a magical obstacle course. They\'re jumping over glowing streams of water, climbing on clouds, and flying on broomsticks. The finish line is a giant, shimmering star. Toby, with a determined look on his face, is leading the race with his trusty magic wand.",\n      "image_prompt": "A magical obstacle course with glowing water, clouds, and rainbow-colored trees. Toby, wearing a wizard\'s hat and holding a glowing wand, is racing against other students, each with their own unique abilities and magical powers. They jump over glowing streams of water, climb on fluffy clouds, and fly on broomsticks, with a shimmering star as the finish line. The image should be in paper cut style, with dynamic movement and a sense of playful competition."\n    },\n    {\n      "chapter_title": "A Magical Friendship",\n      "description": "A paper cut image of Toby and his new magical friends - a talking cat, a fairy, and a unicorn - laughing and playing in a beautiful garden filled with magical flowers and sparkling butterflies. The sun is shining, and the whole scene is bathed in warm, magical light.",\n      "image_prompt": "A magical garden overflowing with colorful flowers and sparkling butterflies. Toby, with a joyful smile, is playing with a talking cat wearing a tiny hat, a fairy with iridescent wings, and a unicorn with a shimmering horn. They are laughing, sharing secrets, and enjoying the warmth and beauty of their magical world. The image should be in paper cut style, with vibrant colors, playful textures, and an atmosphere of wonder and friendship."\n    }\n  ]\n}\n``` \n',
        },
      ],
    },
  ],
});
