export default async function request(){
    let questions = fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data => {
        questions = data.results
        return questions
    })
    return questions
}
