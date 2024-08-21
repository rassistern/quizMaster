import {Select} from "../../components/select"
const categories = [
    {
        id: 0,
        value: "",
        label: "Select Category"
        
    },
    {
        id: 1,
        value: "general",
        label: "General Knowledge"
    },
    {
        id: 2,
        value: "Sports",
        label: "sports"
    },
    {
        id: 2,
        value: "science",
        label: "Science"
    }
 ]

 const difficulties = [
    {
        id: 0,
        value: "",
        label: "Select Difficulty"
    },
    {
        id: 1,
        value: "easy",
        label: "Easy"
    },
    {
        id: 2,
        value: "Medium",
        label: "medium"
    },
    {
        id: 2,
        value: "hard",
        label: "Hard"
    }
 ]
 
 const types = [
    {
        id: 0,
        value: "",
        label: "Select Type"
    },
    {
        id: 1,
        value: "multiple",
        label: "Multiple Choice"
    },
    {
        id: 2,
        value: "boolean",
        label: "True/False"
    }
 ]

 const times = [
    {
        id: 0,
        value: "",
        label: "Select Time"
    },
    {
        id: 1,
        value: "1",
        label: "1 minute"
    },
    {
        id: 2,
        value: "2",
        label: "2 minutes"
    }
    ,
    {
        id: 3,
        value: "5",
        label: "5 minutes"
    }
 ]

export const WelcomeScreen = () => {
    return(
        <div>
            <input type="number"  id="numberOfQuestions"
        min="5"
        max="15"/><br />
            <Select options={categories} /><br />
            <Select options={difficulties} /><br />
            <Select options={types} /><br />
            <Select options={times} /><br />
        </div>
    )
}