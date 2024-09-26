import { Question } from "./QAModels.mjs"
import NavHeader from "./NavHeader";
import 'bootstrap/dist/css/bootstrap.min.css'
import Example from "./Example";
import QuestionDescription from "./QuestionDescription";
import Answers from "./Answers";

const fakeQuestion = new Question(1, "Is JavaScript better than Python?", 'luigi.derussis@gmail.com', '2024-09-25');
fakeQuestion.init();

function App() {

  return (
    <>
    <NavHeader questionNum={fakeQuestion.id}/>
    <QuestionDescription question={fakeQuestion}/>
    <Answers answers={fakeQuestion.getAnswers()}></Answers>
    </>
  )
}

export default App
