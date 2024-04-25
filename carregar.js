const tarefas = JSON.parse(localStorage.getItem("tarefa"));

tarefas.forEach(tarefa => card(tarefa));

function card(tarefa){

    //template çiterals
    const content = ` 
    <div class="nes-container with-title is-centered">
            <p class="title">Figma</p>
            <p>Criar o protótipo do site</p>

            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
                <span class="is-primary">150</span>
            </a>

            <progress class="nes-progress is-warning" value="20" max="100"></progress>
            <button type="button" class="nes-btn is-primary">-</button>
            <button type="button" class="nes-btn is-error">APAGAR</button>
            <button type="button" class="nes-btn is-primary">+</button>
        </div>  
    `

    const card = document.createElement("div")
    card.innerHTML = content

    document.querySelector('#lista-de-tarefas')
            .appendChild(card)
}