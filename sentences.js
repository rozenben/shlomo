const sentencesFile = {
  level1: [
    { english: "Hello.", hebrew: "שלום." },
    { english: "Thank you.", hebrew: "תודה." },
    { english: "Good morning.", hebrew: "בוקר טוב." },
    { english: "Goodbye.", hebrew: "להתראות." },
    { english: "Yes.", hebrew: "כן." },
    { english: "No.", hebrew: "לא." },
    { english: "Please.", hebrew: "בבקשה." },
    { english: "Sorry.", hebrew: "סליחה." },
    { english: "My name is John.", hebrew: "קוראים לי ג'ון." },
    { english: "I am fine.", hebrew: "אני בסדר." },
  ],

  level2: [
    { english: "I live in Tel Aviv.", hebrew: "אני גר בתל אביב." },
    { english: "How are you?", hebrew: "מה שלומך?" },
    { english: "I like pizza.", hebrew: "אני אוהב פיצה." },
    { english: "This is my house.", hebrew: "זה הבית שלי." },
    { english: "I have a car.", hebrew: "יש לי מכונית." },
    { english: "Do you speak English?", hebrew: "אתה מדבר אנגלית?" },
    { english: "Where is the bus stop?", hebrew: "איפה תחנת האוטובוס?" },
    { english: "I need help.", hebrew: "אני צריך עזרה." },
    { english: "It is raining.", hebrew: "יורד גשם." },
    { english: "Can you open the door?", hebrew: "אתה יכול לפתוח את הדלת?" },
  ],

  level3: [
    { english: "I work in a big company.", hebrew: "אני עובד בחברה גדולה." },
    { english: "She is my sister.", hebrew: "היא אחותי." },
    { english: "We are going to the park.", hebrew: "אנחנו הולכים לפארק." },
    { english: "He likes to play soccer.", hebrew: "הוא אוהב לשחק כדורגל." },
    { english: "This book is interesting.", hebrew: "הספר הזה מעניין." },
    { english: "I want to learn English.", hebrew: "אני רוצה ללמוד אנגלית." },
    { english: "They are very friendly.", hebrew: "הם מאוד ידידותיים." },
    {
      english: "I usually wake up early.",
      hebrew: "בדרך כלל אני מתעורר מוקדם.",
    },
    { english: "She has a lot of friends.", hebrew: "יש לה הרבה חברים." },
    { english: "Can I ask you a question?", hebrew: "אפשר לשאול אותך שאלה?" },
  ],

  level4: [
    {
      english: "I have never been to London.",
      hebrew: "מעולם לא הייתי בלונדון.",
    },
    { english: "He is reading a newspaper.", hebrew: "הוא קורא עיתון." },
    {
      english: "We will visit the museum tomorrow.",
      hebrew: "מחר נבקר במוזיאון.",
    },
    { english: "She is always on time.", hebrew: "היא תמיד מגיעה בזמן." },
    {
      english: "I need to buy a new phone.",
      hebrew: "אני צריך לקנות טלפון חדש.",
    },
    {
      english: "They are planning a trip to Italy.",
      hebrew: "הם מתכננים טיול לאיטליה.",
    },
    {
      english: "The weather is very hot today.",
      hebrew: "היום מזג האוויר חם מאוד.",
    },
    {
      english: "He enjoys playing the guitar.",
      hebrew: "הוא נהנה לנגן בגיטרה.",
    },
    { english: "Can you give me some advice?", hebrew: "אתה יכול לתת לי עצה?" },
    {
      english: "I am thinking about moving to a new city.",
      hebrew: "אני חושב לעבור לעיר חדשה.",
    },
    [
        {"english": "I like to eat pizza.", "hebrew": "אני אוהב לאכול פיצה."},
        {"english": "She is reading a book.", "hebrew": "היא קוראת ספר."},
        {"english": "He is watching a movie.", "hebrew": "הוא צופה בסרט."},
        {"english": "We go to school every day.", "hebrew": "אנחנו הולכים לבית הספר כל יום."},
        {"english": "They are playing in the park.", "hebrew": "הם משחקים בפארק."},
        {"english": "I have a cat at home.", "hebrew": "יש לי חתול בבית."},
        {"english": "She likes to draw pictures.", "hebrew": "היא אוהבת לצייר תמונות."},
        {"english": "He is writing a letter.", "hebrew": "הוא כותב מכתב."},
        {"english": "We are going to the store.", "hebrew": "אנחנו הולכים לחנות."},
        {"english": "They like to play soccer.", "hebrew": "הם אוהבים לשחק כדורגל."},
        {"english": "I am studying for a test.", "hebrew": "אני לומד למבחן."},
        {"english": "She is cooking dinner.", "hebrew": "היא מבשלת ארוחת ערב."},
        {"english": "He is cleaning his room.", "hebrew": "הוא מנקה את החדר שלו."},
        {"english": "We are listening to music.", "hebrew": "אנחנו מקשיבים למוזיקה."},
        {"english": "They are talking on the phone.", "hebrew": "הם מדברים בטלפון."},
        {"english": "I like to play video games.", "hebrew": "אני אוהב לשחק במשחקי וידאו."},
        {"english": "She is learning English.", "hebrew": "היא לומדת אנגלית."},
        {"english": "He is reading the newspaper.", "hebrew": "הוא קורא את העיתון."},
        {"english": "We are watching TV.", "hebrew": "אנחנו צופים בטלוויזיה."},
        {"english": "They are eating lunch.", "hebrew": "הם אוכלים ארוחת צהריים."},
        {"english": "I am writing a story.", "hebrew": "אני כותב סיפור."},
        {"english": "She is going to work.", "hebrew": "היא הולכת לעבודה."},
        {"english": "He is playing the piano.", "hebrew": "הוא מנגן בפסנתר."},
        {"english": "We are going for a walk.", "hebrew": "אנחנו יוצאים להליכה."},
        {"english": "They are taking a nap.", "hebrew": "הם מנמנמים."},
        {"english": "I am learning to swim.", "hebrew": "אני לומד לשחות."},
        {"english": "She is practicing the guitar.", "hebrew": "היא מתאמנת על הגיטרה."},
        {"english": "He is drawing a picture.", "hebrew": "הוא מצייר תמונה."},
        {"english": "We are cleaning the house.", "hebrew": "אנחנו מנקים את הבית."},
        {"english": "They are reading books.", "hebrew": "הם קוראים ספרים."},
        {"english": "I like to watch cartoons.", "hebrew": "אני אוהב לצפות בסרטים מצוירים."},
        {"english": "She is buying groceries.", "hebrew": "היא קונה מצרכים."},
        {"english": "He is fixing the car.", "hebrew": "הוא מתקן את המכונית."},
        {"english": "We are playing board games.", "hebrew": "אנחנו משחקים משחקי לוח."},
        {"english": "They are planting flowers.", "hebrew": "הם שותלים פרחים."},
        {"english": "I am making a sandwich.", "hebrew": "אני מכין סנדוויץ'."},
        {"english": "She is feeding the dog.", "hebrew": "היא מאכילה את הכלב."},
        {"english": "He is studying math.", "hebrew": "הוא לומד מתמטיקה."},
        {"english": "We are building a puzzle.", "hebrew": "אנחנו בונים פאזל."},
        {"english": "They are riding their bikes.", "hebrew": "הם רוכבים על האופניים שלהם."},
        {"english": "I like to draw animals.", "hebrew": "אני אוהב לצייר חיות."},
        {"english": "She is painting a picture.", "hebrew": "היא מציירת תמונה."},
        {"english": "He is learning to read.", "hebrew": "הוא לומד לקרוא."},
        {"english": "We are visiting our friends.", "hebrew": "אנחנו מבקרים את החברים שלנו."},
        {"english": "They are baking cookies.", "hebrew": "הם אופים עוגיות."},
        {"english": "I am playing with my toys.", "hebrew": "אני משחק עם הצעצועים שלי."},
        {"english": "She is watering the plants.", "hebrew": "היא משקה את הצמחים."},
        {"english": "He is reading a magazine.", "hebrew": "הוא קורא מגזין."},
        {"english": "We are learning new words.", "hebrew": "אנחנו לומדים מילים חדשות."},
        {"english": "They are singing a song.", "hebrew": "הם שרים שיר."},
        {"english": "I like to listen to the radio.", "hebrew": "אני אוהב להאזין לרדיו."},
        {"english": "She is writing in her diary.", "hebrew": "היא כותבת ביומן שלה."},
        {"english": "He is brushing his teeth.", "hebrew": "הוא מצחצח את השיניים שלו."},
        {"english": "We are playing with our dog.", "hebrew": "אנחנו משחקים עם הכלב שלנו."},
        {"english": "They are going to the park.", "hebrew": "הם הולכים לפארק."},
        {"english": "I am organizing my room.", "hebrew": "אני מארגן את החדר שלי."},
        {"english": "She is cleaning the dishes.", "hebrew": "היא מנקה את הכלים."},
        {"english": "He is learning how to cook.", "hebrew": "הוא לומד איך לבשל."},
        {"english": "We are planning a trip.", "hebrew": "אנחנו מתכננים טיול."},
        {"english": "They are having a picnic.", "hebrew": "הם עורכים פיקניק."},
        {"english": "I like to go fishing.", "hebrew": "אני אוהב ללכת לדוג."},
        {"english": "She is writing a letter to her friend.", "hebrew": "היא כותבת מכתב לחבר שלה."},
        {"english": "He is talking to his teacher.", "hebrew": "הוא מדבר עם המורה שלו."},
        {"english": "We are planting trees in the garden.", "hebrew": "אנחנו שותלים עצים בגינה."},
        {"english": "They are dancing to music.", "hebrew": "הם רוקדים לצלילי מוזיקה."},
        {"english": "I am drawing a picture of my family.", "hebrew": "אני מצייר תמונה של המשפחה שלי."},
        {"english": "She is practicing her handwriting.", "hebrew": "היא מתאמנת בכתב היד שלה."},
        {"english": "He is building a model airplane.", "hebrew": "הוא בונה מטוס דגם."},
        {"english": "We are having lunch at the park.", "hebrew": "אנחנו אוכלים ארוחת צהריים בפארק."},
        {"english": "They are playing with their new toys.", "hebrew": "הם משחקים עם הצעצועים החדשים שלהם."},
        {"english": "I like to go swimming in the pool.", "hebrew": "אני אוהב לשחות בבריכה."},
        {"english": "She is drawing a picture of a cat.", "hebrew": "היא מציירת תמונה של חתול."},
        {"english": "He is reading a book about space.", "hebrew": "הוא קורא ספר על החלל."},
        {"english": "We are making cookies for the party.", "hebrew": "אנחנו מכינים עוגיות למסיבה."},
        {"english": "They are watching a movie together.", "hebrew": "הם צופים יחד בסרט."},
        {"english": "I am learning how to play the guitar.", "hebrew": "אני לומד איך לנגן בגיטרה."},
    
  ],

  level5: [
    {
      english: "The train arrives at 8 o'clock.",
      hebrew: "הרכבת מגיעה בשעה 8.",
    },
    { english: "She is an excellent student.", hebrew: "היא תלמידה מצטיינת." },
    {
      english: "We need to finish this project by Friday.",
      hebrew: "אנחנו צריכים לסיים את הפרויקט הזה עד יום שישי.",
    },
    {
      english: "He often travels for work.",
      hebrew: "הוא נוסע לעיתים קרובות לעבודה.",
    },
    {
      english: "I have a meeting at 10 AM.",
      hebrew: "יש לי פגישה בשעה 10 בבוקר.",
    },
    {
      english: "The movie was really interesting.",
      hebrew: "הסרט היה ממש מעניין.",
    },
    {
      english: "She has a great sense of humor.",
      hebrew: "יש לה חוש הומור נהדר.",
    },
    {
      english: "I am learning to cook new recipes.",
      hebrew: "אני לומד לבשל מתכונים חדשים.",
    },
    {
      english: "They are looking for a new apartment.",
      hebrew: "הם מחפשים דירה חדשה.",
    },
    {
      english: "He is very good at solving problems.",
      hebrew: "הוא טוב מאוד בפתרון בעיות.",
    },
    [
      {
        english: "I am trying to improve my English skills.",
        hebrew: "אני מנסה לשפר את כישורי האנגלית שלי.",
      },
      {
        english: "She is preparing for her final exams.",
        hebrew: "היא מתכוננת למבחנים הסופיים שלה.",
      },
      {
        english: "He was late for the meeting because of traffic.",
        hebrew: "הוא איחר לפגישה בגלל התנועה.",
      },
      {
        english: "We are planning to visit our grandparents this weekend.",
        hebrew: "אנחנו מתכננים לבקר את הסבים שלנו בסוף השבוע הזה.",
      },
      {
        english: "I need to call the doctor to make an appointment.",
        hebrew: "אני צריך להתקשר לרופא כדי לקבוע תור.",
      },
      {
        english: "She enjoys playing the piano in her free time.",
        hebrew: "היא נהנית לנגן בפסנתר בזמנה הפנוי.",
      },
      {
        english: "He has a lot of experience in this field.",
        hebrew: "יש לו הרבה ניסיון בתחום הזה.",
      },
      {
        english: "We are planning to renovate our kitchen next year.",
        hebrew: "אנחנו מתכננים לשפץ את המטבח שלנו בשנה הבאה.",
      },
      {
        english: "I usually go for a walk in the evening.",
        hebrew: "בדרך כלל אני יוצא להליכה בערב.",
      },
      {
        english: "She has been working on this project for several months.",
        hebrew: "היא עובדת על הפרויקט הזה כבר כמה חודשים.",
      },
      {
        english: "The weather is perfect for a day at the beach.",
        hebrew: "מזג האוויר מושלם ליום על החוף.",
      },
      {
        english: "I am interested in learning more about this topic.",
        hebrew: "אני מעוניין ללמוד יותר על הנושא הזה.",
      },
      {
        english: "She is always very organized and punctual.",
        hebrew: "היא תמיד מאוד מאורגנת ומדויקת בזמנים.",
      },
      {
        english: "He has a great sense of responsibility.",
        hebrew: "יש לו חוש אחריות נהדר.",
      },
      {
        english: "We are trying to find a solution to this problem.",
        hebrew: "אנחנו מנסים למצוא פתרון לבעיה הזו.",
      },
      {
        english: "I enjoy reading books in my spare time.",
        hebrew: "אני נהנה לקרוא ספרים בזמן הפנוי שלי.",
      },
      {
        english: "She is thinking about starting her own business.",
        hebrew: "היא חושבת על פתיחת עסק משלה.",
      },
      {
        english: "He is very passionate about his work.",
        hebrew: "הוא מאוד נלהב מעבודתו.",
      },
      {
        english: "We are planning a vacation to Europe next summer.",
        hebrew: "אנחנו מתכננים חופשה לאירופה בקיץ הבא.",
      },
      {
        english: "I need to finish this report by tomorrow morning.",
        hebrew: "אני צריך לסיים את הדוח הזה עד מחר בבוקר.",
      },
      {
        english: "She is very knowledgeable about this subject.",
        hebrew: "היא בעלת ידע רב בנושא הזה.",
      },
      {
        english: "He always arrives on time for meetings.",
        hebrew: "הוא תמיד מגיע בזמן לפגישות.",
      },
      {
        english: "We are planning to host a dinner party this weekend.",
        hebrew: "אנחנו מתכננים לארח ארוחת ערב בסוף השבוע הזה.",
      },
      {
        english: "I need to buy some groceries for dinner.",
        hebrew: "אני צריך לקנות כמה מצרכים לארוחת ערב.",
      },
      {
        english: "She is learning how to play the guitar.",
        hebrew: "היא לומדת איך לנגן בגיטרה.",
      },
      {
        english: "He is responsible for managing the team.",
        hebrew: "הוא אחראי על ניהול הצוות.",
      },
      {
        english: "We are looking forward to our trip to Japan.",
        hebrew: "אנחנו מצפים לטיול שלנו ליפן.",
      },
      {
        english: "I usually drink coffee in the morning.",
        hebrew: "בדרך כלל אני שותה קפה בבוקר.",
      },
      {
        english: "She has a great sense of style.",
        hebrew: "יש לה חוש סגנון נהדר.",
      },
      {
        english: "He is always willing to help others.",
        hebrew: "הוא תמיד מוכן לעזור לאחרים.",
      },
      {
        english: "We are planning to move to a new apartment.",
        hebrew: "אנחנו מתכננים לעבור לדירה חדשה.",
      },
      {
        english: "I need to study for my upcoming exams.",
        hebrew: "אני צריך ללמוד למבחנים הקרובים שלי.",
      },
      {
        english: "She is very good at solving problems.",
        hebrew: "היא טובה מאוד בפתרון בעיות.",
      },
      {
        english: "He enjoys playing basketball on the weekends.",
        hebrew: "הוא נהנה לשחק כדורסל בסופי שבוע.",
      },
      {
        english: "We are planning to adopt a dog from the shelter.",
        hebrew: "אנחנו מתכננים לאמץ כלב מהמקלט.",
      },
      {
        english: "I usually go to the gym after work.",
        hebrew: "בדרך כלל אני הולך לחדר כושר אחרי העבודה.",
      },
      {
        english: "She has been working on her thesis for over a year.",
        hebrew: "היא עובדת על התזה שלה כבר למעלה משנה.",
      },
      {
        english: "He is very interested in history.",
        hebrew: "הוא מאוד מתעניין בהיסטוריה.",
      },
      {
        english: "We are planning to start a new project next month.",
        hebrew: "אנחנו מתכננים להתחיל פרויקט חדש בחודש הבא.",
      },
      {
        english: "I need to send an email to my boss.",
        hebrew: "אני צריך לשלוח מייל לבוס שלי.",
      },
      {
        english: "She enjoys hiking in the mountains.",
        hebrew: "היא נהנית לטייל בהרים.",
      },
      {
        english: "He is very good at organizing events.",
        hebrew: "הוא טוב מאוד בארגון אירועים.",
      },
      {
        english: "We are planning to visit the museum this weekend.",
        hebrew: "אנחנו מתכננים לבקר במוזיאון בסוף השבוע הזה.",
      },
      {
        english: "I usually go to bed around 11 PM.",
        hebrew: "בדרך כלל אני הולך לישון בסביבות 11 בלילה.",
      },
      {
        english: "She has a lot of friends at school.",
        hebrew: "יש לה הרבה חברים בבית הספר.",
      },
      {
        english: "He is always very polite to everyone.",
        hebrew: "הוא תמיד מאוד מנומס לכולם.",
      },
      {
        english: "We are looking forward to the concert next month.",
        hebrew: "אנחנו מצפים להופעה בחודש הבא.",
      },
      {
        english: "I need to finish my homework before dinner.",
        hebrew: "אני צריך לסיים את שיעורי הבית שלי לפני ארוחת הערב.",
      },
      {
        english: "She is very talented at drawing.",
        hebrew: "היא מאוד מוכשרת בציור.",
      },
      {
        english: "He enjoys cooking for his family.",
        hebrew: "הוא נהנה לבשל למשפחתו.",
      },
      {
        english: "We are planning to have a picnic in the park.",
        hebrew: "אנחנו מתכננים לעשות פיקניק בפארק.",
      },
      {
        english: "I usually read a book before going to bed.",
        hebrew: "בדרך כלל אני קורא ספר לפני השינה.",
      },
      {
        english: "She has been studying English for two years.",
        hebrew: "היא לומדת אנגלית כבר שנתיים.",
      },
      {
        english: "He is very good at playing chess.",
        hebrew: "הוא טוב מאוד בשחמט.",
      },
      {
        english: "We are planning to go on a road trip this summer.",
        hebrew: "אנחנו מתכננים לצאת לטיול בכביש בקיץ הזה.",
      },
      {
        english: "I need to make a doctor's appointment.",
        hebrew: "אני צריך לקבוע תור לרופא.",
      },
      {
        english: "She enjoys swimming in the ocean.",
        hebrew: "היא נהנית לשחות באוקיינוס.",
      },
      {
        english: "He is always very helpful and kind.",
        hebrew: "הוא תמיד מאוד עוזר ואדיב.",
      },
      {
        english: "We are planning to celebrate her birthday with a party.",
        hebrew: "אנחנו מתכננים לחגוג את יום הולדתה עם מסיבה.",
      },
      {
        english: "I usually eat breakfast at 7 AM.",
        hebrew: "בדרך כלל אני אוכל ארוחת בוקר בשעה 7 בבוקר.",
      },
      {
        english: "She has been working in the same company for five years.",
        hebrew: "היא עובדת באותה חברה כבר חמש שנים.",
      },
      {
        english: "He is very passionate about photography.",
        hebrew: "הוא מאוד נלהב מצילום.",
      },
      {
        english: "We are planning to visit the zoo this weekend.",
        hebrew: "אנחנו מתכננים לבקר בגן החיות בסוף השבוע הזה.",
      },
      {
        english: "I need to buy a gift for my friend's birthday.",
        hebrew: "אני צריך לקנות מתנה ליום ההולדת של חבר שלי.",
      },
      {
        english: "She enjoys taking long walks in the park.",
        hebrew: "היא נהנית לקחת הליכות ארוכות בפארק.",
      },
      {
        english: "He is very good at playing the guitar.",
        hebrew: "הוא טוב מאוד בנגינה בגיטרה.",
      },
      {
        english: "We are planning to go to the movies tonight.",
        hebrew: "אנחנו מתכננים ללכת לקולנוע הערב.",
      },
      {
        english: "I usually watch TV in the evening.",
        hebrew: "בדרך כלל אני צופה בטלוויזיה בערב.",
      },
      {
        english: "She has a beautiful singing voice.",
        hebrew: "יש לה קול שירה יפה.",
      },
      {
        english: "He enjoys playing video games with his friends.",
        hebrew: "הוא נהנה לשחק משחקי וידאו עם חבריו.",
      },
      {
        english: "We are planning to have a barbecue this weekend.",
        hebrew: "אנחנו מתכננים לעשות על האש בסוף השבוע הזה.",
      },
      {
        english: "I need to pack my bags for the trip.",
        hebrew: "אני צריך לארוז את התיקים שלי לטיול.",
      },
      {
        english: "She enjoys visiting new places.",
        hebrew: "היא נהנית לבקר במקומות חדשים.",
      },
      {
        english: "He is very skilled at fixing things.",
        hebrew: "הוא מאוד מיומן בתיקון דברים.",
      },
      {
        english: "We are planning to go hiking in the mountains.",
        hebrew: "אנחנו מתכננים לטייל בהרים.",
      },
      {
        english: "I usually drink tea in the afternoon.",
        hebrew: "בדרך כלל אני שותה תה אחר הצהריים.",
      },
      {
        english: "She has a lot of hobbies, including painting.",
        hebrew: "יש לה הרבה תחביבים, כולל ציור.",
      },
      {
        english: "He is always very careful with his work.",
        hebrew: "הוא תמיד מאוד זהיר בעבודתו.",
      },
      {
        english: "We are looking forward to seeing you soon.",
        hebrew: "אנחנו מצפים לראותך בקרוב.",
      },
      {
        english: "I need to get ready for work.",
        hebrew: "אני צריך להתכונן לעבודה.",
      },
      {
        english: "She enjoys spending time with her family.",
        hebrew: "היא נהנית לבלות זמן עם משפחתה.",
      },
      {
        english: "He is very good at giving presentations.",
        hebrew: "הוא טוב מאוד במתן מצגות.",
      },
      {
        english: "We are planning to go to the beach this weekend.",
        hebrew: "אנחנו מתכננים ללכת לחוף הים בסוף השבוע הזה.",
      },
      {
        english: "I usually listen to music while working.",
        hebrew: "בדרך כלל אני מקשיב למוזיקה בזמן העבודה.",
      },
      {
        english: "She has a talent for writing stories.",
        hebrew: "יש לה כשרון לכתיבת סיפורים.",
      },
      {
        english: "He enjoys learning new languages.",
        hebrew: "הוא נהנה ללמוד שפות חדשות.",
      },
      {
        english: "We are planning to have a family reunion next year.",
        hebrew: "אנחנו מתכננים איחוד משפחתי בשנה הבאה.",
      },
      {
        english: "I need to find a new job.",
        hebrew: "אני צריך למצוא עבודה חדשה.",
      },
      {
        english: "She enjoys baking cookies on the weekends.",
        hebrew: "היא נהנית לאפות עוגיות בסופי שבוע.",
      },
      {
        english: "He is always very patient with his students.",
        hebrew: "הוא תמיד מאוד סבלני עם התלמידים שלו.",
      },
      {
        english: "We are planning to visit our relatives during the holidays.",
        hebrew: "אנחנו מתכננים לבקר את קרובי המשפחה שלנו במהלך החגים.",
      },
      {
        english: "I usually go grocery shopping on Sundays.",
        hebrew: "בדרך כלל אני עושה קניות מצרכים בימי ראשון.",
      },
      {
        english: "She has a lot of experience in marketing.",
        hebrew: "יש לה הרבה ניסיון בשיווק.",
      },
      {
        english: "He is very interested in learning about different cultures.",
        hebrew: "הוא מאוד מעוניין ללמוד על תרבויות שונות.",
      },
      {
        english: "We are planning to redecorate our living room.",
        hebrew: "אנחנו מתכננים לעצב מחדש את הסלון שלנו.",
      },
    ],
  ],

  level6: [
    {
      english: "I have been studying English for three years.",
      hebrew: "אני לומד אנגלית כבר שלוש שנים.",
    },
    {
      english: "She is planning to visit her relatives next month.",
      hebrew: "היא מתכננת לבקר את קרוביה בחודש הבא.",
    },
    {
      english: "We should consider all the options before making a decision.",
      hebrew: "אנחנו צריכים לשקול את כל האפשרויות לפני קבלת החלטה.",
    },
    {
      english: "He enjoys reading books about history.",
      hebrew: "הוא נהנה לקרוא ספרים על היסטוריה.",
    },
    {
      english: "The company is expanding its operations in Europe.",
      hebrew: "החברה מרחיבה את פעילותה באירופה.",
    },
    {
      english: "I am looking forward to the weekend.",
      hebrew: "אני מצפה לסוף השבוע.",
    },
    {
      english: "She has been working at the same company for ten years.",
      hebrew: "היא עובדת באותה חברה כבר עשר שנים.",
    },
    {
      english: "They are considering buying a new house.",
      hebrew: "הם שוקלים לקנות בית חדש.",
    },
    {
      english: "He has already finished his homework.",
      hebrew: "הוא כבר סיים את שיעורי הבית שלו.",
    },
    {
      english: "We are planning a surprise party for her birthday.",
      hebrew: "אנחנו מתכננים מסיבת הפתעה ליום הולדתה.",
    },
  ],

  level7: [
    {
      english:
        "The new policy has significantly improved customer satisfaction.",
      hebrew: "המדיניות החדשה שיפרה משמעותית את שביעות רצון הלקוחות.",
    },
    {
      english:
        "He is working on a challenging project that requires a lot of effort.",
      hebrew: "הוא עובד על פרויקט מאתגר שדורש הרבה מאמץ.",
    },
    {
      english: "She has a unique perspective on the situation.",
      hebrew: "יש לה זווית ראייה ייחודית על המצב.",
    },
    {
      english: "The results of the experiment were quite surprising.",
      hebrew: "התוצאות של הניסוי היו די מפתיעות.",
    },
    {
      english: "We need to discuss the implications of this decision.",
      hebrew: "אנחנו צריכים לדון בהשלכות של ההחלטה הזו.",
    },
    {
      english: "He is an expert in his field and highly respected.",
      hebrew: "הוא מומחה בתחום שלו ומכובד מאוד.",
    },
    {
      english: "The team is working on developing a new strategy.",
      hebrew: "הצוות עובד על פיתוח אסטרטגיה חדשה.",
    },
    {
      english: "She has been recognized for her outstanding contributions.",
      hebrew: "היא זכתה להכרה על תרומותיה יוצאות הדופן.",
    },
    {
      english: "The company is facing some financial difficulties.",
      hebrew: "החברה מתמודדת עם כמה קשיים פיננסיים.",
    },
    {
      english: "We need to ensure that all the details are correct.",
      hebrew: "אנחנו צריכים לוודא שכל הפרטים נכונים.",
    },
  ],

  level8: [
    {
      english: "The complexity of the issue requires careful consideration.",
      hebrew: "המורכבות של הבעיה דורשת שיקול דעת זהיר.",
    },
    {
      english: "He has been involved in the project since its inception.",
      hebrew: "הוא היה מעורב בפרויקט מאז תחילתו.",
    },
    {
      english: "She has a deep understanding of the subject matter.",
      hebrew: "יש לה הבנה עמוקה של הנושא.",
    },
    {
      english:
        "The company's success can be attributed to its innovative approach.",
      hebrew: "הצלחת החברה נובעת מגישה חדשנית.",
    },
    {
      english: "We need to evaluate the potential risks before proceeding.",
      hebrew: "אנחנו צריכים להעריך את הסיכונים האפשריים לפני שנמשיך.",
    },
    {
      english: "He has been praised for his leadership skills.",
      hebrew: "הוא זכה לשבחים על כישורי ההנהגה שלו.",
    },
    {
      english: "She is known for her ability to solve complex problems.",
      hebrew: "היא ידועה ביכולתה לפתור בעיות מורכבות.",
    },
    {
      english: "The report provides a comprehensive analysis of the data.",
      hebrew: "הדוח מספק ניתוח מקיף של הנתונים.",
    },
    {
      english: "We need to consider the long-term impact of this decision.",
      hebrew: "אנחנו צריכים לשקול את ההשפעה לטווח הארוך של ההחלטה הזו.",
    },
    {
      english: "He has demonstrated a strong commitment to the project.",
      hebrew: "הוא הראה מחויבות חזקה לפרויקט.",
    },
  ],

  level9: [
    {
      english:
        "The new regulations will have a significant impact on the industry.",
      hebrew: "התקנות החדשות ישפיעו משמעותית על התעשייה.",
    },
    {
      english: "He has extensive experience in managing large-scale projects.",
      hebrew: "יש לו ניסיון רב בניהול פרויקטים בקנה מידה גדול.",
    },
    {
      english:
        "The company is implementing a new strategy to increase efficiency.",
      hebrew: "החברה מיישמת אסטרטגיה חדשה להגדלת היעילות.",
    },
    {
      english: "She has been instrumental in driving the company's growth.",
      hebrew: "היא הייתה מרכזית בהנעת הצמיחה של החברה.",
    },
    {
      english: "We need to develop a more robust solution to this problem.",
      hebrew: "אנחנו צריכים לפתח פתרון חזק יותר לבעיה הזו.",
    },
    {
      english: "He is well-versed in the latest technological advancements.",
      hebrew: "הוא בקיא מאוד בהתפתחויות הטכנולוגיות האחרונות.",
    },
    {
      english:
        "The project requires a detailed analysis of the financial data.",
      hebrew: "הפרויקט דורש ניתוח מפורט של הנתונים הפיננסיים.",
    },
    {
      english:
        "She has a proven track record of successful project management.",
      hebrew: "יש לה רקורד מוכח של ניהול פרויקטים מוצלח.",
    },
    {
      english: "The team is working on a groundbreaking new product.",
      hebrew: "הצוות עובד על מוצר חדשני חדש.",
    },
    {
      english: "We need to establish clear guidelines for the project.",
      hebrew: "אנחנו צריכים לקבוע הנחיות ברורות לפרויקט.",
    },
  ],

  level10: [
    {
      english: "The implications of this legal precedent are far-reaching.",
      hebrew: "ההשלכות של התקדים המשפטי הזה הן רחבות טווח.",
    },
    {
      english: "He has published numerous articles in peer-reviewed journals.",
      hebrew: "הוא פרסם מאמרים רבים בכתבי עת עם ביקורת עמיתים.",
    },
    {
      english: "The research methodology used in this study is rigorous.",
      hebrew: "שיטת המחקר ששימשה במחקר זה היא קפדנית.",
    },
    {
      english:
        "She has presented her findings at several international conferences.",
      hebrew: "היא הציגה את ממצאיה בכמה כנסים בינלאומיים.",
    },
    {
      english:
        "The court's ruling is based on a thorough interpretation of the law.",
      hebrew: "פסיקת בית המשפט מבוססת על פרשנות מעמיקה של החוק.",
    },
    {
      english: "He is an authority in the field of environmental law.",
      hebrew: "הוא סמכות בתחום המשפט הסביבתי.",
    },
    {
      english:
        "The study explores the ethical considerations of genetic research.",
      hebrew: "המחקר בוחן את השיקולים האתיים של מחקר גנטי.",
    },
    {
      english:
        "She has made significant contributions to the field of neuroscience.",
      hebrew: "היא תרמה תרומות משמעותיות לתחום חקר המוח.",
    },
    {
      english:
        "The contract includes a clause on intellectual property rights.",
      hebrew: "החוזה כולל סעיף על זכויות קניין רוחני.",
    },
    {
      english:
        "We need to address the underlying causes of this economic issue.",
      hebrew: "אנחנו צריכים לטפל בסיבות העמוקות של הבעיה הכלכלית הזו.",
    },
  ],
};

export { sentencesFile };
