export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log("IP visitante:", ip);

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(\`
    <html>
      <head>
        <title>Actualizando datos...</title>
        <style>
          body { font-family: Arial; background: #111; color: #eee; text-align: center; padding: 50px; }
        </style>
      </head>
      <body>
        <h1>Procesando...</h1>
        <p>Por favor espere un momento.</p>
      </body>
    </html>
  \`);
}
