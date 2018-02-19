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
     js.src = "https://cdn.rawgit.com/muaad/mpesa_button/master/src/button.js";
     mpesa.parentNode.insertBefore(js, mpesa);
   }(document, 'script', 'mpesa_btn_js'));

</script>

```

* Add a `<div>` with an ID of `mpesaButton` where you want the button installed:

```
<div id='mpesaButton'></div>
```

### And, that is it!
