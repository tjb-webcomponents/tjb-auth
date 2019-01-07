# tjb-auth

Full blown authentification webcomponent.

## Example

https://tjb-webcomponents.github.io/tjb-auth/

## Add to project

You might want to use a Polyfill for WebComponent:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js"></script>
```

### Include via HTML

Include it:

```html
<script
  src="https://tjb-webcomponents.github.io/tjb-auth/tjb-auth.min.js"
  type="module"
></script>
```

### Include via JavaScript

```JavaScript
import 'https://tjb-webcomponents.github.io/tjb-auth/tjb-auth.min.js'
```

### Include via NPM

Console:

```bash
npm i -S tjb-auth
```

Then in your code:

```JavaScript
import 'tjb-auth';
```

## Useage

```html
<tjb-auth></tjb-auth>
```

### Attributes

Example:

```html
<tjb-auth
  postbody="{ 'lol': 'rofl' }"
  loginurl="https://jsonplaceholder.typicode.com/users"
  registerurl="https://jsonplaceholder.typicode.com/users"
  mailurl="https://jsonplaceholder.typicode.com/users"
  reseturl="https://jsonplaceholder.typicode.com/users"
  verifyurl="https://jsonplaceholder.typicode.com/users"
  showlogin="true"
>
  <input
    class="btn btn--cta btn--fs"
    value="LOGIN"
    type="submit"
    slot="submit-login"
  />
  <input
    class="btn btn--cta btn--fs"
    value="REGISTER"
    type="submit"
    slot="submit-register"
  />
  <input
    class="btn btn--cta btn--fs"
    value="SEND"
    type="submit"
    slot="submit-reset"
  />
  <input
    class="btn btn--cta btn--fs"
    value="VERIFY"
    type="submit"
    slot="submit-verify"
  />
</tjb-auth>
```

All attributes:

| attribute    | example                                                  | description                                                                    |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| postbody     | postbody="{ 'lol': 'rofl' }"                             | Aditional object fields that will be added to any `POST` request.              |
| loginurl     | loginurl="https://jsonplaceholder.typicode.com/users"    | The `POST` `URL` where the login request should go                             |
| registerurl  | registerurl="https://jsonplaceholder.typicode.com/users" | The `POST` `URL` where the register request should go                          |
| mailurl      | mailurl="https://jsonplaceholder.typicode.com/users"     | The `POST` `URL` where the email sending trigger request should go             |
| reseturl     | reseturl="https://jsonplaceholder.typicode.com/users"    | The `POST` `URL` where the reset request should go                             |
| verifyurl    | verifyurl="https://jsonplaceholder.typicode.com/users"   | The `POST` `URL` where the verification request should go                      |
| showlogin    | showlogin="false"                                        | wheter or not to show the login panel (will hide all other views)              |
| showregister | showregister="true"                                      | wheter or not to show the registration panel (will hide all other views)       |
| showreset    | showreset="true"                                         | wheter or not to show the reset panel (will hide all other views)              |
| showverify   | showverify="true"                                        | wheter or not to show the email verification panel (will hide all other views) |

## Styling

Default public values:

```css
:host {
  --color-info: grey;

  /* notify */
  --notify-background-error: #fa354c;
  --notify-background-success: limegreen;
  --notify-color-error: white;
  --notify-color-success: white;
  --notify-margin: -55px -40px 20px;
  --notify-padding: 15px 15px 15px 35px;

  /* input */
  --input-color-error: #fa354c;
  --input-color-success: limegreen;
  --input-padding: 10px;
  --input-margin: 0 0 30px 0;
  --input-width: 100%;
  --input-border: 1px solid transparent;
  --input-border-bottom: 1px solid lightgrey;
  --input-border-radius: 0;
  --input-font-size: 1rem;
  --input-info-color: grey;
  --input-info-font-size: 0.8rem;
  --input-label-margin: 0 0 5px 0;

  --background: #fff;
  --display: block;
  --max-width: 350px;
  --box-sizing: border-box;
  --overflow: hidden;
  --position: relative;
  --padding: 55px 40px 10px;
  --box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}
```

These can be overwritten easily by targetting the element. Example:

```css
tjb-auth {
  --auth-width: 300px;
}
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)
