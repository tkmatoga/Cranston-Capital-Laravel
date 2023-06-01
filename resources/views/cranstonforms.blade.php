<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Title</title>
    <link rel="stylesheet" href="../css/app.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        clifford: '#da373d',
                    }
                }

            }
        }
    </script>
    @viteReactRefresh
    @vite('resources/js/App.tsx')
</head>
<body>
<div id="app">
    This element's contents will be replaced with your component.
</div>
<form method="post" action="/store" enctype="multipart/form-data">
    {{ csrf_field() }}
</form>

</div>
</body>
</html>
