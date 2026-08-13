/* ============================================================
   TASK 1: Age (years) -> Days
   Simple unit conversion: multiply years by 365.
   ============================================================ */
function convertAgeToDays() {
  const age = Number(document.getElementById("ageInput").value);
  const resultBox = document.getElementById("ageResult");

  if (document.getElementById("ageInput").value === "" || isNaN(age)) {
    resultBox.textContent = "Please enter a valid age.";
    return;
  }

  const days = age * 365;
  resultBox.textContent = `${age} years = ${days} days`;
}


/* ============================================================
   TASK 2: Hours -> Seconds
   1 hour = 60 minutes = 3600 seconds.
   ============================================================ */
function convertHoursToSeconds() {
  const hours = Number(document.getElementById("hoursInput").value);
  const resultBox = document.getElementById("hoursResult");

  if (document.getElementById("hoursInput").value === "" || isNaN(hours)) {
    resultBox.textContent = "Please enter a valid number of hours.";
    return;
  }

  const seconds = hours * 3600;
  resultBox.textContent = `${hours} hours = ${seconds} seconds`;
}


/* ============================================================
   TASK 3a: Find the number "next to" a target inside an array.
   "Next to" here means the closest value in the array that is
   strictly greater than the target (the next bigger number).
   ============================================================ */
function findNextInArray() {
  const rawArray = document.getElementById("arrayInput").value;
  const target = Number(document.getElementById("arrayTarget").value);
  const resultBox = document.getElementById("arrayResult");

  // turn "3,7,10,15" into [3, 7, 10, 15]
  const numbers = rawArray
    .split(",")
    .map(n => Number(n.trim()))
    .filter(n => !isNaN(n));

  if (numbers.length === 0 || isNaN(target)) {
    resultBox.textContent = "Please enter a valid array and target.";
    return;
  }

  // keep only numbers bigger than target, then pick the smallest of those
  const bigger = numbers.filter(n => n > target);
  if (bigger.length === 0) {
    resultBox.textContent = `No number greater than ${target} found in [${numbers}]`;
    return;
  }

  const next = Math.min(...bigger);
  resultBox.textContent = `Next number after ${target} in the array is ${next}`;
}


/* ============================================================
   TASK 3b: Find the "next number" from a single value.
   - If it's an integer, the next number is simply value + 1.
   - If it's a float, the next number is value rounded UP to the
     next whole number (using Math.ceil), since floats don't have
     a natural "next" value.
   ============================================================ */
function findNextSingle() {
  const raw = document.getElementById("singleValue").value.trim();
  const resultBox = document.getElementById("singleResult");
  const value = Number(raw);

  if (raw === "" || isNaN(value)) {
    resultBox.textContent = "Please enter a valid number.";
    return;
  }

  const isInteger = Number.isInteger(value);
  const next = isInteger ? value + 1 : Math.ceil(value);

  resultBox.textContent = isInteger
    ? `${value} is an integer → next number is ${next}`
    : `${value} is a float → next whole number is ${next}`;
}

