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
        '<p>activity    [activity_#]    -    returns the downloadable URL of the activity</p>',
        '<p>Example: activity final_activity_1</p>',
        '<p>project    [project_#]    -    returns the downloadable URL of the quiz</p>',
        '<p>Example: project project_1</p>'
    ],
    'activity': {
        'activity_1': "\
            <p>Final_Activity_1: <a href='https://drive.google.com/file/d/19ZOFUEtwmFXp07f6_As3a10YCnlYdYxm/view?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/file/d/19ZOFUEtwmFXp07f6_As3a10YCnlYdYxm/view?usp=sharing</a></p>\
        ",
        'activity_2': "\
            <p>Final_Activity_2: <a href='https://drive.google.com/file/d/1ZK56QO1_s10cLs6YuNTAsj-FLnCD-qMP/view?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/file/d/1ZK56QO1_s10cLs6YuNTAsj-FLnCD-qMP/view?usp=sharing</a></p>\
        ",
        'activity_3': "\
            <p>Final_Activity_3: <a href='https://drive.google.com/file/d/1uYbfKWX75nT5VcYYfPUPSf2-QkgiRVNM/view?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/file/d/1uYbfKWX75nT5VcYYfPUPSf2-QkgiRVNM/view?usp=sharing</a></p>\
        "
    },
    'project': {
        'project_1': "\
            <p>Final_Activity_1: <a href='https://drive.google.com/file/d/1cjVKBfPxqPOGKQ127Y01QqECfZo7Lec8/view?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/file/d/1cjVKBfPxqPOGKQ127Y01QqECfZo7Lec8/view?usp=sharing</a></p>\
        ",
        'project_2': "\
            <p>Final_Activity_2: <a href='https://drive.google.com/drive/folders/1EhvZ9KmvgL9f3PnOq8GXY-jEAJ-8V5Rt?usp=sharing' target='_blank' class='text-white'>https://drive.google.com/drive/folders/1EhvZ9KmvgL9f3PnOq8GXY-jEAJ-8V5Rt?usp=sharing</a></p>\
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