const $accordian = document.querySelectorAll('.accordian')

$accordian.forEach((accordian) => {
    accordian.addEventListener('click', () => {
        const $accordian_question = accordian.querySelector(
            '.accordian__question'
        )
        const $accordian_answer = accordian.querySelector('.accordian__answer')
        const $accordian_angle_down = accordian.querySelector('.fa-angle-down')
        const $accordian_angle_up = accordian.querySelector('.fa-angle-up')
        $accordian_angle_down.classList.toggle('active')
        $accordian_angle_up.classList.toggle('active')
        $accordian_answer.classList.toggle('active')
        $accordian_question.classList.toggle('text-active')
    })
})
