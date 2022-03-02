---
slug: input-field-css-only-filled-not-filled
date: 2019-05-07
title: 'Apply style to input field when filled ( CSS only ) '
description: 'Apply style to input field when filled and not filled without javascript'
published: true
# banner: './images/banner.png'
---


# Apply style to input field when filled and not filled without javascript

Requirement
Apply custom style to input box when the field not filled and filled with text

### When not filled

![](https://cdn-images-1.medium.com/max/2000/1*rHUUQClHLCTuemJ5wlbxXQ.png)

### When filled

![](https://cdn-images-1.medium.com/max/2000/1*Td9kkNSlUkKNI5xjGSFL7A.png)

I am not going in the UX of it.
I was searching for any CSS way to do it. 
Stumbled upon **:placeholder-shown**

For more details reference here

[https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)
[https://css-tricks.com/almanac/selectors/p/placeholder-shown/](https://css-tricks.com/almanac/selectors/p/placeholder-shown/)

Let’s get to point

We can apply a custom style when the place-holder text shown to the user.

![](https://cdn-images-1.medium.com/max/2000/1*zCRKLT8IV5vM7jTuf79PWQ.png)

![](https://cdn-images-1.medium.com/max/2000/1*-BRTwXvyO_IwL09O_VNlgw.png)

In other words, when the input is **not filled **we can apply a custom style.
CSS gives a nice reverse selector **:not**

Let’s apply the reverse the style

![](https://cdn-images-1.medium.com/max/2000/1*d_NcKTxGQ1SqUFkScztTqg.png)

![](https://cdn-images-1.medium.com/max/2000/1*x5q3OLzzkmqh0fffCIpiIQ.png)

### Caution

This will not work if the input field does’t have placeholder text. 
So atleast for the sake of it keep placeholder with empty spaces. like below

![](https://cdn-images-1.medium.com/max/2000/1*V1e-oV6YKkLwTEcmo74OtA.png)

Bonus

There is css selector called **::placeholder **through which we can apply style to placeholder text.

![](https://cdn-images-1.medium.com/max/2000/1*fzkWtpwELo8NfKX24NdYAA.png)
