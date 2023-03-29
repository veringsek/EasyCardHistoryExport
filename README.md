# EasyCard History Export

Export transaction history of an EasyCard with a JavaScript function.

## Usage

Browse the [EasyCard History Page](https://ezweb.easycard.com.tw/search/CardSearch.php) and request a search for your EasyCard history.

Import the functions in [`main.js`](./main.js) .

Use `downloadRecords()` to get a CSV file with all transaction history.

Use `getRecords()` to get an array of records, with every record as a JSON object having all the information. Use this if you want further application.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright © 2023, veringsek