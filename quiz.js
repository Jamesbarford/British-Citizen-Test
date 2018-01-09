//form - check button
//questions
//answers - check answers
//next
//timer
//test 1 / 2 etc
//pass / fail

var questions = {
  name: [
        'What was the last battle between Great Britain and France?',
        'Which flower is associated with Wales?',
        'During the reign of Charles II parts of London were destroyed, what was the cause of this destruction?',
        'How often are general elections held in the UK?',
        'Scotland has its own banknotes, which are valid everywhere in the UK.',
        'What charity works to preserve important buildings, coastline and countryside in the UK?',
        'Great Britain refers only to England, Wales and Scotland.',
        'Who was the tribal leader who fought against the Romans?',
        'Who was voted the greatest Briton of all time in 2002?',
        'When did women get the right to vote at the same age as men?',
        'Who is the head of the Church of England?',
        'What sort of event is the Grand National?',
        'What type of literature are the Canterbury Tales?',
        'When is Christmas Day?',
        'Who supported King Charles I during the Civil War?',
        'What battle is commemorated in the Bayeux Tapestry?',
        'Where was Anne Boleyn, the wife of Henry VIII, executed?',
        'Racial crime and smoking in public places are examples of:',
        'What type of character was played by Charlie Chaplin?',
        'You have to be at least 21 years old to stand as MP.',
        'Who developed the radar?',
        'Where is the official home of the Prime Minister?',
        'Where is the UK geographically located?',
        'Where is the Big Ben located?'
      ],
  name2: ['When were men and women given the right to vote at the age of 21?',
          'Who is the patron Saint of Scotland?',
          'When was the War of the Roses fought between?',
          'The Bill of Rights of 1689 confirmed the right to vote for all adult men.',
          'What is the Cenotaph?',
          'Who was the first female Prime Minister of the UK?',
          'Who chairs the debates at the House of Commons?',
          'Who was the captain of the English football team that won the World Cup in 1966?',
          'When did the English defeat the Spanish Armada?',
          'Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.',
          'What is the minimum age required to serve on a jury?',
          'How is a jury selected?',
          'What is a bank holiday?',
          'What will you be given to vote before a general election takes place?',
          'Which of the following statements is correct?',
          'What is the Home Secretary responsible for?',
          'Which of the following territories is a Crown dependency but is NOT part of the UK?',
          'What did Sir Frank Whittle invent in the 1930s?',
          'Who wrote ‘The Daffodils’?',
          'Who was given the title of Lord Protector?',
          'What are the 40 days before Easter called?',
          'Who was the first person to lead a Roman invasion in Britain in 55 BC?',
          'What name is given to the tombs where people buried their dead during the Bronze Age?',
          'Where is Theatreland?'
      ],
  name3: [
    'Who is the patron Saint of England?',
    'Where is Loch Lomond and the Trossachs National Park located?',
    'Wales has its own established church.',
    'Which stories are associated with Geoffrey Chaucer?',
    'When is Boxing Day celebrated?',
    'What is the name of the holiday when banks and many other businesses are closed for the day?',
    'Why were women given the right to vote?',
    'What do you need to drive in the UK?',
    'Where does The Fringe festival take place?',
    'How many members does the Welsh Assembly have?',
    'The names or photographs of  young people found guilty of a crime can be published in newspapers or used by the media.',
    'What was Edward Elgar famous for?',
    'Which of the following is not a British banknote?',
    'Where does the Scottish Grand National take place?',
    'When did the UK join the EU?',
    'During the reign of Elizabeth I, a large fleet of ships was sent to England to conquer the country and to restore Catholicism, where did this fleet come from?',
    'What did the Habeas Corpus Act introduce?',
    'What did Emmeline Pankhurst fight for?',
    'What is “the Proms”?',
    'What was Isaac Newton known for?',
    'When did the WWI come to an end?',
    'Who built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)?',
    'Other than Cambridge which other university participates in an annual rowing race that takes place on the River Thames?',
    'Does England have a written constitution?'
  ]

};

var answers = {
  name: [
  ['The Battle of Trafalgar', 'The Battle of Hastings', 'The Battle of Waterloo', 'Battle of Agincourt'],
  ['Daffodil', 'Rose', 'Shamrock', 'Thistle' ],
  ['A war', 'A flood', 'A fire', 'An earthquake'],
  ['Every 3 years', 'Every 4 years', 'Every 5 years', 'Every 10 years'],
  ['True', 'False'],
  ['Shelter', 'Age UK', 'Crisis', 'The National Trust'],
  ['True', 'False'],
  ['Cleopatra', 'Claudia', 'Boudicca', 'St Augustine'],
  ['Isaac Newton', 'Winston Churchill', 'Alexander Fleming', 'Mo Farah'],
  ['1918', '1928', '1938', '1948'],
  ['The Prime Minister', 'The Archbishop of Canterbury', 'The Pope', 'The monarch'],
  ['Rugby', 'Golf', 'Horse Racing', 'Tennis'],
  ['Poems', 'Novels', 'Jokes', 'Fables'],
  ['24th of December', '25th of December', '26th of December', '27th of December'],
  ['Roundheads', 'Suffragettes', 'Quakers', 'Cavaliers'],
  ['The Battle of Waterloo', 'The Battle of Trafalgar', 'The Battle of Hastings', 'The Battle of Britain'],
  ['Houses of the Parliament', 'Stonehenge', 'Tower of London', 'Whitehall'],
  ['Civil offences', 'Criminal offences'],
  ['A superhero', 'A tramp', 'A scientific genius', 'A bandit'],
  ['True', 'False'],
  ['John Logie Baird',	'Sir Frank Whittle', 'Sir Christopher Cockrell', 'Sir Robert Watson-Watt'],
  ['18 Oxford Street', 'Buckingham Palace', 'Windsor Castle', '10 Downing Street'],
  ['North west of Europe', 'North east of Europe', 'South west of Europe', 'South east of Europe'],
  ['Buckingham Palace', 'The Tower of London', 'Trafalgar Square', 'The Houses of the Parliament']
],
  label: ['a1', 'a2', 'a3', 'a4'],
  name2: [
    ['1918', '1903', '1928', '1923 '],
    ['St David', 'St Patrick', 'St George', 'St Andrew'],
    ['1336 to 1375', '1948 to 1952', '1455 to 1487', 'on going'],
    ['True', 'False'],
    ['A flower', 'A Christian church', 'A war memorial', 'A theatre '],
    ['Mary Stuart', 'Theresa May', 'Margaret Thatcher', 'Florence Nightingale'],
    ['A bishop', 'The Prime Minister', 'The archbishop of Canterbury', 'The Speaker'],
    ['Sir Roger Bannister', 'Sir Jackie Stewart', 'Sir Ian Botham', 'Bobby Moore'],
    ['1466', '1066', '1254', '1588'],
    ['True', 'False'],
    ['16', '18', '21', '25'],
    ['From the NHS registration system', 'Randomly from the electoral register', 'Alphabetically from the telephone directory', 'From a postcode selection'],
    ['A public holiday when banks are open all day', 'A public holiday for people working in banks', 'An additional day off that every worker in the UK is entitled to', 'A public holiday when banks and many other businesses are closed for the day'],
    ['A poll tax relief', 'A number to queue at the polling station', 'A poll card', 'A specific time for you to vote '],
    ['Solicitors\' charges are usually based on how much time they spend on a case', 'Solicitors\' charges are usually based on the nature of a case and its importance'],
    ['Health', 'Defence', 'Education', 'Policing'],
    ['Northern Ireland', 'Wales', 'The Channel Islands', 'Scotland'],
    ['Radar', 'Hovercraft', 'Jet engine', 'Ballpoint pen '],
    ['William Blake', 'Robert Browning', 'Lord Byron', 'William Wordsworth'],
    ['Charles I', 'Charles II', 'Winston Churchill', 'Oliver Cromwell'],
    ['Diwali', 'Lent', 'Hannukah', 'Vaisakhi'],
    ['Emperor Claudius', 'Julius Caesar', 'Napoleon', 'William Caxton'],
    ['Shara Brae', 'Hill forts', 'Round barrows', 'Canute'],
    ['London’s north end', 'London’s east end', 'London’s west end', 'London’s south end']
  ],
  name3: [
    ['St George', 'St Patrick', 'St David', 'St Andrew'],
    ['England', 'Wales', 'Scotland', 'Northern Ireland'],
    ['True', 'False'],
    ['The Cambridge Tales', 'The Eastbourne Tales', 'The Canterbury Tales', 'The London Tales'],
    ['31st October', '26th December', '24th December', '1st January'],
    ['Credit Holidays','Branch Holidays', 'Bank Holidays', 'Business Holidays'],
    ['In recognition of the contribution women made to the war effort during the First World War', 'In recognition of the contribution women made to the war effort during the Second World War', 'In recognition of the contribution women made to the war effort during the Crimean War', 'In recognition of the contribution women made to the war effort during the Civil War'],
    ['An ‘L’ plate', 'A National Insurance Number', 'A valid driving licence', 'An ‘R’ plate'],
    ['Fraserburgh', 'Edinburgh', 'Inverness', 'St Andrews'],
    ['150', '120', '90', '60'],
    ['True', 'False'],
    ['He was a musician', 'He was a tennis player', 'He was a comedian', 'He was an actor'],
    ['£50', '£25', '£20', '£5'],
    ['Fife', 'Edinburgh', 'Ayr', 'St Andrews'],
    ['In 1957', 'In 1973', 'In 1975', 'In 1964'],
    ['France', 'Portugal', 'Spain', 'Italy'],
    ['That every prisoner has a right to a court hearing', 'A salary for members of Parliament (MPs)', 'Financial help for the unemployed, old-age pensions and free school meals', 'Measures to improve the conditions of workers'],
    ['The right to liberty and security', 'The right for women to vote','Freedom of expression', 'The right to a fair trial'],
    ['An annual event that gives awards in a range of categories, such as best British group and best British solo artist', 'An annual cultural festival which includes music, dance, art and original performances largely in Welsh', 'An eight-week summer season of daily orchestral classical music concerts', 'Light-hearted plays with music and comedy'],
    ['The discovery of insulin', 'The discovery of gravity', 'The discovery of penicillin', 'The discovery of the steam power'],
    ['In 1922', 'In 1918', 'In 1945', 'In 1943'],
    ['Boudicca', 'Emperor Hadrian', 'Emperor Claudius', 'Julius Caesar '],
    ['The University of Oxford', 'The University of Westminster', 'University College London', 'Kings College London'],
    ['Yes', 'No']
  ],
  class: 'selection'
};

var correct = {
  answers: [2, 0, 2, 2, 0, 3, 0, 2, 1, 1, 3, 2, 0, 1, 3, 2, 2, 1, 1, 1, 3, 3, 0, 3],
  answers2: [2, 3, 2, 1, 2, 2, 3, 3, 3, 0, 1, 1, 3, 2, 0, 3, 2, 2, 3, 3, 1, 1, 2, 2],
  answers3: [0, 2, 1, 2, 1, 2, 0, 2, 1, 3, 1, 0, 2, 2, 1, 2, 0, 1, 2, 1, 1, 1, 0, 1]
};
var score = 0;

function createSomething(element, className, where, text) {
  var elem = document.createElement(element);
  var textContent = document.createTextNode(text);
  elem.appendChild(textContent);
  var args = Array.from(arguments);

  if (args[1] == null) {
    document.getElementsByClassName(where)[0].append(elem);
  } else {
    document.getElementsByClassName(where)[0].append(elem);
    elem.setAttribute('class', className);
  }
};

window.onload = (function() {
  var section = document.createElement('section');
  section.setAttribute('class', 'question-wrap');
  document.body.appendChild(section);

  createSomething('h1', null, 'question-wrap', 'British Citizenship Test');
  createSomething('button', 'test-option', 'question-wrap', 'Test 1');
  createSomething('button', 'test-option test-2', 'question-wrap', 'Test 2');
  createSomething('button', 'test-option test-3', 'question-wrap', 'Test 3');
})();

(function() {
  var originalSetAttribute = Element.prototype.setAttribute;

  Element.prototype.setAttribute = function setAttribute(name, value) {
    if (!name || typeof name === 'string' || 1 in arguments) {
      // if it is empty, a string, or a value is passed, set the attribute
      originalSetAttribute.call(this, name, value);
    } else {
      // otherwise, for each key in the name object
      for (var key in name) {
        if (name.hasOwnProperty(key)) {
          // kebabed camelcase attribute name
          var kebabKey = key.replace(/[A-Z]/g, '-$&').toLowerCase();

          // set the attribute
          originalSetAttribute.call(this, kebabKey, name[key]);
        }
      }
    }
  }
})();

function makeRadio(string, number) {
  var radio = document.createElement('INPUT');
  var list = document.createElement('li');

  list.setAttribute('class', 'answers-list');

  radio.setAttribute({type: 'radio', name: 'answer', value: number});
  var label = document.createElement('label');
  label.htmlFor = number;
  label.textContent = string;

  var setClass = radio.setAttribute('class', answers.class);

  document.getElementsByClassName('answers')[0].appendChild(list);
  list.appendChild(radio);
  list.appendChild(label);
};

document.getElementsByClassName('test-option')[0].addEventListener('click', () => {
  document.getElementsByClassName('test-2')[0].remove();
  document.getElementsByClassName('test-3')[0].remove();
  document.getElementsByClassName('test-option')[0].remove();
  document.getElementsByTagName('h1')[0].remove();
  makeTest();
}, false);

document.getElementsByClassName('test-option test-2')[0].addEventListener('click', () => {
  document.getElementsByClassName('test-2')[0].remove();
  document.getElementsByClassName('test-3')[0].remove();
  document.getElementsByClassName('test-option')[0].remove();
  document.getElementsByTagName('h1')[0].remove();
  makeTest2();
}, false);

document.getElementsByClassName('test-option test-3')[0].addEventListener('click', () => {
  document.getElementsByClassName('test-2')[0].remove();
  document.getElementsByClassName('test-3')[0].remove();
  document.getElementsByClassName('test-option')[0].remove();
  document.getElementsByTagName('h1')[0].remove();
  makeTest3();
}, false);

function makeQuizLayout() {
  createSomething('div', 'question-title', 'question-wrap', '');
  createSomething('form', 'test', 'question-wrap', '');
  createSomething('div', 'submission', 'question-wrap', '');
  createSomething('div', 'response', 'submission', 'Your answer is:');
  createSomething('span', 'answer-response', 'response', '');
  createSomething('ul', 'answers', 'test', '');
  createSomething('button', 'submit-answer', 'submission', 'submit');
  createSomething('button', 'next-question', 'submission', 'next');
  createSomething('div', 'score', 'question-wrap', '');
  createSomething('h3', null, 'score', 'Your score is:');
  createSomething('input', 'incrementor', 'score', '');
}

function incorrectAnswer(arg) {
  var response = document.getElementsByClassName('answer-response')[0];
  response.textContent = `Incorrect, the correct answer was: ${arg}`;
}

function setIncremator() {
  var inc = document.getElementsByClassName('incrementor')[0];
  inc.setAttribute({type: 'text', value: 0});
  inc.disabled = true;
}

function makeAnswers(arg, j) {
  if (arg == undefined) {
    createSomething('h3', 'final-score', 'score', 'out of 24, 14 is the pass mark');
    createSomething('button', 'test-option', 'question-wrap', 'Test 1');
    createSomething('button', 'test-option test-2', 'question-wrap', 'Test 2');
    createSomething('button', 'test-option test-3', 'question-wrap', 'Test 3');
    document.getElementsByClassName('question-title')[0].remove();
    document.getElementsByClassName('answers')[0].remove();
    document.getElementsByClassName('response')[0].remove();
    document.getElementsByClassName('submission')[0].remove();

    document.getElementsByClassName('test-option')[0].addEventListener('click', () => {
      document.getElementsByClassName('test')[0].remove();
      document.getElementsByClassName('score')[0].remove();
      document.getElementsByClassName('test-option')[0].remove();
      document.getElementsByClassName('test-option test-2')[0].remove();
      document.getElementsByClassName('test-option test-3')[0].remove();

      var inc = document.getElementsByClassName('incrementor')[0];
      k = 0;
      makeTest();
    }, false);

    document.getElementsByClassName('test-option test-2')[0].addEventListener('click', () => {
      document.getElementsByClassName('test')[0].remove();
      document.getElementsByClassName('score')[0].remove();
      document.getElementsByClassName('test-option')[0].remove();
      document.getElementsByClassName('test-option test-2')[0].remove();
      document.getElementsByClassName('test-option test-3')[0].remove();
      var inc = document.getElementsByClassName('incrementor')[0];
      k = 0;
      makeTest2();
    }, false);

    document.getElementsByClassName('test-option test-3')[0].addEventListener('click', () => {
      document.getElementsByClassName('test')[0].remove();
      document.getElementsByClassName('score')[0].remove();
      document.getElementsByClassName('test-option')[0].remove();
      document.getElementsByClassName('test-option test-2')[0].remove();
      document.getElementsByClassName('test-option test-3')[0].remove();
      var inc = document.getElementsByClassName('incrementor')[0];
      k = 0;
      makeTest3();
    }, false);

  } else {

    for (var i = 0; i < arg.length; i++) {
      [arg[i]].forEach(() => makeRadio(arg[i], i));

    }
  }
};

function makeTest() {
  function renderSelection() {
    var k = 0;
    makeQuizLayout();
    createSomething('h3', null, 'question-title', questions.name[k]);
    makeAnswers(answers.name[k]);
    setIncremator();

    var rightAnswer = document.getElementsByClassName('selection')[correct.answers[k]];
    var submitButton = document.getElementsByClassName('submit-answer')[0];
    var response = document.getElementsByClassName('answer-response')[0];
    var submissionForm = document.getElementsByClassName('submission')[0];
    var nextQ = document.getElementsByClassName('next-question')[0];

    submitButton.addEventListener('click', () => {
      var rightAnswer = document.getElementsByClassName('selection')[correct.answers[k]];
      var inc = document.getElementsByClassName('incrementor')[0];
      if (rightAnswer.checked == true) {
        response.textContent = 'Correct';
        inc.value++;
      } else {
        incorrectAnswer(answers.name[k][correct.answers[k]]);
      }
      submitButton.style.display = 'none';
      nextQ.style.display = 'block';
    }, false); //end of submitButton event listener.

    nextQ.addEventListener('click', () => {

      k++;
      submitButton.style.display = 'block';
      nextQ.style.display = 'none';
      response.textContent = '';

      document.getElementsByClassName('question-title')[0].getElementsByTagName('h3')[0].remove();
      document.getElementsByClassName('answers')[0].remove();

      createSomething('h3', '', 'question-title', questions.name[k]);
      createSomething('ul', 'answers', 'test', '');
      makeAnswers(answers.name[k]);

    }, false); //end of next-question event listener.
  };
  renderSelection();
} // end of make test

function makeTest2() {
  function renderSelection() {
    var k = 0;
    makeQuizLayout();
    createSomething('h3', null, 'question-title', questions.name2[k]);
    makeAnswers(answers.name2[k]);
    setIncremator();

    var rightAnswer = document.getElementsByClassName('selection')[correct.answers2[k]];
    var submitButton = document.getElementsByClassName('submit-answer')[0];
    var response = document.getElementsByClassName('answer-response')[0];
    var submissionForm = document.getElementsByClassName('submission')[0];
    var nextQ = document.getElementsByClassName('next-question')[0];

    submitButton.addEventListener('click', () => {
      var rightAnswer = document.getElementsByClassName('selection')[correct.answers2[k]];
      var inc = document.getElementsByClassName('incrementor')[0];
      if (rightAnswer.checked == true) {
        response.textContent = 'Correct';
        inc.value++;
      } else {
        incorrectAnswer(answers.name2[k][correct.answers2[k]]);
      }
      submitButton.style.display = 'none';
      nextQ.style.display = 'block';
    }, false); //end of submitButton event listener.

    nextQ.addEventListener('click', () => {

      k++;
      submitButton.style.display = 'block';
      nextQ.style.display = 'none';
      response.textContent = '';

      document.getElementsByClassName('question-title')[0].getElementsByTagName('h3')[0].remove();
      document.getElementsByClassName('answers')[0].remove();

      createSomething('h3', '', 'question-title', questions.name2[k]);
      createSomething('ul', 'answers', 'test', '');
      makeAnswers(answers.name2[k]);

    }, false); //end of next-question event listener.
  };
  renderSelection();
}

function makeTest3() {
  function renderSelection() {
    var k = 0;
    makeQuizLayout();
    createSomething('h3', null, 'question-title', questions.name3[k]);
    makeAnswers(answers.name3[k]);
    setIncremator();

    var rightAnswer = document.getElementsByClassName('selection')[correct.answers3[k]];
    var submitButton = document.getElementsByClassName('submit-answer')[0];
    var response = document.getElementsByClassName('answer-response')[0];
    var submissionForm = document.getElementsByClassName('submission')[0];
    var nextQ = document.getElementsByClassName('next-question')[0];

    submitButton.addEventListener('click', () => {
      var rightAnswer = document.getElementsByClassName('selection')[correct.answers3[k]];
      var inc = document.getElementsByClassName('incrementor')[0];
      if (rightAnswer.checked == true) {
        response.textContent = 'Correct';
        inc.value++;
      } else {
        incorrectAnswer(answers.name3[k][correct.answers3[k]]);
      }
      submitButton.style.display = 'none';
      nextQ.style.display = 'block';
    }, false); //end of submitButton event listener.

    nextQ.addEventListener('click', () => {

      k++;
      submitButton.style.display = 'block';
      nextQ.style.display = 'none';
      response.textContent = '';

      document.getElementsByClassName('question-title')[0].getElementsByTagName('h3')[0].remove();
      document.getElementsByClassName('answers')[0].remove();

      createSomething('h3', '', 'question-title', questions.name3[k]);
      createSomething('ul', 'answers', 'test', '');
      makeAnswers(answers.name3[k]);

    }, false); //end of next-question event listener.
  };
  renderSelection();
}
