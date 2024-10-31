function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dc8iaaAW9V":
        Script1();
        break;
      case "5bqS9eKzVmh":
        Script2();
        break;
      case "6J3oWlrwRCb":
        Script3();
        break;
      case "6PU3zOgn5Cu":
        Script4();
        break;
      case "6ZZyQXTaP11":
        Script5();
        break;
      case "6N5fojEe36Q":
        Script6();
        break;
      case "6giXTYtvd7P":
        Script7();
        break;
      case "5vYPxumO562":
        Script8();
        break;
  }
}

function Script1()
{
  player=GetPlayer()
var userEmail=player.GetVar("Email")
var isAuthen=false
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://prod-26.southeastasia.logic.azure.com:443/workflows/12d94d16aa9946c09455395c8b10af5d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0VhhRHGZdZ8Jvxc6zkmvu5FT-HTDu36RJjmHJg2Qalo", true); // Địa chỉ API của bạn
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);

player.SetVar("authenticated",response.Authenticated)


  }
};
// Gửi email người dùng trong JSON
var data = JSON.stringify({ "EmailInput": userEmail });
xhr.send(data);
}

function Script2()
{
  player = GetPlayer()
player.SetVar("correctN",false)
player.SetVar("correctN1",false)
player.SetVar("correctG",false)
player.SetVar("correctG1",false)
player.SetVar("correctH",false)
player.SetVar("correctH1",false)

}

function Script3()
{
  player = GetPlayer()
player.SetVar("correctI",false)
player.SetVar("correctI1",false)

}

function Script4()
{
  player = GetPlayer()
player.SetVar("correctN",false)
player.SetVar("correctN1",false)
player.SetVar("correctN2",false)

}

function Script5()
{
  player = GetPlayer()
player.SetVar("correctN",false)
player.SetVar("correctN1",false)


}

function Script6()
{
  player = GetPlayer()
player.SetVar("correctA",false)
player.SetVar("correctA1",false)

}

function Script7()
{
  player = GetPlayer()
player.SetVar("correctK",false)
player.SetVar("correctK1",false)
player.SetVar("correctO",false)
player.SetVar("correctO1",false)
}

function Script8()
{
  player = GetPlayer()
var corrects=player.GetVar("point")/10
player.SetVar("socaudung",corrects)
email = player.GetVar("Email")
point = player.GetVar("point")
minutes = player.GetVar("minutes")
seconds = player.GetVar("seconds")

        fetch('https://prod-15.southeastasia.logic.azure.com:443/workflows/89237a440c244380a453290751144986/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HWJ_C_55DS-SA4EiKChPmjdtnd3IEo2WFAKK2qKJGuM', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_Email: email, point: parseInt(point),sophut:parseInt(minutes) ,sogiay:parseInt(seconds) })
          })
}

