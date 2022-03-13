function graduate(arr) {
    grade = []
    for (let i = 0; i < 3; i++) {
        if(arr[i].score < 60){
            grade.push("participated")
        }else if(arr[i].score > 60 && arr[i].score < 86){
            grade.push("completed")
        }else if(arr[i].score > 85){
            grade.push("mastered")
        }

    var nama1 = arr[0].name
    var nama2 = arr[1].name
    var nama3 = arr[2].name
    var nama4 = arr[3].name
        
    var Laravel =[
            { nama: "Ahmad", score: 80, grade: grade[0]},
            { nama: nama3.name, score: arr[2].score, grade: grade[2]}

        ]
    var Vuejs = [
            {
            nama: arr[1].name,
            score: arr[1].score,
            grade: grade[1]
            }
        ]
    var Reactjs = [
            {
            nama: "arr[3].name",
            score: arr[3].score,
            grade: grade[3]
            }
        ]
    }
    console.log("Laravel: " + Laravel)
    console.log("Vuejs: " + Vuejs)
    console.log("Reactjs: " + Reactjs)
}

var arr = [

    {name:"Ahmad",score:80, class: "Laravel"},
    
    {name:"Regi",score:86, class: "Vuejs"},
    
    {name:"Robert",score:59, class: "Laravel"},
    
    {name:"Bondra",score:81, class: "Reactjs" }
    
    ]

console.log(graduate(arr))