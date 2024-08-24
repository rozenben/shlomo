import { sentencesFile } from "./sentences.js";

class SentenceQueue {
  constructor() {
    this.queue = [];
    this.threshold = 10; // כמות המשפטים המינימלית לפני טעינה מחדש
    // setInterval(() => this.checkAndRefill(), 5000);
  }

  enqueue(sentence) {
    this.queue.push(sentence);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  // checkAndRefill() {
  //   console.log("length of queue: " + sentenceQueue.size());
  //   if (this.size() <= this.threshold) {
  //     fetchSentencesFromAPI();
  //   }
  // }
}

const sentenceQueue = new SentenceQueue();

function fetchSentencesFromFile(level = 5) {
  sentencesFile["level" + level].forEach((sentence) =>
    sentenceQueue.enqueue(sentence)
  );
}

// פונקציה לטעינת משפטים מה-API
async function fetchSentencesFromAPI() {
  // axios
  //   .post("http://127.0.0.1:5000/api/sentences") // Assuming your endpoint is '/api/sentences'
  //   .then((response) => {
  //     const sentences = response.data;
  //     //   console.log("sentences: ", sentences);
  //     // Add the sentences to the queue
  //     sentences.forEach((sentence) => sentenceQueue.enqueue(sentence));
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching sentences:", error);
  //   });
}

// ייצוא הפונקציות והאובייקטים הנדרשים
export { sentenceQueue, fetchSentencesFromAPI, fetchSentencesFromFile };
