# Mpesa Button Generator

This is a script that lets you add a "Pay With Mpesa" button to your site.

![Image of Yaktocat](https://raw.githubusercontent.com/muaad/mpesa_button/master/images/mpesa-btn.gif)

## Usage

* Insert the following snippet of code directly after the opening `<body>` tag on each page you want to load it:
```
<script>  
  (function(d, s, id){
     var js, mpesa = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://cdn.jsdelivr.net/gh/muaad/mpesa_button@master/src/button.min.js";
     mpesa.parentNode.insertBefore(js, mpesa);
   }(document, 'script', 'mpesa_btn_js'));
</script>

```

* Add a `<div>` with an ID of `mpesaButton` where you want the button installed:

```
<div id='mpesaButton'></div>
```
You can specify a number of options for the button like prepopulating the `amount` and `phone` fields by providing data attributes for the button. For example:

```
<div id='mpesaButton' data-phone='254722XXXXXX' data-amount=3000 data-url='https://domain.com/mpesa/payments/request'></div>
```

The `URL` data attribute is the URL used to post the form values to. This is where you will send the payment request using the Mpesa API.

### And, that is it!
