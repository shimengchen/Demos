function handleResponse(response){
    console.log('The responsed data is: '+response.data);
   }
   var script = document.createElement('script');
   script.src = 'http://www.baidu.com/json/?callback=handleResponse';
   document.getElementById('node').appendChild(script);
