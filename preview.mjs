import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname} from 'node:path';
const root=resolve(import.meta.dirname);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const file=path==='/'?'index.html':path.slice(1);if(!['index.html','privacy.html','styles.css','app.js','assets/cafe.png','assets/house.png','assets/salon.png','assets/favicon.svg'].includes(file)){res.writeHead(404);res.end('Not found');return}try{const data=await readFile(resolve(root,file));res.writeHead(200,{'Content-Type':types[extname(file)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(5194,'127.0.0.1',()=>console.log('MHB local preview: http://127.0.0.1:5194'));
