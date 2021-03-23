document.getElementById("sub_").onclick = function() {
    // alert("hello");
    
    var A1 = document.getElementById("category_").value;
    var A2 = document.getElementById("Item_name_").value;
    var A3 = document.getElementById("Item_type_").value;
    var A4 = document.getElementById('_item_count_').value;
    var A5 = document.getElementById("price_").value;



  
    firebase.database().ref('Bakery/' + A1 + "/" + A2).set({
        Category : A1,
        Item_name : A2,
        Item_type : A3,
        Count: A4,
        Price : A5
        

    });
    alert("Record added successfully");    
}