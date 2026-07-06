



export function AboutTextSection(){
    return(
        <div className="flex-1 w-full bg-white p-4 mb-10 overflow-auto custom-scrollbar flex justify-start">
        <textarea
          readOnly
          className="w-full h-full outline-none resize-none bg-transparent font-mono text-[13px] leading-relaxed text-gray-800"
          defaultValue={`
            Hey. Als eerst welkom in mijn windows 11 omgeving waar je meer over me te weten kan komen. 
            In dit informele bestand kom je meer te weten over Justin als persoon en niet Justin als Programmeur:
            
            Ik ben een full-stack developer die heel graag softwares bouwt. Of het nu voor een bedrijf of voor mezelf is,
            het maakt geen verschil. Bouwen en mensen helpen is iets wat er bij mij al van jongs af aan in zat. 
            Met die passie ben ik vervolgens gaan lopen...
            
            Ik kom letterlijk en figuurlijk van ver. 
            Letterlijk: Ik ben geboren in Suriname maar ik heb de nationaliteit van een Belg.
            Figuurlijk: Ik heb bedrijfslogistiek gestudeerd voordat ik aan mijn IT-bachelor ben begonnen. 
                        Twee verschillende werelden maar nog altijd is het me gelukt om mijn bachelor 
                        te halen zonder enige voorkennis. 

            Ik ben dol op katten, heb er zelfs 2. Lily en Poekie. 
            Mijn favoriete kleur is rood en heb een 6-tal hobbies namelijk: 
            - Programmeren
            - Editen voor mijn Youtube channel
            - Gamen
            - Socialiceren 
            - Lezen 
            - Grappen maken

            Mijn character is uniek. Ik heb twee modi die je als 2 aparte personen kan beschouwen. 
            De eerste is mijn speelse character. Ik ben van nature heel speels en hou van socialiceren. 
            De tweede is dan mijn proffesionele character. Hier ben ik geordend, puntjes op de i, 
            een planner en iemand die zijn werk heel serieus neemt. 

            Nu hoe je een idee hebt hoe ik als persoon ben, stel ik voor dat je de windows omgeving verder verkend 
            om een idee te hebben van mijn proffesionele vaardigheden.`}
        />
      </div>
    )
}