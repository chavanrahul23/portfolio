let body = window.innerWidth
console.log(body);

function changeText() {
    if(body>800)
    {
    document.getElementById("desktop").src = "images/javacontent.png";
    console.log("hi");
    }
}
function resetText() {
    console.log("bye");
    document.getElementById("desktop").src = "images/javamain.jpg";
}
//sql
function sqlchangeText() {
    if(body>800)
    {
    document.getElementById("sqldesktop").src = "images/sqlcontent.png";
    console.log("hi");
    }
}
function sqlresetText() {
    console.log("bye");
    document.getElementById("sqldesktop").src = "images/sqlmain.jpg";
}
//spring
function springchangeText() {
    if(body>800)
    {
    document.getElementById("springdesktop").src = "images/springcontent.png";
    console.log("hi");
    }
}
function springresetText() {
    console.log("bye");
    document.getElementById("springdesktop").src = "images/springmain.png";
}
// JDBC
function jdbcchangeText() {
    if(body>800)
    {
    document.getElementById("jdbcdesktop").src = "images/jdbccontent.png";
    console.log("hi");
    }
}
function jdbcresetText() {
    console.log("bye");
    document.getElementById("jdbcdesktop").src = "images/jdbcmain.png";
}

// HIBERNATE
function hibernatechangeText() {
    if(body>800)
    {
    document.getElementById("hibernatedesktop").src = "images/hibernatecontent.png";
    console.log("hi");
    }
}
function hibernateresetText() {
    console.log("bye");
    document.getElementById("hibernatedesktop").src = "images/HIBERNATEmain.png";
}


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }