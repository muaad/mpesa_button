var button = document.getElementById("mpesaButton");

if (button !== null) {
    document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href="https://rawgit.com/muaad/mpesa_button/master/styles/style.css">');
    styles = 'background: #6AAE2D; color: white; text-align: center; font-weight: bold; padding: 15px; border-radius: 10px; font-size: 20px; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);'
    img = '<img style="width: 35px; display: inline; margin: -8px;" src= "https://rawgit.com/muaad/mpesa_button/master/images/mpesa.png">'
    btnMarkup = '<a href="" id="mpesaBtn" style="' + styles + '">' + img + '<span style="margin-left: 15px;">Pay with Mpesa</span></a>'
    formStyles = 'text-align: left; width: 300px; padding: 10px; margin: 20px 0; box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important; border-radius: 9px;'
    inputStyles = "font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif; margin: 0em; outline: none; line-height: 1.21428571em; padding: 0.67857143em 1em;font-size: 1em;background: #FFFFFF;border: 1px solid rgba(34, 36, 38, 0.15);color: rgba(0, 0, 0, 0.87);border-radius: 0.28571429rem;box-shadow: 0em 0em 0em 0em transparent inset;-webkit-transition: color 0.1s ease, border-color 0.1s ease;transition: color 0.1s ease, border-color 0.1s ease; width: 100%;"
    labelStyles = 'display: block;margin: 0em 0em 0.28571429rem 0em;color: rgba(0, 0, 0, 0.87);font-size: 0.92857143em;font-weight: bold;text-transform: none;'
    phoneInstruction = '<strong><em>We will send an Mpesa payment request to this phone number</em></stron>'
    form = '<form><label for="phone" style="' + labelStyles + '">Phone Number</label><input style="' + inputStyles + '" type="text" placeholder="254722123456" name="phone" id="mpesaPhoneNumber"></input><br>' + phoneInstruction + '<br><br><button href="" id="mpesaSend" style="' + styles + ' width: 100%;">' + img + '<span style="margin-left: 15px;">Pay</span></button></form>'
    formMarkup = '<div id="mpesaForm" style="' + formStyles + '"><h3 style="color: #6aae2d; padding-bottom: 7px; border-bottom: 1px solid rgba(34,36,38,.1);">Pay With Mpesa</h3>' + form + '</div>'
    button.innerHTML = btnMarkup

    success = '<div id="successDiv" class="animate-bottom">\
      <h2>√ Success</h2>\
      <p>An Mpesa payment request will be sent to your phone shortly</p>\
    </div>'

    button.addEventListener('click', function (e) {
        e.preventDefault();
        formDiv = document.createElement('div')
        button.parentNode.insertBefore(formDiv, button.nextSibling);
        formDiv.innerHTML = formMarkup
        button.style.display = 'none';

        payButton = document.getElementById("mpesaSend")
        loaderDiv = document.createElement('div')
        loaderDiv.setAttribute("id", "loader");
        payButton.parentNode.insertBefore(loaderDiv, payButton.nextSibling);
        loader = document.getElementById("loader")
        loader.style.display = "none";
        loader.style.margin = '-75px 0 0 -110px';

        payButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            payButton.disabled = true;
            document.getElementById('mpesaPhoneNumber').disabled = true;
            formDiv = document.getElementById('mpesaForm')
            setTimeout(function () {
                formDiv.innerHTML = success
            }, 3000);
            loader.style.display = "";
        })
    })
}