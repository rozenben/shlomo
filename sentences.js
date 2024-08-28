const sentencesFile = {
  level1: [
    { english: "The cat is on the bed", hebrew: "החתול על המיטה" },
    { english: "She drinks water", hebrew: "היא שותה מים" },
    { english: "I have a red ball", hebrew: "יש לי כדור אדום" },
    { english: "They play in the park", hebrew: "הם משחקים בפארק" },
    { english: "The sun is bright", hebrew: "השמש זורחת" },
    { english: "He reads a book", hebrew: "הוא קורא ספר" },
    { english: "The dog runs fast", hebrew: "הכלב רץ מהר" },
    { english: "We eat apples", hebrew: "אנחנו אוכלים תפוחים" },
    { english: "The sky is blue", hebrew: "השמיים כחולים" },
    { english: "I like my toy", hebrew: "אני אוהב את הצעצוע שלי" },
    { english: "She wears a hat", hebrew: "היא חובשת כובע" },
    { english: "He has a big car", hebrew: "יש לו מכונית גדולה" },
    { english: "The baby is happy", hebrew: "התינוק שמח" },
    { english: "I see a bird", hebrew: "אני רואה ציפור" },
    { english: "They sit on the chair", hebrew: "הם יושבים על הכיסא" },
    { english: "She has a blue dress", hebrew: "יש לה שמלה כחולה" },
    { english: "The grass is green", hebrew: "הדשא ירוק" },
    { english: "I love my family", hebrew: "אני אוהב את המשפחה שלי" },
    { english: "He eats a sandwich", hebrew: "הוא אוכל כריך" },
    { english: "The book is open", hebrew: "הספר פתוח" },
    { english: "They are friends", hebrew: "הם חברים" },
    { english: "I have a pet fish", hebrew: "יש לי דג מחמד" },
    { english: "The car is red", hebrew: "המכונית אדומה" },
    { english: "She likes ice cream", hebrew: "היא אוהבת גלידה" },
    { english: "He plays the piano", hebrew: "הוא מנגן על הפסנתר" },
    { english: "We go to school", hebrew: "אנחנו הולכים לבית הספר" },
    { english: "The house is big", hebrew: "הבית גדול" },
    { english: "I see a flower", hebrew: "אני רואה פרח" },
    { english: "She drinks tea", hebrew: "היא שותה תה" },
    { english: "He has a bike", hebrew: "יש לו אופניים" },
    { english: "The door is open", hebrew: "הדלת פתוחה" },
    { english: "They run together", hebrew: "הם רצים יחד" },
    { english: "I have a new toy", hebrew: "יש לי צעצוע חדש" },
    { english: "She writes a letter", hebrew: "היא כותבת מכתב" },
    { english: "The tree is tall", hebrew: "העץ גבוה" },
    { english: "We play with toys", hebrew: "אנחנו משחקים בצעצועים" },
    { english: "He drinks coffee", hebrew: "הוא שותה קפה" },
    { english: "The bird can fly", hebrew: "הציפור יכולה לעוף" },
    { english: "I see a car", hebrew: "אני רואה מכונית" },
    { english: "She reads a story", hebrew: "היא קוראת סיפור" },
    { english: "The boy is small", hebrew: "הילד קטן" },
    { english: "We eat breakfast", hebrew: "אנחנו אוכלים ארוחת בוקר" },
    { english: "He wears a shirt", hebrew: "הוא לובש חולצה" },
    { english: "The girl is happy", hebrew: "הילדה שמחה" },
    { english: "I drink milk", hebrew: "אני שותה חלב" },
    { english: "They have toys", hebrew: "יש להם צעצועים" },
    { english: "She sees a dog", hebrew: "היא רואה כלב" },
    { english: "He likes books", hebrew: "הוא אוהב ספרים" },
    { english: "The chair is brown", hebrew: "הכיסא חום" },
    { english: "I run to the park", hebrew: "אני רץ לפארק" },
    { english: "We have a ball", hebrew: "יש לנו כדור" },
    { english: "The baby cries", hebrew: "התינוק בוכה" },
    { english: "He writes a note", hebrew: "הוא כותב פתק" },
    { english: "She likes the sun", hebrew: "היא אוהבת את השמש" },
    { english: "I see a tree", hebrew: "אני רואה עץ" },
    { english: "They eat pizza", hebrew: "הם אוכלים פיצה" },
    { english: "The sky is clear", hebrew: "השמיים בהירים" },
    { english: "He plays with toys", hebrew: "הוא משחק בצעצועים" },
    { english: "She has a book", hebrew: "יש לה ספר" },
    { english: "The dog is cute", hebrew: "הכלב חמוד" },
    { english: "I read a story", hebrew: "אני קורא סיפור" },
    { english: "They like music", hebrew: "הם אוהבים מוזיקה" },
    { english: "She sings a song", hebrew: "היא שרה שיר" },
    { english: "He has a pen", hebrew: "יש לו עט" },
    { english: "The bird sings", hebrew: "הציפור שרה" },
    { english: "We have fun", hebrew: "יש לנו כיף" },
    { english: "I see the moon", hebrew: "אני רואה את הירח" },
    { english: "She eats a cake", hebrew: "היא אוכלת עוגה" },
    { english: "He wears a coat", hebrew: "הוא לובש מעיל" },
    { english: "The sun is hot", hebrew: "השמש חמה" },
    { english: "I like apples", hebrew: "אני אוהב תפוחים" },
    { english: "They have a house", hebrew: "יש להם בית" },
    { english: "She sees a cat", hebrew: "היא רואה חתול" },
    { english: "He plays a game", hebrew: "הוא משחק במשחק" },
    { english: "The flower is red", hebrew: "הפרח אדום" },
    { english: "I eat a sandwich", hebrew: "אני אוכל כריך" },
    { english: "They like to dance", hebrew: "הם אוהבים לרקוד" },
    { english: "She wears shoes", hebrew: "היא נועלת נעליים" },
    { english: "He reads at night", hebrew: "הוא קורא בלילה" },
    { english: "The dog is barking", hebrew: "הכלב נובח" },
    { english: "I see a rainbow", hebrew: "אני רואה קשת בענן" },
    { english: "We go to the zoo", hebrew: "אנחנו הולכים לגן החיות" },
    { english: "She eats an apple", hebrew: "היא אוכלת תפוח" },
    { english: "He drinks juice", hebrew: "הוא שותה מיץ" },
    { english: "The bird is flying", hebrew: "הציפור עפה" },
    { english: "I have a pencil", hebrew: "יש לי עיפרון" },
    { english: "They read books", hebrew: "הם קוראים ספרים" },
    { english: "She wears a dress", hebrew: "היא לובשת שמלה" },
    { english: "The tree has leaves", hebrew: "לעץ יש עלים" },
    { english: "He writes in a book", hebrew: "הוא כותב בספר" },
    { english: "I see a green frog", hebrew: "אני רואה צפרדע ירוקה" },
    { english: "We play in the garden", hebrew: "אנחנו משחקים בגינה" },
    { english: "She sings a song", hebrew: "היא שרה שיר" },
    { english: "He has a pet dog", hebrew: "יש לו כלב מחמד" },
    { english: "The sky is gray", hebrew: "השמיים אפורים" },
    { english: "I read a book", hebrew: "אני קורא ספר" },
    { english: "They watch TV", hebrew: "הם צופים בטלוויזיה" },
    { english: "She draws a picture", hebrew: "היא מציירת תמונה" },
    { english: "He eats breakfast", hebrew: "הוא אוכל ארוחת בוקר" },
    { english: "The cat is sleeping", hebrew: "החתול ישן" },
    { english: "I see a big tree", hebrew: "אני רואה עץ גדול" },
    { english: "We play a game", hebrew: "אנחנו משחקים במשחק" },
    { english: "She writes a story", hebrew: "היא כותבת סיפור" },
    { english: "He rides a bike", hebrew: "הוא רוכב על אופניים" },
    { english: "The sun is yellow", hebrew: "השמש צהובה" },
    { english: "I drink orange juice", hebrew: "אני שותה מיץ תפוזים" },
    { english: "They play in the rain", hebrew: "הם משחקים בגשם" },
    { english: "She sees a rainbow", hebrew: "היא רואה קשת בענן" },
    { english: "He eats a cookie", hebrew: "הוא אוכל עוגייה" },
    { english: "The car is blue", hebrew: "המכונית כחולה" },
    { english: "I have a small dog", hebrew: "יש לי כלב קטן" },
    { english: "We eat dinner", hebrew: "אנחנו אוכלים ארוחת ערב" },
    { english: "She reads a book", hebrew: "היא קוראת ספר" },
    { english: "He plays with cars", hebrew: "הוא משחק עם מכוניות" },
    { english: "The house is old", hebrew: "הבית ישן" },
    { english: "I drink cold water", hebrew: "אני שותה מים קרים" },
    { english: "They sing together", hebrew: "הם שרים יחד" },
    { english: "She sees a butterfly", hebrew: "היא רואה פרפר" },
    { english: "He likes to swim", hebrew: "הוא אוהב לשחות" },
    { english: "The bird is blue", hebrew: "הציפור כחולה" },
    { english: "I see the stars", hebrew: "אני רואה את הכוכבים" },
    { english: "We play outside", hebrew: "אנחנו משחקים בחוץ" },
    { english: "She eats an orange", hebrew: "היא אוכלת תפוז" },
    { english: "He rides a horse", hebrew: "הוא רוכב על סוס" },
    { english: "The sky is dark", hebrew: "השמיים חשוכים" },
    { english: "I drink hot tea", hebrew: "אני שותה תה חם" },
    { english: "They go to school", hebrew: "הם הולכים לבית הספר" },
    { english: "She writes a letter", hebrew: "היא כותבת מכתב" },
    { english: "He has a toy car", hebrew: "יש לו מכונית צעצוע" },
    { english: "The moon is full", hebrew: "הירח מלא" },
    { english: "I like my shoes", hebrew: "אני אוהב את הנעליים שלי" },
    { english: "We eat ice cream", hebrew: "אנחנו אוכלים גלידה" },
    { english: "She has a doll", hebrew: "יש לה בובה" },
    { english: "He plays soccer", hebrew: "הוא משחק כדורגל" },
    { english: "The flower is pink", hebrew: "הפרח ורוד" },
    { english: "I drink water", hebrew: "אני שותה מים" },
    { english: "They play at home", hebrew: "הם משחקים בבית" },
    { english: "She reads at night", hebrew: "היא קוראת בלילה" },
    { english: "He eats an apple", hebrew: "הוא אוכל תפוח" },
    { english: "The sun is shining", hebrew: "השמש זורחת" },
    { english: "I see a cloud", hebrew: "אני רואה ענן" },
    { english: "We play in the sand", hebrew: "אנחנו משחקים בחול" },
    { english: "She writes in her book", hebrew: "היא כותבת בספר שלה" },
    { english: "He rides his bike", hebrew: "הוא רוכב על האופניים שלו" },
    { english: "The cat is black", hebrew: "החתול שחור" },
    { english: "I have a blue pen", hebrew: "יש לי עט כחול" },
    { english: "They watch cartoons", hebrew: "הם צופים בסרטים מצוירים" },
    { english: "She sings a song", hebrew: "היא שרה שיר" },
    { english: "He plays basketball", hebrew: "הוא משחק כדורסל" },
    { english: "The grass is green", hebrew: "הדשא ירוק" },
    { english: "I see a butterfly", hebrew: "אני רואה פרפר" },
    { english: "We eat lunch", hebrew: "אנחנו אוכלים ארוחת צהריים" },
    { english: "She has a new book", hebrew: "יש לה ספר חדש" },
    { english: "He drinks milk", hebrew: "הוא שותה חלב" },
    { english: "The bird is singing", hebrew: "הציפור שרה" },
    { english: "I see a rainbow", hebrew: "אני רואה קשת בענן" },
    { english: "They play in the water", hebrew: "הם משחקים במים" },
    { english: "She writes on paper", hebrew: "היא כותבת על נייר" },
    { english: "He wears a jacket", hebrew: "הוא לובש ג'קט" },
    { english: "The sun is bright", hebrew: "השמש זורחת" },
    { english: "I drink lemonade", hebrew: "אני שותה לימונדה" },
    { english: "We go to the park", hebrew: "אנחנו הולכים לפארק" },
    { english: "She reads a story", hebrew: "היא קוראת סיפור" },
    { english: "He has a red car", hebrew: "יש לו מכונית אדומה" },
    { english: "The flower is yellow", hebrew: "הפרח צהוב" },
    { english: "I see a blue sky", hebrew: "אני רואה שמיים כחולים" },
    { english: "They play with dolls", hebrew: "הם משחקים עם בובות" },
    { english: "She eats a banana", hebrew: "היא אוכלת בננה" },
    { english: "He drinks hot chocolate", hebrew: "הוא שותה שוקו חם" },
    { english: "The bird is white", hebrew: "הציפור לבנה" },
    { english: "I have a red ball", hebrew: "יש לי כדור אדום" },
    { english: "We go to the beach", hebrew: "אנחנו הולכים לחוף" },
    { english: "She writes a poem", hebrew: "היא כותבת שיר" },
    { english: "He rides a scooter", hebrew: "הוא רוכב על קורקינט" },
    { english: "The sky is blue", hebrew: "השמיים כחולים" },
    { english: "I eat a strawberry", hebrew: "אני אוכל תות" },
    { english: "They play with cars", hebrew: "הם משחקים עם מכוניות" },
    { english: "She reads a magazine", hebrew: "היא קוראת מגזין" },
    { english: "He has a toy train", hebrew: "יש לו רכבת צעצוע" },
    { english: "The cat is white", hebrew: "החתול לבן" },
    { english: "I see a yellow flower", hebrew: "אני רואה פרח צהוב" },
    { english: "We play with blocks", hebrew: "אנחנו משחקים עם קוביות" },
    { english: "She eats grapes", hebrew: "היא אוכלת ענבים" },
    { english: "He drinks soda", hebrew: "הוא שותה סודה" },
    { english: "The bird is small", hebrew: "הציפור קטנה" },
    { english: "I see a big fish", hebrew: "אני רואה דג גדול" },
    { english: "They play in the yard", hebrew: "הם משחקים בחצר" },
    { english: "She writes with a pencil", hebrew: "היא כותבת עם עיפרון" },
    { english: "He has a red shirt", hebrew: "יש לו חולצה אדומה" },
    { english: "The sun is warm", hebrew: "השמש חמימה" },
    { english: "I drink cold milk", hebrew: "אני שותה חלב קר" },
    { english: "We eat sandwiches", hebrew: "אנחנו אוכלים כריכים" },
    { english: "She reads her book", hebrew: "היא קוראת את הספר שלה" },
    { english: "He plays with a ball", hebrew: "הוא משחק עם כדור" },
  ],

  level2: [
    { english: "I live in Tel Aviv", hebrew: "אני גר בתל אביב" },
    { english: "How are you?", hebrew: "מה שלומך?" },
    { english: "I like pizza", hebrew: "אני אוהב פיצה" },
    { english: "This is my house", hebrew: "זה הבית שלי" },
    { english: "I have a car", hebrew: "יש לי מכונית" },
    { english: "Do you speak English?", hebrew: "אתה מדבר אנגלית?" },
    { english: "Where is the bus stop?", hebrew: "איפה תחנת האוטובוס?" },
    { english: "I need help", hebrew: "אני צריך עזרה" },
    { english: "It is raining", hebrew: "יורד גשם" },
    { english: "Can you open the door?", hebrew: "אתה יכול לפתוח את הדלת?" },
    { english: "The cat sleeps on the couch.", hebrew: "החתול ישן על הספה." },
    { english: "She drinks water every day.", hebrew: "היא שותה מים כל יום." },
    { english: "My brother has a big dog.", hebrew: "לאח שלי יש כלב גדול." },
    { english: "The sun shines brightly.", hebrew: "השמש זורחת בבהירות." },
    {
      english: "We play soccer in the park.",
      hebrew: "אנחנו משחקים כדורגל בפארק.",
    },
    {
      english: "The birds sing in the morning.",
      hebrew: "הציפורים שרות בבוקר.",
    },
    {
      english: "I read a book before bed.",
      hebrew: "אני קורא ספר לפני השינה.",
    },
    { english: "She wears a red dress.", hebrew: "היא לובשת שמלה אדומה." },
    { english: "They live in a small house.", hebrew: "הם גרים בבית קטן." },
    {
      english: "He rides his bike to work.",
      hebrew: "הוא רוכב על אופניו לעבודה.",
    },
    {
      english: "The teacher writes on the board.",
      hebrew: "המורה כותב על הלוח.",
    },
    {
      english: "She loves to dance in the rain.",
      hebrew: "היא אוהבת לרקוד בגשם.",
    },
    {
      english: "I eat an apple every morning.",
      hebrew: "אני אוכל תפוח כל בוקר.",
    },
    { english: "The baby sleeps in the crib.", hebrew: "התינוק ישן בעריסה." },
    {
      english: "We visit our grandparents on weekends.",
      hebrew: "אנחנו מבקרים את סבא וסבתא בסופי שבוע.",
    },
    {
      english: "He plays the piano beautifully.",
      hebrew: "הוא מנגן בפסנתר יפה.",
    },
    {
      english: "She has a lot of books in her room.",
      hebrew: "יש לה הרבה ספרים בחדר שלה.",
    },
    { english: "The flowers bloom in spring.", hebrew: "הפרחים פורחים באביב." },
    {
      english: "They cook dinner together.",
      hebrew: "הם מבשלים ארוחת ערב יחד.",
    },
    {
      english: "I walk to school every day.",
      hebrew: "אני הולך לבית הספר כל יום.",
    },
    {
      english: "He reads the newspaper every morning.",
      hebrew: "הוא קורא את העיתון כל בוקר.",
    },
    {
      english: "She waters the plants every evening.",
      hebrew: "היא משקה את הצמחים כל ערב.",
    },
    { english: "The sky is blue and clear.", hebrew: "השמיים כחולים ובהירים." },
    {
      english: "They swim in the lake during summer.",
      hebrew: "הם שוחים באגם בקיץ.",
    },
    {
      english: "He wears a warm coat in winter.",
      hebrew: "הוא לובש מעיל חם בחורף.",
    },
    {
      english: "The children play in the yard.",
      hebrew: "הילדים משחקים בחצר.",
    },
    {
      english: "I write in my diary every night.",
      hebrew: "אני כותב ביומן שלי כל לילה.",
    },
    {
      english: "She listens to music while studying.",
      hebrew: "היא מקשיבה למוזיקה בזמן לימודים.",
    },
    { english: "The dog barks at strangers.", hebrew: "הכלב נובח על זרים." },
    {
      english: "We eat dinner together as a family.",
      hebrew: "אנחנו אוכלים ארוחת ערב יחד כמשפחה.",
    },
    { english: "He likes to draw pictures.", hebrew: "הוא אוהב לצייר תמונות." },
    {
      english: "She brushes her teeth twice a day.",
      hebrew: "היא מצחצחת את שיניה פעמיים ביום.",
    },
    {
      english: "The bus arrives at 8:00 AM.",
      hebrew: "האוטובוס מגיע בשעה 8:00 בבוקר.",
    },
    {
      english: "They study in the library after school.",
      hebrew: "הם לומדים בספרייה אחרי בית הספר.",
    },
    {
      english: "I cook breakfast for my family.",
      hebrew: "אני מבשל ארוחת בוקר למשפחה שלי.",
    },
    {
      english: "She plays the guitar in the band.",
      hebrew: "היא מנגנת בגיטרה בלהקה.",
    },
    {
      english: "The children read storybooks.",
      hebrew: "הילדים קוראים ספרי סיפורים.",
    },
    {
      english: "He washes the dishes after dinner.",
      hebrew: "הוא שוטף את הכלים אחרי ארוחת הערב.",
    },
    {
      english: "She wears glasses to read.",
      hebrew: "היא מרכיבה משקפיים לקריאה.",
    },
    {
      english: "The snow covers the ground in winter.",
      hebrew: "השלג מכסה את הקרקע בחורף.",
    },
    {
      english: "We watch movies on weekends.",
      hebrew: "אנחנו צופים בסרטים בסופי שבוע.",
    },
    {
      english: "He likes to play chess with his friends.",
      hebrew: "הוא אוהב לשחק שחמט עם חבריו.",
    },
    {
      english: "She paints beautiful pictures.",
      hebrew: "היא מציירת תמונות יפות.",
    },
    {
      english: "The children sing songs together.",
      hebrew: "הילדים שרים שירים יחד.",
    },
    { english: "I drink tea in the morning.", hebrew: "אני שותה תה בבוקר." },
    {
      english: "She likes to collect stamps.",
      hebrew: "היא אוהבת לאסוף בולים.",
    },
    { english: "The car is parked outside.", hebrew: "המכונית חונה בחוץ." },
    {
      english: "They go on trips during the holidays.",
      hebrew: "הם יוצאים לטיולים בחגים.",
    },
    { english: "He wears a hat in the sun.", hebrew: "הוא לובש כובע בשמש." },
    {
      english: "She makes delicious cakes.",
      hebrew: "היא מכינה עוגות טעימות.",
    },
    {
      english: "The children play with toys.",
      hebrew: "הילדים משחקים עם צעצועים.",
    },
    {
      english: "I visit the museum on weekends.",
      hebrew: "אני מבקר במוזיאון בסופי שבוע.",
    },
    {
      english: "She buys fresh vegetables from the market.",
      hebrew: "היא קונה ירקות טריים מהשוק.",
    },
    {
      english: "He listens to the radio in the car.",
      hebrew: "הוא מאזין לרדיו במכונית.",
    },
    {
      english: "The cat likes to chase mice.",
      hebrew: "החתול אוהב לרדוף אחרי עכברים.",
    },
    {
      english: "We hike in the mountains every summer.",
      hebrew: "אנחנו מטיילים בהרים כל קיץ.",
    },
    {
      english: "She enjoys reading magazines.",
      hebrew: "היא נהנית לקרוא מגזינים.",
    },
    {
      english: "He rides his horse in the field.",
      hebrew: "הוא רוכב על סוסו בשדה.",
    },
    { english: "The flowers smell wonderful.", hebrew: "הפרחים מריחים נפלא." },
    {
      english: "We play board games on rainy days.",
      hebrew: "אנחנו משחקים משחקי לוח בימים גשומים.",
    },
    {
      english: "She bakes cookies for the children.",
      hebrew: "היא אופה עוגיות לילדים.",
    },
    { english: "He drinks coffee with milk.", hebrew: "הוא שותה קפה עם חלב." },
    {
      english: "The kids enjoy playing in the snow.",
      hebrew: "הילדים נהנים לשחק בשלג.",
    },
    {
      english: "She writes letters to her friends.",
      hebrew: "היא כותבת מכתבים לחברים שלה.",
    },
    {
      english: "He likes to watch the sunset.",
      hebrew: "הוא אוהב לצפות בשקיעה.",
    },
    { english: "The dog runs in the park.", hebrew: "הכלב רץ בפארק." },
    {
      english: "We visit the beach in the summer.",
      hebrew: "אנחנו מבקרים בחוף בקיץ.",
    },
    {
      english: "She drinks juice with her breakfast.",
      hebrew: "היא שותה מיץ עם ארוחת הבוקר שלה.",
    },
    {
      english: "The baby plays with a teddy bear.",
      hebrew: "התינוק משחק עם דובון.",
    },
    { english: "I like to walk in the rain.", hebrew: "אני אוהב ללכת בגשם." },
  ],

  level3: [
    { english: "I work in a big company", hebrew: "אני עובד בחברה גדולה" },
    { english: "We are going to the park", hebrew: "אנחנו הולכים לפארק" },
    { english: "He likes to play soccer", hebrew: "הוא אוהב לשחק כדורגל" },
    { english: "This book is interesting", hebrew: "הספר הזה מעניין" },
    { english: "I want to learn English", hebrew: "אני רוצה ללמוד אנגלית" },
    { english: "They are very friendly", hebrew: "הם מאוד ידידותיים" },
    {
      english: "I usually wake up early",
      hebrew: "בדרך כלל אני מתעורר מוקדם",
    },
    { english: "She has a lot of friends", hebrew: "יש לה הרבה חברים" },
    { english: "Can I ask you a question?", hebrew: "אפשר לשאול אותך שאלה?" },
    {
      english: "The garden was filled with colorful flowers.",
      hebrew: "הגן היה מלא בפרחים צבעוניים.",
    },
    {
      english: "She carried a heavy bag on her shoulder.",
      hebrew: "היא נשאה תיק כבד על כתפה.",
    },
    {
      english: "The children were playing with a new toy.",
      hebrew: "הילדים שיחקו בצעצוע חדש.",
    },
    {
      english: "He wrote a letter to his grandmother.",
      hebrew: "הוא כתב מכתב לסבתו.",
    },
    {
      english: "The sun was shining brightly in the sky.",
      hebrew: "השמש זרחה בחוזקה בשמיים.",
    },
    {
      english: "They decided to take a walk in the park.",
      hebrew: "הם החליטו לצאת לטיול בפארק.",
    },
    {
      english: "The book was interesting and full of adventure.",
      hebrew: "הספר היה מעניין ומלא בהרפתקאות.",
    },
    {
      english: "She cooked a delicious meal for her family.",
      hebrew: "היא בישלה ארוחה טעימה למשפחתה.",
    },
    {
      english: "He solved the puzzle after thinking for a while.",
      hebrew: "הוא פתר את הפאזל לאחר מחשבה ממושכת.",
    },
    {
      english: "The dog barked loudly at the strangers.",
      hebrew: "הכלב נבח בקול רם על הזרים.",
    },
    {
      english: "They watched a movie together in the evening.",
      hebrew: "הם צפו בסרט יחד בערב.",
    },
    {
      english: "The river flowed smoothly through the valley.",
      hebrew: "הנהר זרם בצורה חלקה דרך העמק.",
    },
    {
      english: "She drew a beautiful picture of the mountains.",
      hebrew: "היא ציירה תמונה יפה של ההרים.",
    },
    {
      english: "He read a story before going to bed.",
      hebrew: "הוא קרא סיפור לפני השינה.",
    },
    {
      english: "The clock on the wall was ticking quietly.",
      hebrew: "השעון על הקיר תקתק בשקט.",
    },
    {
      english: "They planted trees in the school yard.",
      hebrew: "הם שתלו עצים בחצר בית הספר.",
    },
    {
      english: "She listened to the sound of the rain.",
      hebrew: "היא הקשיבה לצליל הגשם.",
    },
    {
      english: "He bought a new pair of shoes.",
      hebrew: "הוא קנה זוג נעליים חדש.",
    },
    {
      english: "The wind was blowing softly through the trees.",
      hebrew: "הרוח נשבה בעדינות בין העצים.",
    },
    {
      english: "They built a small house by the lake.",
      hebrew: "הם בנו בית קטן ליד האגם.",
    },
    {
      english: "She wrote in her diary every night.",
      hebrew: "היא כתבה ביומנה כל לילה.",
    },
    {
      english: "He carried the groceries to the car.",
      hebrew: "הוא נשא את המצרכים לרכב.",
    },
    {
      english: "The stars twinkled in the night sky.",
      hebrew: "הכוכבים נצנצו בשמי הלילה.",
    },
    {
      english: "They organized a party for their friend's birthday.",
      hebrew: "הם ארגנו מסיבה ליום ההולדת של חברם.",
    },
    {
      english: "She watched the birds fly in the sky.",
      hebrew: "היא צפתה בציפורים עפות בשמיים.",
    },
    {
      english: "He repaired the broken chair in the kitchen.",
      hebrew: "הוא תיקן את הכיסא השבור במטבח.",
    },
    {
      english: "The children were excited to go on a trip.",
      hebrew: "הילדים התרגשו לצאת לטיול.",
    },
    {
      english: "She wore a beautiful dress to the party.",
      hebrew: "היא לבשה שמלה יפה למסיבה.",
    },
    {
      english: "He watered the plants every morning.",
      hebrew: "הוא השקה את הצמחים כל בוקר.",
    },
    {
      english: "The bird built a nest in the tree.",
      hebrew: "הציפור בנתה קן בעץ.",
    },
    {
      english: "They played a game of chess after dinner.",
      hebrew: "הם שיחקו במשחק שחמט לאחר ארוחת הערב.",
    },
    {
      english: "She painted the walls of her room blue.",
      hebrew: "היא צבעה את קירות החדר שלה בכחול.",
    },
    {
      english: "He enjoyed reading books about history.",
      hebrew: "הוא נהנה לקרוא ספרים על היסטוריה.",
    },
    {
      english: "The rain stopped and the sun came out.",
      hebrew: "הגשם הפסיק והשמש יצאה.",
    },
    {
      english: "They helped their neighbor move to a new house.",
      hebrew: "הם עזרו לשכנם לעבור לבית חדש.",
    },
    {
      english: "She made a cake for her friend's birthday.",
      hebrew: "היא הכינה עוגה ליום ההולדת של חברתה.",
    },
    {
      english: "He found a lost puppy in the park.",
      hebrew: "הוא מצא גורת כלבים אבודה בפארק.",
    },
    {
      english: "The teacher explained the lesson clearly.",
      hebrew: "המורה הסביר את השיעור בצורה ברורה.",
    },
    {
      english: "They sang songs around the campfire.",
      hebrew: "הם שרו שירים סביב המדורה.",
    },
    {
      english: "She saved money to buy a new bicycle.",
      hebrew: "היא חסכה כסף לקניית אופניים חדשים.",
    },
    {
      english: "He traveled to a foreign country last year.",
      hebrew: "הוא נסע למדינה זרה בשנה שעברה.",
    },
    {
      english: "The cat slept peacefully on the couch.",
      hebrew: "החתול ישן בשלווה על הספה.",
    },
    {
      english: "They went to the beach to enjoy the sun.",
      hebrew: "הם הלכו לחוף ליהנות מהשמש.",
    },
    {
      english: "She wrote a poem about her feelings.",
      hebrew: "היא כתבה שיר על תחושותיה.",
    },
    {
      english: "He fixed the bicycle tire quickly.",
      hebrew: "הוא תיקן את הצמיג של האופניים במהירות.",
    },
    {
      english: "The family went on a picnic by the river.",
      hebrew: "המשפחה יצאה לפיקניק ליד הנהר.",
    },
    {
      english: "She danced gracefully at the party.",
      hebrew: "היא רקדה בחן במסיבה.",
    },
    {
      english: "He cooked a special dish for the guests.",
      hebrew: "הוא בישל מנה מיוחדת לאורחים.",
    },
    {
      english: "The sun set behind the mountains.",
      hebrew: "השמש שקעה מאחורי ההרים.",
    },
    {
      english: "They played soccer in the school yard.",
      hebrew: "הם שיחקו כדורגל בחצר בית הספר.",
    },
    {
      english: "She wore a warm coat on a cold day.",
      hebrew: "היא לבשה מעיל חם ביום קר.",
    },
  ],

  level4: [
    {
      english: "I have never been to London",
      hebrew: "מעולם לא הייתי בלונדון",
    },
    { english: "He is reading a newspaper", hebrew: "הוא קורא עיתון" },
    {
      english: "We will visit the museum tomorrow",
      hebrew: "מחר נבקר במוזיאון",
    },
    { english: "She is always on time", hebrew: "היא תמיד מגיעה בזמן" },
    {
      english: "I need to buy a new phone",
      hebrew: "אני צריך לקנות טלפון חדש",
    },
    {
      english: "They are planning a trip to Italy",
      hebrew: "הם מתכננים טיול לאיטליה",
    },
    {
      english: "The weather is very hot today",
      hebrew: "היום מזג האוויר חם מאוד",
    },
    {
      english: "He enjoys playing the guitar",
      hebrew: "הוא נהנה לנגן בגיטרה",
    },
    { english: "Can you give me some advice?", hebrew: "אתה יכול לתת לי עצה?" },
    {
      english: "I am thinking about moving to a new city",
      hebrew: "אני חושב לעבור לעיר חדשה",
    },
    { english: "I like to eat pizza", hebrew: "אני אוהב לאכול פיצה" },
    { english: "She is reading a book", hebrew: "היא קוראת ספר" },
    { english: "He is watching a movie", hebrew: "הוא צופה בסרט" },
    {
      english: "We go to school every day",
      hebrew: "אנחנו הולכים לבית הספר כל יום",
    },
    { english: "They are playing in the park", hebrew: "הם משחקים בפארק" },
    { english: "I have a cat at home", hebrew: "יש לי חתול בבית" },
    {
      english: "She likes to draw pictures",
      hebrew: "היא אוהבת לצייר תמונות",
    },
    { english: "He is writing a letter", hebrew: "הוא כותב מכתב" },
    { english: "We are going to the store", hebrew: "אנחנו הולכים לחנות" },
    { english: "They like to play soccer", hebrew: "הם אוהבים לשחק כדורגל" },
    { english: "I am studying for a test", hebrew: "אני לומד למבחן" },
    { english: "She is cooking dinner", hebrew: "היא מבשלת ארוחת ערב" },
    { english: "He is cleaning his room", hebrew: "הוא מנקה את החדר שלו" },
    { english: "We are listening to music", hebrew: "אנחנו מקשיבים למוזיקה" },
    { english: "They are talking on the phone", hebrew: "הם מדברים בטלפון" },
    {
      english: "I like to play video games",
      hebrew: "אני אוהב לשחק במשחקי וידאו",
    },
    { english: "She is learning English", hebrew: "היא לומדת אנגלית" },
    { english: "He is reading the newspaper", hebrew: "הוא קורא את העיתון" },
    { english: "We are watching TV", hebrew: "אנחנו צופים בטלוויזיה" },
    { english: "They are eating lunch", hebrew: "הם אוכלים ארוחת צהריים" },
    { english: "I am writing a story", hebrew: "אני כותב סיפור" },
    { english: "She is going to work", hebrew: "היא הולכת לעבודה" },
    { english: "He is playing the piano", hebrew: "הוא מנגן בפסנתר" },
    { english: "We are going for a walk", hebrew: "אנחנו יוצאים להליכה" },
    { english: "They are taking a nap", hebrew: "הם מנמנמים" },
    { english: "I am learning to swim", hebrew: "אני לומד לשחות" },
    {
      english: "She is practicing the guitar",
      hebrew: "היא מתאמנת על הגיטרה",
    },
    { english: "He is drawing a picture", hebrew: "הוא מצייר תמונה" },
    { english: "We are cleaning the house", hebrew: "אנחנו מנקים את הבית" },
    { english: "They are reading books", hebrew: "הם קוראים ספרים" },
    {
      english: "I like to watch cartoons",
      hebrew: "אני אוהב לצפות בסרטים מצוירים",
    },
    { english: "She is buying groceries", hebrew: "היא קונה מצרכים" },
    { english: "He is fixing the car", hebrew: "הוא מתקן את המכונית" },
    {
      english: "We are playing board games",
      hebrew: "אנחנו משחקים משחקי לוח",
    },
    { english: "They are planting flowers", hebrew: "הם שותלים פרחים" },
    { english: "I am making a sandwich", hebrew: "אני מכין סנדוויץ'" },
    { english: "She is feeding the dog", hebrew: "היא מאכילה את הכלב" },
    { english: "He is studying math", hebrew: "הוא לומד מתמטיקה" },
    { english: "We are building a puzzle", hebrew: "אנחנו בונים פאזל" },
    {
      english: "They are riding their bikes",
      hebrew: "הם רוכבים על האופניים שלהם",
    },
    { english: "I like to draw animals", hebrew: "אני אוהב לצייר חיות" },
    { english: "She is painting a picture", hebrew: "היא מציירת תמונה" },
    { english: "He is learning to read", hebrew: "הוא לומד לקרוא" },
    {
      english: "We are visiting our friends",
      hebrew: "אנחנו מבקרים את החברים שלנו",
    },
    { english: "They are baking cookies", hebrew: "הם אופים עוגיות" },
    {
      english: "I am playing with my toys",
      hebrew: "אני משחק עם הצעצועים שלי",
    },
    { english: "She is watering the plants", hebrew: "היא משקה את הצמחים" },
    { english: "He is reading a magazine", hebrew: "הוא קורא מגזין" },
    {
      english: "We are learning new words",
      hebrew: "אנחנו לומדים מילים חדשות",
    },
    { english: "They are singing a song", hebrew: "הם שרים שיר" },
    {
      english: "I like to listen to the radio",
      hebrew: "אני אוהב להאזין לרדיו",
    },
    { english: "She is writing in her diary", hebrew: "היא כותבת ביומן שלה" },
    {
      english: "He is brushing his teeth",
      hebrew: "הוא מצחצח את השיניים שלו",
    },
    {
      english: "We are playing with our dog",
      hebrew: "אנחנו משחקים עם הכלב שלנו",
    },
    { english: "They are going to the park", hebrew: "הם הולכים לפארק" },
    { english: "I am organizing my room", hebrew: "אני מארגן את החדר שלי" },
    { english: "She is cleaning the dishes", hebrew: "היא מנקה את הכלים" },
    { english: "He is learning how to cook", hebrew: "הוא לומד איך לבשל" },
    { english: "We are planning a trip", hebrew: "אנחנו מתכננים טיול" },
    { english: "They are having a picnic", hebrew: "הם עורכים פיקניק" },
    { english: "I like to go fishing", hebrew: "אני אוהב ללכת לדוג" },
    {
      english: "She is writing a letter to her friend",
      hebrew: "היא כותבת מכתב לחבר שלה",
    },
    {
      english: "He is talking to his teacher",
      hebrew: "הוא מדבר עם המורה שלו",
    },
    {
      english: "We are planting trees in the garden",
      hebrew: "אנחנו שותלים עצים בגינה",
    },
    {
      english: "They are dancing to music",
      hebrew: "הם רוקדים לצלילי מוזיקה",
    },
    {
      english: "I am drawing a picture of my family",
      hebrew: "אני מצייר תמונה של המשפחה שלי",
    },
    {
      english: "She is practicing her handwriting",
      hebrew: "היא מתאמנת בכתב היד שלה",
    },
    {
      english: "He is building a model airplane",
      hebrew: "הוא בונה מטוס דגם",
    },
    {
      english: "We are having lunch at the park",
      hebrew: "אנחנו אוכלים ארוחת צהריים בפארק",
    },
    {
      english: "They are playing with their new toys",
      hebrew: "הם משחקים עם הצעצועים החדשים שלהם",
    },
    {
      english: "I like to go swimming in the pool",
      hebrew: "אני אוהב לשחות בבריכה",
    },
    {
      english: "She is drawing a picture of a cat",
      hebrew: "היא מציירת תמונה של חתול",
    },
    {
      english: "He is reading a book about space",
      hebrew: "הוא קורא ספר על החלל",
    },
    {
      english: "We are making cookies for the party",
      hebrew: "אנחנו מכינים עוגיות למסיבה",
    },
    {
      english: "They are watching a movie together",
      hebrew: "הם צופים יחד בסרט",
    },
    {
      english: "I am learning how to play the guitar",
      hebrew: "אני לומד איך לנגן בגיטרה",
    },
    {
      english: "She used to play the piano every evening",
      hebrew: "היא נהגה לנגן בפסנתר כל ערב",
    },
    {
      english: "The dog chased the ball into the garden",
      hebrew: "הכלב רדף אחרי הכדור לתוך הגן",
    },
    {
      english: "They have been working on this project for months",
      hebrew: "הם עובדים על הפרויקט הזה כבר חודשים",
    },
    {
      english: "The sun was setting behind the mountains",
      hebrew: "השמש שקעה מאחורי ההרים",
    },
    {
      english: "I have never seen such a beautiful sunset",
      hebrew: "מעולם לא ראיתי שקיעה יפה כל כך",
    },
    {
      english: "He couldn't believe what he heard",
      hebrew: "הוא לא יכול היה להאמין למה שהוא שמע",
    },
    {
      english: "The cake was baked by my grandmother",
      hebrew: "העוגה נאפתה על ידי סבתא שלי",
    },
    {
      english: "She was writing a letter when the phone rang",
      hebrew: "היא כתבה מכתב כשהטלפון צלצל",
    },
    {
      english: "The students were excited about the upcoming trip",
      hebrew: "התלמידים היו נרגשים מהטיול המתקרב",
    },
    {
      english: "We have visited many beautiful places this year",
      hebrew: "ביקרנו בהרבה מקומות יפים השנה",
    },
    {
      english: "The bridge was built by the Romans",
      hebrew: "הגשר נבנה על ידי הרומאים",
    },
    {
      english: "She had already left when I arrived",
      hebrew: "היא כבר עזבה כשהגעתי",
    },
    {
      english: "The cat was sleeping on the windowsill",
      hebrew: "החתול ישן על אדן החלון",
    },
    {
      english: "He has been learning English for two years",
      hebrew: "הוא לומד אנגלית כבר שנתיים",
    },
    {
      english: "They were surprised by the news",
      hebrew: "הם הופתעו מהחדשות",
    },
    {
      english: "The movie was directed by a famous filmmaker",
      hebrew: "הסרט בוים על ידי במאי מפורסם",
    },
    {
      english: "She was wearing a red dress at the party",
      hebrew: "היא לבשה שמלה אדומה במסיבה",
    },
    {
      english: "The car was parked in front of the house",
      hebrew: "המכונית חנתה מול הבית",
    },
    {
      english: "He hasn't finished his homework yet",
      hebrew: "הוא עדיין לא סיים את שיעורי הבית שלו",
    },
    {
      english: "The flowers were watered by the gardener",
      hebrew: "הפרחים הושקו על ידי הגנן",
    },
    {
      english: "We had just started eating when they arrived",
      hebrew: "רק התחלנו לאכול כשהם הגיעו",
    },
    {
      english: "She was talking on the phone for hours",
      hebrew: "היא דיברה בטלפון במשך שעות",
    },
    {
      english: "The book was written by a well-known author",
      hebrew: "הספר נכתב על ידי סופר ידוע",
    },
    {
      english: "He has never traveled abroad before",
      hebrew: 'הוא מעולם לא נסע לחו"ל לפני כן',
    },
    {
      english: "The letter was delivered to the wrong address",
      hebrew: "המכתב נמסר לכתובת שגויה",
    },
    {
      english: "She had been waiting for the bus for half an hour",
      hebrew: "היא חיכתה לאוטובוס במשך חצי שעה",
    },
    {
      english: "The new restaurant was recommended by a friend",
      hebrew: "המסעדה החדשה הומלצה על ידי חבר",
    },
    {
      english: "They were discussing the plan when I entered the room",
      hebrew: "הם דנו בתוכנית כשנכנסתי לחדר",
    },
    {
      english: "He has been practicing the guitar for years",
      hebrew: "הוא מתאמן בגיטרה כבר שנים",
    },
    {
      english: "The keys were found under the sofa",
      hebrew: "המפתחות נמצאו מתחת לספה",
    },
    {
      english: "She was delighted with the gift she received",
      hebrew: "היא הייתה מרוצה מהמתנה שהיא קיבלה",
    },
    {
      english: "The story was told by an elderly man",
      hebrew: "הסיפור סופר על ידי איש מבוגר",
    },
    {
      english: "He had never seen such a big crowd before",
      hebrew: "הוא מעולם לא ראה קהל גדול כזה לפני כן",
    },
    {
      english: "The door was locked when I arrived",
      hebrew: "הדלת הייתה נעולה כשהגעתי",
    },
    {
      english: "She has been working as a teacher for ten years",
      hebrew: "היא עובדת כמורה כבר עשר שנים",
    },
    {
      english: "The cake was decorated with fresh strawberries",
      hebrew: "העוגה קושטה בתותים טריים",
    },
    {
      english: "He was surprised by the sudden change in plans",
      hebrew: "הוא הופתע מהשינוי הפתאומי בתוכניות",
    },
    {
      english: "The meeting was scheduled for tomorrow morning",
      hebrew: "הפגישה נקבעה למחר בבוקר",
    },
    {
      english: "She had already eaten before the party started",
      hebrew: "היא כבר אכלה לפני שהמסיבה התחילה",
    },
    {
      english: "The children were playing in the park when it started to rain",
      hebrew: "הילדים שיחקו בפארק כשזה התחיל לרדת גשם",
    },
    {
      english: "He hasn't seen his friend in years",
      hebrew: "הוא לא ראה את חברו כבר שנים",
    },
    {
      english: "The painting was created by a famous artist",
      hebrew: "הציור נוצר על ידי אמן מפורסם",
    },
    {
      english: "She was reading a book when the power went out",
      hebrew: "היא קראה ספר כשהחשמל כבה",
    },
    {
      english: "The tickets were sold out in a matter of hours",
      hebrew: "הכרטיסים נמכרו תוך שעות",
    },
    {
      english: "He had been living in that house for a decade",
      hebrew: "הוא גר בבית הזה במשך עשור",
    },
    {
      english: "The letter was written in a hurry",
      hebrew: "המכתב נכתב במהירות",
    },
    {
      english: "She has been studying for her exams all week",
      hebrew: "היא לומדת למבחנים שלה כל השבוע",
    },
    {
      english: "The road was closed due to construction",
      hebrew: "הכביש היה סגור עקב בנייה",
    },
    {
      english: "He was waiting for the train when it started snowing",
      hebrew: "הוא חיכה לרכבת כשהתחיל לרדת שלג",
    },
    {
      english: "The car was repaired by a skilled mechanic",
      hebrew: "המכונית תוקנה על ידי מכונאי מיומן",
    },
    {
      english: "She had been planning the trip for months",
      hebrew: "היא תכננה את הטיול במשך חודשים",
    },
    {
      english: "The book was translated into several languages",
      hebrew: "הספר תורגם למספר שפות",
    },
    {
      english: "He hasn't made a decision yet",
      hebrew: "הוא עדיין לא קיבל החלטה",
    },
    {
      english: "The cake was baked in a wood-fired oven",
      hebrew: "העוגה נאפתה בתנור עצים",
    },
    {
      english: "She was talking with her friend when the bell rang",
      hebrew: "היא דיברה עם חברתה כשהפעמון צלצל",
    },
    {
      english: "The job offer was accepted by the applicant",
      hebrew: "הצעת העבודה התקבלה על ידי המועמד",
    },
    {
      english: "He had never been so happy in his life",
      hebrew: "הוא מעולם לא היה כל כך שמח בחייו",
    },
    {
      english: "The house was built with strong materials",
      hebrew: "הבית נבנה עם חומרים חזקים",
    },
    {
      english: "She has been learning to play the violin",
      hebrew: "היא לומדת לנגן בכינור",
    },
    {
      english: "The room was filled with laughter and music",
      hebrew: "החדר היה מלא בצחוק ומוזיקה",
    },
    {
      english: "He was watching TV when the phone rang",
      hebrew: "הוא צפה בטלוויזיה כשהטלפון צלצל",
    },
    {
      english: "The book was left on the table",
      hebrew: "הספר נשאר על השולחן",
    },
    {
      english: "She had been dreaming of this moment for years",
      hebrew: "היא חלמה על הרגע הזה במשך שנים",
    },
    {
      english: "The cat was rescued by a kind stranger",
      hebrew: "החתול חולץ על ידי זר נדיב",
    },
    {
      english: "He hasn't been to the gym in weeks",
      hebrew: "הוא לא היה בחדר הכושר כבר שבועות",
    },
    {
      english: "The flowers were arranged in a beautiful vase",
      hebrew: "הפרחים סודרו באגרטל יפה",
    },
    {
      english: "She was cooking dinner when the guests arrived",
      hebrew: "היא בישלה ארוחת ערב כשהאורחים הגיעו",
    },
    {
      english: "The car was covered in snow after the storm",
      hebrew: "המכונית הייתה מכוסה בשלג אחרי הסערה",
    },
    {
      english: "He had been thinking about the problem all day",
      hebrew: "הוא חשב על הבעיה כל היום",
    },
    {
      english: "The cake was made with love and care",
      hebrew: "העוגה נעשתה באהבה ובטיפול",
    },
    {
      english: "She has been working late every night",
      hebrew: "היא עובדת עד מאוחר כל לילה",
    },
    {
      english: "The train was delayed due to technical issues",
      hebrew: "הרכבת התעכבה עקב בעיות טכניות",
    },
    {
      english: "He was looking for his keys when he found them in his pocket",
      hebrew: "הוא חיפש את המפתחות שלו כשמצא אותם בכיסו",
    },
    {
      english: "The letter was written in beautiful handwriting",
      hebrew: "המכתב נכתב בכתב יד יפה",
    },
    {
      english: "She had been practicing for the concert for months",
      hebrew: "היא התאמנה לקונצרט במשך חודשים",
    },
    {
      english: "The job was offered to her because of her experience",
      hebrew: "העבודה הוצעה לה בגלל הניסיון שלה",
    },
    {
      english: "He hasn't heard from his friend in a long time",
      hebrew: "הוא לא שמע מחברו הרבה זמן",
    },
    {
      english: "The dinner was prepared by a professional chef",
      hebrew: "הארוחה הוכנה על ידי שף מקצועי",
    },
    {
      english: "She was walking her dog when it started raining",
      hebrew: "היא טיילה עם הכלב שלה כשהתחיל לרדת גשם",
    },
    {
      english: "The door was opened by a mysterious figure",
      hebrew: "הדלת נפתחה על ידי דמות מסתורית",
    },
    {
      english: "He had been planning the surprise for weeks",
      hebrew: "הוא תכנן את ההפתעה במשך שבועות",
    },
    {
      english: "The book was given to me by my teacher",
      hebrew: "הספר ניתן לי על ידי המורה שלי",
    },
    {
      english: "She has been writing in her journal every day",
      hebrew: "היא כותבת ביומן שלה כל יום",
    },
    {
      english: "The car was stolen from the parking lot",
      hebrew: "המכונית נגנבה מהחניון",
    },
    {
      english: "He was cleaning the house when I called him",
      hebrew: "הוא ניקיון את הבית כשהתקשרתי אליו",
    },
    {
      english: "The flowers were blooming in the garden",
      hebrew: "הפרחים פרחו בגינה",
    },
    {
      english: "She had been working on the project all night",
      hebrew: "היא עבדה על הפרויקט כל הלילה",
    },
    {
      english: "The news was spread quickly throughout the town",
      hebrew: "החדשות התפשטו במהירות ברחבי העיירה",
    },
    {
      english: "He hasn't played the piano in years",
      hebrew: "הוא לא ניגן בפסנתר כבר שנים",
    },
    {
      english: "The song was performed by a talented singer",
      hebrew: "השיר בוצע על ידי זמר מוכשר",
    },
    {
      english: "She was reading a magazine when the doorbell rang",
      hebrew: "היא קראה מגזין כשהדלת צלצלה",
    },
    {
      english: "The cake was eaten by the children",
      hebrew: "העוגה נאכלה על ידי הילדים",
    },
    {
      english: "He had been looking for a new job for months",
      hebrew: "הוא חיפש עבודה חדשה במשך חודשים",
    },
    {
      english: "The house was painted in bright colors",
      hebrew: "הבית נצבע בצבעים בהירים",
    },
    {
      english: "She has been studying hard for her exams",
      hebrew: "היא לומדת קשה למבחנים שלה",
    },
    {
      english: "The car was parked in front of the building",
      hebrew: "המכונית חנתה מול הבניין",
    },
    {
      english: "He was preparing dinner when the power went out",
      hebrew: "הוא הכין ארוחת ערב כשהחשמל כבה",
    },
    {
      english: "The story was shared by many people online",
      hebrew: "הסיפור שותף על ידי הרבה אנשים ברשת",
    },
    {
      english: "She had been waiting for a call all day",
      hebrew: "היא חיכתה לטלפון כל היום",
    },
    {
      english: "The garden was filled with blooming flowers",
      hebrew: "הגן היה מלא בפרחים פורחים",
    },
    {
      english: "He hasn't been to the beach since last summer",
      hebrew: "הוא לא היה בחוף מאז הקיץ שעבר",
    },
    {
      english: "The room was decorated with candles and flowers",
      hebrew: "החדר היה מקושט בנרות ובפרחים",
    },
    {
      english: "She was talking with her friend when the teacher entered",
      hebrew: "היא דיברה עם חברתה כשהמורה נכנס",
    },
    {
      english: "The letter was signed by the manager",
      hebrew: "המכתב נחתם על ידי המנהל",
    },
    {
      english: "He had been working in the company for over ten years",
      hebrew: "הוא עבד בחברה כבר יותר מעשר שנים",
    },
    {
      english: "The car was washed by my brother",
      hebrew: "המכונית נשטפה על ידי אחי",
    },
    {
      english: "She has been learning French for a year",
      hebrew: "היא לומדת צרפתית כבר שנה",
    },
    {
      english: "The cake was decorated with chocolate and berries",
      hebrew: "העוגה קושטה בשוקולד ובפירות יער",
    },
    {
      english: "He was listening to music when the doorbell rang",
      hebrew: "הוא הקשיב למוזיקה כשהפעמון צלצל",
    },
    {
      english: "The job was offered to her after the interview",
      hebrew: "העבודה הוצעה לה לאחר הראיון",
    },
    {
      english: "She had never been to New York before last year",
      hebrew: "היא מעולם לא הייתה בניו יורק לפני השנה שעברה",
    },
    {
      english: "The house was built in the 19th century",
      hebrew: "הבית נבנה במאה ה-19",
    },
    {
      english: "He has been working on his new book for a long time",
      hebrew: "הוא עובד על הספר החדש שלו כבר הרבה זמן",
    },
    {
      english: "The garden was filled with the scent of roses",
      hebrew: "הגן היה מלא בריח ורדים",
    },
    {
      english: "She was talking on the phone when her friend arrived",
      hebrew: "היא דיברה בטלפון כשחברתה הגיעה",
    },
    {
      english: "The letter was sent by express mail",
      hebrew: "המכתב נשלח בדואר מהיר",
    },
    {
      english: "He had been looking forward to the concert for months",
      hebrew: "הוא ציפה לקונצרט במשך חודשים",
    },
    {
      english: "The cake was served with fresh cream",
      hebrew: "העוגה הוגשה עם קצפת טרייה",
    },
    {
      english: "She has been teaching English for several years",
      hebrew: "היא מלמדת אנגלית כבר כמה שנים",
    },
    {
      english: "The door was left open by mistake",
      hebrew: "הדלת נשארה פתוחה בטעות",
    },
    {
      english: "He was waiting at the bus stop when it started raining",
      hebrew: "הוא חיכה בתחנת האוטובוס כשהתחיל לרדת גשם",
    },
    {
      english: "The story was told by my grandmother",
      hebrew: "הסיפור סופר על ידי סבתא שלי",
    },
    {
      english: "She had been studying for hours before the exam",
      hebrew: "היא למדה שעות לפני המבחן",
    },
    {
      english: "The book was returned to the library",
      hebrew: "הספר הוחזר לספרייה",
    },
    {
      english: "He hasn't spoken to his neighbor in months",
      hebrew: "הוא לא דיבר עם שכנו כבר חודשים",
    },
    {
      english: "The dinner was prepared by my mother",
      hebrew: "הארוחה הוכנה על ידי אמא שלי",
    },
    {
      english: "She was walking home when she saw a beautiful sunset",
      hebrew: "היא הלכה הביתה כשראתה שקיעה יפה",
    },
    {
      english: "The car was parked under a large tree",
      hebrew: "המכונית חנתה מתחת לעץ גדול",
    },
    {
      english: "He had been planning to visit his friend for a long time",
      hebrew: "הוא תכנן לבקר את חברו כבר הרבה זמן",
    },
    {
      english: "The house was built with eco-friendly materials",
      hebrew: "הבית נבנה מחומרים ידידותיים לסביבה",
    },
    {
      english: "She has been practicing yoga every morning",
      hebrew: "היא מתאמנת ביוגה כל בוקר",
    },
    {
      english: "The flowers were arranged beautifully in the vase",
      hebrew: "הפרחים סודרו יפה באגרטל",
    },
    {
      english: "He was talking to his boss when I saw him",
      hebrew: "הוא דיבר עם הבוס שלו כשאני ראיתי אותו",
    },
    {
      english: "The letter was written in a foreign language",
      hebrew: "המכתב נכתב בשפה זרה",
    },
    {
      english: "She had been learning Spanish before moving to Spain",
      hebrew: "היא למדה ספרדית לפני המעבר לספרד",
    },
    {
      english: "The story was shared by many on social media",
      hebrew: "הסיפור שותף על ידי רבים ברשתות החברתיות",
    },
    {
      english: "He hasn't traveled by plane in years",
      hebrew: "הוא לא נסע במטוס כבר שנים",
    },
    {
      english: "The room was filled with guests for the party",
      hebrew: "החדר היה מלא באורחים למסיבה",
    },
    {
      english: "She was writing a letter when the lights went out",
      hebrew: "היא כתבה מכתב כשהאורות כבו",
    },
    {
      english: "The book was translated into multiple languages",
      hebrew: "הספר תורגם למספר שפות",
    },
    {
      english: "He had been preparing for the presentation all week",
      hebrew: "הוא התכונן למצגת כל השבוע",
    },
    {
      english: "The flowers were planted in the garden by my mother",
      hebrew: "הפרחים נשתלו בגינה על ידי אמא שלי",
    },
    {
      english: "She has been working on her art project for months",
      hebrew: "היא עובדת על פרויקט האמנות שלה כבר חודשים",
    },
    {
      english: "The car was cleaned inside and out",
      hebrew: "המכונית נוקתה מבפנים ומבחוץ",
    },
    {
      english: "He was reading the newspaper when I saw him",
      hebrew: "הוא קרא את העיתון כשאני ראיתי אותו",
    },
    {
      english: "The letter was sent by registered mail",
      hebrew: "המכתב נשלח בדואר רשום",
    },
    {
      english: "She had been dreaming about the vacation for weeks",
      hebrew: "היא חלמה על החופשה במשך שבועות",
    },
    {
      english: "The book was given to me by a friend",
      hebrew: "הספר ניתן לי על ידי חבר",
    },
    {
      english: "He hasn't visited his hometown in years",
      hebrew: "הוא לא ביקר בעיר הולדתו כבר שנים",
    },
    {
      english: "The dinner was served on the patio",
      hebrew: "הארוחה הוגשה במרפסת",
    },
    {
      english: "She was writing in her journal when the phone rang",
      hebrew: "היא כתבה ביומן שלה כשהטלפון צלצל",
    },
    {
      english: "The car was parked near the entrance",
      hebrew: "המכונית חנתה ליד הכניסה",
    },
    {
      english: "He had been thinking about the problem for days",
      hebrew: "הוא חשב על הבעיה במשך ימים",
    },
    {
      english: "The flowers were arranged in a beautiful bouquet",
      hebrew: "הפרחים סודרו בזר יפה",
    },
    {
      english: "She has been learning to cook new dishes",
      hebrew: "היא לומדת לבשל מנות חדשות",
    },
    {
      english: "The letter was written in response to the invitation",
      hebrew: "המכתב נכתב בתגובה להזמנה",
    },
    {
      english: "He was listening to the radio when I walked in",
      hebrew: "הוא הקשיב לרדיו כשנכנסתי",
    },
    {
      english: "The book was translated by a well-known translator",
      hebrew: "הספר תורגם על ידי מתרגם ידוע",
    },
    {
      english: "She had been preparing for the interview for weeks",
      hebrew: "היא התכוננה לראיון במשך שבועות",
    },
    {
      english: "The dinner was cooked by my grandmother",
      hebrew: "הארוחה בושלה על ידי סבתא שלי",
    },
    {
      english: "He hasn't seen his brother since the last family reunion",
      hebrew: "הוא לא ראה את אחיו מאז הפגישה המשפחתית האחרונה",
    },
    {
      english: "The car was parked in the shade of a big tree",
      hebrew: "המכונית חנתה בצל עץ גדול",
    },
    {
      english: "She was listening to music when I called her",
      hebrew: "היא הקשיבה למוזיקה כשהתקשרתי אליה",
    },
    {
      english: "The letter was delivered to the office yesterday",
      hebrew: "המכתב נמסר למשרד אתמול",
    },
    {
      english: "He had been dreaming of this day for years",
      hebrew: "הוא חלם על היום הזה במשך שנים",
    },
    {
      english: "The flowers were placed on the table for decoration",
      hebrew: "הפרחים הונחו על השולחן לקישוט",
    },
    {
      english: "She has been waiting for the train for half an hour",
      hebrew: "היא מחכה לרכבת כבר חצי שעה",
    },
    {
      english: "The car was damaged in the accident",
      hebrew: "המכונית ניזוקה בתאונה",
    },
    {
      english: "He was reading a book when the lights went out",
      hebrew: "הוא קרא ספר כשהאורות כבו",
    },
    {
      english: "The letter was sent with a special stamp",
      hebrew: "המכתב נשלח עם בול מיוחד",
    },
    {
      english: "She had been saving money for her trip to Europe",
      hebrew: "היא חסכה כסף לטיול שלה לאירופה",
    },
    {
      english: "The flowers were a gift from my friend",
      hebrew: "הפרחים היו מתנה מחבר שלי",
    },
    {
      english: "He hasn't been able to sleep well lately",
      hebrew: "הוא לא הצליח לישון טוב לאחרונה",
    },
    {
      english: "The car was parked in front of the restaurant",
      hebrew: "המכונית חנתה מול המסעדה",
    },
    {
      english: "She was talking with her teacher when I arrived",
      hebrew: "היא דיברה עם המורה שלה כשהגעתי",
    },
    {
      english: "The letter was written with great care",
      hebrew: "המכתב נכתב בזהירות רבה",
    },
    {
      english: "He had been searching for his lost keys for hours",
      hebrew: "הוא חיפש את המפתחות האבודים שלו במשך שעות",
    },
    {
      english: "The flowers were arranged by a professional florist",
      hebrew: "הפרחים סודרו על ידי שוזרת מקצועית",
    },
    {
      english: "She has been studying for her final exams",
      hebrew: "היא לומדת למבחנים הסופיים שלה",
    },
    {
      english: "The car was parked near the entrance of the park",
      hebrew: "המכונית חנתה ליד הכניסה לפארק",
    },
    {
      english: "He was talking on the phone when I walked in",
      hebrew: "הוא דיבר בטלפון כשנכנסתי",
    },
    {
      english: "The letter was found in the mailbox this morning",
      hebrew: "המכתב נמצא בתיבת הדואר הבוקר",
    },
    {
      english: "She had been waiting for this opportunity for years",
      hebrew: "היא חיכתה להזדמנות הזו במשך שנים",
    },
    {
      english: "The flowers were watered by the gardener every day",
      hebrew: "הפרחים הושקו על ידי הגנן כל יום",
    },
    {
      english: "He hasn't been to the dentist in a long time",
      hebrew: "הוא לא היה אצל רופא השיניים כבר הרבה זמן",
    },
    {
      english: "The car was repaired by a skilled mechanic",
      hebrew: "המכונית תוקנה על ידי מכונאי מיומן",
    },
    {
      english: "She was watching TV when I called her",
      hebrew: "היא צפתה בטלוויזיה כשהתקשרתי אליה",
    },
    {
      english: "The letter was addressed to my friend",
      hebrew: "המכתב היה ממוען לחבר שלי",
    },
    {
      english: "He had been planning to visit his parents for weeks",
      hebrew: "הוא תכנן לבקר את הוריו במשך שבועות",
    },
    {
      english: "The flowers were picked from the garden this morning",
      hebrew: "הפרחים נקטפו מהגינה הבוקר",
    },
    {
      english: "She has been working on a new painting",
      hebrew: "היא עובדת על ציור חדש",
    },
    {
      english: "The car was parked in the driveway",
      hebrew: "המכונית חנתה בחנייה",
    },
    {
      english: "He was listening to music when I saw him",
      hebrew: "הוא הקשיב למוזיקה כשאני ראיתי אותו",
    },
    {
      english: "The letter was sent by airmail",
      hebrew: "המכתב נשלח בדואר אוויר",
    },
    {
      english: "She had been practicing for the competition for months",
      hebrew: "היא התאמנה לתחרות במשך חודשים",
    },
    {
      english: "The flowers were arranged in a vase on the table",
      hebrew: "הפרחים סודרו באגרטל על השולחן",
    },
    {
      english: "He hasn't seen his childhood friend in years",
      hebrew: "הוא לא ראה את חברו מילדות במשך שנים",
    },
    {
      english: "The car was parked in front of the house",
      hebrew: "המכונית חנתה מול הבית",
    },
    {
      english: "She was cooking dinner when the guests arrived",
      hebrew: "היא בישלה ארוחת ערב כשהאורחים הגיעו",
    },
    {
      english: "The letter was written in beautiful handwriting",
      hebrew: "המכתב נכתב בכתב יד יפה",
    },
    {
      english: "He had been studying for his exams for weeks",
      hebrew: "הוא למד למבחנים שלו במשך שבועות",
    },
    {
      english: "The flowers were a gift from my grandmother",
      hebrew: "הפרחים היו מתנה מסבתא שלי",
    },
    {
      english: "She has been learning to play the piano",
      hebrew: "היא לומדת לנגן בפסנתר",
    },
    {
      english: "The car was parked in a no-parking zone",
      hebrew: "המכונית חנתה באזור שאין בו חניה",
    },
    {
      english: "He was talking to his friend when I walked in",
      hebrew: "הוא דיבר עם חברו כשנכנסתי",
    },
    {
      english: "The letter was sent with a gift inside",
      hebrew: "המכתב נשלח עם מתנה בפנים",
    },
    {
      english: "She had been waiting for this moment for a long time",
      hebrew: "היא חיכתה לרגע הזה הרבה זמן",
    },
    {
      english: "The flowers were arranged by my mother",
      hebrew: "הפרחים סודרו על ידי אמא שלי",
    },
    {
      english: "He hasn't spoken to his sister in months",
      hebrew: "הוא לא דיבר עם אחותו כבר חודשים",
    },
    {
      english: "The car was parked under a streetlight",
      hebrew: "המכונית חנתה מתחת לפנס רחוב",
    },
    {
      english: "She was writing a letter when the phone rang",
      hebrew: "היא כתבה מכתב כשהטלפון צלצל",
    },
    {
      english: "The letter was received with gratitude",
      hebrew: "המכתב התקבל בתודה",
    },
    {
      english: "He had been looking forward to the trip for months",
      hebrew: "הוא ציפה לטיול במשך חודשים",
    },
    {
      english: "The flowers were blooming in the springtime",
      hebrew: "הפרחים פרחו באביב",
    },
    {
      english: "She has been studying art for many years",
      hebrew: "היא לומדת אמנות במשך שנים רבות",
    },
    {
      english: "The car was parked at the side of the road",
      hebrew: "המכונית חנתה בצד הדרך",
    },
    {
      english: "He was reading a newspaper when I saw him",
      hebrew: "הוא קרא עיתון כשאני ראיתי אותו",
    },
    {
      english: "The letter was written with care and attention",
      hebrew: "המכתב נכתב בזהירות ותשומת לב",
    },
    {
      english: "She had been practicing her speech for weeks",
      hebrew: "היא התאמנה על הנאום שלה במשך שבועות",
    },
    {
      english: "The flowers were a gift for my birthday",
      hebrew: "הפרחים היו מתנה ליום ההולדת שלי",
    },
    {
      english: "He hasn't driven his car in months",
      hebrew: "הוא לא נהג במכונית שלו כבר חודשים",
    },
    {
      english: "The car was parked near the entrance of the building",
      hebrew: "המכונית חנתה ליד הכניסה לבניין",
    },
    {
      english: "She was talking to her friend when I walked in",
      hebrew: "היא דיברה עם חברתה כשנכנסתי",
    },
    {
      english: "The letter was delivered to the wrong address",
      hebrew: "המכתב נמסר לכתובת הלא נכונה",
    },
    {
      english: "He had been planning the surprise party for weeks",
      hebrew: "הוא תכנן את מסיבת ההפתעה במשך שבועות",
    },
    {
      english: "The flowers were picked fresh from the garden",
      hebrew: "הפרחים נקטפו טריים מהגינה",
    },
  ],

  level5: [
    {
      english: "The train arrives at 8 o'clock",
      hebrew: "הרכבת מגיעה בשעה 8",
    },
    { english: "She is an excellent student", hebrew: "היא תלמידה מצטיינת" },
    {
      english: "We need to finish this project by Friday",
      hebrew: "אנחנו צריכים לסיים את הפרויקט הזה עד יום שישי",
    },
    {
      english: "He often travels for work",
      hebrew: "הוא נוסע לעיתים קרובות לעבודה",
    },
    {
      english: "I have a meeting at 10 AM",
      hebrew: "יש לי פגישה בשעה 10 בבוקר",
    },
    {
      english: "The movie was really interesting",
      hebrew: "הסרט היה ממש מעניין",
    },
    {
      english: "She has a great sense of humor",
      hebrew: "יש לה חוש הומור נהדר",
    },
    {
      english: "I am learning to cook new recipes",
      hebrew: "אני לומד לבשל מתכונים חדשים",
    },
    {
      english: "They are looking for a new apartment",
      hebrew: "הם מחפשים דירה חדשה",
    },
    {
      english: "He is very good at solving problems",
      hebrew: "הוא טוב מאוד בפתרון בעיות",
    },
    [
      {
        english: "I am trying to improve my English skills",
        hebrew: "אני מנסה לשפר את כישורי האנגלית שלי",
      },
      {
        english: "She is preparing for her final exams",
        hebrew: "היא מתכוננת למבחנים הסופיים שלה",
      },
      {
        english: "He was late for the meeting because of traffic",
        hebrew: "הוא איחר לפגישה בגלל התנועה",
      },
      {
        english: "We are planning to visit our grandparents this weekend",
        hebrew: "אנחנו מתכננים לבקר את הסבים שלנו בסוף השבוע הזה",
      },
      {
        english: "I need to call the doctor to make an appointment",
        hebrew: "אני צריך להתקשר לרופא כדי לקבוע תור",
      },
      {
        english: "She enjoys playing the piano in her free time",
        hebrew: "היא נהנית לנגן בפסנתר בזמנה הפנוי",
      },
      {
        english: "He has a lot of experience in this field",
        hebrew: "יש לו הרבה ניסיון בתחום הזה",
      },
      {
        english: "We are planning to renovate our kitchen next year",
        hebrew: "אנחנו מתכננים לשפץ את המטבח שלנו בשנה הבאה",
      },
      {
        english: "I usually go for a walk in the evening",
        hebrew: "בדרך כלל אני יוצא להליכה בערב",
      },
      {
        english: "She has been working on this project for several months",
        hebrew: "היא עובדת על הפרויקט הזה כבר כמה חודשים",
      },
      {
        english: "The weather is perfect for a day at the beach",
        hebrew: "מזג האוויר מושלם ליום על החוף",
      },
      {
        english: "I am interested in learning more about this topic",
        hebrew: "אני מעוניין ללמוד יותר על הנושא הזה",
      },
      {
        english: "She is always very organized and punctual",
        hebrew: "היא תמיד מאוד מאורגנת ומדויקת בזמנים",
      },
      {
        english: "He has a great sense of responsibility",
        hebrew: "יש לו חוש אחריות נהדר",
      },
      {
        english: "We are trying to find a solution to this problem",
        hebrew: "אנחנו מנסים למצוא פתרון לבעיה הזו",
      },
      {
        english: "I enjoy reading books in my spare time",
        hebrew: "אני נהנה לקרוא ספרים בזמן הפנוי שלי",
      },
      {
        english: "She is thinking about starting her own business",
        hebrew: "היא חושבת על פתיחת עסק משלה",
      },
      {
        english: "He is very passionate about his work",
        hebrew: "הוא מאוד נלהב מעבודתו",
      },
      {
        english: "We are planning a vacation to Europe next summer",
        hebrew: "אנחנו מתכננים חופשה לאירופה בקיץ הבא",
      },
      {
        english: "I need to finish this report by tomorrow morning",
        hebrew: "אני צריך לסיים את הדוח הזה עד מחר בבוקר",
      },
      {
        english: "She is very knowledgeable about this subject",
        hebrew: "היא בעלת ידע רב בנושא הזה",
      },
      {
        english: "He always arrives on time for meetings",
        hebrew: "הוא תמיד מגיע בזמן לפגישות",
      },
      {
        english: "We are planning to host a dinner party this weekend",
        hebrew: "אנחנו מתכננים לארח ארוחת ערב בסוף השבוע הזה",
      },
      {
        english: "I need to buy some groceries for dinner",
        hebrew: "אני צריך לקנות כמה מצרכים לארוחת ערב",
      },
      {
        english: "She is learning how to play the guitar",
        hebrew: "היא לומדת איך לנגן בגיטרה",
      },
      {
        english: "He is responsible for managing the team",
        hebrew: "הוא אחראי על ניהול הצוות",
      },
      {
        english: "We are looking forward to our trip to Japan",
        hebrew: "אנחנו מצפים לטיול שלנו ליפן",
      },
      {
        english: "I usually drink coffee in the morning",
        hebrew: "בדרך כלל אני שותה קפה בבוקר",
      },
      {
        english: "She has a great sense of style",
        hebrew: "יש לה חוש סגנון נהדר",
      },
      {
        english: "He is always willing to help others",
        hebrew: "הוא תמיד מוכן לעזור לאחרים",
      },
      {
        english: "We are planning to move to a new apartment",
        hebrew: "אנחנו מתכננים לעבור לדירה חדשה",
      },
      {
        english: "I need to study for my upcoming exams",
        hebrew: "אני צריך ללמוד למבחנים הקרובים שלי",
      },
      {
        english: "She is very good at solving problems",
        hebrew: "היא טובה מאוד בפתרון בעיות",
      },
      {
        english: "He enjoys playing basketball on the weekends",
        hebrew: "הוא נהנה לשחק כדורסל בסופי שבוע",
      },
      {
        english: "We are planning to adopt a dog from the shelter",
        hebrew: "אנחנו מתכננים לאמץ כלב מהמקלט",
      },
      {
        english: "I usually go to the gym after work",
        hebrew: "בדרך כלל אני הולך לחדר כושר אחרי העבודה",
      },
      {
        english: "She has been working on her thesis for over a year",
        hebrew: "היא עובדת על התזה שלה כבר למעלה משנה",
      },
      {
        english: "He is very interested in history",
        hebrew: "הוא מאוד מתעניין בהיסטוריה",
      },
      {
        english: "We are planning to start a new project next month",
        hebrew: "אנחנו מתכננים להתחיל פרויקט חדש בחודש הבא",
      },
      {
        english: "I need to send an email to my boss",
        hebrew: "אני צריך לשלוח מייל לבוס שלי",
      },
      {
        english: "She enjoys hiking in the mountains",
        hebrew: "היא נהנית לטייל בהרים",
      },
      {
        english: "He is very good at organizing events",
        hebrew: "הוא טוב מאוד בארגון אירועים",
      },
      {
        english: "We are planning to visit the museum this weekend",
        hebrew: "אנחנו מתכננים לבקר במוזיאון בסוף השבוע הזה",
      },
      {
        english: "I usually go to bed around 11 PM",
        hebrew: "בדרך כלל אני הולך לישון בסביבות 11 בלילה",
      },
      {
        english: "She has a lot of friends at school",
        hebrew: "יש לה הרבה חברים בבית הספר",
      },
      {
        english: "He is always very polite to everyone",
        hebrew: "הוא תמיד מאוד מנומס לכולם",
      },
      {
        english: "We are looking forward to the concert next month",
        hebrew: "אנחנו מצפים להופעה בחודש הבא",
      },
      {
        english: "I need to finish my homework before dinner",
        hebrew: "אני צריך לסיים את שיעורי הבית שלי לפני ארוחת הערב",
      },
      {
        english: "She is very talented at drawing",
        hebrew: "היא מאוד מוכשרת בציור",
      },
      {
        english: "He enjoys cooking for his family",
        hebrew: "הוא נהנה לבשל למשפחתו",
      },
      {
        english: "We are planning to have a picnic in the park",
        hebrew: "אנחנו מתכננים לעשות פיקניק בפארק",
      },
      {
        english: "I usually read a book before going to bed",
        hebrew: "בדרך כלל אני קורא ספר לפני השינה",
      },
      {
        english: "She has been studying English for two years",
        hebrew: "היא לומדת אנגלית כבר שנתיים",
      },
      {
        english: "He is very good at playing chess",
        hebrew: "הוא טוב מאוד בשחמט",
      },
      {
        english: "We are planning to go on a road trip this summer",
        hebrew: "אנחנו מתכננים לצאת לטיול בכביש בקיץ הזה",
      },
      {
        english: "I need to make a doctor's appointment",
        hebrew: "אני צריך לקבוע תור לרופא",
      },
      {
        english: "She enjoys swimming in the ocean",
        hebrew: "היא נהנית לשחות באוקיינוס",
      },
      {
        english: "He is always very helpful and kind",
        hebrew: "הוא תמיד מאוד עוזר ואדיב",
      },
      {
        english: "We are planning to celebrate her birthday with a party",
        hebrew: "אנחנו מתכננים לחגוג את יום הולדתה עם מסיבה",
      },
      {
        english: "I usually eat breakfast at 7 AM",
        hebrew: "בדרך כלל אני אוכל ארוחת בוקר בשעה 7 בבוקר",
      },
      {
        english: "She has been working in the same company for five years",
        hebrew: "היא עובדת באותה חברה כבר חמש שנים",
      },
      {
        english: "He is very passionate about photography",
        hebrew: "הוא מאוד נלהב מצילום",
      },
      {
        english: "We are planning to visit the zoo this weekend",
        hebrew: "אנחנו מתכננים לבקר בגן החיות בסוף השבוע הזה",
      },
      {
        english: "I need to buy a gift for my friend's birthday",
        hebrew: "אני צריך לקנות מתנה ליום ההולדת של חבר שלי",
      },
      {
        english: "She enjoys taking long walks in the park",
        hebrew: "היא נהנית לקחת הליכות ארוכות בפארק",
      },
      {
        english: "He is very good at playing the guitar",
        hebrew: "הוא טוב מאוד בנגינה בגיטרה",
      },
      {
        english: "We are planning to go to the movies tonight",
        hebrew: "אנחנו מתכננים ללכת לקולנוע הערב",
      },
      {
        english: "I usually watch TV in the evening",
        hebrew: "בדרך כלל אני צופה בטלוויזיה בערב",
      },
      {
        english: "She has a beautiful singing voice",
        hebrew: "יש לה קול שירה יפה",
      },
      {
        english: "He enjoys playing video games with his friends",
        hebrew: "הוא נהנה לשחק משחקי וידאו עם חבריו",
      },
      {
        english: "We are planning to have a barbecue this weekend",
        hebrew: "אנחנו מתכננים לעשות על האש בסוף השבוע הזה",
      },
      {
        english: "I need to pack my bags for the trip",
        hebrew: "אני צריך לארוז את התיקים שלי לטיול",
      },
      {
        english: "She enjoys visiting new places",
        hebrew: "היא נהנית לבקר במקומות חדשים",
      },
      {
        english: "He is very skilled at fixing things",
        hebrew: "הוא מאוד מיומן בתיקון דברים",
      },
      {
        english: "We are planning to go hiking in the mountains",
        hebrew: "אנחנו מתכננים לטייל בהרים",
      },
      {
        english: "I usually drink tea in the afternoon",
        hebrew: "בדרך כלל אני שותה תה אחר הצהריים",
      },
      {
        english: "She has a lot of hobbies, including painting",
        hebrew: "יש לה הרבה תחביבים, כולל ציור",
      },
      {
        english: "He is always very careful with his work",
        hebrew: "הוא תמיד מאוד זהיר בעבודתו",
      },
      {
        english: "We are looking forward to seeing you soon",
        hebrew: "אנחנו מצפים לראותך בקרוב",
      },
      {
        english: "I need to get ready for work",
        hebrew: "אני צריך להתכונן לעבודה",
      },
      {
        english: "She enjoys spending time with her family",
        hebrew: "היא נהנית לבלות זמן עם משפחתה",
      },
      {
        english: "He is very good at giving presentations",
        hebrew: "הוא טוב מאוד במתן מצגות",
      },
      {
        english: "We are planning to go to the beach this weekend",
        hebrew: "אנחנו מתכננים ללכת לחוף הים בסוף השבוע הזה",
      },
      {
        english: "I usually listen to music while working",
        hebrew: "בדרך כלל אני מקשיב למוזיקה בזמן העבודה",
      },
      {
        english: "She has a talent for writing stories",
        hebrew: "יש לה כשרון לכתיבת סיפורים",
      },
      {
        english: "He enjoys learning new languages",
        hebrew: "הוא נהנה ללמוד שפות חדשות",
      },
      {
        english: "We are planning to have a family reunion next year",
        hebrew: "אנחנו מתכננים איחוד משפחתי בשנה הבאה",
      },
      {
        english: "I need to find a new job",
        hebrew: "אני צריך למצוא עבודה חדשה",
      },
      {
        english: "She enjoys baking cookies on the weekends",
        hebrew: "היא נהנית לאפות עוגיות בסופי שבוע",
      },
      {
        english: "He is always very patient with his students",
        hebrew: "הוא תמיד מאוד סבלני עם התלמידים שלו",
      },
      {
        english: "We are planning to visit our relatives during the holidays",
        hebrew: "אנחנו מתכננים לבקר את קרובי המשפחה שלנו במהלך החגים",
      },
      {
        english: "I usually go grocery shopping on Sundays",
        hebrew: "בדרך כלל אני עושה קניות מצרכים בימי ראשון",
      },
      {
        english: "She has a lot of experience in marketing",
        hebrew: "יש לה הרבה ניסיון בשיווק",
      },
      {
        english: "He is very interested in learning about different cultures",
        hebrew: "הוא מאוד מעוניין ללמוד על תרבויות שונות",
      },
      {
        english: "We are planning to redecorate our living room",
        hebrew: "אנחנו מתכננים לעצב מחדש את הסלון שלנו",
      },
    ],
  ],

  level6: [
    {
      english: "I have been studying English for three years",
      hebrew: "אני לומד אנגלית כבר שלוש שנים",
    },
    {
      english: "She is planning to visit her relatives next month",
      hebrew: "היא מתכננת לבקר את קרוביה בחודש הבא",
    },
    {
      english: "We should consider all the options before making a decision",
      hebrew: "אנחנו צריכים לשקול את כל האפשרויות לפני קבלת החלטה",
    },
    {
      english: "He enjoys reading books about history",
      hebrew: "הוא נהנה לקרוא ספרים על היסטוריה",
    },
    {
      english: "The company is expanding its operations in Europe",
      hebrew: "החברה מרחיבה את פעילותה באירופה",
    },
    {
      english: "I am looking forward to the weekend",
      hebrew: "אני מצפה לסוף השבוע",
    },
    {
      english: "She has been working at the same company for ten years",
      hebrew: "היא עובדת באותה חברה כבר עשר שנים",
    },
    {
      english: "They are considering buying a new house",
      hebrew: "הם שוקלים לקנות בית חדש",
    },
    {
      english: "He has already finished his homework",
      hebrew: "הוא כבר סיים את שיעורי הבית שלו",
    },
    {
      english: "We are planning a surprise party for her birthday",
      hebrew: "אנחנו מתכננים מסיבת הפתעה ליום הולדתה",
    },
  ],

  level7: [
    {
      english:
        "The new policy has significantly improved customer satisfaction",
      hebrew: "המדיניות החדשה שיפרה משמעותית את שביעות רצון הלקוחות",
    },
    {
      english:
        "He is working on a challenging project that requires a lot of effort",
      hebrew: "הוא עובד על פרויקט מאתגר שדורש הרבה מאמץ",
    },
    {
      english: "She has a unique perspective on the situation",
      hebrew: "יש לה זווית ראייה ייחודית על המצב",
    },
    {
      english: "The results of the experiment were quite surprising",
      hebrew: "התוצאות של הניסוי היו די מפתיעות",
    },
    {
      english: "We need to discuss the implications of this decision",
      hebrew: "אנחנו צריכים לדון בהשלכות של ההחלטה הזו",
    },
    {
      english: "He is an expert in his field and highly respected",
      hebrew: "הוא מומחה בתחום שלו ומכובד מאוד",
    },
    {
      english: "The team is working on developing a new strategy",
      hebrew: "הצוות עובד על פיתוח אסטרטגיה חדשה",
    },
    {
      english: "She has been recognized for her outstanding contributions",
      hebrew: "היא זכתה להכרה על תרומותיה יוצאות הדופן",
    },
    {
      english: "The company is facing some financial difficulties",
      hebrew: "החברה מתמודדת עם כמה קשיים פיננסיים",
    },
    {
      english: "We need to ensure that all the details are correct",
      hebrew: "אנחנו צריכים לוודא שכל הפרטים נכונים",
    },
  ],

  level8: [
    {
      english: "The complexity of the issue requires careful consideration",
      hebrew: "המורכבות של הבעיה דורשת שיקול דעת זהיר",
    },
    {
      english: "He has been involved in the project since its inception",
      hebrew: "הוא היה מעורב בפרויקט מאז תחילתו",
    },
    {
      english: "She has a deep understanding of the subject matter",
      hebrew: "יש לה הבנה עמוקה של הנושא",
    },
    {
      english:
        "The company's success can be attributed to its innovative approach",
      hebrew: "הצלחת החברה נובעת מגישה חדשנית",
    },
    {
      english: "We need to evaluate the potential risks before proceeding",
      hebrew: "אנחנו צריכים להעריך את הסיכונים האפשריים לפני שנמשיך",
    },
    {
      english: "He has been praised for his leadership skills",
      hebrew: "הוא זכה לשבחים על כישורי ההנהגה שלו",
    },
    {
      english: "She is known for her ability to solve complex problems",
      hebrew: "היא ידועה ביכולתה לפתור בעיות מורכבות",
    },
    {
      english: "The report provides a comprehensive analysis of the data",
      hebrew: "הדוח מספק ניתוח מקיף של הנתונים",
    },
    {
      english: "We need to consider the long-term impact of this decision",
      hebrew: "אנחנו צריכים לשקול את ההשפעה לטווח הארוך של ההחלטה הזו",
    },
    {
      english: "He has demonstrated a strong commitment to the project",
      hebrew: "הוא הראה מחויבות חזקה לפרויקט",
    },
  ],

  level9: [
    {
      english:
        "The new regulations will have a significant impact on the industry",
      hebrew: "התקנות החדשות ישפיעו משמעותית על התעשייה",
    },
    {
      english: "He has extensive experience in managing large-scale projects",
      hebrew: "יש לו ניסיון רב בניהול פרויקטים בקנה מידה גדול",
    },
    {
      english:
        "The company is implementing a new strategy to increase efficiency",
      hebrew: "החברה מיישמת אסטרטגיה חדשה להגדלת היעילות",
    },
    {
      english: "She has been instrumental in driving the company's growth",
      hebrew: "היא הייתה מרכזית בהנעת הצמיחה של החברה",
    },
    {
      english: "We need to develop a more robust solution to this problem",
      hebrew: "אנחנו צריכים לפתח פתרון חזק יותר לבעיה הזו",
    },
    {
      english: "He is well-versed in the latest technological advancements",
      hebrew: "הוא בקיא מאוד בהתפתחויות הטכנולוגיות האחרונות",
    },
    {
      english: "The project requires a detailed analysis of the financial data",
      hebrew: "הפרויקט דורש ניתוח מפורט של הנתונים הפיננסיים",
    },
    {
      english: "She has a proven track record of successful project management",
      hebrew: "יש לה רקורד מוכח של ניהול פרויקטים מוצלח",
    },
    {
      english: "The team is working on a groundbreaking new product",
      hebrew: "הצוות עובד על מוצר חדשני חדש",
    },
    {
      english: "We need to establish clear guidelines for the project",
      hebrew: "אנחנו צריכים לקבוע הנחיות ברורות לפרויקט",
    },
  ],

  level10: [
    {
      english: "The implications of this legal precedent are far-reaching",
      hebrew: "ההשלכות של התקדים המשפטי הזה הן רחבות טווח",
    },
    {
      english: "He has published numerous articles in peer-reviewed journals",
      hebrew: "הוא פרסם מאמרים רבים בכתבי עת עם ביקורת עמיתים",
    },
    {
      english: "The research methodology used in this study is rigorous",
      hebrew: "שיטת המחקר ששימשה במחקר זה היא קפדנית",
    },
    {
      english:
        "She has presented her findings at several international conferences",
      hebrew: "היא הציגה את ממצאיה בכמה כנסים בינלאומיים",
    },
    {
      english:
        "The court's ruling is based on a thorough interpretation of the law",
      hebrew: "פסיקת בית המשפט מבוססת על פרשנות מעמיקה של החוק",
    },
    {
      english: "He is an authority in the field of environmental law",
      hebrew: "הוא סמכות בתחום המשפט הסביבתי",
    },
    {
      english:
        "The study explores the ethical considerations of genetic research",
      hebrew: "המחקר בוחן את השיקולים האתיים של מחקר גנטי",
    },
    {
      english:
        "She has made significant contributions to the field of neuroscience",
      hebrew: "היא תרמה תרומות משמעותיות לתחום חקר המוח",
    },
    {
      english: "The contract includes a clause on intellectual property rights",
      hebrew: "החוזה כולל סעיף על זכויות קניין רוחני",
    },
    {
      english:
        "We need to address the underlying causes of this economic issue",
      hebrew: "אנחנו צריכים לטפל בסיבות העמוקות של הבעיה הכלכלית הזו",
    },
  ],
};

export { sentencesFile };
