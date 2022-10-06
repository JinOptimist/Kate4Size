function draw(array){
    $(document).ready(function(){
        $('.content').empty();

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            var imageBlock = $('<div>');
            imageBlock.addClass('wife');

            var dataBlock = $('<div>');
            dataBlock.addClass('data');
            dataBlock.text(`Porn: ${element.porn} Nice: ${element.nice}`);
            imageBlock.append(dataBlock);

            var image = $('<img>');
            image.attr('src', element.url);
            imageBlock.append(image);

            $('.content').append(imageBlock);
        }
    })
}