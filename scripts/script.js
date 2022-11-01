// const galleryContainer = document.querySelector("#gallery-container");
// const galleryBtn = document.querySelector("#gallery-btn");
// galleryBtn.addEventListener("click", showJC);

// async function showJC() {
//   try {
//     const rawResult = await fetch(
//       `https://api.giphy.com/v1/gifs/search?api_key=XfwwEMsaViFwH0qdDVRDdF802AmTT7HK&q=jcvd&limit=1&offset=0&rating=g&lang=en`
//     );
//     const data = await rawResult.json();
//     const img = new Image();
//     img.src = data;
//     console.log(data);
//     galleryContainer.append(img);
//   } catch (error) {
//     console.error(error);
//   }
// }

// showJC();
