import Questions from "../models/Questions.js"
import mongoose from "mongoose";
export const AskQuestion = async (req,res)=>{
    const postQuestionData = req.body;
    const postQuestion =new Questions(postQuestionData)
    try {
        await postQuestion.save();
        res.status(200).json('posted a question succesfully')
    } catch (error) {
        console.log(error)
        res.status(409).json("couldn't post a new Question")
    }

}
export const getAllquestions = async (req,res) =>{
    try {
        const questionList =await Questions.find()
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json({ message :error.message})
    }
}
 
export const deleteQuestion = async (req, res) => {
    try {
      const { id: _id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('Invalid question ID');
      }
  
      await Questions.findByIdAndRemove(_id);  
      res.status(200).json({ message: 'Successfully Deleted.' });
      
    } catch (error) {
      console.error('Error during question deletion:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  