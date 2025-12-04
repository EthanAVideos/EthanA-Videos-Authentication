# EthanA-Videos-Authentication
EAV-Auth sets values that sites and services check to work.

Values:

1, Authenticated.

0, Unauthenticated.

# Information


## The Page or Site Is Being Blocked
 Answer: In short, you are being blocked because the developer and the site or server owner are not on good terms right now, or issues, and so the developer has blocked the site.


## Development Information

### Setup
1. Paste the JavaScript into script tags before your page content or in the head tag. You can create a JavaScript file and paste it in there, and then link the file to your page the same way.
2. It is only effective for the pages that call it.
3. There are two versions: Static (Testing Version) and a more dynamic (Public Version).
4. Static Version: When configuring to use, you must specify the site's domain in the JS (JavaScript) ```const domain = "ethan.arm64server.org";```
5. Both Versions: Both need the path to the auth.json. This file must be stored in a public place where all can view, but you only have access to update/edit and remove. ```const authURL = "/auth.json";```
6. Dynamic Version: This version only needs the auth.json file path to be edited; it will dynamically detect the URL/Domain itself.

### Customizations
You can change the message it displays and its style at the bottom of the script; you just need to know basic HTML and CSS.
``` 
document.body.innerHTML = `
            <div style="
                padding:20px;
                font-family: Arial, sans-serif;
                color: red;
                text-align: center;
                font-size: 24px;
                margin-top: 40px;
            ">
                <b>EAV Authentication Failed!</b><br><br>
                EAV Auth disabled this site; contact the admin.<br><br><br><br>
                <b>What Is EAV Auth?</b><br>
                The Developer has implemented a Work Protection System.
            </div>
            <center>
                <div style=" background-color: gray; width: 100%; height: 35px; position: fixed; left: 0; bottom: 0; ">
                    <a>Learn why you can't access this page</a>
                </div>
            </center>
        `;
```

This is what your auth.json should look like
```
{
  "example.com": {
    "value": "1"
  },
  "exampletwo.com": {
    "value": "0"
  }
}
```

### How To Bypass EAV Auth?
Disable your browser's JavaScript.
