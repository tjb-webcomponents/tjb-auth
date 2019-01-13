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

| attribute        | example                                                  | description                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| postbody         | postbody="{ 'lol': 'rofl' }"                             | Aditional object fields that will be added to any `POST` request. This will be applied to all requests _unless_ there is already a specific postbody on some request, then it will be ditched |
| loginpostbody    | postbody="{ 'lol': 'rofl' }"                             | Aditional object fields that will be added to any `POST` request.                                                                                                                             |
| loginurl         | loginurl="https://jsonplaceholder.typicode.com/users"    | The `POST` `URL` where the login request should go                                                                                                                                            |
| registerpostbody | postbody="{ 'lol': 'rofl' }"                             | Aditional object fields that will be added to any `POST` request.                                                                                                                             |
| registerurl      | registerurl="https://jsonplaceholder.typicode.com/users" | The `POST` `URL` where the register request should go                                                                                                                                         |
| mailurl          | mailurl="https://jsonplaceholder.typicode.com/users"     | The `POST` `URL` where the email sending trigger request should go                                                                                                                            |
| resetpostbody    | postbody="{ 'lol': 'rofl' }"                             | Aditional object fields that will be added to any `POST` request.                                                                                                                             |
| reseturl         | reseturl="https://jsonplaceholder.typicode.com/users"    | The `POST` `URL` where the reset request should go                                                                                                                                            |
| verifypostbody   | postbody="{ 'lol': 'rofl' }"                             | Aditional object fields that will be added to any `POST` request.                                                                                                                             |
| verifyurl        | verifyurl="https://jsonplaceholder.typicode.com/users"   | The `POST` `URL` where the verification request should go                                                                                                                                     |
| showlogin        | showlogin="false"                                        | wheter or not to show the login panel (will hide all other views)                                                                                                                             |
| showregister     | showregister="true"                                      | wheter or not to show the registration panel (will hide all other views)                                                                                                                      |
| showreset        | showreset="true"                                         | wheter or not to show the reset panel (will hide all other views)                                                                                                                             |
| showverify       | showverify="true"                                        | wheter or not to show the email verification panel (will hide all other views)                                                                                                                |

### Methods

| method  | example                                                                                          | description                                          |
| ------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| error   | .error(area, message) <br> - area @String [login/register/reset/verify] <br> - message @String   | Sets the respective widget (area) in an error state  |
| success | .success(area, message) <br> - area @String [login/register/reset/verify] <br> - message @String | Sets the respective widget (area) in a success state |

## Events

| name             | event details                                                   | description                                                                                                                                   |
| ---------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| success          | - event (@Object) <br> -- area (@String) <br> -- resp (@Object) | Triggers when any call was successful. Holds an Object which is has the name of the success calling element and the answer of that POST call. |
| error            | - event (@Object) <br> -- area (@String) <br> -- resp (@Object) | Triggers when any call had an error. Holds an Object which is has the name of the error element and the answer of that POST call.             |
| verify           | - body (@Object)                                                | triggered when user sends email verification request. Event is an object which contains all information for potential POST call.              |
| verify-sendmail  | - body (@Object)                                                | triggered when an email request would be send. Event is an object which contains all information for potential POST call.                     |
| verify-success   | - resp (@Object)                                                | Triggers when the email verification call returned a success. Holds an Object which is the answer of that POST call.                          |
| verify-error     | - resp (@Object)                                                | Triggers when the email verification call returned an error. Holds an Object which is the answer of that POST call.                           |
| reset            | - body (@Object)                                                | triggered when user sends passowrd reset request. Event is an object which contains all information for potential POST call.                  |
| reset-sendmail   | - body (@Object)                                                | triggered when an email request would be send. Event is an object which contains all information for potential POST call.                     |
| reset-success    | - resp (@Object)                                                | Triggers when the password reset call returned a success. Holds an Object which is the answer of that POST call.                              |
| reset-error      | - resp (@Object)                                                | Triggers when the password reset call returned a error. Holds an Object which is the answer of that POST call.                                |
| register         | - body (@Object)                                                | triggered when user sends register request. Event is an object which contains all information for potential POST call.                        |
| register-success | - resp (@Object)                                                | Triggers when the registration call returned a success. Holds an Object which is the answer of that POST call.                                |
| register-error   | - resp (@Object)                                                | Triggers when the registration call returned a error. Holds an Object which is the answer of that POST call.                                  |
| login            | - body (@Object)                                                | triggered when user sends login request. Event is an object which contains all information for potential POST call.                           |
| login-success    | - resp (@Object)                                                | Triggers when the login call returned a success. Holds an Object which is the answer of that POST call.                                       |
| login-error      | - resp (@Object)                                                | Triggers when the login call returned a error. Holds an Object which is the answer of that POST call.                                         |

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
