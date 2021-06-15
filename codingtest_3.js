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
                obj[clothes[i][1]]++; //객체에 이미 같은 key값이 존재하면 +1
            else
                obj[clothes[i][1]]=1; //새로운 종류의 값이면 1
            console.log(obj);
        }
    for(var key in obj)
        answer*=(obj[key]+1); //각 종류마다 입지않는 경우 고려
    return answer-1; //모두 안입는 경우는 없으니 제외
}