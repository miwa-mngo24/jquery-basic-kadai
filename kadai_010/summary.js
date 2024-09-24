$(function () {
    // 「文字色変化」ボタンを押した際に、
    $('#change-color').on('click', function () {
      // 文字色が任意の色に更新されている
      $('#target').css('color', 'red');

      // 「文字内容変化」ボタンを押した際に、
    $('#change-text').on('click', function () {
        // 任意の文字内容に更新されている
        $('#target').text('Hello');
        $('#target').css('color', 'red');
      });

       // id属性がfade-Outの要素がクリックされたら
   $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });

   // id属性がfade-Inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });
    });
});