# miro:mailchimp-lists

MailChimp Lists - the Meteor way.

See also these wrappers:

 * [A Meteor wrapper for the MailChimp API](https://github.com/MiroHibler/meteor-mailchimp)
 * [MailChimp Campaigns](https://github.com/MiroHibler/meteor-mailchimp-campaigns)


## Dependencies

 * [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp) - A Meteor wrapper for the MailChimp API


## TL;DR;

_miro:mailchimp-lists_ helps you to manage mailing lists.

Further information on the MailChimp API and its features is available at
[https://github.com/gomfunkel/node-mailchimp](https://github.com/gomfunkel/node-mailchimp).


## Templates

_miro:mailchimp-lists_ also exposes one template you can use out of the box:
`{{> MailChimpLists}}`, which will render all mailing lists for a given API Key.


## Installation

Install using Meteor:

```sh
meteor add miro:mailchimp-lists // It will add miro:mailchimp package
								// if not not already installed
```

## Quick Start

Use in your template:

```html
<div id="mailChimpLists">
	<!-- There's also another utility template
	     you can use to refresh the list -->
	{{> MailChimpListsRefresh}}
	{{> MailChimpLists}}
</div>
```

Put in your server's settings.json:

```javascript
{
	"private": {
		"MailChimp": {
			"apiKey": "<Your MailChimp API Key>",
			"listId": "<ID of your default mailing list>"
		}
	}
}
```

and start your server with:

```sh
meteor --settings settings.json
```

## API

_MailChimpLists_ at the moment exposes the following methods **both server- and client-side**:

> **_NOTE:_** If `callback` is ommited server-side, the method runs
"[synchronously](https://www.discovermeteor.com/blog/wrapping-npm-packages/)" via `Meteor.wrapAsync` method.

### `list( params, callback )`
**List all mailing lists for a given API Key**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `subscribe( params, callback )`
**Subscribe email to the list**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `unsubscribe( params, callback )`
**Unsubscribe email from the list**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `interestGroupings( params, callback )`
**List recipient groups for a given list**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

#### For convenience, there's also a general method call:

### `call( method, params, callback )`

 * `method` The method to call in the given section.
 * `params` Parameters to pass to the API method.
 * `callback` (_optional server-side, required client-side_) Callback function for
returned data or errors with two parameters. The first one being an error object
which is null when no error occured, the second one an object with all
information retrieved as long as no error occured.

#### Also for convenience, there are utility methods (**client-side only!**):

### `lists()`
**List all lists for a given API Key**

### `refresh()`
**Refresh list of all lists for a given API Key**

## Examples

### Callback, server-side/client-side

```javascript
// You can as well pass different parameters on each call
var mailingLists = new MailChimpLists( /* apiKey, { version : '2.0' } */ );

mailingLists.list(
	{ /*
		filters: {
			list_id: '<some_list_id>'
		},
		start: 0,
		limit: 100,
		sort_field: '',
		sort_dir: '' */
	},
	// Callback beauty in action
	function ( error, result ) {
		if ( error ) {
			console.error( '[MailChimpLists][List] Error: %o', error );
		} else {
			// Do something with your data!
			console.info( '[MailChimpLists][List]: %o', result );
		}
	}
);
```

### wrapAsync, server-side ONLY

```javascript
// You can as well pass different parameters on each call
var mailingLists = new MailChimpLists( /* apiKey, { version : '2.0' } */ );

var result = mailingLists.list(
	{ /*
		filters: {
			list_id: '<some_list_id>'
		},
		start: 0,
		limit: 100,
		sort_field: '',
		sort_dir: '' */
	}
);

// Do something with your data!
console.info( '[MailChimpLists][Lists]:\n', JSON.stringify( result ) );
```

## Changelog

### v1.0.0
 * Update to Meteor v1.0
 * On client, MailChimpLists.call() now reads API Key from session variable
'MailChimp.apiKey'
 * Cleanup

### v0.2.0
 * On client, MailChimp.call() now reads API Key from session variable 'MailChimpOptions.apiKey' as well

### v0.1.0
 * Initial release

## Copyright and license

Copyright © 2014-2015 [Miroslav Hibler](http://miro.hibler.me)

_miro:mailchimp-lists_ is licensed under the [**MIT**](http://miro.mit-license.org) license.
