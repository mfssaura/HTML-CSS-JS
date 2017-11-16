  //function to check whether an input has proper set of digits
  function check_inbox(id, e) {
      var val=document.getElementById(id).value;
      var regex=/^[+-]?([0-9]*[.])?[0-9]+$/;
      if(regex.test(val)) {
        document.getElementById(e).innerHTML="";
        return true;
      }
      else {
        document.getElementById(e).innerHTML="Invalid number!Please don't enter any space or alphanumeric characters";
        return false;
      }
  }

  function isblank(id, e) {
      var x=document.getElementById(id).value;
      if(x=="") {
        document.getElementById(e).innerHTML="Enter a value";
        return false;
      }
      else {
        document.getElementById(e).innerHTML="";
        return true;
      }
  }
  //function to check whether radio buttons are clicked or not
  function check_radio() {
    var Radio_Button_Obj = document.form.operations;
    for(var i=0; i<Radio_Button_Obj.length; i++) {
        if(Radio_Button_Obj[i].checked ) {
            return true;
        }
    }
    return false;
  }

  //main driver function to calculate the result
  function calculate() {
    if(!check_inbox('tbox-id1','e-box1')) {
      return false;
    }
    if(!check_inbox('tbox-id2','e-box2')) {
      return false;
    }
    //check radio buttons
    if(!check_radio()) {
      document.getElementById("e-box3").innerHTML="Select an operation!";
      return false;
    }
    else { //calculate all values and display

      Calculator = {
         add: function(x,y) {
           return x + y;
         },

         sub: function(x, y) {
           return x - y;
         },

         mul: function(x, y) {
           return x * y;
         },

         div: function(x, y) {
           return ( (y==0 || (x==0 && y==0)) ? "NaN" : (x/y) );
         }
      };

      document.getElementById("e-box3").innerHTML="";
      var x=parseFloat((document.form.text_field1.value).trim());
      var y=parseFloat((document.form.text_field2.value).trim());
      var res=0;
      var op = document.querySelector('input[name = "operations"]:checked').value;
      document.getElementById("res_field").value = Calculator[op](x,y);
      return false;
    }
  }
