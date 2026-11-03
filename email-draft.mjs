// Keep the destination and subject fixed; encode user input only as body text.
export function buildEmailDraft(values){
 const body=['name','email','company','service','message'].filter(k=>values[k]?.trim()).map(k=>`${k}: ${values[k].trim()}`).join('\r\n\r\n');
 const url='mailto:kontakt@mhbglobal.se?subject='+encodeURIComponent('MHB Global Sweden — enquiry')+'&body='+encodeURIComponent(body);
 return url.length<=1800?url:null;
}
