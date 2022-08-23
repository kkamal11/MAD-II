const vm = new Vue({
    el: '#app',
    data: {
        topicName: "",
        url: "https://en.wikipedia.org/w/api.php?",
        warning: "",
        result: "",
        ex: false,
        not_loaded:false
    },
    methods: {
        searchTopic: async function () {
            this.not_loaded = true
            if (this.topicName != "") {
                this.url = this.url + new URLSearchParams({
                    origin: "*",
                    action: "parse",
                    page: this.topicName,
                    format: "json",
                })
                try {
                    const req = await fetch(this.url).catch(() => {
                        throw new Error("Network Error");
                    })
                    if (req.ok) {
                        const json = await req.json();
                        // console.log(json)
                        const res = json.parse.text["*"];
                        if (res.length === 0) {
                            this.not_loaded = false
                            this.warning = "Oops... Some Error occurred";
                        }
                        else if (this.ex == true) {
                            this.not_loaded = false
                            this.result = res
                            this.warning = ""
                        }
                        else {
                            this.not_loaded = false
                            this.result = res.slice(0, 6000)
                            this.warning = ""
                        }
                    }
                    else {
                        this.not_loaded = false
                        this.warning = req.statusText;
                    }
                }
                catch (e) {
                    this.not_loaded = false
                    this.topicName = ""
                    this.warning = "Network Error"
                }

            }
            else {
                this.not_loaded = false
                this.warning = "You forgot to enter topic name."
            }

        },
        expand: function () {
            this.ex = true
            this.searchTopic()

        },
        searchNew: function() {
            this.result= ""
            this.ex= false
            this.not_loaded=false
            this.warning = false
            this.topicName = ""
        }
    },
    watch: {
        topicName(val) {
            let num = "0123456789"
            for (let i in val) {
                if (num.includes(val[i])) {
                    this.warning = "You tried entering a number. Enter text"
                    this.topicName = ""
                    this.result = ""
                }
            }
            
        },
    }
}) 