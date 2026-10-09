export const initial={app:'',scope:false,credential:false,sequence:0,requests:[],endpoint:'',delivery:[],reviewed:false};
export function simulate({credential,scope,scenario,amount,sequence}){
 const id=`req_demo_${String(sequence).padStart(4,'0')}`;
 const failure=(status,code,message,action)=>({id,status,body:{error:{code,message,request_id:id}},action});
 if(!credential||scenario==='401')return failure(401,'invalid_token','A valid sandbox bearer token is required.','Restore the demo credential and retry.');
 if(!scope||scenario==='403')return failure(403,'insufficient_scope','This credential needs reconciliations:write.','Enable the write permission in Sandbox setup.');
 if(scenario==='422'||!Number.isInteger(Number(amount))||Number(amount)<=0)return failure(422,'invalid_amount','amount_minor must be a positive integer.','Use 125000 to represent USD 1,250.00.');
 return {id,status:201,body:{id:`rec_demo_${sequence}`,status:'matched',currency:'USD',amount_minor:Number(amount),invoice_id:'inv_demo_1042',request_id:id},action:'Reconciliation created in the simulation. Next, inspect a webhook delivery.'};
}
export function readiness(s){return [Boolean(s.app&&s.credential&&s.scope),s.requests.some(r=>r.status===201),s.delivery.some(d=>d.status===200),s.reviewed];}
