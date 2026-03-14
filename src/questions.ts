import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: '1',
    sentence: "____ tired, she still finished the report.",
    options: ["Although", "Because", "Unless", "If"],
    correctAnswer: "Although",
    explanation: {
      rule: "Although 用于引导让步状语从句，表示“虽然”，体现前后句意的转折关系。",
      example: "Although it was raining, we went for a walk. (虽然在下雨，我们还是去散步了。)",
      commonMistakes: "不要在同一个句子中同时使用 although 和 but。错误写法：Although it was raining, but we went out."
    },
    difficulty: '中级',
    category: '状语从句'
  },
  {
    id: '2',
    sentence: "The boy ____ is standing over there is my brother.",
    options: ["who", "which", "whose", "whom"],
    correctAnswer: "who",
    explanation: {
      rule: "当先行词是人，且在定语从句中作主语时，使用关系代词 who。",
      example: "The girl who won the race is my friend. (赢得比赛的那个女孩是我的朋友。)",
      commonMistakes: "指代人时误用 which。which 通常用于指代事物或动物。"
    },
    difficulty: '初级',
    category: '定语从句'
  },
  {
    id: '3',
    sentence: "I saw him ____ the street when the accident happened.",
    options: ["crossing", "crossed", "to cross", "crosses"],
    correctAnswer: "crossing",
    explanation: {
      rule: "see someone doing something 强调动作正在发生；see someone do something 强调动作的全过程。",
      example: "I heard her singing in the room. (我听见她正在房间里唱歌。)",
      commonMistakes: "在 see 之后误用 to do 形式。感官动词后通常接不带 to 的不定式或 -ing 形式。"
    },
    difficulty: '中级',
    category: '非谓语动词'
  },
  {
    id: '4',
    sentence: "This is the house ____ I was born.",
    options: ["where", "which", "that", "when"],
    correctAnswer: "where",
    explanation: {
      rule: "where 是关系副词，在定语从句中作地点状语，指代地点先行词。",
      example: "The park where we played is closed. (我们玩耍的那个公园关门了。)",
      commonMistakes: "误用 which 但没有介词。正确应为：'the house in which I was born' 或 'the house where I was born'。"
    },
    difficulty: '初级',
    category: '定语从句'
  },
  {
    id: '5',
    sentence: "____ your help, I wouldn't have succeeded.",
    options: ["Without", "With", "But for", "Except"],
    correctAnswer: "Without",
    explanation: {
      rule: "Without 可以表示虚拟语气或假设条件，意为“如果没有……”。",
      example: "Without water, plants cannot grow. (如果没有水，植物就无法生长。)",
      commonMistakes: "混淆 Without 和 Except。Except 表示“除……之外（不包括）”。"
    },
    difficulty: '中级',
    category: '介词'
  },
  {
    id: '6',
    sentence: "He spoke so fast ____ I couldn't follow him.",
    options: ["that", "as", "than", "which"],
    correctAnswer: "that",
    explanation: {
      rule: "so + 形容词/副词 + that 结构用于引导结果状语从句，表示“如此……以至于……”。",
      example: "It was so cold that the water froze. (天气太冷了，水都结冰了。)",
      commonMistakes: "在结果状语从句中误用 as 代替 that。"
    },
    difficulty: '初级',
    category: '状语从句'
  },
  {
    id: '7',
    sentence: "____ the book, he went to bed.",
    options: ["Having finished", "Finished", "To finish", "Finish"],
    correctAnswer: "Having finished",
    explanation: {
      rule: "现在分词的完成式 (Having + done) 表示该动作发生在主句动作之前。",
      example: "Having seen the film, I didn't want to go again. (看过那部电影后，我不想再看一遍了。)",
      commonMistakes: "误用简单的 Finished，这通常表示被动含义或过去的状态。"
    },
    difficulty: '高级',
    category: '非谓语动词'
  },
  {
    id: '8',
    sentence: "I don't know ____ he will come or not.",
    options: ["whether", "if", "that", "what"],
    correctAnswer: "whether",
    explanation: {
      rule: "当后面紧跟 or not 时，或者在正式语境下，通常使用 whether 而非 if。",
      example: "I'm not sure whether it will rain. (我不确定是否会下雨。)",
      commonMistakes: "在表示不确定性时误用 that。"
    },
    difficulty: '中级',
    category: '名词性从句'
  },
  {
    id: '9',
    sentence: "The news ____ our team won the game is exciting.",
    options: ["that", "which", "what", "who"],
    correctAnswer: "that",
    explanation: {
      rule: "这是同位语从句。that 引导从句解释说明名词 news 的具体内容。",
      example: "The fact that he is honest is well-known. (他很诚实这一事实众所周知。)",
      commonMistakes: "误用 which。which 在定语从句中起修饰作用，而 that 在同位语从句中起解释说明作用。"
    },
    difficulty: '高级',
    category: '名词性从句'
  },
  {
    id: '10',
    sentence: "He failed the exam, ____ made his parents very sad.",
    options: ["which", "that", "what", "as"],
    correctAnswer: "which",
    explanation: {
      rule: "在非限制性定语从句中，which 可以指代前面整个句子的内容。",
      example: "He was late again, which annoyed everyone. (他又迟到了，这让大家都很生气。)",
      commonMistakes: "在非限制性定语从句（逗号后）中使用 that。"
    },
    difficulty: '中级',
    category: '定语从句'
  }
];
