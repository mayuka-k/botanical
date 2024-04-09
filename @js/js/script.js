$(function () {
    $('.dev-markup').prepend('<span>COPY</span>');
    $('.dev-markup span').on('click', function () {
        // コピーする文章の取得
        let text = $(this).next(".language-markup").text();
        // console.log(text);
        // テキストエリアの作成
        let $textarea = $('<textarea></textarea>');
        // テキストエリアに文章を挿入
        $textarea.text(text);
        //　テキストエリアを挿入
        $(this).next().append($textarea);
        //　テキストエリアを選択
        $textarea.select();
        // コピー
        document.execCommand('copy');
        // テキストエリアの削除
        $textarea.remove();

        $('.dev-markup span').html('COPYしました');

        setTimeout(function () {
            $('.dev-markup span').html('COPY');
        }, 500);

    });


});