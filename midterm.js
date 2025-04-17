const hardCore = document.querySelector("#hardCore");
const survival = document.querySelector("#survival");
const submitBtn = document.querySelector("#submitBtn");
const textInput = document.querySelector("#textInput");
const audioClick = document.querySelector("#audioClick");
const commandContent = document.querySelector("#commandContent");
const easyMode = document.querySelector("#easyMode");
const command = document.querySelector("#command");

const answers = {
    'help': [
        '<p>Usage: command [argument]</p>',
        '<br>',
        '<p>Commands:</p>',
        '<br>',
        '<p>activity    [activity_#]    -    returns the downloadable URL of the file</p>',
        '<p>Example: activity activity_1</p>'
    ],
    'activity': {
        'assignment_1': "\
            <p>Assignment_1: <a href='https://docs.google.com/document/d/16JaYUJVwnCRM5cW3dvQOsCETc7sPP9lOJQ_o2osB7RU/edit?usp=drive_link' target='_blank' class='text-white'>https://docs.google.com/document/d/16JaYUJVwnCRM5cW3dvQOsCETc7sPP9lOJQ_o2osB7RU/edit?usp=drive_link</a></p>\
        ",
        'activity_1': "\
            <p>Activity_1: <a href='https://drive.google.com/drive/folders/1AVQw4hLJhUeVnPS-_pikpUXjYLf1fcDd?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1AVQw4hLJhUeVnPS-_pikpUXjYLf1fcDd?usp=sharing</a></p>\
        ",
        'activity_2': "\
            <p>Activity_2: <a href='https://drive.google.com/drive/folders/1smjuwLg3eNqRlfXxPtmRIwhePiWqPjBT?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1smjuwLg3eNqRlfXxPtmRIwhePiWqPjBT?usp=sharing</a></p>\
        ",
        'activity_3': "\
            <p>Activity_3: <a href='https://drive.google.com/drive/folders/1Y9BRm1rtNvD6c3UZuLxVRCsHXpAR2guT?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1Y9BRm1rtNvD6c3UZuLxVRCsHXpAR2guT?usp=sharing</a></p>\
        ",
        'activity_4': "\
            <p>Activity_4: <a href='https://drive.google.com/drive/folders/1piFKQn86DkdPyw-unAynYOlat8SUdEVQ?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1piFKQn86DkdPyw-unAynYOlat8SUdEVQ?usp=sharing</a></p>\
        ",
        'activity_5': "\
            <p>Activity_5: <a href='https://drive.google.com/drive/folders/1B9qZV5edDo4Aimb-9kTybTuHXTfqLKEI?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1B9qZV5edDo4Aimb-9kTybTuHXTfqLKEI?usp=sharing</a></p>\
        ",
        'activity_6': "\
            <p>Activity_6: <a href='https://drive.google.com/drive/folders/1HpdMUNBEj_KF09-RRV5zwX2gA_NKdM8T?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1HpdMUNBEj_KF09-RRV5zwX2gA_NKdM8T?usp=sharing</a></p>\
        ",
        'about_me': "\
            <p>About_Me: <a href='https://drive.google.com/file/d/1DhKojMwzHF3XEbtK7NMwxj5MBt0TORzh/view?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/file/d/1DhKojMwzHF3XEbtK7NMwxj5MBt0TORzh/view?usp=sharing</a></p>\
        ",
    },
    'quiz': {
        'quiz_1': "\
            <p>Quiz_1: <a href='https://drive.google.com/file/d/1oq_EuqfNrxoIeODnqZ_zC96KUbCaLQtc/view?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/file/d/1oq_EuqfNrxoIeODnqZ_zC96KUbCaLQtc/view?usp=sharing</a></p>\
        "
    }
}



hardCore.addEventListener('click', () => {
    command.classList.remove("visually-hidden")
    easyMode.classList.add("visually-hidden")
    audioClick.play()
})

survival.addEventListener('click', () => {
    command.classList.add("visually-hidden")
    easyMode.classList.remove("visually-hidden")
    audioClick.play()
})


// Submit button when enter key is pressed in the text field
textInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submitBtn.click()
    }
})

// Play audio and render output
submitBtn.addEventListener('click', () => {
    let textValue = textInput.value;
    audioClick.play()
    if (textValue === "/help") {
        commandContent.innerHTML = ''
        answers.help.forEach((item) => {
            commandContent.innerHTML += item
        })
    }
    if (textValue.split(" ")[0] === "activity") {
        if (textValue.split(" ")[1] in answers.activity) {
            commandContent.innerHTML = answers.activity[textValue.split(" ")[1]]            
        }
    } else if (textValue.split(" ")[0] === "quiz") {
        if (textValue.split(" ")[1] in answers.quiz) {
            commandContent.innerHTML = answers.quiz[textValue.split(" ")[1]]            
        }
    }
})