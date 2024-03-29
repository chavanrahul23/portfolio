let body = window.innerWidth
console.log(body);

function changeText() {
    if(body>800)
    {
    document.getElementById("java").innerHTML = "OOPS <br> Exception <br> Collections <br>";
    document.getElementById("java").style.fontSize="40px";
    }
}
function resetText() {
    document.getElementById("java").innerText = "JAVA";
    document.getElementById("java").style.fontSize="40px";
}
//sql
function changeSQLText() {
    document.getElementById("sql").innerHTML = "Data Definition Language(DDL) <br> Data Manipulation Language(DML) <br> Data Control Language(DCL) <br> Transaction Control Statements(TCS) <br> JOINS";
    // document.getElementById("sql").style.fontSize="40px";
}
function resetSQLText() {
    document.getElementById("sql").innerText = "SQL";
    document.getElementById("sql").style.fontSize="40px";
}
//spring
function changespringText() {
    document.getElementById("spring").innerHTML = " Spring JPA  <br> Spring Core <br> Spring Boot";
    document.getElementById("spring").style.fontSize="40px";
}
function resetspringText() {
    document.getElementById("spring").innerText = "SPRING";
    document.getElementById("spring").style.fontSize="40px";
}
// JDBC
function changeJDBcText() {
    console.log("jdbc");
    document.getElementById("JDBc").innerHTML = "Java Database Connectivity <br> Servlet";
    document.getElementById("JDBc").style.fontSize="40px";
}
function resetJDBcText() {
    document.getElementById("JDBc").innerText = "JDBC";
    document.getElementById("JDBc").style.fontSize="40px";
}

// HIBERNATE
function changeHIBERNATEText() {
    document.getElementById("HIBERNATE").innerHTML = "Mapping";
    document.getElementById("HIBERNATE").style.fontSize="40px";
}
function resetHIBERNATEText() {
    document.getElementById("HIBERNATE").innerText = "HIBERNATE";
    document.getElementById("HIBERNATE").style.fontSize="40px";
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }