var pageCounter=1;
var animalContainer= document.getElementById("animal-info");
var btn= document.getElementById("btn");

btn.addEventListener("click", function(){

    var ourRequest= new XMLHttpRequest();
ourRequest.open('GET', 'https://www.quandl.com/api/v3/datasets/NSE/INFY.json?api_key=ohudC4aZ_QkhbmV22Prx&start_date=2018-02-02');
ourRequest.onload= function(){
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};

ourRequest.send();

});

function renderHTML(nifty){
   // var htmlString="helooo";
       
        var close=0;
        var totalTrade=0;
        var Datasets=nifty.dataset.data.length;
        for(i=0; i<Datasets; i++)
        {
            for(j=0; j<nifty.dataset.data[i].length; j++)
             {
            //     if(j==0)
            //         htmlString+="<p>"+"Date["+i+"]= ";
            //     else if(j==1)
            //        htmlString+="<p>"+"Open["+i+"]= ";
            //     else if(j==2)
            //        htmlString+="<p>"+"High["+i+"]= ";
            //     else if(j==3)
            //        htmlString+="<p>"+"Low["+i+"]= ";
            //     else if(j==4)
            //        htmlString+="<p>"+"Last["+i+"]= ";
                 if(j==5)
                {
                  // htmlString+="<p>"+"Close["+i+"]= ";
                   close+=Number(nifty.dataset.data[i][j]);
                }
               if(j==6)
                 totalTrade+=Number(nifty.dataset.data[i][j]);
            //    else if(j==7)
            //         htmlString+="<p>"+"Turnover["+i+"]= ";
                                
            //     htmlString+= nifty.dataset.data[i][j]+"</p>";
             }
        }
        var AvgClose=close/Datasets;
        var AvgTrade=totalTrade/Datasets;

        htmlString+="Average of close= "+AvgClose;
        htmlString+="Average of Trade= "+AvgTrade;


    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

