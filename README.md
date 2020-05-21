# cws-mobile

A script to be injected into the Chrome Web Store to make it mobile friendly
There is a browser that support extension on mobile [Kiwi Browser](https://kiwibrowser.com)
so i started this project with the goal to make the Chrome Web Store mobile friendly ( until Google will do something)
because actually on mobile when you want to install an extension the website is always on desktop view and is weird

## How to inject the script


- With Violentmonkey ( wip )

    First you need an userscript manager extension 
    My reccomended one is [Violentmonkey](https://violentmonkey.github.io/) wich works very well on Kiwi Browser
    Once you installed the extension do the following steps :
    -   Open the Violentmonkey
    -   Go to options page 
    -   Click create new Script ( you will get a dropdown )
    -   Choose upload from url
    -   Add this "https://github.com/d3ward/cws-mobile/raw/master/src/CWS.user.js"
    -  Confirm installation
    Now you just need to go on CWS to see the result

- With Chrome DevTools ( for testing )
    To improve the script and make it better i use the DevTools with Chrome
    - Go on CWS and click "Control + Alt + I"
    - Copy the script from [./src/CWS.js](https://github.com/d3ward/cws-mobile/blob/master/src/CWS.js)
    - Paste in the console and execute 