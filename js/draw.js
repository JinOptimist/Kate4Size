function draw(array){
    $(document).ready(function(){
        $('.content').empty();

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            var imageBlock = $('<div>');
            imageBlock.addClass('wife');

            var nameBlock = $('<div>');
            nameBlock.addClass('data');
            nameBlock.text(`${element.name}`);
            imageBlock.append(nameBlock);

            var image = $('<img>');
            image.attr('src', element.url);
            imageBlock.append(image);

            var dataBlock = $('<div>');
            dataBlock.addClass('data');
            dataBlock.text(`Porn: ${element.porn} Nice: ${element.nice}`);
            imageBlock.append(dataBlock);

            $('.content').append(imageBlock);
        }
    })
}