function publishSubscribeExamResults() {
  const subscribers = [];
  return {
    subscribe: (subscriber) => {
      subscribers.push(subscriber);
    },
    publish: (message) => {
      subscribers.forEach((subscriber) => subscriber(message));
    },
  };
}
const examResults = publishSubscribeExamResults();
const subscriber1 = (message) => console.log("Subscriber 1 received:", message);
const subscriber2 = (message) => console.log("Subscriber 2 received:", message);
examResults.subscribe(subscriber1);
examResults.subscribe(subscriber2);
examResults.publish("Exam results are out!");

const Class = (function () {
  const Teacher = {
    teacherName: "John Doe",
  };
  const Notes = {
    noteContent: "Class notes",
  };
  const Lecture = {
    lectureTopic: "JavaScript Basics",
  };
  const classModule = {
    className: "Web Development",
    ...Teacher,
    ...Notes,
    ...Lecture,
  };
  return classModule;
})();
console.log(Class);

function ClassAlarm() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Class is over");
    }, 30 * 60 * 1000);
  });
}
(async () => {
  const message = await ClassAlarm();
  console.log(message);
})();

class Gadget {
  constructor() {
    this.startTime = new Date();
    this.salePrice = 0;
  }
  start() {
    console.log("Gadget started");
  }
  end() {
    console.log("Gadget ended");
  }
}
class StopWatch extends Gadget {
  constructor() {
    super();
    this.stopWatchProperty = "StopWatch property";
  }
}
const stopWatchInstance = new StopWatch();
console.log(stopWatchInstance);
class SmartWatch extends Gadget {
  constructor() {
    super();
    this.smartWatchProperty = "SmartWatch property";
  }
  connectToInternet() {
    console.log("Connected to the internet");
  }
}
SmartWatch.prototype.connectToInternet = function () {
  console.log("Connected to the internet");
};
const smartWatchInstance1 = new SmartWatch();
const smartWatchInstance2 = new SmartWatch();
smartWatchInstance1.connectToInternet();
smartWatchInstance2.connectToInternet();
