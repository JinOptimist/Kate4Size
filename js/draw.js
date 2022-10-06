function draw(array){
    $(document).ready(function(){
        $('.content').empty();

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            

            var image = $('<img>');
            image.addClass('wife');
            image.attr('src', element.url);
            $('.content').append(image);
        }
    })
}