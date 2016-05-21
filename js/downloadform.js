function Submit() {

    $("#Name, #emailid, #Mobilno").css({ border: '1px solid #ccc', background: '#ffffff' });

    var count_bug = 0;

    if (!isEmail(document.getElementById('emailid').value)) {
        $("#emailid").css({ border: '1px solid red', background: '#ffdbdb' });
        document.getElementById('emailid').focus();
        if (eval(count_bug) == 0)
            count_bug += 1;
    }
    if (document.getElementById('emailid').value == "") {
        $("#emailid").css({ border: '1px solid red', background: '#ffdbdb' });
        document.getElementById('emailid').focus();
        if (eval(count_bug) == 0)
            count_bug += 1;
    }

    if (document.getElementById('Mobilno').value=="") {
        $("#Mobilno").css({ border: '1px solid red', background: '#ffdbdb' });
        document.getElementById('Mobilno').focus();
        if (eval(count_bug) == 0)
            count_bug += 1;
    }

    if (document.getElementById('Mobilno').value != "") {
        if (isNaN(document.getElementById('Mobilno').value)) {
            $("#Mobilno").css({ border: '1px solid red', background: '#ffdbdb' });
            document.getElementById('Mobilno').focus();
            if (eval(count_bug) == 0)
                count_bug += 1;
        }
    }

    if (document.getElementById('Name').value == "") {
        $("#Name").css({ border: '1px solid red', background: '#ffdbdb' });
        document.getElementById('Name').focus();
        if (eval(count_bug) == 0)
            count_bug += 1;
    }

    if (count_bug > 0)
        return false;
    else
        SubmitMagFrm();
  
}


function SubmitMagFrm() {
    name = document.getElementById('Name').value;
    email = document.getElementById('emailid').value;
    mobile = document.getElementById('Mobilno').value;
    project = document.getElementById('project').value;


    var strURL = "../../downloadqueryform-next49de.html?name=" + name + "&email=" + email + "&mobile=" + mobile + "&project=" + project;

    //alert(strURL);
    var req = getXMLHTTP();
    if (req) {
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                // only if "OK"
                if (req.status == 200) {
                    //document.getElementById('diviamintMagEnquiry').innerHTML = "<p>&nbsp;</p><p>&nbsp;</p><p align='center'><font size='2'>Now you can download brochure.</p>";
                    $("#diviamintMagEnquiry").hide();
                    document.getElementById('enquiry').target = "_blank";
					document.getElementById('black').style.cssText = 'background:url()';
					//alert(document.getElementById('pdfurl').value);
                    document.getElementById('enquiry').href = document.getElementById('pdfurl').value;
                    
                    

                } else {
                    //	alert("There was a problem while using selection");
                }
            }
        }
        document.getElementById('loder').innerHTML = "<img src='../../images/loader.gif'>"
        req.open("GET.html", strURL, true);
        req.send(null);
    }
}

function isEmail(emailIn) {
    var isEmailOk = false;
    //var filter = /^[a-zA-Z0-9][a-zA-Z0-9._-]*\@[a-zA-Z0-9-]+(\.[a-zA-Z][a-zA-Z-]+)+$/
    var filter = /^(([^<>()[\]\\.,;:\s@\�]+(\.[^<>()[\]\\.,;:\s@\�]+)*)|(\�.+\�))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailIn.search(filter) != -1)
        isEmailOk = true;
    if (emailIn.indexOf("..") != -1)
        isEmailOk = false;
    if (emailIn.indexOf(".@") != -1)
        isEmailOk = false;

    return isEmailOk;
}



function getXMLHTTP() { //fuction to return the xml http object
    var xmlhttp = false;
    try {

        xmlhttp = new XMLHttpRequest();
    }
    catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e1) {
                xmlhttp = false;
            }
        }
    }
    return xmlhttp;
}


