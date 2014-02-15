var mailChimpLists;

Template.MailChimpLists.created = function () {
	mailChimpLists = new MailChimpLists();
	mailChimpLists.refresh();
}

Template.MailChimpLists.helpers({
	lists: function() {
		return mailChimpLists.lists();
	},
});

Template.MailChimpListsItem.itemClass = function() {
	return Session.equals( 'MailChimpOptions.listId', $( this ).attr( 'id' ) ) ? 'active' : '';
};

Template.MailChimpListsItem.events({
	'click': function() {
		Session.set( 'MailChimpOptions.listId', $( this ).attr( 'id' ) );
	}
});

Template.MailChimpListsRefresh.events({
	"click .refresh": function () {
		mailChimpLists.refresh();
	}
});
