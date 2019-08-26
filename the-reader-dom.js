var radioBtnElem = document.querySelector(".radioBtn");
var submitBtnElem = document.querySelector(".submitBtn");
var displayAreaElem = document.querySelector(".displayArea");

var template1 = document.querySelector(".bookTemplate").innerHTML;


var bookTemplate = Handlebars.compile(template1);

var bookDataElem = document.querySelector(".bookTitles");

var instance = TheReader();

// $(function() {
//     $.ajax({
//         url: "https://www.googleapis.com/books/v1/volumes?q=quilting",
//         success: function( result ) {
//             console.log(result.items[0].volumeInfo.title); // this will print the book title
//             // create a template to display
//         },
        
//       });
// })

function theSelectedLanguge(){

    
    instance.selectLanguage(radioBtnElem.value);

    var radioBtnChecked = document.querySelector("input[name='language']:checked");

    if (radioBtnChecked) {
        var type = radioBtnChecked.value;
        var display = instance.getBooks(type);
        displayAreaElem.innerHTML = display;
     }
    
    var bookData = bookTemplate({ mybooks: instance.getBooks(radioBtnChecked.value)});
    
    console.log(bookData);
    
    bookDataElem.innerHTML = bookData;
}

submitBtnElem.addEventListener('click', theSelectedLanguge)