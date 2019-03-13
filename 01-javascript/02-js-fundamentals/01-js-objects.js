// 30 minutes max


//Challenge 1
//Write a function that accepts an array of student objects, as shown below.
//Print all of the students' names and their cohorts.

function studcoh(){
    
    let students = [
        {name: 'Remy', cohort: 'Jan'},
        {name: 'Genevieve', cohort: 'March'},
        {name: 'Chuck', cohort: 'Jan'},
        {name: 'Osmund', cohort: 'June'},
        {name: 'Nikki', cohort: 'June'},
        {name: 'Boris', cohort: 'June'}
    ];
    
  
    for (let student in students) {
        console.log("Name: " + students[student].name + ", " + "Cohort: " +  students[student].cohort);
        };


}

console.log(studcoh());


//Challenge 2
//Write a function that accepts an object of users divided into employees and managers,
//and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

function empMng(){
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};
for(let key in users) {
  console.log(key.toUpperCase());
  var count = 1;
  for(let person in users[key]) {
    let name = users[key][person].first_name+users[key][person].last_name;
    console.log(`${count} - ${users[key][person].last_name.toUpperCase()}, ${users[key][person].first_name.toUpperCase()} - ${name.length}`);
    count++;
  }
}

}

console.log(empMng());





   
