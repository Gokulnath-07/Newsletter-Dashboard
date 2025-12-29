#SCRIPT JS


const apiKey = "38a9c876-3ac7-4d52-95ba-8e1e1332dfca";   (don't use this api key"PASTE_YOUR_REAL_KEY_HERE)


$("#searchBtn").click(function () {
  const topic = $("#topic").val().trim();

  if (topic === "") {
    swal("Error", "Please enter a topic", "error");
    return;
  }

  const url =
    `https://content.guardianapis.com/search?q=${topic}` +
    `&show-fields=trailText,thumbnail&api-key=${apiKey}`;

  $("#newsContainer").html("");

  $.getJSON(url)
    .done(function (data) {
      const articles = data.response.results;

      if (articles.length === 0) {
        swal("No News", "No articles found", "info");
        return;
      }

      articles.forEach(item => {
        const card = `
          <div class="col-md-4">
            <div class="card shadow-sm">
              <img src="${item.fields?.thumbnail || 'https://via.placeholder.com/300'}"
                   class="card-img-top">
              <div class="card-body">
                <h6 class="card-title">${item.webTitle}</h6>
                <p class="card-text">
                  ${item.fields?.trailText || "No description available"}
                </p>
                <a href="${item.webUrl}" target="_blank"
                   class="btn btn-sm btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>`;
        $("#newsContainer").append(card);
      });
    })
    .fail(function () {
      swal("Error", "Unable to load news", "error");
    });
});

$("#searchBtn").click(function () {
  const topic = $("#topic").val().trim();

  if (topic === "") {
    swal("Error", "Please enter a topic", "error");
    return;
  }

  const url =
    `https://content.guardianapis.com/search?q=${topic}` +
    `&show-fields=trailText,thumbnail&api-key=${apiKey}`;

  $("#newsContainer").html("");

  $.getJSON(url)
    .done(function (data) {
      const articles = data.response.results;

      if (articles.length === 0) {
        swal("No News", "No articles found", "info");
        return;
      }

      articles.forEach(item => {
        const card = `
          <div class="col-md-4">
            <div class="card shadow-sm">
              <img src="${item.fields?.thumbnail || 'https://via.placeholder.com/300'}"
                   class="card-img-top">
              <div class="card-body">
                <h6 class="card-title">${item.webTitle}</h6>
                <p class="card-text">
                  ${item.fields?.trailText || "No description available"}
                </p>
                <a href="${item.webUrl}" target="_blank"
                   class="btn btn-sm btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>`;
        $("#newsContainer").append(card);
      });
    })
    .fail(function () {
      swal("Error", "Unable to load news", "error");
    });
});
