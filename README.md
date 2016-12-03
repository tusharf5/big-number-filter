# Big Number Filter

## Available option variable properties

```js

 option : {
    lang : 'en',
    offset : 2
 }

```

#### `lang` is the Language ( Available 'en' and 'jp')
#### `offset` is the number of digits after decimal

## Sample

`bigNumberFilter(123456, {lang:'en',offset:2}); // outputs 123.5K`
`bigNumberFilter(12345678, {lang:'ja',offset:1}); // outputs 1234.57man`
`bigNumberFilter(123456789); // outputs 123.5M`