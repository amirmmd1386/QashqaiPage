let template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="component/quiz/style.css">
<div class="quiz-container" id="quiz">
<div class="timer-container">
  <div id="timer"><button id="start">شروع</button></div>
</div>
<div class="quiz-header">
  <h2 id="question">سوال امتحان</h2>
</div>
<ul>
  <li>
    <input type="radio" name="answer" id="a" class="answer" hidden>
    <label for="a" class="label_quiz">
      <div class="dot"></div>
      <span id="a_text">
        روی کلید شروع کلیک کنید
      </span>
    </label>
  </li>

  <li>
    <input type="radio" name="answer" id="b" class="answer" hidden>
    <label for="b" class="label_quiz">
      <div class="dot"></div>
      <span id="b_text">

      روی کلید شروع کلیک کنید
      </span>
    </label>
  </li>

  <li>
    <input type="radio" name="answer" id="c" class="answer" hidden>
    <label for="c" class="label_quiz">
      <div class="dot"></div>
      <span id="c_text">

      روی کلید شروع کلیک کنید
      </span>
    </label>
  </li>

  <li>
    <input type="radio" name="answer" id="d" class="answer" hidden>
    <label for="d" class="label_quiz">
      <div class="dot"></div>
      <span id="d_text">

      روی کلید شروع کلیک کنید
      </span>
    </label>
  </li>
</ul>

<button id="submit">بعدی</button>
</div>
`
class quiz extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
    const quizData = [
      {
        question: "نخستین رییس شناخته شده ایل قشقایی؟",
        a: "نادرقلی",
        b: "علی اصغر شاهیلو",
        c: "کواوغلو",
        d: "امیر غازی شاهیلو",
        correct: "d",
      },
      {
        question: "مکان فوت اسماعیل خان قشقایی کجاست؟",
        a: "در زندان اوین",
        b: " در حال نماز خواندن در زندان  ",
        c: "در کاخ رضا شاه",
        d: "در بیمارستان",
        correct: "b",
      },
      {
        question: "کدام تیره در قشقایی در ساز و موسیقی چیره هستند؟",
        a: "عاشیق ",
        b: "زرگر ",
        c: "اغ تومانلو ",
        d: "دندلو",
        correct: "a",
      },
      {
        question: "نام دیواره جانبی چادر سیاه قشقایی و از چه جنسی میباشد؟",
        a: "چیت ترکیبی از نی و پشم",
        b: "چیق ترکیبی نی و مو",
        c: "دیوار ترکیب از نی و مو",
        d: "هیچکدام",
        correct: "b",
      },
      {
        question: "لباسی در پوشش قشقایی که مانند عبایی بلند است؟",
        a: "آرخالق",
        b: "کپنگ",
        c: "قیناق",
        d: "هیچکدام",
        correct: "a",
      },
      {
        question: "نام دیگر رند چیست؟",
        a: "همه موارد",
        b: "تیردان",
        c: "گلیم",
        d: "سوزنی",
        correct: "d",
      },
      {
        question: "در چه روزی خسروخان تیرباران شد؟",
        a: "1361/2/3",
        b: "1362/2/5",
        c: "1361/7/9",
        d: "هیچکدام",
        correct: "c",
      },
      {
        question: "محل تولد حکیم جهانگیر خان قشقایی؟",
        a: "شیراز",
        b: "سمیرم",
        c: "دهاقان",
        d: "فیروز اباد",
        correct: "c",
      },
      {
        question: "اولین طایفه ایی از قشقایی که وارد استان فارس شدند؟",
        a: "فارسی مدان",
        b: "قراچه",
        c: "دره شوری",
        d: "کشکولی",
        correct: "a",
      },
      {
        question: "نام فرمانده نیروهای نظامی نبرد سمیرم که بود؟",
        a: "سرهنگ بیرانوند",
        b: "سرهنگ شقاقی",
        c: "رضا پهلوی",
        d: "محمدرضا پهلوی",
        correct: "b",
      },
      {
        question: "طایفه که در خود خوانین جای میداده؟",
        a: "قراچه",
        b: "کشکولی",
        c: "عمله",
        d: "دره شوری",
        correct: "c",
      },
    ];
    let okTrue = true
    let currentQuiz = 0
    let score = 0
    let timeLeft = 250;
    console.log(quizData);
    this.shadowRoot.querySelector('#start').addEventListener('click', () => {
      loadQuiz()
      okTrue = false
      let intervalTime = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if (this.shadowRoot.getElementById('timer')) {
          this.shadowRoot.getElementById('timer').innerHTML = minutes + ':' + seconds;

          timeLeft--;

          if (timeLeft < 60) {
            this.shadowRoot.getElementById('timer').style.color = '#ff6666';
          }
          if (timeLeft > 0) {
            timeLeft--;
          }
          else{
            location.reload()
          }
        }
        else {
          clearInterval(intervalTime);
          timeLeft = 0;

        }

      }, 1000);

    })



    let loadQuiz = () => {
      deselectAnswers()

      const currentQuizData = quizData[currentQuiz]

      this.shadowRoot.getElementById('question').innerText = currentQuizData.question
      this.shadowRoot.getElementById('a_text').innerText = currentQuizData.a
      this.shadowRoot.getElementById('b_text').innerText = currentQuizData.b
      this.shadowRoot.getElementById('c_text').innerText = currentQuizData.c
      this.shadowRoot.getElementById('d_text').innerText = currentQuizData.d
    }

    let deselectAnswers = () => {
      this.shadowRoot.querySelectorAll('.answer').forEach(answerEl => answerEl.checked = false)
    }


    let getSelected = () => {
      let answer

      this.shadowRoot.querySelectorAll('.answer').forEach(answerEl => {
        if (answerEl.checked) {
          answer = answerEl.id
        }
      })

      return answer
    }


    this.shadowRoot.getElementById('submit').addEventListener('click', () => {
      const answer = getSelected()

      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++
        }

        currentQuiz++
        if (currentQuiz < quizData.length && okTrue === false) {
          loadQuiz()
        } else {
          this.shadowRoot.getElementById('quiz').innerHTML = `
                     
                      <h2>${score} پاسخ صحیح از ${quizData.length} سوال </h2>
                    
                      <button onclick="location.reload()">شروع مجدد</button>
                  `
        }
      }
      else {
        console.log('no valid')
        handelValidation('not_valid')
      }
    })

  }
}
export { quiz }