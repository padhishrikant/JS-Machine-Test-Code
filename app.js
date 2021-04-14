const api_url = "https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e";

async function getapi(url) {
    const response = await fetch(url);
    
    var data = await response.json();

    data.playerList.sort(function(a, b) {
        return a.Value - b.Value;
    });


    var table = document.createElement('table');
    for (var i = 0; i < data.playerList.length; i++){

        var getPlayerID = data.playerList[i].Id;
        var getFullName = data.playerList[i].PFName;
        var getSkill = data.playerList[i].SkillDesc;
        var getValue = data.playerList[i].Value;
        var getCCode = data.playerList[i].UpComingMatchesList[0].CCode;
        var getVsCCode = data.playerList[i].UpComingMatchesList[0].VsCCode;
        var getMatchDate = data.playerList[i].UpComingMatchesList[0].MDate;
        var getImage = `/player-images/${getPlayerID}.jpg`;

        var date  = new Date(`${getMatchDate} UTC`);
        
        var playerImg = document.createElement("IMG");
        playerImg.setAttribute("src", getImage);
        playerImg.setAttribute("width", "304");
        playerImg.setAttribute("height", "228");
        document.body.appendChild(playerImg);

        var tr = document.createElement('tr');   

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        

        var text1 = document.createTextNode("   " + getFullName);
        var text2 = document.createTextNode("   " + getSkill);
        var text3 = document.createTextNode("   " + "$" + getValue);
        var text4 = document.createTextNode(getCCode  ? ("  " + getCCode+ " vs " + getVsCCode + " " + "--" + date.toString()): "No Upcoming Matches");

        td5.appendChild(playerImg)
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        
        tr.appendChild(td5)
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

getapi(api_url);