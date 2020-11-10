const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");



app
  .prepare()
  .then(() => {
    const server = express();

	server.get("/hook", (req, res) => {
	  console.log(req.body, 'test') // Call your action on the request here
	  res.status(200).end() // Responding is important
	});	
	
	
    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug, apiRoute: 'post' };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/page/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug, apiRoute: 'page' };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/category/:slug', (req, res) => {
      const actualPage = '/category';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/_preview/:id/:rev/:type/:status/:wpnonce', (req, res) => {
      const actualPage = '/preview';
      const { id, rev, type, status, wpnonce } = req.params;
      const queryParams = { id, rev, type, status, wpnonce };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

//const { createServer } = require('http')
//const next = require('next')
//
//const port = parseInt(process.env.PORT, 10) || 3000
//const dev = process.env.NODE_ENV !== 'production'
//const app = next({ dev })
//const handle = app.getRequestHandler()
//
//app.prepare().then(() => {
//  createServer((req, res) => {
//    const parsedUrl = new URL(req.url, 'http://w.w')
//    const { pathname, query } = parsedUrl
//    handle(req, res, parsedUrl)
//	  
//    
//  }).listen(port, (err) => {
//    if (err) throw err
//    console.log(`> Ready on http://localhost:${port}`)
//  })
//})