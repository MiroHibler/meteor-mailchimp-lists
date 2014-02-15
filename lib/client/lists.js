// Requires MailChimp Smart Package!

MailChimpLists = function( apiKey, options ) {
	this._deps		= new Deps.Dependency;
	this._lists		= null;
	this._options	= function(){
		return {
			apiKey: ( apiKey ) ? apiKey : Session.get( 'MailChimpOptions.apiKey' ),
			options: options
		}
	}
}

/*
 | API methods
*/
MailChimpLists.prototype.call = function( method, options, callback ) {
	Meteor.call( 'MailChimp', this._options(), method, options, function ( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.list = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'lists', 'list', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.subscribe = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'lists', 'subscribe', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.unsubscribe = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'lists', 'unsubscribe', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.interestGroupings = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'lists', 'interest-groupings', options, function( error, result ) {
		callback( error, result );
	});
}

/*
 | Utility methods
 |
 | Reactive list of lists - automatically reloads
 | the template when list of lists (this._lists) changes
*/
MailChimpLists.prototype.lists = function () {
	this._deps.depend();
	return this._lists;
};

MailChimpLists.prototype.refresh = function () {
	var self = this;

	this._setLists( null );

	this.list(
		{ /*
			filters: { list_id: '<some_list_id>' },
			start: 0,
			limit: 100,
			sort_field: '',
			sort_dir: '' */
		},
		function ( error, result ) {
			if ( error ) {
				console.log( '[MailChimpLists/lists] Error: ' + error.code + ' - ' + error.message );
			} else {
				console.log( JSON.stringify( result ) );
				self._setLists( result );
			}
		}
	);
}

/*
 | Internal methods
 */
MailChimpLists.prototype._setLists = function( value ) {
	if ( value === this._lists ) {
		return;
	}
	this._lists = value;
	return this._deps.changed();
}
