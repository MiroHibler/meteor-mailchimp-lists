MailChimpLists = function( apiKey, options ) {
	this._deps = new Deps.Dependency;
	this._lists = undefined;
	this._options = {
		apiKey: apiKey,
		options: options
	};
}

MailChimpLists.prototype.call = function( method, options, callback ) {
	Meteor.call( 'MailChimp', this._options, method, options, function ( error, result ) {
		callback( error, result );
	});
}


MailChimpLists.prototype.list = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'lists', 'list', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.subscribe = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'lists', 'subscribe', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.unsubscribe = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'lists', 'unsubscribe', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype.interestGroupings = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'lists', 'interest-groupings', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpLists.prototype._setLists = function( value ) {
	if ( value === this._lists ) {
		return;
	}
	this._lists = value;
	return this._deps.changed();
}

MailChimpLists.prototype._getLists = function() {
	this._deps.depend();
	return this._lists;
}
