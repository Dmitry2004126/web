function changePassport(){
      const buttom = document.getElementById('buttom')
      const images = [
          'passport.jpeg',
          'foreign.JPG',
      ];

      if (buttom.innerText==="Хочу заграник!"){
          document.body.style.backgroundImage = `url(${images[1]})`;
          document.body.style.height = '750px';
          buttom.innerText='Покажи русский вариант';
          
          
          document.getElementById('who').innerText='Nobody'
          document.getElementById('surname').innerText='The Monkey'
          document.getElementById('name').innerText='Buba'
          document.getElementById('father').innerText='Makakovich'
          document.getElementById('when').innerText='Today'
          document.getElementById('floor').innerText='Wooden'
          document.getElementById('date').innerText='5th century BC'
          document.getElementById('where').innerText=''
          
          
          document.getElementById('surname').style.top = '510px';
          document.getElementById('surname').style.left = '250px';
          
          document.getElementById('name').style.top = '550px';
          document.getElementById('name').style.left = '250px';
          
          document.getElementById('father').style.top = '550px';
          document.getElementById('father').style.left = '400px';
          
          document.getElementById('floor').style.top = '670px';
          document.getElementById('floor').style.left = '250px';
          
          document.getElementById('date').style.top = '630px';
          document.getElementById('date').style.left = '250px';
          
          document.getElementById('when').style.top = '690px';
          document.getElementById('when').style.left = '240px';
          
          document.getElementById('who').style.top = '725px';
          document.getElementById('who').style.left = '325px';
          
          document.getElementById('img').style.top = '510px';
          document.getElementById('img').style.left = '20px';
          document.getElementById('img').style.width = '180px';
          document.getElementById('img').style.height = '240px';
          
          document.getElementById('buttom').style.top = '10px';
          document.getElementById('buttom').style.left = '645px';
      }
      else{
          document.body.style.backgroundImage = `url(${images[0]})`;
          buttom.innerText="Хочу заграник!";
          
          
          document.getElementById('who').innerText='Никем'
          document.getElementById('surname').innerText='Мартышкин'
          document.getElementById('name').innerText='Буба'
          document.getElementById('father').innerText='Макакович'
          document.getElementById('when').innerText='Сегодня'
          document.getElementById('floor').innerText='Деревянный'
          document.getElementById('date').innerText='5 век до н. э.'
          document.getElementById('where').innerText='В123В5507'
          
          
          document.getElementById('surname').style.top = '445px';
          document.getElementById('surname').style.left = '250px';
          
          document.getElementById('name').style.top = '503px';
          document.getElementById('name').style.left = '250px';
          
          document.getElementById('father').style.top = '530px';
          document.getElementById('father').style.left = '250px';
          
          document.getElementById('floor').style.top = '565px';
          document.getElementById('floor').style.left = '213px';
          
          document.getElementById('date').style.top = '560px';
          document.getElementById('date').style.left = '350px';
          
          document.getElementById('when').style.top = '155px';
          document.getElementById('when').style.left = '125px';
          
          document.getElementById('who').style.top = '60px';
          document.getElementById('who').style.left = '250px';
          
          document.getElementById('img').style.top = '470px';
          document.getElementById('img').style.left = '25px';
          document.getElementById('img').style.width = '165px';
          document.getElementById('img').style.height = '210px';
          
          document.getElementById('buttom').style.top = '10px';
          document.getElementById('buttom').style.left = '570px';
    
      }
  }
