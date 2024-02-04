import mongoose from 'mongoose'
const QuestionSchema =mongoose.Schema({
    questionTitle :{type:String,required:'question must have a title'},
    questionBody :{type:String,required:'question must have a Body'},
    questionTags :{type:[String],required:'question must have a Tags'},
    noOfAnswers:{type:Number,default:0},
    upVotes:{type:[String],default:[]},
    votes:{type :[String],default:[]},
    userPosted :{type:String,required:'Question must have anchor'},
    userId:{type:String},
    time:{type:Date,default:Date.now},
    answer:[{
        answerBody:String,
        userAnswered :String,
        userId:String,
        answeredOn:{type :Date ,default:Date.now}
    }]
})
export default mongoose.model("Questions",QuestionSchema)

