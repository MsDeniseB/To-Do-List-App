
/* function newItem(){
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    } 
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");

            li.on("click", function() {
                li.addClass("strike");
              });
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);

      input.remove(); // Delete the element
      $('body').append(input); // Like .appendChild
      $('body').empty(); // Remove all children of the element
    
    //   crossOutButton.on("click", deleteListItem);
  
$('input').on('click', function (event) {
    // Do something
  });
  $('input').off('click'); // Remove all 'click' listeners
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
 
    */
function init() {

    let li = $('<li></li>');

   //2. Crossing an item out:
    li.click(()=>{
        li.toggleClass("strike");
    })
    
    li.on("dblclick", function crossOut() {
        li.removeClass("strike");
    });
     
   //  Adding a new item to the list:
    $("#button").click(()=>{
        const inputValue = $("#ListItem").val()
        if (inputValue === '') {
            alert("You must write something!");
          }
      else {
            console.log("Hello");
            $("#list").append(
                li.append(inputValue)
            )

             //3. Adding a delete button
 
            let crossOutButton = $('<crossOutButton></crossOutButton>');
            crossOutButton.append(document.createTextNode('X'));
            li.append(crossOutButton);

            crossOutButton.click(()=>{
               li.remove()
            })
      }
  
        })

         

   
    
      
        
}

$(init)