//אתחול המשחק
//מערך הכרטיסים
const cards_arr = [
  { src: "../../images/0.jpg", data_num: 1, data_color: "red", data_fill: "empty", data_shape: "diamond", index_arr: 0 },
  { src: "../../images/1.jpg", data_num: 2, data_color: "red", data_fill: "empty", data_shape: "diamond", index_arr: 1 },
  { src: "../../images/2.jpg", data_num: 3, data_color: "red", data_fill: "empty", data_shape: "diamond", index_arr: 2 },
  { src: "../../images/3.jpg", data_num: 1, data_color: "red", data_fill: "empty", data_shape: "ellipse", index_arr: 3 },
  { src: "../../images/4.jpg", data_num: 2, data_color: "red", data_fill: "empty", data_shape: "ellipse", index_arr: 4 },
  { src: "../../images/5.jpg", data_num: 3, data_color: "red", data_fill: "empty", data_shape: "ellipse", index_arr: 5 },
  { src: "../../images/6.jpg", data_num: 1, data_color: "red", data_fill: "empty", data_shape: "wave", index_arr: 6 },
  { src: "../../images/7.jpg", data_num: 2, data_color: "red", data_fill: "empty", data_shape: "wave", index_arr: 7 },
  { src: "../../images/8.jpg", data_num: 3, data_color: "red", data_fill: "empty", data_shape: "wave", index_arr: 8 },
  { src: "../../images/9.jpg", data_num: 1, data_color: "red", data_fill: "striped", data_shape: "diamond", index_arr: 9 },
  { src: "../../images/10.jpg", data_num: 2, data_color: "red", data_fill: "striped", data_shape: "diamond", index_arr: 10 },
  { src: "../../images/11.jpg", data_num: 3, data_color: "red", data_fill: "striped", data_shape: "diamond", index_arr: 11 },
  { src: "../../images/12.jpg", data_num: 1, data_color: "red", data_fill: "striped", data_shape: "ellipse", index_arr: 12 },
  { src: "../../images/13.jpg", data_num: 2, data_color: "red", data_fill: "striped", data_shape: "ellipse", index_arr: 13 },
  { src: "../../images/14.jpg", data_num: 3, data_color: "red", data_fill: "striped", data_shape: "ellipse", index_arr: 14 },
  { src: "../../images/15.jpg", data_num: 1, data_color: "red", data_fill: "striped", data_shape: "wave", index_arr: 15 },
  { src: "../../images/16.jpg", data_num: 2, data_color: "red", data_fill: "striped", data_shape: "wave", index_arr: 16 },
  { src: "../../images/17.jpg", data_num: 3, data_color: "red", data_fill: "striped", data_shape: "wave", index_arr: 17 },
  { src: "../../images/18.jpg", data_num: 1, data_color: "red", data_fill: "full", data_shape: "diamond", index_arr: 18 },
  { src: "../../images/19.jpg", data_num: 2, data_color: "red", data_fill: "full", data_shape: "diamond", index_arr: 19 },
  { src: "../../images/20.jpg", data_num: 3, data_color: "red", data_fill: "full", data_shape: "diamond", index_arr: 20 },
  { src: "../../images/21.jpg", data_num: 1, data_color: "red", data_fill: "full", data_shape: "ellipse", index_arr: 21 },
  { src: "../../images/22.jpg", data_num: 2, data_color: "red", data_fill: "full", data_shape: "ellipse", index_arr: 22 },
  { src: "../../images/23.jpg", data_num: 3, data_color: "red", data_fill: "full", data_shape: "ellipse", index_arr: 23 },
  { src: "../../images/24.jpg", data_num: 1, data_color: "red", data_fill: "full", data_shape: "wave", index_arr: 24 },
  { src: "../../images/25.jpg", data_num: 2, data_color: "red", data_fill: "full", data_shape: "wave", index_arr: 25 },
  { src: "../../images/26.jpg", data_num: 3, data_color: "red", data_fill: "full", data_shape: "wave", index_arr: 26 },
  { src: "../../images/27.jpg", data_num: 1, data_color: "green", data_fill: "empty", data_shape: "diamond", index_arr: 27 },
  { src: "../../images/28.jpg", data_num: 2, data_color: "green", data_fill: "empty", data_shape: "diamond", index_arr: 28 },
  { src: "../../images/29.jpg", data_num: 3, data_color: "green", data_fill: "empty", data_shape: "diamond", index_arr: 29 },
  { src: "../../images/30.jpg", data_num: 1, data_color: "green", data_fill: "empty", data_shape: "ellipse", index_arr: 30 },
  { src: "../../images/31.jpg", data_num: 2, data_color: "green", data_fill: "empty", data_shape: "ellipse", index_arr: 31 },
  { src: "../../images/32.jpg", data_num: 3, data_color: "green", data_fill: "empty", data_shape: "ellipse", index_arr: 32 },
  { src: "../../images/33.jpg", data_num: 1, data_color: "green", data_fill: "empty", data_shape: "wave", index_arr: 33 },
  { src: "../../images/34.jpg", data_num: 2, data_color: "green", data_fill: "empty", data_shape: "wave", index_arr: 34 },
  { src: "../../images/35.jpg", data_num: 3, data_color: "green", data_fill: "empty", data_shape: "wave", index_arr: 35 },
  { src: "../../images/36.jpg", data_num: 1, data_color: "green", data_fill: "striped", data_shape: "diamond", index_arr: 36 },
  { src: "../../images/37.jpg", data_num: 2, data_color: "green", data_fill: "striped", data_shape: "diamond", index_arr: 37 },
  { src: "../../images/38.jpg", data_num: 3, data_color: "green", data_fill: "striped", data_shape: "diamond", index_arr: 38 },
  { src: "../../images/39.jpg", data_num: 1, data_color: "green", data_fill: "striped", data_shape: "ellipse", index_arr: 39 },
  { src: "../../images/40.jpg", data_num: 2, data_color: "green", data_fill: "striped", data_shape: "ellipse", index_arr: 40 },
  { src: "../../images/41.jpg", data_num: 3, data_color: "green", data_fill: "striped", data_shape: "ellipse", index_arr: 41 },
  { src: "../../images/42.jpg", data_num: 1, data_color: "green", data_fill: "striped", data_shape: "wave", index_arr: 42 },
  { src: "../../images/43.jpg", data_num: 2, data_color: "green", data_fill: "striped", data_shape: "wave", index_arr: 43 },
  { src: "../../images/44.jpg", data_num: 3, data_color: "green", data_fill: "striped", data_shape: "wave", index_arr: 44 },
  { src: "../../images/45.jpg", data_num: 1, data_color: "green", data_fill: "full", data_shape: "diamond", index_arr: 45 },
  { src: "../../images/46.jpg", data_num: 2, data_color: "green", data_fill: "full", data_shape: "diamond", index_arr: 46 },
  { src: "../../images/47.jpg", data_num: 3, data_color: "green", data_fill: "full", data_shape: "diamond", index_arr: 47 },
  { src: "../../images/48.jpg", data_num: 1, data_color: "green", data_fill: "full", data_shape: "ellipse", index_arr: 48 },
  { src: "../../images/49.jpg", data_num: 2, data_color: "green", data_fill: "full", data_shape: "ellipse", index_arr: 49 },
  { src: "../../images/50.jpg", data_num: 3, data_color: "green", data_fill: "full", data_shape: "ellipse", index_arr: 50 },
  { src: "../../images/51.jpg", data_num: 1, data_color: "green", data_fill: "full", data_shape: "wave", index_arr: 51 },
  { src: "../../images/52.jpg", data_num: 2, data_color: "green", data_fill: "full", data_shape: "wave", index_arr: 52 },
  { src: "../../images/53.jpg", data_num: 3, data_color: "green", data_fill: "full", data_shape: "wave", index_arr: 53 },
  { src: "../../images/54.jpg", data_num: 1, data_color: "purple", data_fill: "empty", data_shape: "diamond", index_arr: 54 },
  { src: "../../images/55.jpg", data_num: 2, data_color: "purple", data_fill: "empty", data_shape: "diamond", index_arr: 55 },
  { src: "../../images/56.jpg", data_num: 3, data_color: "purple", data_fill: "empty", data_shape: "diamond", index_arr: 56 },
  { src: "../../images/57.jpg", data_num: 1, data_color: "purple", data_fill: "empty", data_shape: "ellipse", index_arr: 57 },
  { src: "../../images/58.jpg", data_num: 2, data_color: "purple", data_fill: "empty", data_shape: "ellipse", index_arr: 58 },
  { src: "../../images/59.jpg", data_num: 3, data_color: "purple", data_fill: "empty", data_shape: "ellipse", index_arr: 59 },
  { src: "../../images/60.jpg", data_num: 1, data_color: "purple", data_fill: "empty", data_shape: "wave", index_arr: 60 },
  { src: "../../images/61.jpg", data_num: 2, data_color: "purple", data_fill: "empty", data_shape: "wave", index_arr: 61 },
  { src: "../../images/62.jpg", data_num: 3, data_color: "purple", data_fill: "empty", data_shape: "wave", index_arr: 62 },
  { src: "../../images/63.jpg", data_num: 1, data_color: "purple", data_fill: "striped", data_shape: "diamond", index_arr: 63 },
  { src: "../../images/64.jpg", data_num: 2, data_color: "purple", data_fill: "striped", data_shape: "diamond", index_arr: 64 },
  { src: "../../images/65.jpg", data_num: 3, data_color: "purple", data_fill: "striped", data_shape: "diamond", index_arr: 65 },
  { src: "../../images/66.jpg", data_num: 1, data_color: "purple", data_fill: "striped", data_shape: "ellipse", index_arr: 66 },
  { src: "../../images/67.jpg", data_num: 2, data_color: "purple", data_fill: "striped", data_shape: "ellipse", index_arr: 67 },
  { src: "../../images/68.jpg", data_num: 3, data_color: "purple", data_fill: "striped", data_shape: "ellipse", index_arr: 68 },
  { src: "../../images/69.jpg", data_num: 1, data_color: "purple", data_fill: "striped", data_shape: "wave", index_arr: 69 },
  { src: "../../images/70.jpg", data_num: 2, data_color: "purple", data_fill: "striped", data_shape: "wave", index_arr: 70 },
  { src: "../../images/71.jpg", data_num: 3, data_color: "purple", data_fill: "striped", data_shape: "wave", index_arr: 71 },
  { src: "../../images/72.jpg", data_num: 1, data_color: "purple", data_fill: "full", data_shape: "diamond", index_arr: 72 },
  { src: "../../images/73.jpg", data_num: 2, data_color: "purple", data_fill: "full", data_shape: "diamond", index_arr: 73 },
  { src: "../../images/74.jpg", data_num: 3, data_color: "purple", data_fill: "full", data_shape: "diamond", index_arr: 74 },
  { src: "../../images/75.jpg", data_num: 1, data_color: "purple", data_fill: "full", data_shape: "ellipse", index_arr: 75 },
  { src: "../../images/76.jpg", data_num: 2, data_color: "purple", data_fill: "full", data_shape: "ellipse", index_arr: 76 },
  { src: "../../images/77.jpg", data_num: 3, data_color: "purple", data_fill: "full", data_shape: "ellipse", index_arr: 77 },
  { src: "../../images/78.jpg", data_num: 1, data_color: "purple", data_fill: "full", data_shape: "wave", index_arr: 78 },
  { src: "../../images/79.jpg", data_num: 2, data_color: "purple", data_fill: "full", data_shape: "wave", index_arr: 79 },
  { src: "../../images/80.jpg", data_num: 3, data_color: "purple", data_fill: "full", data_shape: "wave", index_arr: 80 }
];
//המשחק מתחיל בעת טעינה של הדף
const load = window.onload = () => {
  let cardDeck, remainingCards = 80;
  let card = [];
  let pressed_cards = [];
  let clueCards = [];
  let score = 0;
  let timeLeft;
  function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const new_game = () => {
    cardDeck = [...cards_arr];//spread
    let rand_card;
    for (let i = 0; i < 12; i++) {
      rand_card = get_random(0, remainingCards);
      remainingCards--;
      let button = document.querySelector(`#card${i}`);
      let img = document.createElement('img');
      img.src = cardDeck[rand_card].src;
      img.style.height = "200px";
      img.style.width = "150px"

      button.appendChild(img); // הוספת התמונה לכפתור
      card[i] = cardDeck[rand_card];
      cardDeck.splice(rand_card, 1);
    }
  }

  //פונקצית זו מקבלת אוביקט ועוד ערך מחרוזתי- ולכל מפתח באוביקט משרשרת את הערך שהתקבל
 
  const appendStringToKeys = (obj, str) => {
    const updatedEntries = Object.entries(obj).map(([key, value]) => [`${key}${str}`, value]);
    return Object.fromEntries(updatedEntries);
  };
  //הפונקציה בודקת האםם שלושת הכרטיסים שלחצו הם סט
  const is_set = (pressedCards) => {
    // בשביל ששמות המפתחות של האוביקטים יהיו שווים לשמות של משתני דיסטרקטינג
    //שלחנו לפונקציה הנ"ל שמשרשרת למפתחות של האוביקט את הערך הרצוי 
    pressedCards[0].object_p = appendStringToKeys (pressedCards[0].object_p, "0");
    let { data_num0, data_color0, data_fill0, data_shape0 } = pressedCards[0].object_p;
    pressedCards[1].object_p = appendStringToKeys (pressedCards[1].object_p, "1");
    let { data_num1, data_color1, data_fill1, data_shape1 } = pressedCards[1].object_p;
    pressedCards[2].object_p = appendStringToKeys (pressedCards[2].object_p, "2");
    let { data_num2, data_color2, data_fill2, data_shape2 } = pressedCards[2].object_p;

    // בדיקה האם הקלפים הם סט  על כל פרמטר בודקים או שכולם שווים או שכולם שונים 
    if (
      ((data_color0 == data_color1 && data_color1 == data_color2) ||
        (data_color0 != data_color1 && data_color1 != data_color2 && data_color2 != data_color0)) &&
      ((data_fill0 == data_fill1 && data_fill1 == data_fill2) ||
        (data_fill0 != data_fill1 && data_fill0 != data_fill2 && data_fill1 != data_fill2)) &&
      ((data_num0 == data_num1 && data_num1 == data_num2) ||
        (data_num0 != data_num1 && data_num0 != data_num2 && data_num1 != data_num2)) &&
      ((data_shape0 == data_shape1 && data_shape1 == data_shape2) ||
        (data_shape0 != data_shape1 && data_shape0 != data_shape2 && data_shape1 != data_shape2)))
      return true;
    return false;
  }
  // (הפונקציה מקבלת את האוביקט עליו לחצו (לא אלמנט  
  //מגרילה אוביקט כרטיס חדש מהמערך הכולל ומעדכנת את מערך הכרטיסים שעל הלוח לכרטיס החדש שהוגרל
  //וכן משנה את התמונה
 
  const replaceCard = (clickedCard) => {
    if (remainingCards >= 2) {
      let randomIndex = get_random(0, remainingCards);
      remainingCards--;
      
      let cardButton = document.querySelector(`#${clickedCard.button_p}`);
      cardButton.firstChild.src = cardDeck[randomIndex].src;
      
      card[clickedCard.button_p.substring(4)] = cardDeck[randomIndex];
      cardDeck.splice(randomIndex, 1);
    } else {
      document.querySelector(`#${clickedCard.button_p}`).style.display = "none";
    }
  };
 
  
  const replaceFirstThreeCards = () => {
    pressed_cards = [];
    if (remainingCards >= 3) {
      for (let i = 0; i < 3; i++) {
        const randomIndex = get_random(0, remainingCards); 
        const cardElement = document.querySelector(`#card${i}`).firstChild; 
        cardElement.src = cardDeck[randomIndex].src;
        [card[i], cardDeck[randomIndex]] = [cardDeck[randomIndex], card[i]];
      }
    }
  };

  
 // הגדרת פונקציית קליק לכל כרטיס
document.querySelectorAll(".card").forEach(cardElement => {
  cardElement.onclick = event => {
    cardElement.style.border = "3px solid rgba(114 52 52 / 90%)";
    document.querySelector("#press").play();

    const cardIndex = cardElement.id.substring(4);
    let isNewSelection = true;

    // בדיקה אם הכרטיס כבר נבחר
    pressed_cards.forEach((pressedCard, index) => {
      if (cardIndex === pressedCard.button_p.substring(4)) {
        isNewSelection = false;
        document.querySelector(`#${pressedCard.button_p}`).style.border = "none";
        pressed_cards.splice(index, 1);
      }
    });

    // אם הכרטיס לא נבחר קודם
    if (isNewSelection) {
      pressed_cards.push({
        button_p: cardElement.id,
        object_p: card[cardIndex]
      });

      // אם נבחרו שלושה כרטיסים
      if (pressed_cards.length === 3) {
        const isSet = is_set(pressed_cards);

        if (isSet) {
          score++;
          if (cardDeck.length === 0) {
            window.location.href = "../html/gameOver.html";
          }
          // החלפת כרטיסים לסט שנמצא
          pressed_cards.forEach(pressedCard => replaceCard(pressedCard));
        } else {
          score--;
        }

        // הסרת מסגרת מהכרטיסים שנבחרו לאחר זמן קצר
        setTimeout(() => {
          pressed_cards.forEach(pressedCard => {
            document.querySelector(`#${pressedCard.button_p}`).style.border = "none";
          });
          pressed_cards = [];
        }, 400);
      }
    }
  };
});
 
  const endGame = () => {
    clearInterval(time);
    let itemCount = localStorage.getItem("count");
    if (!itemCount) {
      itemCount = 1;
    } else {
      itemCount++;
    }
    localStorage.setItem("count", itemCount);
  
    const scoreObj = {
      name: localStorage.getItem("userName"),
      scorePlayer: score
    };
  
    localStorage.setItem(`user${itemCount}`, JSON.stringify(scoreObj));
  
    window.location.href = "../html/gameOver.html";
  };
  const initializeTimerDisplay = () => {
    // יצירת אלמנט דיב עבור הטיימר
    const timerDiv = document.createElement("div");
    timerDiv.style.position = "absolute";
    timerDiv.style.color = "white";
    timerDiv.style.left = "5%";
    timerDiv.style.fontSize = "50px"; // שימו לב לתקן את השם ל-`fontSize`
  
    // הוספת קלאס לאלמנט
    timerDiv.classList.add("timer");
  
    // הוספת הדיב לתוך אלמנט הכפתור
    document.querySelector("#btn").appendChild(timerDiv);
  
    // הפעלת טיימר
    time = setInterval(() => {
      if (timeLeft >= 0) {
        // חישוב דקות ושניות
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        // עדכון התוכן של הדיב עם הזמן הנותר
        timerDiv.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
      } else {
        // סיום המשחק כאשר הזמן נגמר
        endGame();
      }
    }, 1000);
  };
  
  const levelForm = () => {
    document.querySelector("#nameLocal").innerHTML = localStorage.getItem("userName");
    document.querySelector("#levelA").onclick = (e) => {
      e.preventDefault();
      document.querySelector("#myform").style.display = "none";
      timeLeft = 5* 60;
      initializeTimerDisplay(timeLeft);

    }
    document.querySelector("#levelB").onclick = (e) => {
      e.preventDefault();
      document.querySelector("#myform").style.display = "none";
      timeLeft = 3* 60;
      initializeTimerDisplay(timeLeft);

    }

  }
 
  function showPopup(message) {
    // יצירת אלמנט popup
    let popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1000';

    // יצירת אלמנט טקסט להודעה
    let messageElement = document.createElement('p');
    messageElement.textContent = message;
    popup.appendChild(messageElement);

    // כפתור לסגירת ה-popup
    let closeButton = document.createElement('button');
    closeButton.textContent = 'סגור';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };
    popup.appendChild(closeButton);

    // הוספת ה-popup לגוף הדף
    document.body.appendChild(popup);
}

// דוגמה לשימוש בפונקציה במקום alert
showPopup
  const clue = () => {
    for (let i = 0; i < card.length - 2; i++) {
      for (let j = i + 1; j < card.length - 1; j++) {
        for (let k = j + 1; k < card.length; k++) {
          const s="card";
          const clueCards = [
            { button_p: s.concat(i.toString()), object_p: card[i] },
            { button_p: s.concat(j.toString()), object_p: card[j] },
            { button_p: s.concat(k.toString()), object_p: card[k] },
          ];
  
          if (is_set(clueCards)) {
            highlightCard(clueCards[0].button_p);
            setTimeout(() => {
              removeHighlight(clueCards[0].button_p);
            }, 2000);
            return;
          }
        }
      }
    }
  
    showPopup("No set found, please change the cards!");
    
  };
  
  const highlightCard = (cardId) => {
    document.querySelector(`#${cardId}`).style.border = "3px rgb(248 163 87) solid";
  };
  
  const removeHighlight = (cardId) => {
    document.querySelector(`#${cardId}`).style.border = "none";
  };
  document.querySelector("#changeCards").onclick = () => {

    replaceFirstThreeCards();
  }
  document.querySelector("#clue").onclick = () => {
    clue();

  }
  document.querySelector("#introduction").onclick = () => {

    window.location.href = "../html/introduction.html"
  }
  document.querySelector("#newGame").onclick = () => {
    window.location.reload()

  }
  levelForm();
  new_game();
}
