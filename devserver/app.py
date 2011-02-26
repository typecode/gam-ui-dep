#! /usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os

sys.path.append('lib')
import tornado.httpserver
import tornado.httpclient
import tornado.ioloop
import tornado.web

from jinja2 import Template,Environment,FileSystemLoader

class GAMRequestHandler(tornado.web.RequestHandler):
  def render(self,path,**kwargs):
    template = env.get_template(path);
    data = {}
    self.write(template.render(data))

class Main(GAMRequestHandler):
    def get(self):
        self.render('main.html')

class Home(GAMRequestHandler):
    def get(self):
        self.render('home.html')

class IdeaSubmission(GAMRequestHandler):
    def get(self):
        self.render('ideasubmission.html')

class Register(GAMRequestHandler):
    def get(self):
        self.render('register.html')

class Login(GAMRequestHandler):
    def get(self):
        self.render('login.html')

class Feeback(GAMRequestHandler):
    def get(self):
        self.render('feedback.html')

class Create(GAMRequestHandler):
    def get(self):
        self.render('create.html')

class Project(GAMRequestHandler):
    def get(self):
        self.render('project.html')

class UserAccount(GAMRequestHandler):
    def get(self):
        self.render('useraccount.html')

class Search(GAMRequestHandler):
    def get(self):
        self.render('search.html')

class Resource(GAMRequestHandler):
    def get(self):
        self.render('resource.html')

class About(GAMRequestHandler):
    def get(self):
        self.render('about.html')

class News(GAMRequestHandler):
    def get(self):
        self.render('news.html')

class TOU(GAMRequestHandler):
    def get(self):
        self.render('tou.html')

class Mobile(GAMRequestHandler):
    def get(self):
        self.render('mobile.html')

env = Environment(loader=FileSystemLoader('../templates'))

settings = {
    "static_path": os.path.join(os.path.dirname(__file__), "../ui")
}

application = tornado.web.Application([
    (r"/home", Home),
    (r"/ideasubmission", IdeaSubmission),
    (r"/register", Register),
    (r"/login", Login),
    (r"/feedback", Feeback),
    (r"/create", Create),
    (r"/project", Project),
    (r"/useraccount", UserAccount),
    (r"/search", Search),
    (r"/resource", Resource),
    (r"/about", About),
    (r"/news", News),
    (r"/tou", TOU),
    (r"/mobile", Mobile),
    (r"/", Main)
], **settings)

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()