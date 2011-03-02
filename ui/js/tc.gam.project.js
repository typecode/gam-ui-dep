if(!tc){ var tc = {}; }
if(!tc.gam){ tc.gam = {}; }

tc.gam.project = makeClass();

tc.gam.project.prototype.options = {
	dom:null
}

tc.gam.project.prototype.init = function(options){
	
	this.options = tc.jQ.extend(this.options,options);
	this.dom = this.options.dom;
	
	this.components = {
		info:new tc.gam.widgets.infopane(this,this.dom.find('.mission')),
		members:new tc.gam.widgets.members(this,this.dom.find('.members')),
		resources:new tc.gam.widgets.resources(this,this.dom.find('.members')),
		goals:new tc.gam.widgets.goals(this,this.dom.find('.goals')),
		messages:new tc.gam.widgets.conversation(this,this.dom.find('.conversation')),
		related_ideas:new tc.gam.widgets.fresh_ideas(this,this.dom.find('.fresh-ideas'))
	}
	
}

/*   widgets.base   */
tc.gam.widgets = {};
tc.gam.widgets.base = makeClass();
tc.gam.widgets.base.prototype.options = {};
tc.gam.widgets.base.prototype.init = function(project){
	
}

/*   widgets.info   */
tc.gam.widgets.infopane = makeClass();
tc.gam.widgets.infopane.prototype = tc.gam.widgets.base.prototype;
tc.gam.widgets.infopane.prototype.options = tc.jQ.extend(tc.gam.widgets.base.prototype.options,{
	
});
tc.gam.widgets.infopane.prototype.init = function(project,dom){
	tc.util.log('tc.gam.widgets.infopane.init');
	tc.util.dump(project);
	tc.util.dump(dom);
}
tc.gam.widgets.infopane.prototype.handlers = {

}

/*   widgets.members   */
tc.gam.widgets.members = makeClass();
tc.gam.widgets.members.prototype = tc.gam.widgets.base.prototype;
tc.gam.widgets.members.prototype.options = tc.jQ.extend(tc.gam.widgets.base.prototype.options,{
	
});
tc.gam.widgets.members.prototype.init = function(project,dom){
	tc.util.log('tc.gam.widgets.members.init');
	tc.util.dump(project);
	tc.util.dump(dom);
}
tc.gam.widgets.members.prototype.handlers = {
	
}

/*   widgets.resources   */
tc.gam.widgets.resources = makeClass();
tc.gam.widgets.resources.prototype = tc.gam.widgets.base.prototype;
tc.gam.widgets.resources.prototype.options = tc.jQ.extend(tc.gam.widgets.base.prototype.options,{
	
});
tc.gam.widgets.resources.prototype.init = function(project,dom){
	tc.util.log('tc.gam.widgets.resources.init');
	tc.util.dump(project);
	tc.util.dump(dom);
}
tc.gam.widgets.resources.prototype.handlers = {
	
}

/*   widgets.goals   */
tc.gam.widgets.goals = makeClass();
tc.gam.widgets.goals.prototype = tc.gam.widgets.base.prototype;
tc.gam.widgets.goals.prototype.options = tc.jQ.extend(tc.gam.widgets.base.prototype.options,{
	
});
tc.gam.widgets.goals.prototype.init = function(project,dom){
	tc.util.log('tc.gam.widgets.goals.init');
	tc.util.dump(project);
	tc.util.dump(dom);
}
tc.gam.widgets.goals.prototype.handlers = {
	
}

/*   widgets.conversation   */
tc.gam.widgets.conversation = makeClass();
tc.gam.widgets.conversation.prototype = tc.gam.widgets.base.prototype;
tc.gam.widgets.conversation.prototype.options = tc.jQ.extend(tc.gam.widgets.base.prototype.options,{
	
});
tc.gam.widgets.goals.prototype.init = function(project,dom){
	tc.util.log('tc.gam.widgets.goals.init');
	tc.util.dump(project);
	tc.util.dump(dom);
}
tc.gam.widgets.goals.prototype.handlers = {
	
}

/*   widgets.fresh_ideas   */
tc.gam.widgets.fresh_ideas = makeClass();
tc.gam.widgets.fresh_ideas.prototype = tc.gam.widgets.base.prototype;
tc.gam.widgets.fresh_ideas.prototype.options = tc.jQ.extend(tc.gam.widgets.fresh_ideas.prototype.options,{
	
});
tc.gam.widgets.fresh_ideas.prototype.init = function(project,dom){
	tc.util.log('tc.gam.widgets.fresh_ideas.init');
	tc.util.dump(project);
	tc.util.dump(dom);
}
tc.gam.widgets.fresh_ideas.prototype.handlers = {
	
}

