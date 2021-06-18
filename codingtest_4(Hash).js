/*function solution(clothes) {
    var answer = 1;
    var obj={};
    for(var i=0;i<clothes.length;i++)
    {
        obj[clothes[i][1]]=(obj[clothes[i][1]]||1)+1;
    }
    for(var key in obj)
    {
        answer*=obj[key]
    }
    return answer-1;
}*/

function solution(clothes){
    var answer=1;
    var obj={};
    for(var i=0;i<clothes.length;i++)
        {
            if(obj[clothes[i][1]]>=1)
                obj[clothes[i][1]]++;
            else
                obj[clothes[i][1]]=1;
            console.log(obj);
        }
    for(var key in obj)
        answer*=(obj[key]+1);
    return answer-1;
}