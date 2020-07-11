var button = document.getElementById("mpesaButton");

if (button !== null) {
    document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href="https://cdn.jsdelivr.net/gh/muaad/mpesa_button@master/styles/style.css">');
    img = '<img style="width: 35px; display: inline; margin: -8px;" src= "https://cdn.jsdelivr.net/gh/muaad/mpesa_button@master/images/mpesa.png">'
    btnMarkup = '<a href="" id="mpesaBtn" class="mpesaButton">' + img + '<span style="margin-left: 15px;">Pay with Mpesa</span></a>'
    phoneInstruction = '<strong><em>We will send an Mpesa payment request to this phone number</em></stron>'
    form = '<form>\
        <label for="amount" class="mpesaLabel">Amount</label><input class="mpesaInput" type="text" placeholder="2000" name="phone" id="mpesaAmount"></input><br>\
        <label for="phone" class="mpesaLabel">Phone Number</label><input class="mpesaInput" type="text" placeholder="254722123456" name="phone" id="mpesaPhoneNumber"></input><br>' + phoneInstruction + '<br><br><button href="" id="mpesaSend" class="mpesaButton" style="width: 100%;">' + img + '<span style="margin-left: 15px;">Pay</span></button></form>'
    formMarkup = '<div id="mpesaForm"><h3 class="mpesaHeader">Pay With Mpesa</h3>' + form + '</div>'
    button.innerHTML = btnMarkup

    success = '<div style="text-align: center;" class="animate-bottom">\
      <h2>√ Success</h2>\
      <p>An Mpesa payment request will be sent to your phone shortly</p>\
    </div>'

    button.addEventListener('click', function (e) {
        e.preventDefault();
        formDiv = document.createElement('div')
        button.parentNode.insertBefore(formDiv, button.nextSibling);
        formDiv.innerHTML = formMarkup
        amountInput = document.getElementById("mpesaAmount")
        phoneInput = document.getElementById("mpesaPhoneNumber")
        phone = button.getAttribute('data-phone')
        amount = button.getAttribute('data-amount')
        url = button.getAttribute('data-url')
        amountInput.value = amount
        phoneInput.value = phone
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
            if (url !== undefined) {
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", url, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send('phone=' + phoneInput.value + '&amount=' + amountInput.value);
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        formDiv.innerHTML = success
                    }
                    else {
                        formDiv.innerHTML = 'Something went wrong. Contact website developer. Error: "We could not POST to the URL specified!"'
                    }
                };
            } else {
                setTimeout(function () {
                    formDiv.innerHTML = 'Something went wrong. Contact website developer. Error: "No URL specified!"'
                }, 3000); 
            }
            loader.style.display = "";
        })
    })
}
