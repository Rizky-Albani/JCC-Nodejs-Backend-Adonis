export class student{
    constructor(nama){
        this._name = nama
        this._score = []
        this._finalScore = 0
    }

    get name(){
        return this._name
    }

    set name(nama){
        return this._name = nama
    }

    get finalScore(){
        return this._finalScore
    }

    set finalScore(score){
        return this._finalScore = score
    }

    addScore(score){
        this._score.push(score)
    }

    get score(){
        return this._score
    }
}