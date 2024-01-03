export const seo = {
  title: 'Daiwei Li | Frontend Software Engineer',
  description:
    '我叫 Daiwei，一名开发者，设计师，细节控，致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
