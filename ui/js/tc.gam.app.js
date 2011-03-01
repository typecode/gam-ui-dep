if(!tc){ var tc = {}; }

tc.app = makeClass();

tc.app.prototype.init = function(page){
	tc.util.log('tc.app.init');
	var _me;
	_me = this;
	if(page.features){
		for(i in page.features){
			if(tc.jQ.isFunction(page.features[i])){
				page.features[i](_me);
			}
		}
	}
	
	//tc.jQ('a').history(function(event,hash){
	//	_me.events.trigger('history-event',{
	//	  event:event,
	//	  hash:hash
	//	});
	//});
}

tc.app.prototype.components = {};
tc.app.prototype.events = tc.jQ({});