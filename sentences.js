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
