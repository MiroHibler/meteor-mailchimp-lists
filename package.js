Package.describe({
	name    : 'miro:mailchimp-lists',
	version : '1.0.0',
	summary : 'MailChimp Lists - the Meteor way',
	homepage: "https://github.com/MiroHibler/meteor-mailchimp-lists",
	author  : "Miroslav Hibler (http://miro.hibler.me)",
	git     : 'https://github.com/MiroHibler/meteor-mailchimp-lists.git'
});

Package.on_use( function ( api, where ) {

	api.versionsFrom('METEOR@0.9.2');

	api.use('miro:mailchimp@1.0.4');

	api.use( ['templating'], 'client' );

	api.add_files( 'lib/server/lists.js', 'server' );

	api.add_files([
		'lib/client/views/lists/lists.html',
		'lib/client/views/lists/lists.js',

		'lib/client/lists.js'
	], 'client' );

	if ( api.export ) {
		api.export( 'MailChimpLists', ['server', 'client'] );
	}
});
