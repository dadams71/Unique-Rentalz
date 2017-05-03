
      <?php 

if (!isset($_POST['submit'])) { 
// form not submitted 
?> 
	
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
<div class="col m6 s12">
            <div class="row">
                <div class="input-field col s6">
                    <input id="first_name" name="first" type="text" class="validate" >
                    <label for="first_name">First Name</label>
                </div>
                                <div class="input-field col s6">
                    <input id="last_name" name="last" type="text" class="validate" >
                    <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
                        <div class="input-field col s6">
          <input id="phone" type="text" name="tel" class="validate">
          <label for="phone">Phone</label>
        </div>
                    <div class="input-field col s6">
                    <input id="email" name="emailaddr" type="text" class="validate" >
                    <label for="email">email</label>
                </div>
            </div>
            <div class="row">
                        <div class="input-field col s12">
          <textarea id="textarea1" name="message" class="materialize-textarea"></textarea>
          <label for="textarea1">Message</label>
        </div>
            </div>
        </div>
            <div class="col m6 s12 check-form">
        <div class="row">
            <p class="font-white">How did you hear about us (Tick all that apply)</p>
    <p>
      <input type="checkbox" class="filled-in" name="check_list[]" value="magazine" id="magazine" />
      <label for="magazine">Magazine</label>
    </p>
    <p>
      <input type="checkbox" class="filled-in" name="check_list[]" value="wom" id="wom" />
      <label for="wom">Refferal/Word of mouth</label>
    </p>
    <p>
      <input type="checkbox" class="filled-in" name="check_list[]" value="search" id="search" />
      <label for="search">Search Engine</label>
    </p>
    <p>
      <input type="checkbox" class="filled-in" name="check_list[]" value="exhibition" id="exhibition" />
      <label for="exhibition">Exhibition</label>
    </p>
    <p>
      <input type="checkbox" class="filled-in" name="check_list[]" value="facebook" id="facebook" />
      <label for="facebook">Facebook</label>
    </p>
    <p>
      <input type="checkbox" class="filled-in" name="check_list[]" value="instagram" id="instagram" />
      <label for="instagram">Instagram</label>
    </p>
    
            <input type="checkbox" style="display: none;" name="check_list[]" value="None Selected" id="instagram" checked />
        
        </div>
    </div>

    <div class="col s12">
    <input class="waves-effect waves-light btn my_custom_button yellow darken-1" type="submit" name="submit" value="Submit" />
<!--        <p>*Required</p>-->
    </div>
       
</form>

<?php 
} else { 

    $email_to = "info@uniquerentalz.co.uk";
    $email_subject = "Form Enquiry";
 
    
    $emailaddr = $_POST['emailaddr'];    
	$first = $_POST['first'];  
    $last = $_POST['last'];  
    $phone = $_POST['tel'];
    $message = $_POST['message'];
    $theword = implode(", ", $_POST['check_list']);

    echo "
    <!doctype html>
<html>

<head>
    <title>Unique Rentalz</title>

    <link rel=\"stylesheet\" media=\"all\" href=\"css/style.css\" />
    <link rel=\"stylesheet\" media=\"all\" href=\"bower_components/Materialize/dist/css/materialize.css\" />
        <script src=\"bower_components/jquery/dist/jquery.min.js\"></script>
        <script src=\"bower_components/Materialize/dist/js/materialize.min.js\"></script>
        <script>
function goBack() {
    window.history.back();
}
</script>
</head>
<body>
<div class=\"row page-content container flex-bottom ng-scope\">
    <div class=\"col s12 \">
        <div class=\"welcome-panel\">
            <div ng-bind-html=\"content\" class=\"content ng-binding\"><p>
            <h1>Thank you</h1> For your enquiry on what Unique Rentalz can offer you.</p><p>
            
        We will be back in touch with you <B>" .$first." ". $last."</B> within 24 Hours.
            </p>
            <ul style=\"margin-bottom: 10px;\" >
            <li>your Message:</li>
            <li>".$message ."</li>
            </ul>
    <a href=\"#\" class=\"waves-effect waves-light btn my_custom_button yellow darken-1\" onclick=\"goBack()\" >Back</a>
            </div>
        </div>
    </div>
</div>



</body>
</html>
"; 
    
           function clean_string($string) {
       $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
	
    //send an email 
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                    $header = "From: ".$emailaddr."\r\n";
                    $email_message  = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
                    $email_message .= " You have an Enquire \n";
                    $email_message .= "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n";
                    $email_message .= "Name: ".clean_string($first)." ".clean_string($last)."\n\n";                   
					$email_message .= "Email: ".clean_string($emailaddr)."\n\n";
                    $email_message .= "Contact number: ".clean_string($tel)." \n\n";
					$email_message .= "Message: ".clean_string($message)." \n\n";
    
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
                    $email_message .= " How did you hear about us? \n";
                    $email_message .= "".clean_string($theword)."\n"; "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n";

    
                    mail( $email_to, $email_subject, $email_message, $header);
     
} 
?> 

