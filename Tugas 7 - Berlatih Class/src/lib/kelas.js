

export class kelas{
    constructor(nama, level, instructor){
        this._nama = nama
        this._level = level
        this._intructor = instructor
        this._students = []
    }

    get name(){
        return this._nama
    }

    get level(){
        return this._level
    }

    get instructor(){
        return this._intructor
    }

    get student(){
        return this._students
    }

    set name(nama){
        return this._nama = nama
    }

    set level(level){
        return this._level = level
    }

    set instructor(instructor){
        return this._intructor = instructor
    }

    addStudent(newStud){
        this._students.push(newStud)
    }
    
    generateRandomScore(){
        return Math.floor(Math.random()*(100-50) +50)
    }

    generator(){
        this._students.map(student => {
            student.addScore(this.generateRandomScore())
        })
    }

    getFinalScore(score){
        let sum = score.reduce((a, b) => a+b, 0)
        return Math.ceil(sum / score.length)
    }

    graduate(){
        let obj = {
            participant: [],
            completed: [],
            mastered: []
        }
        this._students.map(student => {
            let finalScore = this.getFinalScore(student.score)
            student.finalScore = finalScore
            if(finalScore < 60){
                obj.participant.push(student)
            }else if(finalScore >= 60 && finalScore < 85){
                obj.completed.push(student)
            }else if(finalScore > 85){
                obj.mastered.push(student)
            }
        })
        return obj
    }
}