$(document).ready(function(){

    let wins = 0;
    let losses = 0;
    let totalScore = 0;
    let winningNum;
    let cirNum;
    let triNum;
    let sqrNum;
    let hexNum;

    function update(){
        $("#target-number").text(winningNum);
        $("#wins-losses").text("Wins: "+wins+"  Losses: "+losses);
        $("#total-num").text(totalScore);
        if(totalScore==winningNum) win();
        if(totalScore>winningNum) lose();
    }
    
    function selectNums(){
        winningNum = Math.floor(Math.random()*101+20).toString();
        cirNum = Math.floor(Math.random()*12+1);
        console.log("Circle Value: "+cirNum);
        triNum = Math.floor(Math.random()*12+1);
        console.log("Triangle Value: "+triNum);
        sqrNum = Math.floor(Math.random()*12+1);
        console.log("Square Value: "+sqrNum);
        hexNum = Math.floor(Math.random()*12+1);
        console.log("Hexagon Value: "+hexNum);
        totalScore = 0;
    }

    function win(){
        wins++;
        selectNums();
        update();
    }

    function lose(){
        losses++;
        selectNums();
        update();
    }

    $("img").hover(function(){
        $(this).css("border-color","rgba(255, 255, 255, 0.8)");
    }, function(){
        $(this).css("border-color","rgba(255, 255, 255, 0)");
    })

    $("#cir").click(function(){
        totalScore += cirNum;
        update();
    })
    $("#tri").click(function(){
        totalScore += triNum;
        update();
    })
    $("#sqr").click(function(){
        totalScore += sqrNum;
        update();
    })
    $("#hex").click(function(){
        totalScore += hexNum;
        update();
    })

    selectNums();
    update();
})

