# jwarn

A JQuery plugin to easily display warning messages to the user and validate fields.

## Installation

Just clone / download jwarn.js and link it on your file: 
```
<script src="js/jwarn.js"></script>
```

## Usage

A field that requires a minimum amount of characters:

```
<p>Name: </p><input id="contact-name" type="text">
<script>
  $(document).ready(function() {
    $("#contact-name").jwarnMin({
        "div": "warning-area", 
        "emptyMessage": "The name field is empty.",
        "min": 4,
        "minMessage": "It's necessary to fill a name with at least 4 characters."
    });
  }
</script>
```

The "warning-area" is the div where the messages are displayed (Without it, the plugin does not work):

```
<div id="warning-area"></div>
```

An email field:

```
<p>Email: </p><input id="contact-email" type="text">
<script>
  $(document).ready(function() {
    $("#contact-email").jwarnEmail({
      "div": "warning-area", 
      "emptyMessage": "The email field is empty.",
      "invalidMessage": "This is not a valid email."
    });
  }
</script>
```

An URL field:

```
<p>Facebook: </p><input id="contact-facebook" type="text">
<script>
  $(document).ready(function() {
    $("#contact-facebook").jwarnUrl({
      "div": "warning-area", 
      "emptyMessage": "The facebook field is empty.",
      "invalidMessage": "This is not a valid URL."
    });
  }
</script>
```

Using it for validation (Considering the previous examples, and the existence of a button):

```
<script>
  <button class="btn btn-primary btn-xl" id="contact-submit">Submit</button>
  $(document).ready(function() {
    $.jvalSetup([
        "contact-name",
        "contact-email",
        "contact-facebook"
    ]);
    $("#contact-submit").jval();
  }
</script>
```

Setting the ids up causes each jwarn to validate on blur, disabling the given button if any of the given ids is false (Empty or invalid).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## Credits

Me, myself, coffee and smokes.

## License

GNU GENERAL PUBLIC LICENSE.
