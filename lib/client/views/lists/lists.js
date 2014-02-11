var mailChimpLists,
	mailChimpListsRefresh = function () {
		mailChimpLists._setLists( null );

		mailChimpLists.list(
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
					mailChimpLists._setLists( result );
				}
			}
		);
	};

Template.MailChimpLists.created = function () {
	mailChimpLists = new MailChimpLists();

	mailChimpListsRefresh();
}

Template.MailChimpLists.helpers({
	lists: function() {
		return mailChimpLists._getLists();
	},
});

Template.MailChimpListsRefresh.events({
	"click .refresh": function () {
		mailChimpListsRefresh();
	}
});
