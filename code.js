function doGet(e) {
    var x = HtmlService.createTemplateFromFile("login.html");
    var y = x.evaluate();
    var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return z;
  }
  
  function checkLogin(username, password) {
    var url = 'https://docs.google.com/spreadsheets/d/1gQdzi_8G7nAed0DcgXTa_OlLWtf6WDNbkU8IPVKbB2s/edit#gid=0';
    
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("DATA");
    var getLastRow =  webAppSheet.getLastRow();
    var found_record = '';
    for(var i = 1; i <= getLastRow; i++)
    {
     if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
       webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
     {
       found_record = 'TRUE';
     }    
    }
    if(found_record == '')
    {
      found_record = 'FALSE'; 
    }
    
    return found_record;
    
  }

  function AddRow()
  {
    var usernamee = document.getElementById("usernamee").value;
    var passwordd = document.getElementById("passwordd").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (usernamee==""|| passwordd==""|| email==""|| phone=="") {
      return false;
    }
    else {
    google.script.run.AddRecord(usernamee,passwordd,email,phone);
    document.getElementById("page2_id1").className = "page2_id1-off";
    document.getElementById("page3_id1").className = "page3_id1";
   }
  }

   function LoginUser()
  {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  google.script.run.withSuccessHandler(function(output) 
  {
    if(output == 'TRUE')
    {
       var url1 ='https://www.youtube.com/watch?v=jsBbilzCgD0';
       var winRef = window.open(url1);
       winRef ? google.script.host.close() : window.onload=function(){document.getElementById('url').href = url1;}    
    }
    else if(output == 'FALSE')
    {
      document.getElementById("errorMessage").innerHTML = "Invalid data";     
    }    
  }).checkLogin(username, password);
  }
  
function function1(){
  document.getElementById("page1_id1").className = "page1_class1-off";
  document.getElementById("page2_id1").className = "page2_id1";
}

function function3(){ 
document.getElementById("page3_id1").className = "page3_id1-off";
document.getElementById("page1_id1").className = "page1_id1"; 
}

  
  function AddRecord(usernamee, passwordd, email, phone) {
    var url = 'https://docs.google.com/spreadsheets/d/1gQdzi_8G7nAed0DcgXTa_OlLWtf6WDNbkU8IPVKbB2s/edit#gid=0';
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("DATA");
    webAppSheet.appendRow([usernamee,passwordd,email,phone]);
    
  }
  