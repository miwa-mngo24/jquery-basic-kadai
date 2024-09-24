// HTMLドキュメントが読み込み完了した場合
$(window).on('load', () => {
    console.log('loadイベントが発生しました');
});

$(function() {
// 画面をスクロールした場合
    $(window).on('scroll', function() {
        console.log('scrollイベントが発生しました');
    });
});
