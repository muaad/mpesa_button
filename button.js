var button = document.getElementById("mpesaButton");

if (button !== null) {
    styles = 'background: #6AAE2D; color: white; text-align: center; font-weight: bold; padding: 15px; border-radius: 10px; font-size: 20px;'
    markup = '<a href="" style="' + styles + '">Pay with Mpesa</a>'
    button.innerHTML = markup
}