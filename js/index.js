const api = './database/questoes.json'
let display = document.getElementById('display')
let li = document.getElementsByTagName('li')

fetch(api)
.then((response) => response.json())
.then((result) => result.questoes)
.then((api)=>{
    api.forEach((element,index) => {
        display.innerHTML += `
        <div>
        <h1>${element.pergunta}</h1>
            <ul>
                <li>
                    <input type="checkbox" name="" class="check" id="A${index}">
                    <label 
                    for="A${index}">${element.alternativas[0]}</label>
                    <div style="width: 20px; height: 20px; border-radius: 100%;${element.alternativas[0] === element.alternativas[element.certo] ? 'background-color: green;' : 'background-color: red;' }"></div>
                </li>
                <li>
                    <input type="checkbox" name="" class="check" id="B${index}">
                    <label 
                    for="B${index}">${element.alternativas[1]}</label>
                    <div style="width: 20px; height: 20px; border-radius: 100%;${element.alternativas[1] === element.alternativas[element.certo] ? 'background-color: green;' : 'background-color: red;' }"></div>
                </li>
                <li>
                    <input type="checkbox" name="" class="check" id="C${index}">
                    <label 
                    for="C${index}">${element.alternativas[2]}</label>
                    <div style="width: 20px; height: 20px; border-radius: 100%;${element.alternativas[2] === element.alternativas[element.certo] ? 'background-color: green;' : 'background-color: red;' }"></div>
                </li>
                <li>
                    <input type="checkbox" name="" class="check" id="D${index}">
                    <label
                    for="D${index}">${element.alternativas[3]}</label>
                    <div style="width: 20px; height: 20px; border-radius: 100%;${element.alternativas[3] === element.alternativas[element.certo] ? 'background-color: green;' : 'background-color: red;' }"></div>
                </li>

            </ul>
        </div>`
    });
})
            
            
            