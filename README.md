# FrzTable

[![Watch the video](https://i.imgur.com/t85iXgY.jpg)](https://youtu.be/I1o-MgkRHCQ)

---

## Features

-   Hightlight the same column and row of the clicked td
-   Prev / next buttons for mobile user
-   Customize slide speed, amount of columns to display

---

## Usage

```javascript
{
// These are the default setting for mobile devices
//when prev/next buttons are clicked
    count: {
        // Horizational move base on <td> columns
        slide: 1,
        // Amount of cloumns to display at the same time
        show: 4,
    },
    // transition time
    speed: 0.3,
    // Console the clicked jQuery Object
    whenClick: function (e) {
        let $elements = $(e.target).eq(0);
        console.log($elements);
    },
},
```

### Contact

You can find me on

-   GitHub
-   or email me: yisyuan2013@gmail.com
