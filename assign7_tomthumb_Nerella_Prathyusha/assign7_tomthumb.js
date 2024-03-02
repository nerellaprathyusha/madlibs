$(document).ready(function () {
  function getBitDepth(numColors) {
    return Math.log2(numColors);
  }

  function indexedFileSize(width, height, numColors) {
    var bitDepth = getBitDepth(numColors);
    return (width * height * bitDepth) / 8;
  }
  $("#calculateBtn").click(function () {
    // Store entered values in variables
    var width = parseInt($("#width").val());
    var height = parseInt($("#height").val());
    var numColors = parseInt($("#colors").val());

    if (width <= 0 || height <= 0 || numColors <= 0) {
      $("#resultMessage").text("All fields must have a value greater than 0.");
      $("#resultMessage").removeClass("success").addClass("fail");
      return; // Exit the function early
    }

    // Use indexedFileSize function to compute file size
    var fileSize = indexedFileSize(width, height, numColors);

    // Check file size and display result message
    if (fileSize < 50000 && fileSize > 0) {
      $("#resultMessage").text(
        "Success! File size is " +
          (fileSize / 1000).toFixed(1) +
          " KB. Your file can be uploaded"
      );
      $("#resultMessage").removeClass("fail").addClass("success");
    } else {
      $("#resultMessage").text(
        "Fail! File size is " +
          (fileSize / 1000).toFixed(1) +
          " KB and exceeds the limitations"
      );
      $("#resultMessage").removeClass("success").addClass("fail");
    }
  });
});
