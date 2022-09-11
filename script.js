var requestURL = './data.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  dadosJs = request.response;}
var dadosJs
  


const DayCurrent = () => {
  for(let i = 0; i < dadosJs.length; i++) {
    document.getElementsByClassName('timeCurrent')[i].innerHTML = dadosJs[i].timeframes.daily.current + 'hrs'
  }
    document.querySelectorAll('.previous').forEach((element, index) => { 
      element.innerHTML = `Last day -${dadosJs[index].timeframes.daily.previous}hrs`
      
      
    });
  
}

 const WeeklyCurrent = () =>{
  for(let i = 0; i < dadosJs.length; i++) {
    document.getElementsByClassName('timeCurrent')[i].innerHTML = dadosJs[i].timeframes.weekly.current + 'hrs'
}
 document.querySelectorAll('.previous').forEach((element,index) =>
  element.innerHTML=`Last week - ${dadosJs[index].timeframes.weekly.previous}hrs`
 )
}

const MonthlyCurrent = () =>{
  for(let i = 0; i < dadosJs.length; i++) {
    document.getElementsByClassName('timeCurrent')[i].innerHTML = dadosJs[i].timeframes.monthly.current + 'hrs'
}
  document.querySelectorAll('.previous').forEach((element,index)=>
  element.innerHTML=`Last month - ${dadosJs[index].timeframes.monthly.previous}hrs`
  )
}



const changeInfoDay = () =>{
  const day = document.getElementById('day')
  const week = document.getElementById('week')
  const month = document.getElementById('month')
  day.classList.add('active')
  week.classList.remove('active')
  month.classList.remove('active')
 
  DayCurrent()

}
const changeInfoWeek= () =>{
  const day = document.getElementById('day')
  const week = document.getElementById('week')
  const month = document.getElementById('month')
  day.classList.remove('active')
  week.classList.add('active')
  month.classList.remove('active')
  
  WeeklyCurrent()
  
}
const changeInfoMonth= () =>{ 
  const day = document.getElementById('day')
  const week = document.getElementById('week')
  const month = document.getElementById('month')
  day.classList.remove('active')
  week.classList.remove('active')
  month.classList.add('active')
  MonthlyCurrent()
  
}