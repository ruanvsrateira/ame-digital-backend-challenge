const server = Bun.serve({
  fetch() {
    return new Response(body);
    return new Response("Bun!");
  },
  port: 3000,
});
