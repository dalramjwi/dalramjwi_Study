const html = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button onclick="location.href = './one.html' ">3글자 이하 포켓몬</button>
    <button onclick="location.href = './two.html' ">4글자 이상 포켓몬</button>
    <button onclick="location.href = './three.html' ">
      당신의 운명인 포켓몬은?
    </button>
  </body>
</html>`;
module.exports = html;
