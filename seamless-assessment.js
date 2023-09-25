<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landscape Canvas</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E %3Crect x='0' y='0' width='50' height='50' fill='%23000' /%3E %3Crect x='50' y='0' width='50' height='50' fill='%23fff' /%3Crect x='0' y='50' width='50' height='50' fill='%23fff' /%3Crect x='50' y='50' width='50' height='50' fill='%23000' opacity='0.2' /%3E %3C/svg%3E");
            background-size: 100px 100px;
            color: #ff0000;
        }

        .image-container {
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
        }

        .image-container img {
            max-width: 25%;
            height: auto;
            display: none;
        }

        .image-selector {
            text-align: center;
            padding: 20px;
        }

        .image-selector input[type="file"] {
            display: none;
        }

        .image-selector label {
            background-color: #3498db;
            color: #fff;
            padding: 10px 20px;
            cursor: pointer;
        }

        .seamless-info {
            text-align: center;
            padding: 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.8);
        }
    </style>
</head>
<body>
    <div class="image-selector">
        <label for "image">Choose an image (PNG or JPG)</label>
        <input type="file" id="image" accept="image/png, image/jpeg" onchange="loadImages()">
    </div>

    <div class="image-container" id="image-container">
        <!-- Top 8 images -->
        <img src="placeholder.png" alt="Tile Image 1">
        <img src="placeholder.png" alt="Tile Image 2">
        <img src "placeholder.png" alt "Tile Image 3">
        <img src "placeholder.png" alt "Tile Image 4">
        <img src "placeholder.png" alt "Tile Image 5">
        <img src "placeholder.png" alt "Tile Image 6">
        <img src "placeholder.png" alt "Tile Image 7">
        <img src "placeholder.png" alt "Tile Image 8">

        <!-- Bottom 8 images -->
        <img src "placeholder.png" alt "Tile Image 9">
        <img src "placeholder.png" alt "Tile Image 10">
        <img src "placeholder.png" alt "Tile Image 11">
        <img src "placeholder.png" alt "Tile Image 12">
        <img src "placeholder.png" alt "Tile Image 13">
        <img src "placeholder.png" alt "Tile Image 14">
        <img src "placeholder.png" alt "Tile Image 15">
        <img src "placeholder.png" alt "Tile Image 16">
    </div>

    <div class="seamless-info" id="seamless-info">
        Assessment: Not Assessed
    </div>

    <script>
        function loadImages() {
            const imageInput = document.getElementById('image');
            const imageContainer = document.getElementById('image-container');
            const assessmentInfo = document.getElementById('seamless-info');
            const file = imageInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageUrl = e.target.result;
                    imageContainer.style.display = "flex";
                    const images = imageContainer.querySelectorAll('img');
                    images.forEach(img => {
                        img.src = imageUrl;
                        img.style.display = "block";
                    });

                    const assessment = assessSeamlessness(images);
                    assessmentInfo.textContent = `Assessment: ${assessment}`;
                };

                reader.readAsDataURL(file);
            }
        }

        function assessSeamlessness(images) {
            // Define a tolerance threshold for pixel comparison
            const tolerance = 30; // Adjust this value to fit your needs
            const totalImages = images.length;
            let seamlessCount = 0;
            let partiallySeamlessCount = 0;

            for (let i = 1; i < totalImages; i++) {
                const img1 = images[i - 1];
                const img2 = images[i];

                if (isSeamless(img1, img2, tolerance)) {
                    seamlessCount++;
                } else if (isPartiallySeamless(img1, img2, tolerance)) {
                    partiallySeamlessCount++;
                }
            }

            const seamlessPercentage = (seamlessCount / (totalImages - 1)) * 100;
            const partiallySeamlessPercentage = (partiallySeamlessCount / (totalImages - 1)) * 100;

            if (seamlessPercentage >= 80) {
                return "Seamless";
            } else if (partiallySeamlessPercentage >= 80) {
                return "Partially Seamless";
            } else {
                return "Not Seamless";
            }
        }

        function isSeamless(img1, img2, tolerance) {
            // Implement your seamless image detection logic here
            // You can use pixel analysis or other techniques
            return true; // Replace with your actual logic
        }

        function isPartiallySeamless(img1, img2, tolerance) {
            // Implement your partial seamless image detection logic here
            // You can use pixel analysis or other techniques
            return true; // Replace with your actual logic
        }
    </script>
</body>
</html>
