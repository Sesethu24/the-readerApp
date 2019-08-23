function TheReader(books){

    bookName = books || [];
    var books = {isiXhosa:["Isivuno esihle","Kusile","Nam ndiyakwazi ukubala"], English:["The big bear",
    "The big pancake","Summer Holiday"], Afrikaans:["Rooikappie","Begin met","Slimkoppe toets"]};
   
    function selectLanguage(lang){

    if(!lang){
            return "Please select language!"
        }
      
    if(lang === "IsiXhosa"){
        return "funda" + bookName;
    }
    else if(lang ==="English"){
        return "read" + bookName;
    }
    else if(lang === "Afrikaans"){
        return "lees" + bookName;
    }
      
    }
    function getBooks(language){
      return books[language];
    }
     function getLanguage(){
       return bookName;
     }
 return{
     selectLanguage,
     getLanguage,
     getBooks
 }
}