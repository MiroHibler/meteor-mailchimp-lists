Package.describe({
	summary: 'MailChimp Lists - the Meteor way'
});

Package.on_use(function ( api, where ) {

	api.use( ['templating'/*, 'handlebars'*/], 'client' );

	api.add_files( 'lib/server/lists.js', 'server' );

	api.add_files( 'lib/client/views/lists/list_item.html', 'client' );
	api.add_files( 'lib/client/views/lists/lists.html', 'client' );
	api.add_files( 'lib/client/views/lists/refresh.html', 'client' );
	api.add_files( 'lib/client/loader.html', 'client' );

	api.add_files( 'lib/client/views/lists/lists.js', 'client' );
	api.add_files( 'lib/client/lists.js', 'client' );

	if ( api.export ) {
		api.export( 'MailChimpLists', ['server', 'client'] );
	}
});
