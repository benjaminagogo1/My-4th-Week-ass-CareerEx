// 1. JAMB-style result
function jambResult(score) {
    if (score >= 180) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  }
  
  // 2. Voting eligibility
  function canVote(age) {
    return age >= 18 ? "You are eligible to vote" : "Not eligible";
  }
  
  // 3. Grade performance
  function gradeStudent(name, score) {
    if (score >= 90) return "Excellent";
    else if (score >= 75) return "Good";
    else if (score >= 50) return "Average";
    else return "Fail";
  }
  
  // 4. Access check
  function accessCheck(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
  }
  
  // 5. Evaluate scores in array
  function evaluateScores(scores) {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > 50) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
  }
  
  // 6. Arrow function for math and English pass
  const passedBoth = (math, english) => (math >= 50 && english >= 50 ? "Yes" : "No");
  
  // 7. Signup check
  function canSignup(email, phone) {
    if (email || phone) {
      return "Signup allowed";
    } else {
      return "Provide email or phone to sign up";
    }
  }
  
  // 8. Username and password check
  function validateUser(username, password) {
    return (!username || !password) ? "Invalid input" : "Valid input";
  }
  
  // 9. Full-time or part-time
  function workStatus(hours) {
    return hours >= 40 ? "Full-time" : "Part-time";
  }
  
  // 10. Larger of two numbers
  const maxNumber = (a, b) => (a > b ? a : b);




  jambResult(200); // "Passed"

console.log(canVote(17)); // "Not eligible"

console.log(gradeStudent("James", 85)); // "Good"

console.log(accessCheck(true, true)); // "Access granted"

evaluateScores([45, 70, 30]); // Logs: Fail, Pass, Fail

console.log(passedBoth(60, 65)); // "Yes"

console.log(canSignup("", "08012345678")); // "Signup allowed"

console.log(validateUser("john", "")); // "Invalid input"

console.log(workStatus(38)); // "Part-time"
console.log(maxNumber(10, 7)); // 10
