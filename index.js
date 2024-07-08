<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Image with Black Tint</title>
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <div class="imgDummy"></div>
  <button>show</button>
  <script>
    const img = document.querySelector('div');
    const button = document.querySelector('button');

    img.style.visibility = 'visible';
    function toggle() {
      img.style.visibility = img.style.visibility === 'visible' ? 'hidden' : 'visible';
    }

    button.addEventListener('click', toggle);
  </script>
</body>

</html>
