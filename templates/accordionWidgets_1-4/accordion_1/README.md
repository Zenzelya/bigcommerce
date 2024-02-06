# widget: ACCORDION
![Demo link](https://anton-kuzmin-sanbox.mybigcommerce.com/?ctk=973430b1-0ee5-4857-86fa-5a381214135d)

You need to connect the JS and Style file to your theme files.

```
{{inject "stringBasedKey" contextValue}}
```

To retrieve the parsable JSON object, just call `{{jsContext}}`

```html
{{~inject "myAccordionWidgetThis" this~}}

<script>
// Note the lack of quotes around the jsContext handlebars helper, it becomes a string automatically.
var jsContext = JSON.parse({{jsContext}}); 
// jsContext would output "{\"myAccordionWidgetThis\": \"{SchemaObject}"}" which can feed directly into your JavaScript

console.log(jsContext.myAccordionWidgetThis); // Will output: Sample Product
</script>
```