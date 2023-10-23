document.addEventListener("DOMContentLoaded", () => {
  // API APOS
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=eHa5LiqXWhL54gDCJg5BPfhlnTxXJkDBg8hgTFe7"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // console.log("tes");
      const apos = document.querySelector("#apos");
      apos.innerHTML = `
    <section class="bg-[#001524] px-5 py-10 rounded-xl">
        <div>
          <h1 class="font-bold text-2xl text-center lg:text-5xl mb-6">APOS</h1>
        </div>
        <div class="justify-center flex md:w-[80%] md:mx-auto lg:w-[60%]">
          <img
            src=${data.hdurl}
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="p-5 md:px-32 lg:px-52">
          <div class="ml-[15%] sm:flex sm:justify-around sm:ml-0">
            <h3 class="text-gray-300 text-sm">${data.date}</h3>
          </div>
          <h1
            class="text-center font-bold text-2xl sm:text-3xl lg:text-4xl lg:mt-4"
          >
            ${data.title}
          </h1>
          <p class="text-center text-sm sm:text-md lg:text-lg">
           ${data.explanation}
          </p>
        </div>
      </section>
    `;
    });

  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=eHa5LiqXWhL54gDCJg5BPfhlnTxXJkDBg8hgTFe7"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.photos);
      const roverPhotos = document.querySelector("#roverPhotos");
      let roverInnerHtml = ``;
      for (let i = 0; i < 15; i++) {
        if (i % 2 == 0) {
          roverInnerHtml += `
        <!-- GAMBAR 1 -->
        <div class="sm:w-[45%] lg:w-[30%] my-10">
          <div class="">
            <img
              src=${data.photos[i].img_src}
              alt=""
              class="w-full rounded-xl"
            />
          </div>
          <section class="flex justify-around">
            <div>
              <h1><strong> Full_Name  </strong></h1>
              <p><strong>Date </strong></p>
              <p><strong>Status </strong></p>
            </div>
            <div>
              <h1>${data.photos[i].camera.full_name}</h1>
              <h1>${data.photos[i].earth_date}</h1>
              <h1>${data.photos[i].rover.status}</h1>
            </div>
          </section>
        </div>
        `;
        }
      }
      for (let i = 0; i < 15; i++) {
        if (i % 2 == 1) {
          roverInnerHtml += `
        <!-- GAMBAR 1 -->
        <div class="sm:w-[45%] lg:w-[30%] my-10">
          <div class="">
            <img
              src=${data.photos[i].img_src}
              alt=""
              class="w-full rounded-xl"
            />
          </div>
          <section class="flex justify-around">
            <div>
              <h1><strong> Full_Name  </strong></h1>
              <p><strong>Date </strong></p>
              <p><strong>Status </strong></p>
            </div>
            <div>
              <h1>${data.photos[i].camera.full_name}</h1>
              <h1>${data.photos[i].earth_date}</h1>
              <h1>${data.photos[i].rover.status}</h1>
            </div>
          </section>
        </div>
        `;
        }
      }
      roverPhotos.innerHTML = roverInnerHtml;
    });

  fetch(
    "https://api.nasa.gov/techtransfer/patent/?engine&api_key=eHa5LiqXWhL54gDCJg5BPfhlnTxXJkDBg8hgTFe7"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      const techTransfers = document.querySelector("#techTransfers");
      let techtransfersInnerHtml = ``;

      for (let i = 0; i < 10; i++) {
        if(i == 2 || i == 8 ) {
          continue;
        }
        techtransfersInnerHtml += `
        <article class="my-10 sm:flex border-solid border-2 border-gray-300 p-5">
        <div class="rounded-lg overflow-hidden w-[80%] mx-auto sm:w-[40%] sm:flex sm:items-center">
          <img
            src=${data.results[i][10]}
            alt=""
            class="w-full h-full sm:h-[300px] sm:w-[300px] lg:w-[400px] lg:h-[400px] "
          />
        </div>
        <div
          class="w-[80%] mx-auto sm:w-[40%] lg:flex lg:justify-center lg:flex-col "
        >
          <h1 class="text-center font-bold my-2 text-xl lg:text-3xl">
            ${data.results[i][1]}
          </h1>
          <p class="text-center">
            ${data.results[i][3]}
          </p>
        </div>
      </article>
        `;
      }

      techTransfers.innerHTML = techtransfersInnerHtml;
    });
});
