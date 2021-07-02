
function incrementCount(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}
function decrementCount(){
  var value = parseInt(document.getElementById('number').value, 0);
  value = isNaN(value) ? 10 : value;
  value--;
  document.getElementById('number').value = value;
}
function resetCount(){
  var value = parseInt(document.getElementById('number').value, 0);
  value = isNaN(value) ? 0 : value;
  value = 0;
  document.getElementById('number').value = value;}
  var color = ["red", "green"]
  if ("value" > 3){
    value.style.color = "red";  }
    else if ("value" < 1){
      value.style.color = "green";
    }
  

    //var counter_list = [10,10000,10000];
    //var str_counter_0 = counter_list[0];
    //var str_counter_1 = counter_list[1];
    //var str_counter_2 = counter_list[2];
    //var display_str = "";
    ///var display_div = document.getElementById("display_div_id");

    //function incrementCount(current_count) {setInterval(function () {
        //clear count
      //  while(display_div.hasChildnodes())
       // display_div.removeChild(display_div.lastChild);
    //}
    //str_counter_0 ++;
    //if (str_counter_0 > 99) {
      // str_counter_0 = 10;
       //str_counter_1++;
    //}
    //if(str_counter_1 > 99999){
      //  str_counter_2++;
    //}
    //display_str = str_counter_2.toString() + str_counter_1.toString() + str.str_counter_0.toString();
    //for (var i = 0; i<display_str.length; i++{
        //var new_span = document.createElement('span');
      //  new_span.ClassName = 'num_tiles';
    //    new_span.innerText = display_str[1];
  //      display_div.appendChild(new_span);
//    } , 1000);
