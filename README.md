# meteor-mailchimp-lists

MailChimp Lists - the Meteor way.


## Dependencies

 * [mailchimp](https://github.com/MiroHibler/meteor-mailchimp) - A Meteor wrapper for the MailChimp API


## TL;DR;

_meteor-mailchimp-lists_ helps you to manage mailing lists.

Further information on the MailChimp API and its features is available at [https://github.com/gomfunkel/node-mailchimp](https://github.com/gomfunkel/node-mailchimp).


## Templates

_meteor-mailchimp-lists_ also exposes one template you can use out of the box: `MailChimpLists`, which will render all mailing lists for a given API Key.


## Installation

Install using [Meteorite](https://github.com/oortcloud/meteorite) - Installer & smart package manager for Meteor:

```sh
$ mrt add mailchimp-lists // It will install mailchimp package if it\'s not already installed
```

Use in your template:

```html
<div id="mailChimpLists">
	{{> MailChimpLists}}
</div>
```

Put in your server's Meteor.startup():

```javascript
MailChimpOptions.apiKey = "<Your MailChimp API Key>";
MailChimpOptions.listId = "<ID of your default mailing list>";
```

Or in your clients's Meteor.startup():

```javascript
Session.set( 'MailChimpOptions.apiKey', "<Your MailChimp API Key>" );
Session.set( 'MailChimpOptions.listId', "<ID of your default mailing list>" );
```

This way you don't have to pass these parameters on each call.


## API

_MailChimpLists_ at the moment exposes the following methods **both on the server and the client**:

### `list( params, callback )`
**List all mailing lists for a given API Key**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `subscribe( params, callback )`
**Subscribe email to the list**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `unsubscribe( params, callback )`
**Unsubscribe email from the list**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `interestGroupings( params, callback )`
**List recipient groups for a given list**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

For convenience, there's also a general call (a shortcut to MailChimp.call()):

### `call( section, method, params, callback )`

 * `section` The section of the API method to call (e.g. 'campaigns').
 * `method` The method to call in the given section.
 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

Also for convenience, there are utility methods (**client only!**):

### `lists()`
**List all lists for a given API Key**

### `refresh()`
**Refresh list of all lists for a given API Key**

## Example

```javascript
if ( Meteor.isServer ) {
	// Set it once and reuse many times
	MailChimpOptions.apiKey = "<Your MailChimp API Key>";
	MailChimpOptions.listId = "<ID of your default mailing list>";
}

if ( Meteor.isClient ) {
	// Set it once and reuse many times
	Session.set( 'MailChimpOptions.apiKey', "<Your MailChimp API Key>" );
	Session.set( 'MailChimpOptions.listId', "<ID of your default mailing list>" );
}

try {
	// You can as well pass different parameters on each call
	var mailingLists = new MailChimpLists( /* apiKey, { version : '2.0' } */ );
} catch ( error ) {
	console.log( error.message );
}

mailingLists.list(
	{ /*
		filters: { list_id: '<some_list_id>' },
		start: 0,
		limit: 100,
		sort_field: '',
		sort_dir: '' */
	},
	function ( error, result ) {
		if ( error ) {
			console.log( error.message );
		} else {
			console.log( JSON.stringify( result ) );
		}
	}
);
```

## Changelog

### v0.2.0
 * On client, MailChimp.call() now reads API Key from session variable 'MailChimpOptions.apiKey' as well

### v0.1.0
 * Initial release

## Copyright and license

Copyright © 2014 [Miroslav Hibler](http://miro.hibler.me)

_meteor-mailchimp-lists_ is licensed under the [**MIT**](http://miro.mit-license.org) license.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/MiroHibler/meteor-mailchimp-lists/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
