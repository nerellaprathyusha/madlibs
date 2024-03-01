$(document).ready(function () {
  function tellStory() {
    // Read form inputs
    var noun1 = $("#noun1").val();
    var noun2 = $("#noun2").val();
    var adjective = $("#adjective").val();
    var adverb = $("#adverb").val();

    var story =
      "Once upon a time, <span class='user-word'>" +
      noun1 +
      "</span> found a magical <span class='user-word'>" +
      noun2 +
      "</span>. ";
    story +=
      "This <span class='user-word'>" +
      noun2 +
      "</span> was so <span class='user-word'>" +
      adjective +
      "</span> that it could <span class='user-word'>" +
      adverb +
      "</span> change its appearance. ";
    story +=
      "Excitedly, <span class='user-word'>" +
      noun1 +
      "</span> decided to take the <span class='user-word'>" +
      noun2 +
      "</span> on a journey. ";
    story +=
      "During their adventure, they encountered many challenges, but thanks to the <span class='user-word'>" +
      adjective +
      "</span> <span class='user-word'>" +
      noun2 +
      "</span>, ";
    story += "they always managed to overcome them. The end.";

    $("#madLibsStory").html(
      "<h2>Prathyusha's Crazy Mad Libs Story</h2>" + story
    );
  }

  // Attach the event handler to the button click
  $("#tellStoryBtn").on("click", tellStory);
});
