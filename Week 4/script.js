var app = new Vue({
    el:'#app',
    data:{
        password:"",
        track:{
            lowercase: "red",
            uppercase:"red",
            digit:"red",
            special:"red",
            len:"red",
        },
        stren:"red",
        strength:0,
        color:["rgba(255,0,0,0.8)","rgba(255,0,0,0.6)","rgba(255,0,0,0.35)","rgba(255,255,0,0.45)","rgba(0,255,0,0.6)"]
    },
    methods:{//methods get invoked when re-rendering happens or when we call them

        calc_strength: function(){
            let c = 0;
            for(i in this.track){
                if(this.track[i] == "rgba(0,255,0,0.6)"){
                    c += 1;
                }
            }
            this.strength = (c/5)*100;
            for(let j=0; j < c;j++){
                this.stren = this.color[j];
                // console.clear()
                // console.log(j-1)
            }
            
        }
    },
    computed:{

    },
    watch:{ //it listens for any change that happens with variable password
        password(new_value){

            this.track.lowercase = "rgba(255,0,0)";
            this.track.uppercase = "rgba(255,0,0)";
            this.track.digit = "rgba(255,0,0)";
            this.track.special = "rgba(255,0,0)";
            this.track.len = "rgba(255,0,0)";
            this.stren = "rgba(255,0,0)";

            if(new_value.length >= 8){
                this.track.len = "rgba(0,255,0,0.6)"
            }
            for(let i = 0; i < new_value.length; i++){
                let a = new_value[i];
                let b = new_value.charCodeAt(i);

                if(a >= "a" && a <= "z"){
                    this.track.lowercase = "rgba(0,255,0,0.6)";
                } //We require this here as it belons to vue class instance
                else if(a >= "A" && a <= "Z"){
                    this.track.uppercase = "rgba(0,255,0,0.6)";
                }
                else if(a >= "0" && a <= "9"){
                    this.track.digit = "rgba(0,255,0,0.6)";
                }
                else if((b >= 33 && b <= 47) || (b >= 58 && b <= 64) ){
                    this.track.special = "rgba(0,255,0,0.6)";
                }
            }
            this.calc_strength();

        },
    },

})
