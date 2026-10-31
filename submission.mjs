export async function submitEnquiry(endpoint,payload,fetcher=fetch){
 const response=await fetcher(endpoint,{method:'POST',body:payload,headers:{Accept:'application/json'},signal:AbortSignal.timeout(20000)});
 if(!response.ok)throw new Error('Submission rejected');
 const result=await response.json();
 if(result.ok!==true)throw new Error('No acceptance confirmation');
 return result;
}
