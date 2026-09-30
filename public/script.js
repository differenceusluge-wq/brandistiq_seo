
const menu=document.querySelector(".menu-toggle"), mobile=document.querySelector(".mobile-nav");
if(menu) menu.addEventListener("click",()=>{mobile.classList.toggle("open");menu.setAttribute("aria-expanded",mobile.classList.contains("open"));});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));

const pills=document.querySelectorAll("#projectPills button"), checks=document.querySelectorAll(".calculator input[type=checkbox]"), estimate=document.querySelector("#estimate");
function calc(){
 if(!estimate)return;
 const active=document.querySelector("#projectPills button.active");
 let base=Number(active?.dataset.base||150), add=[...checks].filter(x=>x.checked).reduce((s,x)=>s+Number(x.dataset.add||0),0);
 const low=base+add;
 let high=low;
 if(base===150) high=low;
 else if(base===200) high=low+50;
 else if(base===250) high=low+75;
 else if(base===350) high=low+100;
 else if(base===500) high=low+150;
 else if(base===600) high=low+200;
 else if(base===900) high=low+300;
 else if(base===400) high=low+150;
 estimate.textContent=low===high?`${low} €`:`${low} – ${high} €`;
}
pills.forEach(p=>p.addEventListener("click",()=>{pills.forEach(x=>x.classList.remove("active"));p.classList.add("active");calc()}));
checks.forEach(x=>x.addEventListener("change",calc)); calc();

const form=document.querySelector("#chatForm"), input=document.querySelector("#chatInput"), messages=document.querySelector("#messages");
if(form)form.addEventListener("submit",async e=>{
 e.preventDefault(); const q=input.value.trim(); if(!q)return;
 const u=document.createElement("div");u.className="message user";u.textContent=q;messages.appendChild(u);input.value="";
 const loading=document.createElement("div");loading.className="message ai";loading.textContent="Razmišljam…";messages.appendChild(loading);messages.scrollTop=messages.scrollHeight;
 try{
  const r=await fetch("/api/ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q})});
  const data=await r.json(); loading.textContent=data.reply||"Trenutno ne mogu odgovoriti. Pokušajte ponovno.";
 }catch(err){loading.textContent="AI demo trenutno nije povezan. Na Netlifyju postavite OPENAI_API_KEY i ponovno objavite projekt."}
 messages.scrollTop=messages.scrollHeight;
});
