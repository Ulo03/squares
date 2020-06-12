var buttons = document.querySelector(".buttons");
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.Height;
var mdown = false;
var lastid = "";

window.addEventListener("resize", function() {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    height = (window.innerHeight > 0) ? window.innerHeight : screen.Height;
    create(height/50, width/50);
});

create(height/50, width/50);

function update() {
    var animbtns = document.querySelectorAll(".animbtn");
    animbtns.forEach(btn => {
        btn.addEventListener("mousedown", function() {
            if (btn.childNodes[0].classList.length < 2)
                btn.childNodes[0].classList.add("active");
            else 
                btn.childNodes[0].classList.remove("active");
            lastid = btn.id;
        });
        btn.addEventListener("mouseover", function() {
            if (mdown && btn.id != lastid) {
                if (btn.childNodes[0].classList.length < 2)
                btn.childNodes[0].classList.add("active");
                else 
                btn.childNodes[0].classList.remove("active");
                lastid = btn.id;
            }
        });
    });

};

function create(rows, cols) {
    buttons.innerHTML = "";
    for (var i = 0; i < rows; i++) {
        var group = document.createElement("div");
        group.classList.add("group");

        for (var j = 0; j < cols; j++) {
            var ctn = document.createElement("div");
            ctn.classList.add("animbtn");
            ctn.id = `ctn-${i+1}-${j+1}`;
            var an = document.createElement("div");
            an.classList.add("anim");
            ctn.appendChild(an);
            group.appendChild(ctn);
        }
        buttons.appendChild(group);
    }
    update();
}

document.addEventListener("mousedown", function() {
    mdown = true;
});

document.addEventListener("mouseup", function() {
    mdown = false;
});