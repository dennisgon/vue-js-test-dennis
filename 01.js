function grade(score){
    if(score <= 59){
        return "E";
    }else if(score>=60 && score<=69){
        return "D";
    }else if(score>=70 && score<=79){
        return "C";
    }else if(score>=80 && score<=89){
        return "B";
    }else if(score>=90){
        return "A"
    }
}
