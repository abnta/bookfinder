function findBook(){
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = '';

    $
    .ajax({
        type:'GET',
        url : 'https://www.googleapis.com/books/v1/volumes?q=' + userSearch,
        dataType : 'JSON'
    })
    .then(function(book){
        console.log(book);
        for(var i = 0; book.items.length; i++){
            //creating media div
            var wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'media';

            //creating image for layout
            var image = document.createElement('img');
            image.className = 'mr-3';
            image.src = book.items[i].volumeInfo.imageLinks.thumbnail;

            // create div element with class of media-body
            var div = document.createElement('div');
            div.className = 'media-body';

            // create header for body
            var header = document.createElement('h5');
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;

            //creating h5 for authors
            var author = document.createElement('h6');
            author.innerHTML = '<b>Authors:</b>'+' '+ book.items[i].volumeInfo.authors.join(',');

            //paragraph for displaying countries
            var country = document.createElement('p');
            country.innerHTML = '<b>Country:</b>'+ ' ' + book.items[i].accessInfo.country;

            //create element for description
            var desc = document.createElement('p');
            desc.innerHTML = book.items[i].volumeInfo.description;

            //create element for page count
            var pageCount = document.createElement('p');
            pageCount.innerHTML ='<b>Pages:</b>'+' '+ book.items[i].volumeInfo.pageCount;

            //create element for published Date
            var publishedYear = document.createElement('p');
            publishedYear.innerHTML ='<b>Published Date:</b>'+' '+ book.items[i].volumeInfo.publishedDate;

            //create a tag for preview link of the book
            var link = document.createElement('a');
            link.href=book.items[i].volumeInfo.previewLink;
            link.innerHTML = 'View more...'


            // append header to the body
            div.appendChild(header);
            div.appendChild(country);
            div.appendChild(author);
            div.appendChild(publishedYear);
            div.appendChild(pageCount);
            div.appendChild(desc);
            div.appendChild(link);
            //appending image and modal body to wrapperdiv
            wrapperDiv.appendChild(image);
            wrapperDiv.appendChild(div);

            // create hr to separate every books info
            var line = document.createElement('hr');

            

            bookResult.appendChild(wrapperDiv);
            bookResult.appendChild(line);
            
        }
    })
    .catch(function(err){
        console.log(err);
        alert(err.responseJSON.error.message);
    })
}