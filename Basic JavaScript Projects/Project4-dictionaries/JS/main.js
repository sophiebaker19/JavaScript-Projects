function furnitureDictionary() {//identifies the function
    var furniture = {//KVP dictionary
        Piece:"Chair",//key value pairs
        Type:"Arm Chair",
        Colour:"Grey",
        Materials:"Leather, Wood",
        Dimensions:"H:78cm W:89cm L:89cm",
        Price:"£300",
    }
    delete furniture.Dimensions;//deletes dimensiosn from the dictionary before it can be displayed below
    document.getElementById("Dictionary").innerHTML = furniture.Dimensions;// this will show the word 'undefined' as the key value pair has been deleted 
}