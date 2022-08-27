//lines 2-32 where not in lesson but in the website from the lesson
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'assets/bowtie-cat.png') {
    myImage.setAttribute('src','assets/firefox2.png');
  } else {
    myImage.setAttribute('src','assets/bowtie-cat.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }
  
 var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

 var randomTopic = topics[Math.floor(Math.random() * topics.length)];

 console.log('Here are the topics we learned through prework:');

  function listTopics() {
  for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

  function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

listTopics();
console.log('Which topic should we study first?')
selectTopic();