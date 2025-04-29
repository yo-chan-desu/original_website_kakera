$(function () {
  // トップへ戻るボタンクリック
  $("#toTop").click(function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // ページ内リンク（#）クリック
  $('a[href^="#"]').click(function (e) {
      e.preventDefault();
      var speed = 500;
      var href = $(this).attr("href");
      var $target = $(href == "#" || href == "" ? "html" : href);
      var position = $target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
  });

  // footerに現在の年を追加
  const year = new Date().getFullYear();
  $("#copyright").text("© kakera crochet " + year);
  // crochet と年の間に半角スペース入れとる！
});
