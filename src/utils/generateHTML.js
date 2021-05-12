const generateHTML = (teamName, team) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/9287fb9c3e.js"
        crossorigin="anonymous"
      ></script>
      <title>Team</title>
    </head>
    <body>
      <div>
        <header class="p-4 text-center bg-secondary bg-gradient mb-4">
          <h1>Team Name</h1>
        </header>
        <div class="container d-flex justify-content-center">
        </div>
        <div class="container d-flex justify-content-center flex-wrap">
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = generateHTML;
