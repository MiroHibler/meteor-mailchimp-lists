// Requires MailChimp Smart Package!

MailChimpLists = function( apiKey, options ) {
	this.asyncAPI = new MailChimp( apiKey, options );
}

MailChimpLists.prototype.call = function( method, options, callback ) {
	this.asyncAPI.call( 'lists', method, options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpLists] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpLists.prototype.list = function( options, callback ) {
	this.asyncAPI.call( 'lists', 'list', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpLists/list] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpLists.prototype.subscribe = function( options, callback ) {
	this.asyncAPI.call( 'lists', 'subscribe', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpLists/subscribe] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpLists.prototype.unsubscribe = function( options, callback ) {
	this.asyncAPI.call( 'lists', 'unsubscribe', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpLists/unsubscribe] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpLists.prototype.interestGroupings = function( options, callback ) {
	this.asyncAPI.call( 'lists', 'interest-groupings', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpLists/interestGroupings] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}
