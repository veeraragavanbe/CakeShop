function fetch_items()
 {
   
    firebase.database().ref().child('Bakery/Kaaram/').on('value', function(snapshot) {
        snapshot.forEach(
        function(ChilSnapshot) {
            // document.getElementById('myimg').src = ChilSnapshot.val().src=ChilSnapshot.val().Link;
            // let Link1 = ChilSnapshot.val().src = ChilSnapshot.val().Img_url1;
        
            let Item_Catagory = ChilSnapshot.val().Category;
            let Item_Name     = ChilSnapshot.val().Item_name;
            let Item_Prime    = ChilSnapshot.val().Price;

            showitems(Item_Catagory,Item_Name,Item_Prime);
            
        })
        })
        firebase.database().ref().child('Bakery/Sweet/').on('value', function(snapshot) {
            snapshot.forEach(
            function(ChilSnapshot) {
                // document.getElementById('myimg').src = ChilSnapshot.val().src=ChilSnapshot.val().Link;
                // let Link1 = ChilSnapshot.val().src = ChilSnapshot.val().Img_url1;
            
                let Item_Catagory = ChilSnapshot.val().Category;
                let Item_Name     = ChilSnapshot.val().Item_name;
                let Item_Prime    = ChilSnapshot.val().Price;
    
                showitems(Item_Catagory,Item_Name,Item_Prime);
                
            })
            })

}


function showitems(Item_Catagory,Item_Name,Item_Prime)
{
        var div1 = document.getElementById("show_div");

        var left_ = document.createElement('div');
        left_.className = "col-sm-2";

        var div2_ = document.createElement('div');
        div2_.className = "col-sm-8";
        div2_.id= "center_div";


        var right_ = document.createElement('div');
        right_.className = "col-sm-2";

        var p1 = document.createElement('h1');
        var p2 = document.createElement('h2');
        var p3 = document.createElement('h3');

        p1.innerHTML = Item_Catagory;
        p2.innerHTML = Item_Name;
        p3.innerHTML = Item_Prime;

        div2_.appendChild(p1);
        div2_.appendChild(p2);
        div2_.appendChild(p3);

        div1.appendChild(left_);
        div1.appendChild(div2_);
        div1.appendChild(right_);


}

