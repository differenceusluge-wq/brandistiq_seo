document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.mobile-nav');
 if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
 const form=document.getElementById('chatForm'), input=document.getElementById('chatInput'), messages=document.getElementById('messages');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;const u=document.createElement('div');u.className='message user';u.textContent=q;messages.appendChild(u);input.value='';setTimeout(()=>{const a=document.createElement('div');a.className='message ai';a.textContent='Mogu vam pomoći procijeniti koje bi digitalno rješenje najbolje odgovaralo vašem poslovanju. U produkciji ovaj demo možemo povezati s vašim sadržajem i pravilima.';messages.appendChild(a);messages.scrollTop=messages.scrollHeight},500);messages.scrollTop=messages.scrollHeight})}
 let base=null;const est=document.getElementById('estimate');
 const update=()=>{if(!est)return;if(base===null){est.textContent='Odaberite projekt';est.classList.add('placeholder');return}est.classList.remove('placeholder');let add=[...document.querySelectorAll('input[data-add]:checked')].reduce((s,x)=>s+Number(x.dataset.add),0);let low=base+add,high=Math.round(low*1.78/50)*50;est.textContent=`${low.toLocaleString('hr-HR')} – ${high.toLocaleString('hr-HR')} €`};
 document.querySelectorAll('#projectPills button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#projectPills button').forEach(x=>x.classList.remove('active'));b.classList.add('active');base=Number(b.dataset.base);update()}));
 document.querySelectorAll('input[data-add]').forEach(x=>x.addEventListener('change',update));update();
});