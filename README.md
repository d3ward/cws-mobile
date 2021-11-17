# cws-mobile

A script to be injected into the Chrome Web Store to make it mobile friendly
There is a browser that support extension on mobile [Kiwi Browser](https://kiwibrowser.com)
so i started this project with the goal to make the Chrome Web Store mobile friendly ( until Google will do something)
because actually on mobile when you want to install an extension the website is always on desktop view and is weird

![Preview](https://github.com/d3ward/cws-mobile/blob/master/preview_1.png)

## How to inject the script

- Built-in to Kiwi Browser

   The script it's now available in the browser as optional checkbox at Settings>Accessibility

- With Chrome DevTools ( for testing )

    To improve the script and make it better i use the DevTools with Chrome
  - Go on CWS and click "Control + Alt + I"
  - Copy the script from [CWS.js](https://raw.githubusercontent.com/d3ward/cws-mobile/master/src/CWS.js)
  - Paste in the console and execute
  
