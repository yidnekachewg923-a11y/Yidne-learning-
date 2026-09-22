function Bunit2(){
  document.body.innerHTML= `
      <h1>Unit Two</h1>
      <h2>Characteristics and classification of organisms</h2>
      <h3>## Characteristics of all living things.</h3>
      <p>hulum hiywot yalachew negeroch temesasay yehone bahir alachewu.</p>
      <ol>
          <li>
          <b>All living things are made up of one or more cell</b><br>
          Hulum hiywot yalachewu nigeroch yetegenebut ke and woym ke and belay kehonu celloch nw.<br>
          Those made up of one cell,such as <strong>bacteria</strong> are called <b> Unicellular</b><br>
          Enesu ke and cell yeteseru lemisale bacteria,kehonu Unicellular enilalen.<br>
          Those made up of more than one cell ,such as <b>plant</b> are called <b>Mult-cellular</b> enlalen.<br>
          Ena ke hulet belay kehonu celloch yetegenebu kehonu lemisale plant Multicellular enlalen.</li>
          <li>
          <b>All living things requires energy</b><br>
          Hulum hiywot yalchewu negeroch gulibet(energy ) yfelgalu.<br>
          All organisms use a source of energy from their <b>Metabolic Activities.</b><br>
          Hulum organismoch energy miyagegnut yebelutni migib bemakatel nw.<br>
          Silez metabolism malet yebelanewun migib bemakatel energy yeminagegnbet mengeb nw yhin endatresa metabolism mindnw teblek keteteyek.<br>
          Some organisms use energy from the sun light to make their food through the process of <b>Photosynthesis</b><br>
          And and organismoch ye tsehay birhanin bemetekem migib yseralu ena yhi hidete tsehayni tetekmo migib miserubet hidet photosynthesis nw minalewu endatresa.<br>
          Yerasachewun migib mesirta michilu lemisale plant producers woym <b>autotrophs</b> nw mibalut.<br>
          <b>Autotrophs</b> is an organism which produce(ማዘጋጀት) their own food.<br>
          Other organisms can not make their own food but consume other(ለሎችን ምመገቡ) such organisms are known as Consumer or <b> Heterotrophs.</b><br>
          Ena leloch yerasachewun migib mazegajet yemaychlu lelochn mimegebu lemisale ende sewu Consumers woym <b>heterotrophs</b> nw mibalut.</li>
          <li>
          <b>All living organisms respond to stimuli.</b><br>
          Sile and neger milash ysetalu hulum hiywot yalachewu negeroch lemisale be ejachn yemoke neger sinineka yefetena enanesalen yaha nw milash mesitet malet.</li>
          <li>
          <b>All living things can grow</b><br>
          Hulum hiywot yalachew negeroch yadigalu</li>
          <li>
          <b>All living things can reproduce(መራባት)</b><br>
          Hulum hiyot yalachew negeroch yirabalu</li>
          <li>
          <b>All living things can excrete</b><br>
          Hulum hiywot yalchewu negeroch koshshan yasiwogidalu lemisale be metsedadat</li>
          </ol>
          <p>Kelay yayenachew 6 negeroch hulum hiywot yalachew negeroch miyadergut bahri woym tegbar nw</p>
          <p>Most living things maintain <b> Homeostasis</b></p>
          <p><b>Homeostasis</b> is maintain(መቆጣጠር) internal(ውስጣዊ) internal ምለውን ቃል እንዳትረሳ condition or temperature constant</p>
          <p>Homeostasis malet wustawi hidetochn constan(እንዳይቀየር) mareg nw le misale simoken yalibenal haa yemiyaliben wusxachn constant endihon lemareg nw wusxachn constant kalhone chigr silemifeter nw</p>
          <h1>Taxonomy of living things</h1>
          <h2>አሁን ከዚ ቧሀላ ትምህርቱ በጣም ስለ ምከብድ በደንብ ተከታተል</h2>
          <p><b>Classification</b> is the process of grouping things based on their similarities</p>
          <p>Classification malet bemiyamesasilachewu lay temerkuzen be group yeminaskemixibet hidet nw</p>
          <p><b>Taxonomy</b> is science that naming, identify and classifying organisms</p>
          <p><b>Taxonomy</b> science sihone organismoch endet endemileyayu miyatena, organismochm mikefafil ena le organismoch sim misexi nw yhi science</p>
          <h2>How does taxonomist classify(መከፈል) organism - taxonomist endet nw organismochn mikefafilut?</h2>
          <ul>
          <li>
          <b>External and internal structure of organisms</b><br>
          Wusxawina wuchawi aserarachewun bemayet</li>
          <li>
          <b>Where the organism lives(water or land(መረት))</b><br>
          Organismochu yet nw minorut woys wust woys meret lay</li>
          <li><b>By considering the genetic(ዘር) make up of organisms</b><br>
          Lelawu demo yezer haregachewin bemayet nw</li>
          </ul>
        <h2>Why do biologists classify living things- lemnd nw biologistoch hiywot yalachewun negeroch classify miyaregut</h2>
        <ol>
        <li><b>To simplify(ማቃለል) their study</b>-Ye atenani zeden lemaqaleli</li>
        <li><b> To bring order out/remove chaos or confusion</b> - almegibabatin lemasiwoged </li>
        <li><b>To try to understand how life originated</b>- ye hiywot meneshan lemawok nw</li>
        </ol>
        <h4>እንዳይ በዛ እስካሁን በተማርከው ላይ quiz ልፈትንክ እና መልሱን  ስትጫን ትክክል ውይም ትክክል እንዳልሆንክ እዛው ይነግርካል እና ከመመለስህ በፈት በደንብ አሰላስል</h4>
        <button onclick="bquiz()">quiz</button>
`;
}
function bquiz(){
  document.body.innerHTML=`
  <h2>Quiz: Characteristics and Classification of Organisms</h2>

<h3>1. What are living things made up of?</h3>

<input type="radio" name="q1" onclick="checkQ1('A')">
A. Tissues only<br>

<input type="radio" name="q1" onclick="checkQ1('B')">
B. One or more cells<br>

<input type="radio" name="q1" onclick="checkQ1('C')">
C. Organs only<br>

<input type="radio" name="q1" onclick="checkQ1('D')">
D. Water only<br>

<p id="answer1"></p>


<h3>2. What are organisms made up of only one cell called?</h3>

<input type="radio" name="q2" onclick="checkQ2('A')">
A. Multicellular<br>

<input type="radio" name="q2" onclick="checkQ2('B')">
B. Autotrophs<br>

<input type="radio" name="q2" onclick="checkQ2('C')">
C. Unicellular<br>

<input type="radio" name="q2" onclick="checkQ2('D')">
D. Heterotrophs<br>

<p id="answer2"></p>


<h3>3. Which of the following is an example of a unicellular organism?</h3>

<input type="radio" name="q3" onclick="checkQ3('A')">
A. Plant<br>

<input type="radio" name="q3" onclick="checkQ3('B')">
B. Bacteria<br>

<input type="radio" name="q3" onclick="checkQ3('C')">
C. Human<br>

<input type="radio" name="q3" onclick="checkQ3('D')">
D. Tree<br>

<p id="answer3"></p>


<h3>4. What are organisms made up of more than one cell called?</h3>

<input type="radio" name="q4" onclick="checkQ4('A')">
A. Unicellular<br>

<input type="radio" name="q4" onclick="checkQ4('B')">
B. Multicellular<br>

<input type="radio" name="q4" onclick="checkQ4('C')">
C. Autotrophs<br>

<input type="radio" name="q4" onclick="checkQ4('D')">
D. Consumers<br>

<p id="answer4"></p>


<h3>5. What do all living things require?</h3>

<input type="radio" name="q5" onclick="checkQ5('A')">
A. Energy<br>

<input type="radio" name="q5" onclick="checkQ5('B')">
B. Soil only<br>

<input type="radio" name="q5" onclick="checkQ5('C')">
C. Sunlight only<br>

<input type="radio" name="q5" onclick="checkQ5('D')">
D. Water only<br>

<p id="answer5"></p>


<h3>6. What process do some organisms use to make their own food using sunlight?</h3>

<input type="radio" name="q6" onclick="checkQ6('A')">
A. Excretion<br>

<input type="radio" name="q6" onclick="checkQ6('B')">
B. Classification<br>

<input type="radio" name="q6" onclick="checkQ6('C')">
C. Photosynthesis<br>

<input type="radio" name="q6" onclick="checkQ6('D')">
D. Reproduction<br>

<p id="answer6"></p>


<h3>7. What are organisms that produce their own food called?</h3>

<input type="radio" name="q7" onclick="checkQ7('A')">
A. Consumers<br>

<input type="radio" name="q7" onclick="checkQ7('B')">
B. Heterotrophs<br>

<input type="radio" name="q7" onclick="checkQ7('C')">
C. Autotrophs<br>

<input type="radio" name="q7" onclick="checkQ7('D')">
D. Taxonomists<br>

<p id="answer7"></p>


<h3>8. What are organisms that cannot make their own food called?</h3>

<input type="radio" name="q8" onclick="checkQ8('A')">
A. Autotrophs<br>

<input type="radio" name="q8" onclick="checkQ8('B')">
B. Heterotrophs<br>

<input type="radio" name="q8" onclick="checkQ8('C')">
C. Producers<br>

<input type="radio" name="q8" onclick="checkQ8('D')">
D. Plants<br>

<p id="answer8"></p>


<h3>9. What does it mean when living organisms respond to stimuli?</h3>

<input type="radio" name="q9" onclick="checkQ9('A')">
A. They react to changes around them<br>

<input type="radio" name="q9" onclick="checkQ9('B')">
B. They stop growing<br>

<input type="radio" name="q9" onclick="checkQ9('C')">
C. They stop reproducing<br>

<input type="radio" name="q9" onclick="checkQ9('D')">
D. They stop using energy<br>

<p id="answer9"></p>


<h3>10. Which of the following is a characteristic of living things?</h3>

<input type="radio" name="q10" onclick="checkQ10('A')">
A. They can grow<br>

<input type="radio" name="q10" onclick="checkQ10('B')">
B. They cannot reproduce<br>

<input type="radio" name="q10" onclick="checkQ10('C')">
C. They cannot excrete<br>

<input type="radio" name="q10" onclick="checkQ10('D')">
D. They never need energy<br>

<p id="answer10"></p>


<h3>11. What is homeostasis?</h3>

<input type="radio" name="q11" onclick="checkQ11('A')">
A. Making food<br>

<input type="radio" name="q11" onclick="checkQ11('B')">
B. Maintaining internal conditions relatively constant<br>

<input type="radio" name="q11" onclick="checkQ11('C')">
C. Grouping organisms<br>

<input type="radio" name="q11" onclick="checkQ11('D')">
D. Removing organisms<br>

<p id="answer11"></p>


<h3>12. What is classification?</h3>

<input type="radio" name="q12" onclick="checkQ12('A')">
A. Making food<br>

<input type="radio" name="q12" onclick="checkQ12('B')">
B. Grouping things based on their similarities<br>

<input type="radio" name="q12" onclick="checkQ12('C')">
C. Removing waste<br>

<input type="radio" name="q12" onclick="checkQ12('D')">
D. Reproduction<br>

<p id="answer12"></p>


<h3>13. What is taxonomy?</h3>

<input type="radio" name="q13" onclick="checkQ13('A')">
A. The science of naming, identifying and classifying organisms<br>

<input type="radio" name="q13" onclick="checkQ13('B')">
B. The process of producing energy<br>

<input type="radio" name="q13" onclick="checkQ13('C')">
C. The study of weather<br>

<input type="radio" name="q13" onclick="checkQ13('D')">
D. The process of photosynthesis<br>

<p id="answer13"></p>


<h3>14. Which of these can taxonomists consider when classifying organisms?</h3>

<input type="radio" name="q14" onclick="checkQ14('A')">
A. External and internal structure<br>

<input type="radio" name="q14" onclick="checkQ14('B')">
B. Where the organism lives<br>

<input type="radio" name="q14" onclick="checkQ14('C')">
C. Genetic makeup<br>

<input type="radio" name="q14" onclick="checkQ14('D')">
D. All of the above<br>

<p id="answer14"></p>


<h3>15. Why do biologists classify living things?</h3>

<input type="radio" name="q15" onclick="checkQ15('A')">
A. To make studying more difficult<br>

<input type="radio" name="q15" onclick="checkQ15('B')">
B. To simplify their study<br>

<input type="radio" name="q15" onclick="checkQ15('C')">
C. To stop organisms from growing<br>

<input type="radio" name="q15" onclick="checkQ15('D')">
D. To stop reproduction<br>

<p id="answer15"></p>
<button onclick="bu1p2()">Next lesson</button>

  `;

}
function checkQ1(answer) {
    if (answer === "B") {
        document.getElementById("answer1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> All living things are made up of one or more cells.";
    } else {
        document.getElementById("answer1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. One or more cells</b><br>" +
        "<b>Explanation:</b> All living things are made up of one or more cells.";
    }
}


function checkQ2(answer) {
    if (answer === "C") {
        document.getElementById("answer2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Organisms made up of only one cell are called unicellular organisms.";
    } else {
        document.getElementById("answer2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Unicellular</b><br>" +
        "<b>Explanation:</b> Organisms made up of only one cell are called unicellular organisms.";
}
}
function checkQ3(answer) {
    if (answer === "B") {
        document.getElementById("answer3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bacteria can be made up of one cell.";
    } else {
        document.getElementById("answer3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Bacteria</b><br>" +
        "<b>Explanation:</b> Bacteria can be made up of one cell.";
    }
}


function checkQ4(answer) {
    if (answer === "B") {
        document.getElementById("answer4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Organisms made up of more than one cell are called multicellular organisms.";
    } else {
        document.getElementById("answer4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Multicellular</b><br>" +
        "<b>Explanation:</b> Multicellular organisms are made up of more than one cell.";
    }
}


function checkQ5(answer) {
    if (answer === "A") {
        document.getElementById("answer5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> All living things require energy for their metabolic activities.";
    } else {
        document.getElementById("answer5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Energy</b><br>" +
        "<b>Explanation:</b> All living things require energy for their metabolic activities.";
    }
}


function checkQ6(answer) {
    if (answer === "C") {
        document.getElementById("answer6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Photosynthesis is the process by which some organisms use sunlight to make their food.";
    } else {
        document.getElementById("answer6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Photosynthesis</b><br>" +
        "<b>Explanation:</b> Photosynthesis uses sunlight to make food.";
    }
}


function checkQ7(answer) {
    if (answer === "C") {
        document.getElementById("answer7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Autotrophs are organisms that produce their own food.";
    } else {
        document.getElementById("answer7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Autotrophs</b><br>" +
        "<b>Explanation:</b> Autotrophs produce their own food.";
    }
}


function checkQ8(answer) {
    if (answer === "B") {
        document.getElementById("answer8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Heterotrophs cannot make their own food and consume other organisms.";
    } else {
        document.getElementById("answer8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Heterotrophs</b><br>" +
        "<b>Explanation:</b> Heterotrophs cannot make their own food.";
    }
}


function checkQ9(answer) {
    if (answer === "A") {
        document.getElementById("answer9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Living organisms respond to stimuli, meaning they react to changes around them.";
    } else {
        document.getElementById("answer9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They react to changes around them</b><br>" +
        "<b>Explanation:</b> Living organisms can respond to stimuli.";
    }
}


function checkQ10(answer) {
    if (answer === "A") {
        document.getElementById("answer10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Growth is one of the characteristics of living things.";
    } else {
        document.getElementById("answer10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They can grow</b><br>" +
        "<b>Explanation:</b> Living things can grow.";
    }
}


function checkQ11(answer) {
    if (answer === "B") {
        document.getElementById("answer11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Homeostasis means maintaining internal conditions relatively constant.";
    } else {
        document.getElementById("answer11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Maintaining internal conditions relatively constant</b><br>" +
        "<b>Explanation:</b> Homeostasis helps organisms maintain stable internal conditions.";
    }
}


function checkQ12(answer) {
    if (answer === "B") {
        document.getElementById("answer12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification is the process of grouping things based on their similarities.";
    } else {
        document.getElementById("answer12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Grouping things based on their similarities</b><br>" +
        "<b>Explanation:</b> Classification groups organisms according to similarities.";
    }
}


function checkQ13(answer) {
    if (answer === "A") {
        document.getElementById("answer13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Taxonomy is the science of naming, identifying and classifying organisms.";
    } else {
        document.getElementById("answer13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. The science of naming, identifying and classifying organisms</b><br>" +
        "<b>Explanation:</b> Taxonomy deals with naming, identifying and classifying organisms.";
    }
}


function checkQ14(answer) {
    if (answer === "D") {
        document.getElementById("answer14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Taxonomists can consider structure, habitat and genetic makeup when classifying organisms.";
    } else {
        document.getElementById("answer14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: D. All of the above</b><br>" +
        "<b>Explanation:</b> External and internal structure, habitat and genetic makeup can be considered.";
    }
}


function checkQ15(answer) {
    if (answer === "B") {
        document.getElementById("answer15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Biologists classify living things to simplify their study.";
    } else {
        document.getElementById("answer15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. To simplify their study</b><br>" +
        "<b>Explanation:</b> Classification makes the study of living things easier and more organized.";
    }
}
function bu1p2(){
    document.body.innerHTML=`
    <h1>ትምህርቱ እይከበደ እየሄደ ነው እና በደንብ ደጋግመክ አንብብ</h1>
    <p><b>Carolus Linnaeus(ካርሎስ ልነስ)</b> - who is also known as the father of taxonomy, introduced a taxonomic hierarchy of classification</p>
    <p><b>Carolus Linnaeus</b> mibal sewu nw lemejemerya gize yhin taxonomy mibalewun hasab yametawu leza nw ye taxonomy father woym abat mibalewu</p>
    <p><b>Taxonomic hierarchy</b> is the process of arranging various organisms in to successive level of biological classification either in a decreasing or an increasing order</p>
    <p> yeteleyayu organismochn ke  tilk wode tinsh woym ke tinsh wode tilik arrange woym maderajet nw</p>
    <p>Organismoch be Taxonomic hierarchy ke tliku wode tinshu classify sideregi endez yhonal</p>
    <p><b>Kingdom - Phylum -Class - Order -  Family - Genus  - Species</b></p>
    <p> ☝️☝️ Kidemeteketelun bedend yaz endatresa degagimek shemidid entrance fetena lay betamir mayker nw kidimeteketelu</p>
    <p><b>Eukaryotic cells</b> - cells with nucleus and membrane bound organelles</p>
    <p> Eukaryotic cells ye cell aynetoch sihonu nucleus alachewu</p>
    <p><b>Prokaryotic cells</b> - are unicellular organisms with out nucleus</p>
    <p>Prokaryotic cells demo ye cell aynetoch sihonu neger gin nucleus yelachewum</p>
    <p><b> Species</b> are a group of organisms that can reproduce to produce Fertile offspring</p>
    <h1>Relevance of classification<h1>
    <h2>Applications of classification are:(የ classifications ጥቅሞች)-</h2>
    <ol>
    <li>
    <b>Identification of harmful and beneficial organism - ጠቃምና ጉጂ የሆኑ organismochn ለመለየት</b></li>
    <li>
    <b> Reduce energy and time to study organism - organismochn ለማጥናት ጉልበትና ግዜን ለመቀነስ</b></li>
    <li>
    <b>Help us understand the r/ship between organisms - በ organismoch መካከል ያለውን ዝምድና እንድንረዳ ይረዳናል</b></li>
    </ol>
    <h2>Carl Linnaeus system of nomenclature(የ Linnaeus የስም አሰጣጥ)</h2>
    <p> Carl Linnaeus le organismoch sim yemisetewu be hulet negeroch nw</p>
    <ol>
    <li>
    The first name represents the <b>genus</b> - የመጀመርያ ስሙ የምያመለክተው genusun ነው</li>
    <li> The second name represents <b>Species</b> - ሁለተኛ ስሙ የምያመለክተው Species ነው</>
    </ol>
    <h1> ስለዝህ የ አንድ organism ስም ስንጺፊ Genus + species ነው</h1>
    <p>In writing scientific name the first letter of the name of the genus is capitalized letter</>
    <p> scientific name sinitsif Ye genus name ye mejemerya fidel capital mehon alebet</p>
    <p> ye species name be small ne minjemrewum minchersewum</>
    <p><Example</b> Ye human being scientific name <b>Homo sapiens</b> Nw</p>
    <p><b>Homo - genus name የመጀመርያ ፊደል Capital nw</b></p>
    <p><b>sapiens - species name ሙሉው small ነው</b></p>
    <p>Scientific name be eji sitsaf ketach masimer alebn</p>
    <p><b>Dichotomous keys</b> are used to identify(መለየት) unfamiliar (ማይመሳሰሉ) organisms</b></p>
    <P><b>Poikilothermic</b> - cold blooded</p>
    <p><b>Homeothermic</b> - warm blooded</p>
    <h2>What is kingdom?(kingdom sound aydelem😂😂)</h2>
    <p>Kingdom is the largest taxon astwosk ke tilku wode tinsh sinikefafil</p>
    <h2>There are five kingdoms namely:-</h2>
    <ol>
    <li>
    <b>Monera(bacteria)</b></li>
    <li><b>Protista</b></li>
    <li><b>Plantae</b></li>
    <li><b>Animalia</b></li>
    </ol>
    <h2>Kingdom Monera(bacteria)</h2>
    <p>Monera inclues(yakatital) Eubacteria and archaebacteria</p>
    <p><b>Eubacteria(true bacteria)</b> have(alewu) strong (tenkara) cell walls</p>
    <p>Some Eubacteria are heterotrophs(ይህንን ቃል ረሳክ ሀ 🫢🫢 የራሳቸውን ምግብ ማዘጋጀት ምችሉ Example Plant)</p>
    <p>some Eubacteria make energy by chemical reaction called <b>Chemosynthesis</b></p>
    <p>And and Eubacteria energy miyagegnut be chemosynthesis nw</p>
    <p>Eubacteria live in most habitats,<b>Except</b> the most extreme</p>
    <p>Eubacteria be abizagnwu bota ygegnalu ke mokat bota besiteker</p>
    <h3>Type of bacteria and their shape</h3>
    <ul>
    <li><b>Cocci :- Spherical(ክብ) shape</b></li>
    <li><b> Bacilli :- Rod(መንገድ) shape</b></li>
    <li><b> Spirillum:- Spiral shape</b></li>
    </ul>
    <P><b>Archae bacteria</b> - have different cell wall than bacteria(Eubacteria)</p>
    <p>Archea make their own food</p>
    <p>They are chemosynthesis and photosynthesis</p>
    <p>Archea live in extreme(በጣም ሙቀት) environment</p>
    <p>The environment which the archea live often(ብዙ ግዜ) have no oxygen</p>
    <p>Bizu gize archea yeminorewu oxygen belelebet bota nw</p>
    <h2>There are two ways bacteria disease harm people</h2>
    <p>Be hulet mengeb nw bacteria ye sewu lijin migodawu</p>
    <p><b>1. The growth of bacteria can interface with the normal function of body tissues</b></p>
    <p><b>2. The bacteria can release(meliqeq) a toxic(merzama) that directly attack(maxiqat) the host</b></p>
    <p><b>Kelay yalutn hulet negeroch shemidid</b></p>
    <h2>Chracteris(ባህር) of Monera</h2>
    <p><b>1. They are prokaryotic unicellular organisms</b></p>
    <p><b>2. lack(የላቸውም) nucleus or any membrane bound organelles</b></p>
    <p><b>3. Most have arigid(በጣም ጠንካራ) cell wall</b></p>
    <p><b>4. Autotrophs and heterotrophs</b></p>
    <p><b>5. Known as decomposers</b></p>
    <h1> Ke beza Endat resa Est yetemarnewun quiz</h1>
    <button onclick="bq2()">quiz</button>
    
 
`;
}
function bq2(){
    document.body.innerHTML=`
    <h2>Quiz: Characteristics and Classification of Organisms</h2>

<h3>1. Who is known as the father of taxonomy?</h3>

<input type="radio" name="q1" onclick="i1('A')">
A. Charles Darwin<br>

<input type="radio" name="q1" onclick="i1('B')">
B. Carolus Linnaeus<br>

<input type="radio" name="q1" onclick="i1('C')">
C. Gregor Mendel<br>

<input type="radio" name="q1" onclick="checkQ1('D')">
D. Aristotle<br>

<p id="a1"></p>


<h3>2. What did Carolus Linnaeus introduce?</h3>

<input type="radio" name="q2" onclick="i2('A')">
A. Cell theory<br>

<input type="radio" name="q2" onclick="i2('B')">
B. Taxonomic hierarchy of classification<br>

<input type="radio" name="q2" onclick="i2('C')">
C. Theory of evolution<br>

<input type="radio" name="q2" onclick="i2('D')">
D. DNA structure<br>

<p id="a2"></p>


<h3>3. What is taxonomic hierarchy?</h3>

<input type="radio" name="q3" onclick="i3('A')">
A. Arranging organisms into successive levels of classification<br>

<input type="radio" name="q3" onclick="i3('B')">
B. Making organisms reproduce<br>

<input type="radio" name="q3" onclick="i3('C')">
C. Studying only bacteria<br>

<input type="radio" name="q3" onclick="i3('D')">
D. Changing the shape of organisms<br>

<p id="a3"></p>


<h3>4. Which is the correct taxonomic hierarchy from largest to smallest?</h3>

<input type="radio" name="q4" onclick="i4('A')">
A. Species - Genus - Family - Order - Class - Phylum - Kingdom<br>

<input type="radio" name="q4" onclick="i4('B')">
B. Kingdom - Phylum - Class - Order - Family - Genus - Species<br>

<input type="radio" name="q4" onclick="i4('C')">
C. Kingdom - Class - Phylum - Family - Genus - Order - Species<br>

<input type="radio" name="q4" onclick="i4('D')">
D. Genus - Species - Family - Order - Kingdom - Class - Phylum<br>

<p id="a4"></p>


<h3>5. What are eukaryotic cells?</h3>

<input type="radio" name="q5" onclick="i5('A')">
A. Cells without a nucleus<br>

<input type="radio" name="q5" onclick="i5('B')">
B. Cells with a nucleus and membrane-bound organelles<br>

<input type="radio" name="q5" onclick="i5('C')">
C. Only bacterial cells<br>

<input type="radio" name="q5" onclick="i5('D')">
D. Cells without DNA<br>

<p id="a5"></p>


<h3>6. What is a characteristic of prokaryotic cells?</h3>

<input type="radio" name="q6" onclick="i6('A')">
A. They have a nucleus<br>

<input type="radio" name="q6" onclick="i6('B')">
B. They have many membrane-bound organelles<br>

<input type="radio" name="q6" onclick="i6('C')">
C. They do not have a nucleus<br>

<input type="radio" name="q6" onclick="i6('D')">
D. They are always multicellular<br>

<p id="a6"></p>


<h3>7. What is a species?</h3>

<input type="radio" name="q7" onclick="i7('A')">
A. The largest taxon<br>

<input type="radio" name="q7" onclick="i7('B')">
B. A group of organisms that can reproduce and produce fertile offspring<br>

<input type="radio" name="q7" onclick="i7('C')">
C. A type of cell<br>

<input type="radio" name="q7" onclick="i7('D')">
D. A type of bacteria<br>

<p id="a7"></p>


<h3>8. Which is an application of classification?</h3>

<input type="radio" name="q8" onclick="i8('A')">
A. Identifying harmful and beneficial organisms<br>

<input type="radio" name="q8" onclick="i8('B')">
B. Increasing the size of organisms<br>

<input type="radio" name="q8" onclick="i8('C')">
C. Changing organisms into bacteria<br>

<input type="radio" name="q8" onclick="i8('D')">
D. Removing all organisms<br>

<p id="a8"></p>


<h3>9. How does classification help when studying organisms?</h3>

<input type="radio" name="q9" onclick="i9('A')">
A. It increases the time needed for study<br>

<input type="radio" name="q9" onclick="i9('B')">
B. It reduces energy and time needed to study organisms<br>

<input type="radio" name="q9" onclick="i9('C')">
C. It removes organisms<br>

<input type="radio" name="q9" onclick="i9('D')">
D. It stops organisms from reproducing<br>

<p id="a9"></p>


<h3>10. Classification helps us understand the ______ between organisms.</h3>

<input type="radio" name="q10" onclick="i10('A')">
A. Temperature<br>

<input type="radio" name="q10" onclick="i10('B')">
B. Relationship<br>

<input type="radio" name="q10" onclick="i10('C')">
C. Weight<br>

<input type="radio" name="q10" onclick="i10('D')">
D. Color<br>

<p id="a10"></p>


<h3>11. How many names are used in the scientific name of an organism?</h3>

<input type="radio" name="q11" onclick="i11('A')">
A. One<br>

<input type="radio" name="q11" onclick="i11('B')">
B. Two<br>

<input type="radio" name="q11" onclick="i11('C')">
C. Three<br>

<input type="radio" name="q11" onclick="i11('D')">
D. Four<br>

<p id="a11"></p>


<h3>12. The first name in a scientific name represents the:</h3>

<input type="radio" name="q12" onclick="i12('A')">
A. Species<br>

<input type="radio" name="q12" onclick="i12('B')">
B. Family<br>

<input type="radio" name="q12" onclick="i12('C')">
C. Genus<br>

<input type="radio" name="q12" onclick="i12('D')">
D. Kingdom<br>

<p id="a12"></p>


<h3>13. The second name in a scientific name represents the:</h3>

<input type="radio" name="q13" onclick="i13('A')">
A. Species<br>

<input type="radio" name="q13" onclick="i13('B')">
B. Genus<br>

<input type="radio" name="q13" onclick="i13('C')">
C. Family<br>

<input type="radio" name="q13" onclick="i13('D')">
D. Class<br>

<p id="a13"></p>


<h3>14. Which part of a scientific name begins with a capital letter?</h3>

<input type="radio" name="q14" onclick="i14('A')">
A. The species name<br>

<input type="radio" name="q14" onclick="i14('B')">
B. The genus name<br>

<input type="radio" name="q14" onclick="i14('C')">
C. Both names<br>

<input type="radio" name="q14" onclick="i14('D')">
D. Neither name<br>

<p id="a14"></p>


<h3>15. What is the scientific name of a human being?</h3>

<input type="radio" name="q15" onclick="i15('A')">
A. Homo sapiens<br>

<input type="radio" name="q15" onclick="i15('B')">
B. Sapiens Homo<br>

<input type="radio" name="q15" onclick="i15('C')">
C. Homo human<br>

<input type="radio" name="q15" onclick="i15('D')">
D. Animalia sapiens<br>

<p id="a15"></p>


<h3>16. What are dichotomous keys used for?</h3>

<input type="radio" name="q16" onclick="i16('A')">
A. Producing food<br>

<input type="radio" name="q16" onclick="i16('B')">
B. Identifying unfamiliar organisms<br>

<input type="radio" name="q16" onclick="i16('C')">
C. Making energy<br>

<input type="radio" name="q16" onclick="i16('D')">
D. Measuring temperature<br>

<p id="a16"></p>


<h3>17. What does Poikilothermic mean?</h3>

<input type="radio" name="q17" onclick="i17('A')">
A. Warm-blooded<br>

<input type="radio" name="q17" onclick="i17('B')">
B. Cold-blooded<br>

<input type="radio" name="q17" onclick="i17('C')">
C. Single-celled<br>

<input type="radio" name="q17" onclick="i17('D')">
D. Multicellular<br>

<p id="a17"></p>


<h3>18. What does Homeothermic mean?</h3>

<input type="radio" name="q18" onclick="i18('A')">
A. Cold-blooded<br>

<input type="radio" name="q18" onclick="i18('B')">
B. Warm-blooded<br>

<input type="radio" name="q18" onclick="i18('C')">
C. Without a nucleus<br>

<input type="radio" name="q18" onclick="i18('D')">
D. Without a cell wall<br>

<p id="a18"></p>


<h3>19. Which is the largest taxon?</h3>

<input type="radio" name="q19" onclick="i19('A')">
A. Species<br>

<input type="radio" name="q19" onclick="i19('B')">
B. Genus<br>

<input type="radio" name="q19" onclick="i19('C')">
C. Kingdom<br>

<input type="radio" name="q19" onclick="i19('D')">
D. Family<br>

<p id="a19"></p>


<h3>20. Which of the following is a kingdom?</h3>

<input type="radio" name="q20" onclick="i20('A')">
A. Cocci<br>

<input type="radio" name="q20" onclick="i20('B')">
B. Bacilli<br>

<input type="radio" name="q20" onclick="i20('C')">
C. Monera<br>

<input type="radio" name="q20" onclick="i20('D')">
D. Spirillum<br>

<p id="a20"></p>


<h3>21. What does Kingdom Monera include?</h3>

<input type="radio" name="q21" onclick="i21('A')">
A. Plants and animals<br>

<input type="radio" name="q21" onclick="i21('B')">
B. Eubacteria and archaebacteria<br>

<input type="radio" name="q21" onclick="i21('C')">
C. Fungi and plants<br>

<input type="radio" name="q21" onclick="i21('D')">
D. Only animals<br>

<p id="a21"></p>


<h3>22. Which type of bacteria has a spherical shape?</h3>

<input type="radio" name="q22" onclick="i22('A')">
A. Bacilli<br>

<input type="radio" name="q22" onclick="i22('B')">
B. Spirillum<br>

<input type="radio" name="q22" onclick="i22('C')">
C. Cocci<br>

<input type="radio" name="q22" onclick="i22('D')">
D. Archaea<br>

<p id="a22"></p>


<h3>23. Which type of bacteria has a rod shape?</h3>

<input type="radio" name="q23" onclick="i23('A')">
A. Cocci<br>

<input type="radio" name="q23" onclick="i23('B')">
B. Bacilli<br>

<input type="radio" name="q23" onclick="i23('C')">
C. Spirillum<br>

<input type="radio" name="q23" onclick="i23('D')">
D. Archaea<br>

<p id="a23"></p>


<h3>24. Which type of bacteria has a spiral shape?</h3>

<input type="radio" name="q24" onclick="i24('A')">
A. Cocci<br>

<input type="radio" name="q24" onclick="i24('B')">
B. Bacilli<br>

<input type="radio" name="q24" onclick="i24('C')">
C. Spirillum<br>

<input type="radio" name="q24" onclick="i24('D')">
D. Eubacteria<br>

<p id="a24"></p>


<h3>25. Where do archaebacteria often live?</h3>

<input type="radio" name="q25" onclick="i25('A')">
A. Only in plants<br>

<input type="radio" name="q25" onclick="i25('B')">
B. In extreme environments<br>

<input type="radio" name="q25" onclick="i25('C')">
C. Only in human blood<br>

<input type="radio" name="q25" onclick="i25('D')">
D. Only in fresh water<br>

<p id="a25"></p>
<button onclick="bu1p3()">Next lesson</>
    `;
}
function i1(answer) {
    if (answer === "B") {
        document.getElementById("a1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Carolus Linnaeus is known as the father of taxonomy.";
    } else {
        document.getElementById("a1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Carolus Linnaeus</b><br>" +
        "<b>Explanation:</b> Carolus Linnaeus is known as the father of taxonomy.";
    }
}


function i2(answer) {
    if (answer === "B") {
        document.getElementById("a2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Taxonomy is the science of naming, identifying, and classifying organisms.";
    } else {
        document.getElementById("a2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Taxonomy</b><br>" +
        "<b>Explanation:</b> Taxonomy is the science of naming, identifying, and classifying organisms.";
    }
}


function i3(answer) {
    if (answer === "C") {
        document.getElementById("a3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The taxonomic hierarchy is Kingdom, Phylum, Class, Order, Family, Genus, and Species.";
    } else {
        document.getElementById("a3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Kingdom → Phylum → Class → Order → Family → Genus → Species</b><br>" +
        "<b>Explanation:</b> This is the taxonomic hierarchy from the largest to the smallest major taxonomic rank.";
    }
}


function i4(answer) {
    if (answer === "B") {
        document.getElementById("a4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Eukaryotic cells have a nucleus and membrane-bound organelles.";
    } else {
        document.getElementById("a4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. They have a nucleus and membrane-bound organelles</b><br>" +
        "<b>Explanation:</b> Eukaryotic cells contain a nucleus and membrane-bound organelles.";
    }
}


function i5(answer) {
    if (answer === "A") {
        document.getElementById("a5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Prokaryotic cells do not have a true nucleus.";
    } else {
        document.getElementById("a5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They do not have a true nucleus</b><br>" +
        "<b>Explanation:</b> Prokaryotic cells do not have a membrane-bound nucleus.";
    }
}


function i6(answer) {
    if (answer === "B") {
        document.getElementById("a6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> A species is a group of organisms that can reproduce and produce fertile offspring.";
    } else {
        document.getElementById("a6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Organisms that can reproduce and produce fertile offspring</b><br>" +
        "<b>Explanation:</b> Members of the same species can reproduce and produce fertile offspring.";
    }
}


function i7(answer) {
    if (answer === "C") {
        document.getElementById("a7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification helps us understand relationships between organisms.";
    } else {
        document.getElementById("a7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. To understand relationships between organisms</b><br>" +
        "<b>Explanation:</b> Classification helps scientists understand relationships among organisms.";
    }
}


function i8(answer) {
    if (answer === "A") {
        document.getElementById("a8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification makes it easier to identify harmful and beneficial organisms.";
    } else {
        document.getElementById("a8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Identify harmful and beneficial organisms</b><br>" +
        "<b>Explanation:</b> Classification helps us identify organisms and understand their importance.";
    }
}


function i9(answer) {
    if (answer === "B") {
        document.getElementById("a9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In binomial nomenclature, the first name represents the genus.";
    } else {
        document.getElementById("a9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Genus</b><br>" +
        "<b>Explanation:</b> The first name in a scientific name is the genus name.";
    }
}


function i10(answer) {
    if (answer === "C") {
        document.getElementById("a10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In Homo sapiens, Homo is the genus and sapiens is the species name.";
    } else {
        document.getElementById("a10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Homo sapiens</b><br>" +
        "<b>Explanation:</b> Homo is the genus and sapiens is the species name.";
    }
}


function i11(answer) {
    if (answer === "B") {
        document.getElementById("a11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The genus name begins with a capital letter and the species name begins with a lowercase letter.";
    } else {
        document.getElementById("a11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Genus starts with a capital letter</b><br>" +
        "<b>Explanation:</b> In scientific names, the genus starts with a capital letter and the species starts with a lowercase letter.";
    }
}


function i12(answer) {
    if (answer === "A") {
        document.getElementById("a12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The second name in a scientific name represents the species name.";
    } else {
        document.getElementById("a12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Species</b><br>" +
        "<b>Explanation:</b> The second part of a scientific name is the species name.";
    }
}


function i13(answer) {
    if (answer === "C") {
        document.getElementById("a13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Scientific names help scientists around the world use the same name for an organism.";
    } else {
        document.getElementById("a13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. To give organisms a universal scientific name</b><br>" +
        "<b>Explanation:</b> Scientific naming provides a common system for identifying organisms worldwide.";
    }
}


function i14(answer) {
    if (answer === "B") {
        document.getElementById("a14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification reduces the time and energy needed to study and identify organisms.";
    } else {
        document.getElementById("a14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. It reduces time and energy</b><br>" +
        "<b>Explanation:</b> Classification organizes organisms, making them easier to study and identify.";
    }
}


function i15(answer) {
    if (answer === "A") {
        document.getElementById("a15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification helps us understand the relationships among different organisms.";
    } else {
        document.getElementById("a15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Understand relationships between organisms</b><br>" +
        "<b>Explanation:</b> Classification shows how organisms are related to one another.";
    }
}


function i16(answer) {
    if (answer === "B") {
        document.getElementById("a16").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Dichotomous keys are used to identify unfamiliar organisms.";
    } else {
        document.getElementById("a16").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Identifying unfamiliar organisms</b><br>" +
        "<b>Explanation:</b> Dichotomous keys help us identify organisms by using a series of choices.";
    }
}


function i17(answer) {
    if (answer === "B") {
        document.getElementById("a17").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Poikilothermic animals are commonly called cold-blooded animals.";
    } else {
        document.getElementById("a17").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Cold-blooded</b><br>" +
        "<b>Explanation:</b> Poikilothermic animals cannot maintain a constant body temperature internally.";
    }
}


function i18(answer) {
    if (answer === "B") {
        document.getElementById("a18").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Homeothermic animals are commonly called warm-blooded animals.";
    } else {
        document.getElementById("a18").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Warm-blooded</b><br>" +
        "<b>Explanation:</b> Homeothermic animals maintain a relatively constant body temperature.";
    }
}


function i19(answer) {
    if (answer === "C") {
        document.getElementById("a19").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Kingdom is the largest taxonomic rank in the hierarchy listed here.";
    } else {
        document.getElementById("a19").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Kingdom</b><br>" +
        "<b>Explanation:</b> Kingdom contains many organisms and is the largest taxon in this hierarchy.";
    }
}


function i20(answer) {
    if (answer === "C") {
        document.getElementById("a20").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Monera is a kingdom that contains prokaryotic organisms.";
    } else {
        document.getElementById("a20").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Monera</b><br>" +
        "<b>Explanation:</b> Monera contains prokaryotic organisms such as bacteria.";
    }
}
function i21(answer) {
    if (answer === "B") {
        document.getElementById("a21").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Monera includes Eubacteria and archaebacteria.";
    } else {
        document.getElementById("a21").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Eubacteria and archaebacteria</b><br>" +
        "<b>Explanation:</b> The Monera group includes Eubacteria and archaebacteria.";
    }
}


function i22(answer) {
    if (answer === "C") {
        document.getElementById("a22").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Cocci are bacteria with a spherical or round shape.";
    } else {
        document.getElementById("a22").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Cocci</b><br>" +
        "<b>Explanation:</b> Cocci are spherical-shaped bacteria.";
    }
}


function i23(answer) {
    if (answer === "B") {
        document.getElementById("a23").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bacilli are rod-shaped bacteria.";
    } else {
        document.getElementById("a23").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Bacilli</b><br>" +
        "<b>Explanation:</b> Bacilli have a rod-like shape.";
    }
}


function i24(answer) {
    if (answer === "C") {
        document.getElementById("a24").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Spirillum are spiral-shaped bacteria.";
    } else {
        document.getElementById("a24").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Spirillum</b><br>" +
        "<b>Explanation:</b> Spirillum bacteria have a spiral shape.";
    }
}


function i25(answer) {
    if (answer === "B") {
        document.getElementById("a25").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Archaebacteria commonly live in extreme environments.";
    } else {
        document.getElementById("a25").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. In extreme environments</b><br>" +
        "<b>Explanation:</b> Many archaebacteria live in extreme environments such as places with high temperature, high salt, or little oxygen.";
    }
}
function bu1p3(){
    document.body.innerHTML=`
    <h1>Kingdom Protista<h1>
    <p>Most diverse organism of all the kingdom</p>
    <p>Ke hulum kingdom betam bebizat migegnut protista nachewu</p>
    <p>There are single celled(unicellular) and multi cellular</p>
    <p>Some can make their own food,some can not make their own food</p>
    <p><b>They all are Eukaryotes</b></p>
    <h2>Example</h2>
    <h3>1.protozoans - like ende animal nw gn and cell bicha nw yalewu</h3>
    <h3>2.Algae - like ende plant nw gn root,stems,and leaves yelewum</h3>
    <p>Algae are photosynthesis and autotrophic</p>
    <h1>Examples of protista</h1>
    <ol>
    <li><b>Paramecium - used Cilia For movement</b></li>
    <li><b> Amoeba - used Pseudopoda for movement</b></li>
    <li><b>Euglena - used Flagellum for movement</b></li>
    </ol>
    <h1>Kingdom Fungi</h1>
    <p>Fungi are Eukaryotic organisms Examples Moulds and Mushrooms</p>
    <p>Unicellular fungi example Yeast, Multicellular fungi Moulds and mushrooms</p>
    <p>Their body consist of long, slender thread -like structure called <b>Hyphae</b></p>
    <p>Hyphae play an important role in how they obtain food</p>
    <p>Ye hyphae tikimu migib lemagignet nw</p>
    <p>Fungi cell wall made up of <b> Chitin and Polysaccharide</b></p>
    <p>Ye fung cell wall yetegenebawu ke chitin ena ke polysaccharide nw</p>
    <p><b>Saprophytes</b> get get food from dead(kemotu) substance</p>
    <p>Endatresa saprophyte ye fungi examples nw</p>
    <p><b>Decomposer Fungi</b> get food from break down and absorb from non living organics material</p>
    <p>Fungi can not make their own food therefore(selezh) they are Heterotrophs</p>
    <p>Fungi uses a procces called <b> Extracellular digetion</b> to obtain nutrients</p>
    <p>Fungi yerasachewun migib mazegajet aychlum silez migeb lemagignet extracellular digestion mibalewun hidet nw miyaregut</p>
    <p>fungi can live with as <b>Parasites(xigegna) or mulualists(xiqimegna)</b></p>
    <p>Parasite fungi absorb nutrients from the cell of living hosts</p>
    <p>Parasite fungi nutrient miyagegnut beza keminorubet living things nw ahun lemisale sewu wust minor kehone ke sewu living cell nw nutrient miyagegnut</p>
    <p><b>Mutualistic fungi</b> also absorb nutrients from host organisms,but they also benefit the host so both(huletum) are benefitial</p>
    <p>Mutualistic fungi mibalut ahunm nutrients miyagegnut ke minorubet organism nw gn huletum oarganismum fungiwum tetekaminachewu</p>
    <p>Gn parasite fungi lay fungi bicha nw tetekami organisimu minim tikim ayagegnem Hasabu gebtokal haa 😂😂</p>
    <p> Fungi can also live as symbionts</p>
    <p>Symbionts malet and lay malet</p>
    <p><b>Fungi ena green algae and lay sihonu</b> - symbiosisu <b>Lichens</b> Mibalewu</p>
    <p><b>Fungi ena plant root and lay sihonu</b> - symbiosisu <b>Mycorrhizae</b> Mibalewu</p>
    <p><b>1.Mutualism</b> is the symbiotic relationship in which both(huletum) species benefit(tetekam)</p>
    <p><b>2. Parasitism</b> is the symbiotic relationship in which one organisms benefits at expense of other</p>
    <p>Parasitism malet andu andu aly bemedegef tetekami mihonbet menged nw andu bicha nw tetekami mihonewu</p>
    <p><b>Symbiosis</b> is permanent(maykoarexi) close relationship between two or more organisms</p>
    <p><b>Yeast</b> is very important fungus used to making injera rise,and allows us(legna) to make alcohol(tej,tella,beer)</p>
    <button onclick="bq3()">quiz</button>
    `;
}
function bq3(){
    document.body.innerHTML=`
    <h2>Quiz: Kingdom Protista and Kingdom Fungi</h2>

<h3>1. Which kingdom is described as one of the most diverse kingdoms?</h3>

<input type="radio" name="q1" onclick="o1('A')">
A. Kingdom Monera<br>

<input type="radio" name="q1" onclick="o1('B')">
B. Kingdom Protista<br>

<input type="radio" name="q1" onclick="o1('C')">
C. Kingdom Fungi<br>

<input type="radio" name="q1" onclick="o1('D')">
D. Kingdom Plantae<br>

<p id="an1"></p>


<h3>2. Are all organisms in Kingdom Protista eukaryotes?</h3>

<input type="radio" name="q2" onclick="o2('A')">
A. Yes<br>

<input type="radio" name="q2" onclick="o2('B')">
B. No<br>

<input type="radio" name="q2" onclick="o2('C')">
C. Only algae<br>

<input type="radio" name="q2" onclick="o2('D')">
D. Only protozoans<br>

<p id="an2"></p>


<h3>3. Which of the following can be found in Kingdom Protista?</h3>

<input type="radio" name="q3" onclick="o3('A')">
A. Only unicellular organisms<br>

<input type="radio" name="q3" onclick="o3('B')">
B. Only multicellular organisms<br>

<input type="radio" name="q3" onclick="o3('C')">
C. Both unicellular and multicellular organisms<br>

<input type="radio" name="q3" onclick="o3('D')">
D. Neither<br>

<p id="an3"></p>


<h3>4. Which of the following is an example of a protozoan?</h3>

<input type="radio" name="q4" onclick="o4('A')">
A. Paramecium<br>

<input type="radio" name="q4" onclick="o4('B')">
B. Mushroom<br>

<input type="radio" name="q4" onclick="o4('C')">
C. Yeast<br>

<input type="radio" name="q4" onclick="o4('D')">
D. Mould<br>

<p id="an4"></p>


<h3>5. Protozoans are similar to animals because they are generally:</h3>

<input type="radio" name="q5" onclick="o5('A')">
A. Like animals<br>

<input type="radio" name="q5" onclick="o5('B')">
B. Like plants<br>

<input type="radio" name="q5" onclick="o5('C')">
C. Like fungi<br>

<input type="radio" name="q5" onclick="o5('D')">
D. Like bacteria<br>

<p id="an5"></p>


<h3>6. Algae are similar to plants because they:</h3>

<input type="radio" name="q6" onclick="o6('A')">
A. Have roots, stems and leaves<br>

<input type="radio" name="q6" onclick="o6('B')">
B. Perform photosynthesis<br>

<input type="radio" name="q6" onclick="o6('C')">
C. Are fungi<br>

<input type="radio" name="q6" onclick="o6('D')">
D. Are parasites<br>

<p id="an6"></p>


<h3>7. Algae are:</h3>

<input type="radio" name="q7" onclick="o7('A')">
A. Heterotrophic<br>

<input type="radio" name="q7" onclick="o7('B')">
B. Autotrophic<br>

<input type="radio" name="q7" onclick="o7('C')">
C. Parasitic only<br>

<input type="radio" name="q7" onclick="o7('D')">
D. Decomposers only<br>

<p id="an7"></p>


<h3>8. Which organism uses cilia for movement?</h3>

<input type="radio" name="q8" onclick="o8('A')">
A. Amoeba<br>

<input type="radio" name="q8" onclick="o8('B')">
B. Euglena<br>

<input type="radio" name="q8" onclick="o8('C')">
C. Paramecium<br>

<input type="radio" name="q8" onclick="o8('D')">
D. Yeast<br>

<p id="an8"></p>


<h3>9. Which organism uses pseudopodia for movement?</h3>

<input type="radio" name="q9" onclick="o9('A')">
A. Paramecium<br>

<input type="radio" name="q9" onclick="o9('B')">
B. Amoeba<br>

<input type="radio" name="q9" onclick="o9('C')">
C. Euglena<br>

<input type="radio" name="q9" onclick="o9('D')">
D. Mushroom<br>

<p id="an9"></p>


<h3>10. Which organism uses a flagellum for movement?</h3>

<input type="radio" name="q10" onclick="o10('A')">
A. Amoeba<br>

<input type="radio" name="q10" onclick="o10('B')">
B. Paramecium<br>

<input type="radio" name="q10" onclick="o10('C')">
C. Euglena<br>

<input type="radio" name="q10" onclick="o10('D')">
D. Mould<br>

<p id="an10"></p>


<h3>11. Fungi are:</h3>

<input type="radio" name="q11" onclick="o11('A')">
A. Prokaryotic organisms<br>

<input type="radio" name="q11" onclick="o11('B')">
B. Eukaryotic organisms<br>

<input type="radio" name="q11" onclick="o11('C')">
C. Viruses<br>

<input type="radio" name="q11" onclick="o11('D')">
D. Bacteria<br>

<p id="an11"></p>


<h3>12. Which of the following is an example of a unicellular fungus?</h3>

<input type="radio" name="q12" onclick="o12('A')">
A. Mushroom<br>

<input type="radio" name="q12" onclick="o12('B')">
B. Mould<br>

<input type="radio" name="q12" onclick="o12('C')">
C. Yeast<br>

<input type="radio" name="q12" onclick="o12('D')">
D. Algae<br>

<p id="an12"></p>


<h3>13. Which of the following are examples of multicellular fungi?</h3>

<input type="radio" name="q13" onclick="o13('A')">
A. Yeast only<br>

<input type="radio" name="q13" onclick="o13('B')">
B. Moulds and mushrooms<br>

<input type="radio" name="q13" onclick="o13('C')">
C. Amoeba and Euglena<br>

<input type="radio" name="q13" onclick="o13('D')">
D. Paramecium and Amoeba<br>

<p id="an13"></p>


<h3>14. What is the long, slender, thread-like structure of fungi called?</h3>

<input type="radio" name="q14" onclick="o14('A')">
A. Cilia<br>

<input type="radio" name="q14" onclick="o14('B')">
B. Hyphae<br>

<input type="radio" name="q14" onclick="o14('C')">
C. Flagellum<br>

<input type="radio" name="q14" onclick="o14('D')">
D. Pseudopodia<br>

<p id="an14"></p>


<h3>15. What is an important role of hyphae?</h3>

<input type="radio" name="q15" onclick="o15('A')">
A. They help fungi obtain food<br>

<input type="radio" name="q15" onclick="o15('B')">
B. They help fungi make seeds<br>

<input type="radio" name="q15" onclick="o15('C')">
C. They make fungi animals<br>

<input type="radio" name="q15" onclick="o15('D')">
D. They give fungi roots<br>

<p id="an15"></p>


<h3>16. What is the fungal cell wall made up of?</h3>

<input type="radio" name="q16" onclick="o16('A')">
A. Cellulose only<br>

<input type="radio" name="q16" onclick="o16('B')">
B. Chitin and polysaccharide<br>

<input type="radio" name="q16" onclick="o16('C')">
C. Protein only<br>

<input type="radio" name="q16" onclick="o16('D')">
D. Lipids only<br>

<p id="an16"></p>


<h3>17. What are saprophytes?</h3>

<input type="radio" name="q17" onclick="o17('A')">
A. Organisms that get food from dead substances<br>

<input type="radio" name="q17" onclick="o17('B')">
B. Organisms that make their own food<br>

<input type="radio" name="q17" onclick="o17('C')">
C. Organisms that eat only living animals<br>

<input type="radio" name="q17" onclick="o17('D')">
D. Organisms that perform photosynthesis<br>

<p id="an17"></p>


<h3>18. Why are fungi called heterotrophs?</h3>

<input type="radio" name="q18" onclick="o18('A')">
A. Because they make their own food<br>

<input type="radio" name="q18" onclick="o18('B')">
B. Because they cannot make their own food<br>

<input type="radio" name="q18" onclick="o18('C')">
C. Because they are plants<br>

<input type="radio" name="q18" onclick="o18('D')">
D. Because they are bacteria<br>

<p id="an18"></p>


<h3>19. What process do fungi use to obtain nutrients?</h3>

<input type="radio" name="q19" onclick="o19('A')">
A. Photosynthesis<br>

<input type="radio" name="q19" onclick="o19('B')">
B. Extracellular digestion<br>

<input type="radio" name="q19" onclick="o19('C')">
C. Respiration only<br>

<input type="radio" name="q19" onclick="o19('D')">
D. Internal digestion only<br>

<p id="an19"></p>


<h3>20. What do parasite fungi absorb nutrients from?</h3>

<input type="radio" name="q20" onclick="o20('A')">
A. Dead substances only<br>

<input type="radio" name="q20" onclick="o20('B')">
B. Living hosts<br>

<input type="radio" name="q20" onclick="o20('C')">
C. Sunlight<br>

<input type="radio" name="q20" onclick="o20('D')">
D. Water only<br>

<p id="an20"></p>


<h3>21. What happens in mutualism?</h3>

<input type="radio" name="q21" onclick="o21('A')">
A. Both organisms benefit<br>

<input type="radio" name="q21" onclick="o21('B')">
B. One organism benefits and the other is harmed<br>

<input type="radio" name="q21" onclick="o21('C')">
C. Neither organism benefits<br>

<input type="radio" name="q21" onclick="o21('D')">
D. Both organisms are harmed<br>

<p id="an21"></p>


<h3>22. What is parasitism?</h3>

<input type="radio" name="q22" onclick="o22('A')">
A. Both species benefit<br>

<input type="radio" name="q22" onclick="o22('B')">
B. One organism benefits at the expense of the other<br>

<input type="radio" name="q22" onclick="o22('C')">
C. Neither organism benefits<br>

<input type="radio" name="q22" onclick="o22('D')">
D. Both organisms make their own food<br>

<p id="an22"></p>


<h3>23. What is the symbiotic relationship between fungi and green algae called?</h3>

<input type="radio" name="q23" onclick="o23('A')">
A. Mycorrhizae<br>

<input type="radio" name="q23" onclick="o23('B')">
B. Lichens<br>

<input type="radio" name="q23" onclick="o23('C')">
C. Hyphae<br>

<input type="radio" name="q23" onclick="o23('D')">
D. Saprophytes<br>

<p id="an23"></p>


<h3>24. What is the symbiotic relationship between fungi and plant roots called?</h3>

<input type="radio" name="q24" onclick="o24('A')">
A. Lichens<br>

<input type="radio" name="q24" onclick="o24('B')">
B. Mycorrhizae<br>

<input type="radio" name="q24" onclick="o24('C')">
C. Parasitism<br>

<input type="radio" name="q24" onclick="o24('D')">
D. Saprophytes<br>

<p id="an24"></p>


<h3>25. What is yeast used for?</h3>

<input type="radio" name="q25" onclick="o25('A')">
A. Making injera rise and making alcohol<br>

<input type="radio" name="q25" onclick="o25('B')">
B. Making plant roots<br>

<input type="radio" name="q25" onclick="o25('C')">
C. Making bacteria<br>

<input type="radio" name="q25" onclick="o25('D')">
D. Making sunlight<br>

<p id="an25"></p>
<button onclick="bu1p4()">Next lesson</button>
    `;
}
function o1(answer) {
    if (answer === "B") {
        document.getElementById("an1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Kingdom Protista is one of the most diverse kingdoms.";
    } else {
        document.getElementById("an1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Kingdom Protista</b><br>" +
        "<b>Explanation:</b> Kingdom Protista is one of the most diverse kingdoms.";
    }
}


function o2(answer) {
    if (answer === "A") {
        document.getElementById("an2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> All organisms in Kingdom Protista are eukaryotes.";
    } else {
        document.getElementById("an2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Yes</b><br>" +
        "<b>Explanation:</b> Protists are eukaryotic organisms.";
    }
}


function o3(answer) {
    if (answer === "C") {
        document.getElementById("an3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Protista includes both unicellular and multicellular organisms.";
    } else {
        document.getElementById("an3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Both unicellular and multicellular organisms</b><br>" +
        "<b>Explanation:</b> Protists can be single-celled or multicellular.";
    }
}


function o4(answer) {
    if (answer === "A") {
        document.getElementById("an4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Paramecium is an example of a protozoan.";
    } else {
        document.getElementById("an4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Paramecium</b><br>" +
        "<b>Explanation:</b> Paramecium is a protozoan found in Kingdom Protista.";
    }
}


function o5(answer) {
    if (answer === "A") {
        document.getElementById("an5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Protozoans are animal-like protists.";
    } else {
        document.getElementById("an5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Like animals</b><br>" +
        "<b>Explanation:</b> Protozoans are described as being similar to animals.";
    }
}


function o6(answer) {
    if (answer === "B") {
        document.getElementById("an6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Algae perform photosynthesis and are autotrophic.";
    } else {
        document.getElementById("an6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Perform photosynthesis</b><br>" +
        "<b>Explanation:</b> Algae are plant-like protists that perform photosynthesis.";
    }
}


function o7(answer) {
    if (answer === "B") {
        document.getElementById("an7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Algae are autotrophic because they can make their own food by photosynthesis.";
    } else {
        document.getElementById("an7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Autotrophic</b><br>" +
        "<b>Explanation:</b> Algae can make their own food through photosynthesis.";
    }
}


function o8(answer) {
    if (answer === "C") {
        document.getElementById("an8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Paramecium uses cilia for movement.";
    } else {
        document.getElementById("an8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Paramecium</b><br>" +
        "<b>Explanation:</b> Paramecium moves using many small hair-like structures called cilia.";
    }
}


function o9(answer) {
    if (answer === "B") {
        document.getElementById("an9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Amoeba uses pseudopodia for movement.";
    } else {
        document.getElementById("an9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Amoeba</b><br>" +
        "<b>Explanation:</b> Amoeba moves by extending temporary structures called pseudopodia.";
    }
}


function o10(answer) {
    if (answer === "C") {
        document.getElementById("an10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Euglena uses a flagellum for movement.";
    } else {
        document.getElementById("an10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Euglena</b><br>" +
        "<b>Explanation:</b> Euglena uses a flagellum to move.";
    }
}


function o11(answer) {
    if (answer === "B") {
        document.getElementById("an11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungi are eukaryotic organisms.";
    } else {
        document.getElementById("an11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Eukaryotic organisms</b><br>" +
        "<b>Explanation:</b> Fungi have eukaryotic cells.";
    }
}


function o12(answer) {
    if (answer === "C") {
        document.getElementById("an12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Yeast is an example of unicellular fungi.";
    } else {
        document.getElementById("an12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Yeast</b><br>" +
        "<b>Explanation:</b> Yeast is a unicellular fungus.";
    }
}


function o13(answer) {
    if (answer === "B") {
        document.getElementById("an13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Moulds and mushrooms are examples of multicellular fungi.";
    } else {
        document.getElementById("an13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Moulds and mushrooms</b><br>" +
        "<b>Explanation:</b> Moulds and mushrooms are multicellular fungi.";
    }
}


function o14(answer) {
    if (answer === "B") {
        document.getElementById("an14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Hyphae are long, slender, thread-like structures found in fungi.";
    } else {
        document.getElementById("a14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Hyphae</b><br>" +
        "<b>Explanation:</b> The body of many fungi consists of long, slender, thread-like structures called hyphae.";
    }
}


function o15(answer) {
    if (answer === "A") {
        document.getElementById("an15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Hyphae play an important role in helping fungi obtain food.";
    } else {
        document.getElementById("an15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They help fungi obtain food</b><br>" +
        "<b>Explanation:</b> Hyphae help fungi absorb nutrients from their surroundings.";
    }
}


function o16(answer) {
    if (answer === "B") {
        document.getElementById("an16").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungal cell walls are made up of chitin and polysaccharide.";
    } else {
        document.getElementById("an16").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Chitin and polysaccharide</b><br>" +
        "<b>Explanation:</b> The cell wall of fungi contains chitin and polysaccharide.";
    }
}


function o17(answer) {
    if (answer === "A") {
        document.getElementById("an17").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Saprophytes get their food from dead substances.";
    } else {
        document.getElementById("an17").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Organisms that get food from dead substances</b><br>" +
        "<b>Explanation:</b> Saprophytic fungi obtain nutrients from dead organic material.";
    }
}


function o18(answer) {
    if (answer === "B") {
        document.getElementById("an18").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungi cannot make their own food, so they are heterotrophs.";
    } else {
        document.getElementById("an18").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Because they cannot make their own food</b><br>" +
        "<b>Explanation:</b> Fungi depend on other sources for their nutrients.";
    }
}


function o19(answer) {
    if (answer === "B") {
        document.getElementById("an19").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungi use extracellular digestion to obtain nutrients.";
    } else {
        document.getElementById("an19").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Extracellular digestion</b><br>" +
        "<b>Explanation:</b> Fungi digest food outside their bodies and then absorb the nutrients.";
    }
}


function o20(answer) {
    if (answer === "B") {
        document.getElementById("an20").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Parasitic fungi absorb nutrients from living hosts.";
    } else {
        document.getElementById("an20").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Living hosts</b><br>" +
        "<b>Explanation:</b> Parasitic fungi obtain nutrients from the cells of living organisms.";
    }
}


function o21(answer) {
    if (answer === "A") {
        document.getElementById("an21").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In mutualism, both organisms benefit from the relationship.";
    } else {
        document.getElementById("an21").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Both organisms benefit</b><br>" +
        "<b>Explanation:</b> Mutualism is a symbiotic relationship in which both species benefit.";
    }
}


function o22(answer) {
    if (answer === "B") {
        document.getElementById("an22").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In parasitism, one organism benefits at the expense of the other.";
    } else {
        document.getElementById("an22").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. One organism benefits at the expense of the other</b><br>" +
        "<b>Explanation:</b> The parasite benefits while the host is harmed.";
    }
}

        
