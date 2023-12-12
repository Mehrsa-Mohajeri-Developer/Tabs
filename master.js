let _li = document.querySelectorAll("ul>li")
        let _p = document.querySelectorAll("ul>p")
        function btn(x) {
            let data = x.getAttribute("data-para")
            _li.forEach((val) => {
                val.style.background = "#d9e2ec"
            })
            _p.forEach((val) => {
                val.style.opacity = "0"
            })
            if (data == x.innerText) {
                x.style.background = "white"
                x.style.color = "black"
                document.getElementById(data).style.opacity = "1"
            }
        }