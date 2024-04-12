export default async function request(setting){
    const numQuestions =parseInt(setting.numberOfQuestions)
    const diff = setting.difficulty.toLowerCase()
    let questions = fetch(`https://opentdb.com/api.php?amount=${numQuestions}&difficulty=${diff}&type=multiple`)
    .then(res => res.json())
    .then(data => {
        questions = data.results
        return questions
    })
    return questions
}
