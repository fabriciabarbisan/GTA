let characterName = document.querySelector(".character-name");
let character = document.querySelector(".character");

function selectCharacter(nameCharacter, imageCharacter, colorCharacter) {
    characterName.innerHTML = nameCharacter;
    character.src = imageCharacter;
    characterName.style.color = colorCharacter;
}

function userPhoto(photo) {
    let reader = new FileReader()
    
    reader.readAsDataURL(photo.files[0])

    reader.onload = async function(){

        let drawnImage = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de GTA V: meio corpo, mantendo o rosto parecido, ilustração vetorial, arte digital com forte apelo pop/comic e pintura digital estilizada, caracterizada por contornos marcados, cores vibrantes, sombras duras e alto contraste. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.", 
            {
                model: "replicate:openai/gpt-image-2.5-flare",
                provider: "openai",
                input_image: reader.result,
                quality: "medium",
                providerOptions: { background: "transparent"}
            })

        selectCharacter('Você', drawnImage, '#e7a459')
    };
   
}