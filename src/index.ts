import { Elysia } from 'elysia';
const port: any = process.env.PORT;

const app = new Elysia()
  .get('/', () => 'Hello World!!')
  .onError(({ code }) => {
    if (code === 'NOT_FOUND') return 'Route not found :(';
  })
  .listen(port);

console.log(`Server running at port:${port}`);
