// Requires MailChimp Package!

MailChimpLists = function ( apiKey, options ) {
	this._deps      = new Tracker.Dependency;
	this._lists     = null;

	this._asyncAPI  = new MailChimp( apiKey, options );
};

/*
 | Internal methods
 */
MailChimpLists.prototype._setLists = function ( value ) {
	if ( value === this._lists ) return;

	this._lists = value;

	return this._deps.changed();
};

/*
 | API methods
*/
MailChimpLists.prototype.call = function ( method, options, callback ) {
	this._asyncAPI.call( 'lists', method, options, callback );
};

MailChimpLists.prototype.list = function ( options, callback ) {
	this.call( 'list', options, callback);
};

MailChimpLists.prototype.subscribe = function ( options, callback ) {
	this.call( 'subscribe', options, callback);
};

MailChimpLists.prototype.unsubscribe = function ( options, callback ) {
	this.call( 'unsubscribe', options, callback);
};

MailChimpLists.prototype.interestGroupings = function ( options, callback ) {
	this.call( 'interest-groupings', options, callback);
};

/*
 | Utility methods
 |
 | Reactive list of MailChimp lists - automatically reloads
 | the template when list of lists (this._lists) changes
*/
MailChimpLists.prototype.lists = function () {
	this._deps.depend();

	return this._lists;
};

MailChimpLists.prototype.refresh = function () {
	var self = this;

	self._setLists( null );

	self.list(
		{ /*
			filters: { list_id: '<some_list_id>' },
			start: 0,
			limit: 100,
			sort_field: '',
			sort_dir: '' */
		},
		function ( error, result ) {
			if ( error ) {

				console.error( '[MailChimpLists/lists] Error: ' + error.code + ' - ' + error.message );

			} else {

				console.info( '[MailChimpLists/lists] %o', result );

				self._setLists( result );
			}
		}
	);
};
