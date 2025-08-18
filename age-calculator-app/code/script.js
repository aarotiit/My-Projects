const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calculateBtn = document.getElementById("calculate-btn");

const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

const yearsResult = document.getElementById("years-result");
const monthsResult = document.getElementById("months-result");
const daysResult = document.getElementById("days-result");

function clearErrors() {
  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";

  dayInput.classList.remove("error");
  monthInput.classList.remove("error");
  yearInput.classList.remove("error");
}

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.add("error");
}

function validateInputs() {
  clearErrors();

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  let isValid = true;

  if (!day) {
    showError(dayInput, dayError, "This field is required");
    isValid = false;
  }
  if (!month) {
    showError(monthInput, monthError, "This field is required");
    isValid = false;
  }
  if (!year) {
    showError(yearInput, yearError, "This field is required");
    isValid = false;
  }

  if (!day || !month || !year) {
    return false;
  }

  const dayNum = parseInt(day);
  const monthNum = parseInt(month);
  const yearNum = parseInt(year);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if (dayNum < 1 || dayNum > 31) {
    showError(dayInput, dayError, "Must be a valid day");
    isValid = false;
  }

  if (monthNum < 1 || monthNum > 12) {
    showError(monthInput, monthError, "Must be a valid month");
    isValid = false;
  }

  if (yearNum > currentYear) {
    showError(yearInput, yearError, "Must be in the past");
    isValid = false;
  }

  if (isValid) {
    const testDate = new Date(yearNum, monthNum - 1, dayNum);
    if (
      testDate.getDate() !== dayNum ||
      testDate.getMonth() !== monthNum - 1 ||
      testDate.getFullYear() !== yearNum
    ) {
      showError(dayInput, dayError, "Must be a valid date");
      isValid = false;
    }
  }

  return isValid;
}

function calculateAge(birthDate) {
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years: years,
    months: months,
    days: days,
  };
}

function displayResults(ageData) {
  yearsResult.textContent = ageData.years;
  monthsResult.textContent = ageData.months;
  daysResult.textContent = ageData.days;
}

function resetResults() {
  yearsResult.textContent = "--";
  monthsResult.textContent = "--";
  daysResult.textContent = "--";
}

function handleCalculate() {
  if (!validateInputs()) {
    resetResults();
    return;
  }

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const birthDate = new Date(year, month - 1, day);

  const ageData = calculateAge(birthDate);

  displayResults(ageData);
}

calculateBtn.addEventListener("click", handleCalculate);

dayInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleCalculate();
  }
});

monthInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleCalculate();
  }
});

yearInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleCalculate();
  }
});

dayInput.addEventListener("input", function () {
  if (this.value && (parseInt(this.value) < 1 || parseInt(this.value) > 31)) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

monthInput.addEventListener("input", function () {
  if (this.value && (parseInt(this.value) < 1 || parseInt(this.value) > 12)) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

yearInput.addEventListener("input", function () {
  const currentYear = new Date().getFullYear();
  if (this.value && parseInt(this.value) > currentYear) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});
