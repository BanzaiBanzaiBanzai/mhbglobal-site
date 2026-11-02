import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve(import.meta.dirname,'dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
createServer(async(req,res)=>{const pathname=new URL(req.url,'http://localhost').pathname;const relative=pathname.endsWith('/')?pathname.slice(1)+'index.html':pathname.slice(1);const file=resolve(root,relative);if(!file.startsWith(root+sep)||!types[extname(file)]){res.writeHead(404);res.end('Not found');return}try{const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(5194,process.env.PREVIEW_HOST||'127.0.0.1',()=>console.log('MHB preview: http://'+(process.env.PREVIEW_HOST||'127.0.0.1')+':5194'));
