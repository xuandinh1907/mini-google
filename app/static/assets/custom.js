window.addEventListener('load', function () {

    var submit_btn= document.getElementsByClassName("qa_submit")[0];

    if (submit_btn != undefined){
        submit_btn.addEventListener('click', function (event) {
            event.preventDefault();
            
            var paragraph_val = document.getElementById("input_paragraph").value;
            var question_val = document.getElementById("input_question").value;
            var answer_val = document.getElementById("input_answer").value;
            console.log (paragraph_val);
            console.log (question_val);
            console.log (answer_val);
            var asking_obj ={"para":paragraph_val, "ques":question_val}
        
    
            fetch('http://127.0.0.1:5000/qa_processing', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(asking_obj)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                answer_text= "";
                var keys = Object.keys(data);
                for(var i=0; i<keys.length; i++){
                    var key = keys[i];
                    answer_text += "Question: "+key +"\nAnswer: "+data[key]+"\n";
                    console.log(key, data[key]);
                }
                document.getElementById("input_answer").value = answer_text;
    
            });
        });
    }



    
    var submit_btn= document.getElementsByClassName("qa_link_submit")[0];
    if (submit_btn != undefined){
        submit_btn.addEventListener('click', function (event) {
            event.preventDefault();
            
            var wiki_val = document.getElementById("wiki-link").value;
            var question_val = document.getElementById("input_question").value;
            var answer_val = document.getElementById("input_link_answer").value;
            console.log (wiki_val);
            console.log (question_val);
            console.log (answer_val);
            var asking_obj ={"wiki":wiki_val, "ques":question_val}
        
    
            fetch('http://127.0.0.1:5000/qa_link_processing', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(asking_obj)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                answer_text= "";
                var keys = Object.keys(data);
                answer_text += keys[0] +" "+data[keys[0]]+
                "\n"+"-------------------------------------------"+"\n"
                for(var i=1; i<keys.length; i++){
                    var key = keys[i];
                    answer_text += "Question : "+key +
                    "\nAnswer : "+data[key][0]+
                    "\n"+data[key][1]+
                    "\n"+"-------------------------------------------"+
                    "\n";
                    console.log(key, data[key]);
                }
                document.getElementById("input_link_answer").value = answer_text;
    
            });
        });
    }



});

