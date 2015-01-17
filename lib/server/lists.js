// Requires MailChimp Package!

MailChimpLists = function ( apiKey, options ) {
	this._asyncAPI = new MailChimp( apiKey, options );
};

MailChimpLists.prototype.call = function ( method, options, callback ) {
	this._asyncAPI.call( 'lists', method, options, callback );
};

MailChimpLists.prototype.list = function ( options, callback ) {
	this.call( 'list', options, callback );
};

MailChimpLists.prototype.subscribe = function ( options, callback ) {
	this.call( 'subscribe', options, callback );
};

MailChimpLists.prototype.unsubscribe = function ( options, callback ) {
	this.call( 'unsubscribe', options, callback );
};

MailChimpLists.prototype.interestGroupings = function ( options, callback ) {
	this.call( 'interest-groupings', options, callback );
};
